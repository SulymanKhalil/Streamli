"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface PipelineStepData {
  code: string;
  title: string;
  badge: string;
  badgeColor: string;
  desc: string;
  specs: [string, string, string?][];
  progress: string;
  stageId: number;
}

const videoPipelineStages: PipelineStepData[] = [
  {
    stageId: 0,
    code: "TRACE // STAGE_ID: RAW_FRAME_CAPTURE",
    title: "Uncompressed YUV 4:2:2 Raster Ingestion",
    badge: "ZERO_LOSS",
    badgeColor: "bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]",
    desc: "Raw sensor/SDI pixel matrices ingested via PCIe DMA directly into unified VRAM buffers.",
    specs: [
      ["INGRESS BUS:", "PCIe 4.0 x16 DMA", "text-white"],
      ["BIT DEPTH:", "10-bit Rec.2100 HLG", "text-sky-300"],
      ["TIME TO DISPATCH:", "0.84 ms", "text-emerald-400 font-bold"],
      ["BUFFER POOL:", "64 GB RING_LOCK", "text-amber-300"],
    ],
    progress: "16%",
  },
  {
    stageId: 1,
    code: "TRACE // STAGE_ID: DCT_MACROBLOCK_TRANSFORM",
    title: "Discrete Cosine Transform & Quantization",
    badge: "SPATIAL_OPT",
    badgeColor: "bg-amber-950/80 text-amber-300 border border-amber-500/40 shadow-[0_0_8px_rgba(245,158,11,0.3)]",
    desc: "16x16 and 32x32 macroblock spatial frequency decomposition and psycho-visual quantization.",
    specs: [
      ["BLOCK MATRIX:", "Variable Size (4x4 to 64x64)", "text-white"],
      ["QUANTIZATION PARAM:", "QP 21 (Constrained Variable)", "text-amber-300"],
      ["MOTION ESTIMATION:", "Bidirectional Diamond Search", "text-sky-300"],
      ["CYCLE LATENCY:", "2.12 ms", "text-emerald-400 font-bold"],
    ],
    progress: "33%",
  },
  {
    stageId: 2,
    code: "TRACE // STAGE_ID: HARDWARE_AV1_ENCODING",
    title: "Adaptive Hardware Transcode Profiles",
    badge: "GPU_NVENC",
    badgeColor: "bg-sky-950/80 text-sky-300 border border-sky-500/40 shadow-[0_0_8px_rgba(56,189,248,0.3)]",
    desc: "Multi-profile bitrate ladder synthesis (4K, 1080p, 720p) via dual NVENC engines.",
    specs: [
      ["ENCODER HARDWARE:", "Dual NVENC Gen 8 Engines", "text-white font-bold"],
      ["PROFILE SYNTHESIS:", "4K @ 18Mbps / 1080p @ 6Mbps", "text-cyan-300"],
      ["GOP STRUCTURE:", "Closed GOP (IDR every 1s)", "text-indigo-300"],
      ["VMAF INDEX:", "98.2 / Reference Target", "text-emerald-400 font-bold"],
    ],
    progress: "50%",
  },
  {
    stageId: 3,
    code: "TRACE // STAGE_ID: FRAGMENT_CHUNKING",
    title: "CMAF / HLS / DASH Packet Framing",
    badge: "SUB_CHUNK",
    badgeColor: "bg-indigo-950/80 text-indigo-300 border border-indigo-500/40 shadow-[0_0_8px_rgba(99,102,241,0.3)]",
    desc: "Bitstream chunking into 200ms CMAF fragments for low-latency transfer encoding.",
    specs: [
      ["FRAGMENT SIZES:", "200ms Micro-chunks", "text-white"],
      ["MANIFEST ENGINE:", "Live Dynamic MPD / m3u8", "text-sky-300"],
      ["MUX TYPE:", "ISO Base Media File (fMP4)", "text-purple-300"],
      ["HEADER OVERHEAD:", "< 0.4% Overall Payload", "text-emerald-400 font-bold"],
    ],
    progress: "66%",
  },
  {
    stageId: 4,
    code: "TRACE // STAGE_ID: MULTI_CDN_DISTRIBUTION",
    title: "Anycast Edge Replication & Cache Ingress",
    badge: "GLOBAL_EDGE",
    badgeColor: "bg-purple-950/80 text-purple-300 border border-purple-500/40 shadow-[0_0_8px_rgba(168,85,247,0.3)]",
    desc: "Anycast replication across 180+ global edge locations with dynamic DNS path routing.",
    specs: [
      ["CACHE POLICY:", "Memory-Tiered Origin Push", "text-white"],
      ["EGRESS BREADTH:", "180+ PoPs Globally", "text-sky-300"],
      ["FAILOVER THRESHOLD:", "< 50ms Detection", "text-amber-300"],
      ["CACHE HIT RATIO:", "99.82% Average", "text-emerald-400 font-bold"],
    ],
    progress: "83%",
  },
  {
    stageId: 5,
    code: "TRACE // STAGE_ID: CLIENT_BUFFER_DECODE",
    title: "Hardware Video Decoder & Frame Jitter Lock",
    badge: "CLIENT_SYNC",
    badgeColor: "bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]",
    desc: "WebCodecs / MSE pipeline decoding fMP4 fragments with millisecond drift compensation.",
    specs: [
      ["CLIENT BUFFER:", "1.2s Forward Safe Buffer", "text-white"],
      ["DROPPED FRAMES:", "0.0001% Overall", "text-emerald-400 font-bold"],
      ["DRIFT CORRECTION:", "Micro-tick Pitch Adjust", "text-sky-300"],
      ["TOTAL LATENCY:", "184ms End-to-End", "text-emerald-400 font-bold text-base"],
    ],
    progress: "100%",
  },
];

const popNodes = [
  { id: "POP-NYC-01", loc: "New York, US [Equinix NY4]", cap: "40.0 Tbps", hit: "99.84%", lat: "3.2 ms", status: "OPTIMAL", activeColor: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30" },
  { id: "POP-FRA-02", loc: "Frankfurt, DE [DE-CIX]", cap: "32.0 Tbps", hit: "99.71%", lat: "4.1 ms", status: "OPTIMAL", activeColor: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30" },
  { id: "POP-TYO-04", loc: "Tokyo, JP [CCX TY2]", cap: "28.0 Tbps", hit: "99.42%", lat: "5.8 ms", status: "OPTIMAL", activeColor: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30" },
  { id: "POP-SIN-01", loc: "Singapore [Equinix SG1]", cap: "20.0 Tbps", hit: "98.92%", lat: "6.4 ms", status: "ACTIVE_BALANCED", activeColor: "text-cyan-300 bg-cyan-950/60 border-cyan-500/30" },
  { id: "POP-LON-03", loc: "London, UK [Telehouse North]", cap: "36.0 Tbps", hit: "99.91%", lat: "3.8 ms", status: "OPTIMAL", activeColor: "text-emerald-400 bg-emerald-950/60 border-emerald-500/30" },
];

export function VideoStreamingView() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [smpteTime, setSmpteTime] = useState("[00:14:29:18]");

  const videoSectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rAF: number;
    const handleScroll = () => {
      if (!videoSectionRef.current) return;
      if (window.innerWidth < 800) return;
      const rect = videoSectionRef.current.getBoundingClientRect();
      const stickyHeight = window.innerHeight - 84;
      const totalScrollable = rect.height - stickyHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));

      rAF = requestAnimationFrame(() => {
        setScrollProgress(progress);
        const stageIdx = Math.min(5, Math.max(0, Math.floor(progress * 6)));
        setActiveStageIdx(stageIdx);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rAF);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // SMPTE Timecode Counter running at 60fps
  useEffect(() => {
    let frames = 18;
    let seconds = 29;
    let minutes = 14;
    let hours = 0;

    const pad = (n: number) => String(n).padStart(2, "0");

    const timer = setInterval(() => {
      frames++;
      if (frames >= 60) {
        frames = 0;
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
            minutes = 0;
            hours++;
          }
        }
      }
      setSmpteTime(`[${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}]`);
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, []);

  const activeStage = videoPipelineStages[activeStageIdx];

  return (
    <div className="bg-[#040711] text-slate-200 font-body-md antialiased selection:bg-sky-500 selection:text-white min-h-screen pt-[84px]">
      {/* =========================================================================
          MAIN CANVAS
          ========================================================================= */}
      <main className="max-w-[1600px] mx-auto border-x border-sky-950/50 relative shadow-[0_0_80px_rgba(6,182,212,0.06)]">
        {/* 1. HERO SECTION */}
        <section className="border-b border-sky-950/60 bg-gradient-to-b from-[#080E22] via-[#050814] to-[#04060E] p-6 md:p-space-3xl relative overflow-hidden">
          {/* Background Scanline Grid */}
          <div className="absolute inset-0 scanline-grid opacity-40 pointer-events-none"></div>

          {/* SMPTE Timecode Display */}
          <div className="absolute top-6 right-8 text-right hidden sm:block">
            <div className="font-mono text-[11px] font-bold text-amber-400/80 tracking-widest uppercase">SMPTE TIMECODE REF</div>
            <div className="font-mono text-2xl font-bold text-amber-400 tracking-wider bg-amber-950/60 border border-amber-500/40 px-3.5 py-1 rounded mt-1 shadow-[0_0_16px_rgba(245,158,11,0.25)]">
              {smpteTime}
            </div>
          </div>

          {/* Live Signal Diagnostic Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8 border-b border-sky-900/40 pb-4 text-xs font-mono">
            <div className="flex items-center space-x-2 bg-[#09152C] px-3 py-1.5 border border-emerald-500/40 rounded shadow-[0_0_10px_rgba(16,185,129,0.15)]">
              <span className="text-white font-bold">RTMP/SRT INGRESS: <span className="text-emerald-400">ACTIVE</span></span>
            </div>
            <div className="flex items-center space-x-2 bg-[#09152C] px-3 py-1.5 border border-sky-500/30 rounded">
              <span className="text-sky-400 font-bold">PROFILES:</span>
              <span className="text-white font-semibold">4K60 HDR 10-BIT</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#09152C] px-3 py-1.5 border border-cyan-500/30 rounded">
              <span className="text-cyan-300 font-bold">THROUGHPUT:</span>
              <span className="text-white font-semibold">12.4 Gbps DEDICATED</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#09152C] px-3 py-1.5 border border-indigo-500/30 rounded">
              <span className="text-indigo-300 font-bold">LATENCY:</span>
              <span className="text-emerald-400 font-bold">184ms GLASS-TO-GLASS</span>
            </div>
          </div>

          {/* Monumental Typography */}
          <div className="max-w-5xl mb-6">
            <p className="font-mono text-xs font-bold text-cyan-400 tracking-widest mb-3 uppercase">
              HIGH-THROUGHPUT REAL-TIME ARCHITECTURE
            </p>
            <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-white tracking-tighter uppercase font-bold">
              VIDEO, WITHOUT LIMITS.
            </h1>
          </div>

          {/* Interactive Vector Waveform & Audio Spectrum Monitor */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6">
            {/* Waveform Panel */}
            <div className="lg:col-span-8 bg-[#090F20] border border-sky-500/30 p-5 rounded shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center mb-3 pb-2.5 border-b border-sky-900/40 text-xs font-mono">
                <span className="text-sky-300 font-bold">
                  DIAGNOSTICS 01 | REALTIME VECTOR WAVEFORM [IRE 100/0]
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-emerald-400 font-bold">PARADE: Y/Cb/Cr</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-cyan-300 font-bold">FIELD: 59.94p</span>
                </div>
              </div>

              {/* Waveform Canvas Rendering */}
              <div className="h-40 w-full bg-[#03060E] border border-sky-900/50 rounded relative flex items-center justify-between px-2 overflow-hidden shadow-inner">
                {/* Graticule lines */}
                <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none opacity-25">
                  <div className="w-full border-b border-dashed border-amber-500"></div>
                  <div className="w-full border-b border-dashed border-sky-400"></div>
                  <div className="w-full border-b border-dashed border-emerald-400"></div>
                </div>
                {/* Dynamic SVG Waveform line */}
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 120">
                  <polyline
                    fill="none"
                    points="0,60 30,55 60,65 90,40 120,70 150,20 180,85 210,50 240,45 270,95 300,30 330,60 360,25 390,75 420,50 450,15 480,80 510,45 540,65 570,30 600,90 630,40 660,70 690,30 720,60 750,20 780,75 800,60"
                    stroke="#00F0FF"
                    strokeWidth="2"
                    className="filter drop-shadow-[0_0_6px_#00f0ff]"
                  />
                  <polyline
                    fill="none"
                    opacity="0.75"
                    points="0,70 40,60 80,75 120,45 160,80 200,35 240,70 280,45 320,80 360,35 400,60 440,30 480,90 520,50 560,70 600,45 640,80 680,30 720,65 760,40 800,70"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    className="filter drop-shadow-[0_0_6px_#3b82f6]"
                  />
                </svg>
              </div>
            </div>

            {/* Telemetry Matrix */}
            <div className="lg:col-span-4 bg-[#090F20] border border-sky-500/30 p-5 rounded flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <div>
                <div className="flex justify-between items-center mb-3 pb-2.5 border-b border-sky-900/40 text-xs font-mono">
                  <span className="text-white font-bold">INGRESS METRICS</span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    STABLE 99.999%
                  </span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">COLORSPACE:</span>
                    <span className="text-white font-bold">BT.2020 / PQ-10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">CHROMA SUBSAMPLING:</span>
                    <span className="text-sky-300 font-semibold">4:2:2 DUAL-LINK</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">KEYFRAME INTERVAL:</span>
                    <span className="text-white font-semibold">60 FRAMES (1.00s)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">CONTAINER:</span>
                    <span className="text-cyan-300 font-bold">MPEG-TS OVER SRT</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-sky-900/40 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-400">FRAME ACCUMULATOR:</span>
                <span className="text-emerald-400 font-bold">518,400 RX / 0 DROPPED</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SIGNATURE INTERACTION: VIDEO PIPELINE TIMELINE */}
        <section
          ref={videoSectionRef}
          className="border-b border-sky-950/60 p-6 md:p-space-2xl bg-gradient-to-b from-[#050814] to-[#070D1E] md:min-h-[300vh] relative"
        >
          <div className="md:sticky md:top-[84px] md:min-h-[calc(100vh-84px)] flex flex-col justify-center py-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-3 border-b border-sky-900/40">
              <div>
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
                  INTERACTIVE TRACE ENGINE | PIPELINE SCRUBBER
                </span>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white uppercase font-bold mt-1">
                  End-to-End Frame Lifecycle
                </h2>
              </div>
            </div>

            {/* Scrubber Stage Navigation Pills */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
              {[
                { idx: 0, label: "STAGE 01", name: "RAW YUV" },
                { idx: 1, label: "STAGE 02", name: "DCT / MACROBLOCKS" },
                { idx: 2, label: "STAGE 03", name: "AV1 / H.264 LADDER" },
                { idx: 3, label: "STAGE 04", name: "CHUNKING & PACKET" },
                { idx: 4, label: "STAGE 05", name: "EDGE MULTI-CDN" },
                { idx: 5, label: "STAGE 06", name: "CLIENT DECODE" },
              ].map((st) => (
                <button
                  key={st.idx}
                  type="button"
                  onClick={() => setActiveStageIdx(st.idx)}
                  className={`text-left p-3.5 border transition-all rounded cursor-pointer ${
                    activeStageIdx === st.idx
                      ? "border-cyan-400 bg-gradient-to-r from-cyan-950/90 to-blue-950/80 text-white shadow-[0_0_18px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400/50"
                      : "border-slate-800 bg-[#090E1B] text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] font-bold block ${
                      activeStageIdx === st.idx ? "text-cyan-300" : "text-slate-400"
                    }`}
                  >
                    {st.label}
                  </span>
                  <span className="font-mono text-xs text-white font-bold block mt-0.5">
                    {st.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Pipeline Dynamic Inspector Panel */}
            <div className="bg-[#080D1A] border border-sky-500/30 rounded p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
              {/* Left Column: Visual Representation Graphic */}
              <div className="lg:col-span-7 bg-[#050814] border border-sky-900/40 rounded p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center font-mono text-xs pb-3 border-b border-sky-900/40">
                  <span className="text-sky-300 font-bold">{activeStage.code}</span>
                  <span className="text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    SIGNAL LOCK: 100%
                  </span>
                </div>

                {/* Dynamic Visual Content per Stage */}
                <div className="my-8 py-6 flex flex-col items-center justify-center min-h-[220px]">
                  {activeStageIdx === 0 && (
                    <>
                      <div className="grid grid-cols-4 gap-3 w-full max-w-md">
                        <div className="h-24 bg-[#0A1630] border-2 border-cyan-400 p-3 flex flex-col justify-between rounded shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                          <span className="font-mono text-xs text-cyan-300 font-bold">Y-LUMA</span>
                          <span className="font-mono text-sm text-white font-bold">3840×2160</span>
                        </div>
                        <div className="h-24 bg-[#0A1630] border border-sky-500/40 p-3 flex flex-col justify-between rounded">
                          <span className="font-mono text-xs text-sky-400 font-semibold">Cb-CHROMA</span>
                          <span className="font-mono text-sm text-white">1920×2160</span>
                        </div>
                        <div className="h-24 bg-[#0A1630] border border-sky-500/40 p-3 flex flex-col justify-between rounded">
                          <span className="font-mono text-xs text-sky-400 font-semibold">Cr-CHROMA</span>
                          <span className="font-mono text-sm text-white">1920×2160</span>
                        </div>
                        <div className="h-24 bg-[#0A1630] border border-emerald-500/40 p-3 flex flex-col justify-between rounded">
                          <span className="font-mono text-xs text-emerald-400 font-bold">AUDIO-PCM</span>
                          <span className="font-mono text-sm text-emerald-300 font-bold">24b/48kHz</span>
                        </div>
                      </div>
                      <p className="font-mono text-xs text-sky-300 font-semibold mt-4">
                        UNCOMPRESSED BUFFER: <span className="text-white font-bold">746.49 MB/s</span> UNENCODED BITSTREAM
                      </p>
                    </>
                  )}

                  {activeStageIdx === 1 && (
                    <>
                      <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-10 border rounded flex items-center justify-center font-mono text-[10px] ${
                              i % 3 === 0
                                ? "bg-amber-950/60 border-amber-400 text-amber-300 font-bold shadow-[0_0_8px_rgba(245,158,11,0.2)]"
                                : "bg-[#091224] border-sky-900/50 text-slate-400"
                            }`}
                          >
                            DCT[{i}]
                          </div>
                        ))}
                      </div>
                      <p className="font-mono text-xs text-amber-300 font-semibold mt-4">
                        DCT QUANTIZATION MATRIX: <span className="text-white font-bold">87.4% SPATIAL COMPRESSION</span>
                      </p>
                    </>
                  )}

                  {activeStageIdx === 2 && (
                    <>
                      <div className="space-y-2 w-full max-w-md">
                        <div className="p-2.5 bg-[#0A1733] border-l-4 border-l-cyan-400 border border-sky-900/40 rounded flex justify-between items-center font-mono text-xs">
                          <span className="text-white font-bold">AV1 MAIN PROFILE</span>
                          <span className="text-cyan-300 font-bold">3840×2160 @ 60 FPS (18 Mbps)</span>
                        </div>
                        <div className="p-2.5 bg-[#0A1733] border-l-4 border-l-sky-400 border border-sky-900/40 rounded flex justify-between items-center font-mono text-xs">
                          <span className="text-slate-200">HEVC HIGH PROFILE</span>
                          <span className="text-sky-300">1920×1080 @ 60 FPS (6 Mbps)</span>
                        </div>
                        <div className="p-2.5 bg-[#0A1733] border-l-4 border-l-indigo-400 border border-sky-900/40 rounded flex justify-between items-center font-mono text-xs">
                          <span className="text-slate-300">H.264 BASELINE</span>
                          <span className="text-indigo-300">1280×720 @ 30 FPS (2.5 Mbps)</span>
                        </div>
                      </div>
                      <p className="font-mono text-xs text-cyan-300 font-semibold mt-4">
                        HARDWARE ACCELERATOR: <span className="text-white font-bold">DUAL NVENC GEN 8 PIPELINES</span>
                      </p>
                    </>
                  )}

                  {activeStageIdx === 3 && (
                    <>
                      <div className="flex items-center space-x-2 w-full max-w-md overflow-x-auto p-2">
                        {["fMP4-HDR", "m3u8-EXT", "CMAF-001", "CMAF-002", "CMAF-003"].map((chk, i) => (
                          <div
                            key={chk}
                            className={`p-3 border rounded text-center font-mono text-xs shrink-0 ${
                              i === 2
                                ? "bg-indigo-950/80 border-indigo-400 text-indigo-300 font-bold shadow-[0_0_12px_rgba(99,102,241,0.3)]"
                                : "bg-[#091224] border-sky-900/40 text-slate-300"
                            }`}
                          >
                            <div>{chk}</div>
                            <div className="text-[10px] text-slate-400 mt-1">200ms CHUNK</div>
                          </div>
                        ))}
                      </div>
                      <p className="font-mono text-xs text-indigo-300 font-semibold mt-4">
                        FRAGMENT ENGINE: <span className="text-white font-bold">CHUNK-TRANSFER-ENCODING (CMAF)</span>
                      </p>
                    </>
                  )}

                  {activeStageIdx === 4 && (
                    <>
                      <div className="grid grid-cols-3 gap-3 w-full max-w-md">
                        {popNodes.slice(0, 3).map((pop) => (
                          <div key={pop.id} className="p-3 bg-[#0A162C] border border-purple-500/40 rounded font-mono text-xs text-center shadow-[0_0_10px_rgba(168,85,247,0.15)]">
                            <span className="text-purple-300 font-bold block">{pop.id}</span>
                            <span className="text-white text-[11px] block mt-1">{pop.cap}</span>
                            <span className="text-emerald-400 font-bold text-[10px] block mt-1">{pop.hit} HIT</span>
                          </div>
                        ))}
                      </div>
                      <p className="font-mono text-xs text-purple-300 font-semibold mt-4">
                        ANYCAST EDGE MESH: <span className="text-white font-bold">180+ POP INGRESS LOCATIONS</span>
                      </p>
                    </>
                  )}

                  {activeStageIdx === 5 && (
                    <>
                      <div className="w-full max-w-md bg-[#09152C] border-2 border-emerald-400 rounded p-4 flex justify-between items-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        <div>
                          <span className="font-mono text-xs text-emerald-400 font-bold block">PLAYBACK STATUS</span>
                          <span className="font-mono text-lg font-bold text-white">SYNCHRONIZED 4K60</span>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-xs text-slate-400 block">
                            GLASS-TO-GLASS
                          </span>
                          <span className="font-mono text-lg text-emerald-400 font-bold">184 MS FLAT</span>
                        </div>
                      </div>
                      <p className="font-mono text-xs text-emerald-400 font-semibold mt-4">
                        ZERO STALLING DETECTED // AUDIT TRAIL LOGGED
                      </p>
                    </>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-sky-900/40 font-mono text-xs">
                  <span className="text-slate-400">CLOCK DRIFT: <span className="text-emerald-400 font-bold">&lt; 0.002ms</span></span>
                  <span className="text-cyan-300 font-bold">PAYLOAD VERIFIED: SHA-256 VALID</span>
                </div>
              </div>

              {/* Right Column: Micro-inspection Specs */}
              <div className="lg:col-span-5 bg-[#050814] border border-sky-900/40 rounded p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4 pb-3 border-b border-sky-900/40">
                    <h3 className="text-lg font-bold text-white">{activeStage.title}</h3>
                    <span className={`font-mono text-xs px-2.5 py-1 rounded font-bold ${activeStage.badgeColor}`}>
                      {activeStage.badge}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">{activeStage.desc}</p>
                  <div className="space-y-3 font-mono text-xs">
                    {activeStage.specs.map(([label, val, colClass]) => (
                      <div key={label} className="flex justify-between border-b border-sky-900/30 pb-2">
                        <span className="text-slate-400">{label}</span>
                        <span className={colClass || "text-white font-semibold"}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-sky-900/40">
                  <div className="w-full bg-[#0C152C] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 h-2 rounded-full transition-all duration-300 shadow-[0_0_8px_#22d3ee]"
                      style={{ width: `${Math.max(16, Math.round((activeStageIdx + 1) * 16.66))}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2.5 font-mono text-xs text-slate-400">
                    <span>SCRUBBER PROGRESS</span>
                    <span className="text-cyan-300 font-bold">STAGE {activeStageIdx + 1} OF 6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. REAL-TIME WEBRTC & SFU MESH ENGINE */}
        <section className="reveal-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-6 border-b border-sky-950/60 p-6 md:p-space-2xl bg-gradient-to-b from-[#070D1E] to-[#040711]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                  TOPOLOGY ARCHITECTURE | PROTOCOL ENGINE
                </span>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white uppercase font-bold mb-6">
                  Sub-50ms Selective Forwarding Mesh
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border border-emerald-500/30 bg-[#07131D] p-4 rounded shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
                    <span className="font-mono text-xs text-slate-400 block mb-1">
                      MEASURED PING (AVG)
                    </span>
                    <span className="text-3xl font-bold text-emerald-400 font-mono">
                      18<span className="text-sm text-slate-400">ms</span>
                    </span>
                  </div>
                  <div className="border border-sky-500/30 bg-[#081328] p-4 rounded shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
                    <span className="font-mono text-xs text-slate-400 block mb-1">PACKET RECOVERY</span>
                    <span className="text-3xl font-bold text-cyan-400 font-mono">
                      99.98<span className="text-sm text-slate-400">%</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-sky-900/40 p-4 bg-[#080E20] rounded font-mono text-xs space-y-2.5">
                <div className="flex justify-between text-slate-400">
                  <span>CONGESTION ALGO:</span>
                  <span className="text-white font-bold">BBRv3 + GCC HYBRID</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>JITTER BUFFER:</span>
                  <span className="text-sky-300 font-semibold">ADAPTIVE (8ms - 24ms)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>FEC REDUNDANCY:</span>
                  <span className="text-emerald-400 font-bold">ULPFEC / FLEXFEC ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Interactive SFU Routing Topology Visualization */}
            <div className="lg:col-span-7 border border-sky-500/30 bg-[#080D1A] p-6 rounded flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-sky-900/40 text-xs font-mono">
                <span className="text-sky-300 font-bold">
                  SFU NODE MATRIX: us-east-ashburn | CLUSTER A
                </span>
                <span className="text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block mr-1.5 animate-pulse shadow-[0_0_6px_#34d399]"></span> MESH ACTIVE
                </span>
              </div>

              {/* Mesh Schematic Diagram (SVG) */}
              <div className="relative h-64 w-full bg-[#03060E] border border-sky-900/50 rounded flex items-center justify-center p-4 shadow-inner">
                <svg className="w-full h-full" viewBox="0 0 500 240">
                  {/* Grid lines */}
                  <line x1="50" y1="40" x2="450" y2="40" stroke="#10182C" strokeDasharray="2 2" strokeWidth="0.75" />
                  <line x1="50" y1="120" x2="450" y2="120" stroke="#10182C" strokeDasharray="2 2" strokeWidth="0.75" />
                  <line x1="50" y1="200" x2="450" y2="200" stroke="#10182C" strokeDasharray="2 2" strokeWidth="0.75" />

                  {/* SFU Center Node */}
                  <rect x="210" y="90" width="80" height="60" fill="#0A1835" stroke="#00F0FF" strokeWidth="2" rx="4" />
                  <text x="250" y="118" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold" textAnchor="middle">
                    CORE_SFU
                  </text>
                  <text x="250" y="132" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="9" fontWeight="bold" textAnchor="middle">
                    12.4 Gbps
                  </text>

                  {/* Ingress Node */}
                  <rect x="30" y="95" width="70" height="50" fill="#091815" stroke="#10B981" strokeWidth="1.5" rx="4" />
                  <text x="65" y="120" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="9" fontWeight="bold" textAnchor="middle">
                    INGRESS_1
                  </text>
                  <text x="65" y="133" fill="#10B981" fontFamily="JetBrains Mono" fontSize="8" fontWeight="bold" textAnchor="middle">
                    RTMP/SRT
                  </text>
                  <line x1="100" y1="120" x2="210" y2="120" stroke="#10B981" strokeDasharray="4 2" strokeWidth="2" />

                  {/* Egress Edge Nodes */}
                  <rect x="390" y="30" width="75" height="40" fill="#0D162C" stroke="#38BDF8" strokeWidth="1.5" rx="4" />
                  <text x="427" y="50" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="9" fontWeight="bold" textAnchor="middle">
                    EDGE_EU_01
                  </text>
                  <text x="427" y="62" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle">
                    14ms · 4K
                  </text>
                  <line x1="290" y1="110" x2="390" y2="50" stroke="#38BDF8" strokeWidth="1.5" />

                  <rect x="390" y="100" width="75" height="40" fill="#0D162C" stroke="#38BDF8" strokeWidth="1.5" rx="4" />
                  <text x="427" y="120" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="9" fontWeight="bold" textAnchor="middle">
                    EDGE_US_W
                  </text>
                  <text x="427" y="132" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle">
                    18ms · 1080p
                  </text>
                  <line x1="290" y1="120" x2="390" y2="120" stroke="#00F0FF" strokeWidth="2" />

                  <rect x="390" y="170" width="75" height="40" fill="#0D162C" stroke="#38BDF8" strokeWidth="1.5" rx="4" />
                  <text x="427" y="190" fill="#FFFFFF" fontFamily="JetBrains Mono" fontSize="9" fontWeight="bold" textAnchor="middle">
                    EDGE_AP_04
                  </text>
                  <text x="427" y="202" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle">
                    62ms · 720p
                  </text>
                  <line x1="290" y1="130" x2="390" y2="190" stroke="#38BDF8" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Bitrate Simulcast Ladder Status */}
              <div className="mt-4 pt-3 border-t border-sky-900/40 grid grid-cols-3 gap-3 text-center font-mono text-xs">
                <div className="bg-[#09152C] border border-cyan-500/30 p-2.5 rounded">
                  <span className="text-cyan-300 block font-bold text-[11px] mb-1">SIMULCAST HIGH</span>
                  <span className="text-white font-bold">2160p60 @ 18Mbps</span>
                </div>
                <div className="bg-[#09152C] border border-sky-500/30 p-2.5 rounded">
                  <span className="text-sky-300 block font-bold text-[11px] mb-1">SIMULCAST MED</span>
                  <span className="text-white font-bold">1080p60 @ 6Mbps</span>
                </div>
                <div className="bg-[#09152C] border border-slate-700/50 p-2.5 rounded">
                  <span className="text-slate-400 block font-bold text-[11px] mb-1">SIMULCAST LOW</span>
                  <span className="text-slate-300 font-semibold">720p30 @ 2.5Mbps</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HIGH-THROUGHPUT MEDIA PROCESSING LAB */}
        <section className="border-b border-sky-950/60 p-6 md:p-space-2xl bg-[#04060E]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-sky-900/40">
            <div>
              <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
                FFMPEG DISTRIBUTED CLUSTER | HARDWARE PIPELINE
              </span>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white uppercase font-bold mt-1">
                Media Acceleration Lab
              </h2>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0 font-mono text-xs">
              <span className="px-3 py-1 bg-[#09152C] border border-sky-500/30 text-white font-bold rounded">
                GPU WORKERS: 128 CLUSTERED
              </span>
              <span className="px-3 py-1 bg-emerald-600 text-white font-bold rounded shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                VMAF: 98.2 REF
              </span>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: GPU Transcode Cluster */}
            <div className="border border-cyan-500/30 bg-gradient-to-b from-[#09152C] to-[#050814] p-6 rounded flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-t-2 border-t-cyan-400">
              <div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-sky-900/40 font-mono text-xs">
                  <span className="text-cyan-300 font-bold">MODULE 01 | TRANSCODE</span>
                  <span className="text-white font-bold bg-cyan-950/70 border border-cyan-500/40 px-2 py-0.5 rounded">
                    NVENC / AV1
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-6">Hardware-Accelerated Encoding</h3>
              </div>
              <div className="space-y-2 border-t border-sky-900/40 pt-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">EFFICIENCY GAIN:</span>
                  <span className="text-emerald-400 font-bold">+42% BITRATE/VMAF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">HARDWARE:</span>
                  <span className="text-white font-bold">NVIDIA L40S 48GB</span>
                </div>
              </div>
            </div>

            {/* Card 2: Audio Mastering & Normalization */}
            <div className="border border-emerald-500/30 bg-gradient-to-b from-[#091817] to-[#050814] p-6 rounded flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-t-2 border-t-emerald-400">
              <div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-emerald-900/40 font-mono text-xs">
                  <span className="text-emerald-400 font-bold">MODULE 02 | DSP CORE</span>
                  <span className="text-white font-bold bg-emerald-950/70 border border-emerald-500/40 px-2 py-0.5 rounded">
                    EBU R128 COMPLIANT
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-6">Automated Dynamic Audio</h3>
              </div>
              <div className="space-y-2 border-t border-emerald-900/40 pt-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">DYNAMIC RANGE:</span>
                  <span className="text-white font-bold">114 dB TRUE-PEAK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">DSP LATENCY:</span>
                  <span className="text-emerald-400 font-bold">&lt; 1.2ms PIPELINE</span>
                </div>
              </div>
            </div>

            {/* Card 3: Perceptual Quality & Watermarking */}
            <div className="border border-purple-500/30 bg-gradient-to-b from-[#140E26] to-[#050814] p-6 rounded flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-t-2 border-t-purple-400">
              <div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-purple-900/40 font-mono text-xs">
                  <span className="text-purple-300 font-bold">MODULE 03 | FORENSIC</span>
                  <span className="text-white font-bold bg-purple-950/70 border border-purple-500/40 px-2 py-0.5 rounded">
                    IN-STREAM ID
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-6">Perceptual Metric &amp; DRM</h3>
              </div>
              <div className="space-y-2 border-t border-purple-900/40 pt-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">SCORE INDEX:</span>
                  <span className="text-cyan-300 font-bold">VMAF 98.2 / PSNR 46.8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">FORENSIC LEAK ID:</span>
                  <span className="text-purple-300 font-bold">SUB-FRAME UNIQUE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
