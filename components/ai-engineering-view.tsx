"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface PipelineStage {
  title: string;
  desc: string;
  latency: string;
  barWidth: string;
  dModel: string;
  sparsity: string;
  quant: string;
}

const pipelineStages: Record<number, PipelineStage> = {
  1: {
    title: "STAGE 1: TOKENIZATION",
    desc: "UTF-8 payload decomposition into 4,096 scalar tokens via BPE byte mapping.",
    latency: "1.82 ms",
    barWidth: "25%",
    dModel: "4096",
    sparsity: "0.024 (Dense)",
    quant: "W4A16",
  },
  2: {
    title: "STAGE 2: MULTI-HEAD ATTENTION",
    desc: "96 parallel QKV projections across 12,288 hidden dimension layers.",
    latency: "4.65 ms",
    barWidth: "50%",
    dModel: "12288",
    sparsity: "0.180 (Sparse)",
    quant: "FP8 E4M3",
  },
  3: {
    title: "STAGE 3: MCP TOOL DISPATCH",
    desc: "Deterministic evaluation and schema validation for remote sandbox invocation.",
    latency: "6.18 ms",
    barWidth: "75%",
    dModel: "Adaptive",
    sparsity: "0.004 (Targeted)",
    quant: "INT8 KV-Cache",
  },
  4: {
    title: "STAGE 4: SYNTHESIS & RESOLUTION",
    desc: "Constrained grammar sampling conforming to JSON Schema or WASM bytecode.",
    latency: "8.40 ms",
    barWidth: "100%",
    dModel: "4096",
    sparsity: "0.001 (Zero-Shot)",
    quant: "FP16 TensorRT",
  },
};

const crucibleSteps: Record<number, { filename: string; code: React.ReactNode }> = {
  1: {
    filename: "intent_manifest.spec.json",
    code: (
      <>
        <span className="text-purple-400">&#123;</span>
        {"\n  "}<span className="text-sky-300">&quot;system_intent&quot;</span>: <span className="text-emerald-300">&quot;Provision adaptive cache layer&quot;</span>,
        {"\n  "}<span className="text-sky-300">&quot;constraints&quot;</span>: <span className="text-purple-400">&#123;</span>
        {"\n    "}<span className="text-sky-300">&quot;max_p99_latency_ms&quot;</span>: <span className="text-amber-400">15</span>,
        {"\n    "}<span className="text-sky-300">&quot;eviction_strategy&quot;</span>: <span className="text-emerald-300">&quot;S3-FIFO&quot;</span>,
        {"\n    "}<span className="text-sky-300">&quot;storage_engine&quot;</span>: <span className="text-emerald-300">&quot;Distributed-Memory-Mapped-RocksDB&quot;</span>
        {"\n  "}<span className="text-purple-400">&#125;</span>,
        {"\n  "}<span className="text-sky-300">&quot;invariants&quot;</span>: [
        <span className="text-emerald-300">&quot;zero_unauthenticated_reads&quot;</span>, <span className="text-emerald-300">&quot;reproducible_weights&quot;</span>
        ]
        {"\n"}<span className="text-purple-400">&#125;</span>
      </>
    ),
  },
  2: {
    filename: "parser_ast.syntax.tree",
    code: (
      <>
        <span className="text-sky-400 font-bold">ROOT Node</span> <span className="text-indigo-300">[IntentRoot]</span>
        {"\n"}├── <span className="text-amber-300">IDENTIFIER</span>: <span className="text-emerald-300">&quot;ProvisionAdaptiveCache&quot;</span>
        {"\n"}├── <span className="text-sky-300">CONSTRAINT_BLOCK</span> <span className="text-emerald-400 font-bold">[Verified]</span>
        {"\n"}│   ├── <span className="text-indigo-300">P99_THRESHOLD</span> &lt;= <span className="text-amber-400">15.0ms</span> (<span className="text-emerald-400">Checked: true</span>)
        {"\n"}│   └── <span className="text-indigo-300">CACHE_ALGORITHM</span>: <span className="text-sky-300">S3_FIFO_STRUCT</span>
        {"\n"}└── <span className="text-purple-300">ATOMIC_INVARIANT_SET</span>
        {"\n"}    ├── <span className="text-slate-300">IMMUTABLE_AUDIT_LOG</span>: <span className="text-emerald-400">OK</span>
        {"\n"}    └── <span className="text-slate-300">DETERMINISTIC_HASH</span>: <span className="text-cyan-400">PASS</span>
      </>
    ),
  },
  3: {
    filename: "kernel_service.rs",
    code: (
      <>
        <span className="text-purple-400">#[inline(always)]</span>
        {"\n"}<span className="text-pink-400 font-semibold">pub async fn</span> <span className="text-sky-300 font-bold">execute_cache_layer</span>&lt;<span className="text-amber-300">&apos;a</span>&gt;(
        {"\n    "}ctx: &amp;<span className="text-amber-300">&apos;a</span> <span className="text-indigo-300">Context</span>,
        {"\n    "}key: &amp;<span className="text-amber-300">&apos;a</span> [<span className="text-pink-400">u8</span>; <span className="text-amber-400">32</span>]
        {"\n"}) -&gt; <span className="text-indigo-300">Result</span>&lt;<span className="text-emerald-300">RawPayload</span>, <span className="text-rose-400">KernelError</span>&gt; <span className="text-purple-400">&#123;</span>
        {"\n    "}<span className="text-pink-400">let</span> node = <span className="text-indigo-300">S3FifoRing</span>::<span className="text-sky-300">select_shard</span>(key);
        {"\n    "}node.<span className="text-sky-300">fetch_or_hydrate</span>(|| <span className="text-pink-400">async</span> <span className="text-purple-400">&#123;</span>
        {"\n        "}ctx.inference_engine.<span className="text-sky-300">resolve_unbacked</span>(key).<span className="text-pink-400">await</span>
        {"\n    "}<span className="text-purple-400">&#125;</span>).<span className="text-pink-400">await</span>
        {"\n"}<span className="text-purple-400">&#125;</span>
      </>
    ),
  },
  4: {
    filename: "live_edge_mesh.stream.tsx",
    code: (
      <>
        <span className="text-pink-400 font-semibold">export const</span> <span className="text-sky-300 font-bold">TelemetryCanvas</span> = ({<span className="text-amber-300">stream</span>}: <span className="text-indigo-300">Props</span>) =&gt; <span className="text-purple-400">&#123;</span>
        {"\n  "}<span className="text-pink-400">const</span> [<span className="text-slate-200">latency</span>, <span className="text-sky-300">setLatency</span>] = <span className="text-sky-300">useState</span>(<span className="text-amber-400">12.4</span>);
        {"\n  "}<span className="text-sky-300">useEffect</span>(() =&gt; <span className="text-purple-400">&#123;</span>
        {"\n    "}<span className="text-[#38bdf8]">const</span> unsub = stream.<span className="text-sky-300">subscribe</span>((<span className="text-amber-300">frame</span>) =&gt; <span className="text-sky-300">setLatency</span>(frame.p99));
        {"\n    "}<span className="text-pink-400">return</span> () =&gt; <span className="text-sky-300">unsub</span>();
        {"\n  "}<span className="text-purple-400">&#125;</span>, [stream]);
        {"\n  "}<span className="text-pink-400">return</span> &lt;<span className="text-indigo-300 font-bold">MeshDisplay</span> <span className="text-sky-300">nodeHealth</span>=<span className="text-emerald-300">&quot;OPTIMAL&quot;</span> <span className="text-sky-300">p99</span>=&#123;<span className="text-slate-200">latency</span>&#125; /&gt;;
        {"\n"}<span className="text-purple-400">&#125;</span>;
      </>
    ),
  },
};

export function AiEngineeringView() {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isExecActive, setIsExecActive] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [currentCrucible, setCurrentCrucible] = useState(1);

  const aiSectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let rAF: number;
    const handleScroll = () => {
      if (!aiSectionRef.current) return;
      if (window.innerWidth < 800) return;
      const rect = aiSectionRef.current.getBoundingClientRect();
      const stickyHeight = window.innerHeight - 84;
      const totalScrollable = rect.height - stickyHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalScrollable));

      rAF = requestAnimationFrame(() => {
        setScrollProgress(progress);
        const stage = Math.min(4, Math.max(1, Math.floor(progress * 4) + 1));
        setCurrentStage(stage);
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

  const stageData = pipelineStages[currentStage];
  const crucibleData = crucibleSteps[currentCrucible];

  const handleAudioToggle = () => {
    setIsAudioActive((prev) => !prev);
  };

  const handleExecClick = () => {
    setIsExecActive(true);
    setTimeout(() => {
      setIsExecActive(false);
    }, 150);
  };

  return (
    <div className="bg-[#05070E] text-slate-200 antialiased selection:bg-sky-500 selection:text-white pt-[84px] min-h-screen">
      {/* =========================================================================
          MAIN CANVAS
          ========================================================================= */}
      <main className="w-full max-w-[1600px] mx-auto border-x border-sky-950/50 bg-[#05070E] relative shadow-[0_0_80px_rgba(2,132,199,0.06)]">
        {/* 1. HERO SECTION */}
        <section className="border-b border-sky-950/60 relative overflow-hidden grid-lines bg-gradient-to-b from-[#070D1F] via-[#050814] to-[#04060C]">
          <div className="px-6 md:px-12 pt-16 pb-14">
            {/* Coordinate & Telemetry Header Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-sky-900/40 pb-3 mb-10 text-xs font-mono text-slate-400 gap-4">
              <div className="flex items-center space-x-3">
                <span className="text-white font-semibold">SYS.AI REV 4.2</span>
                <span className="text-sky-400 font-medium">LATENCY WINDOW: 8.4ms</span>
                <span className="hidden sm:inline text-indigo-300">CLUSTER AFFINITY: GPU H100 SXM5</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded shadow-[0_0_8px_rgba(16,185,129,0.2)]">
                  SYSTEM READY
                </span>
              </div>
            </div>

            {/* Hero Editorial Typography */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <p className="text-xs font-mono font-bold text-sky-400 mb-3 tracking-[0.25em] uppercase">
                  CONTINUOUS REASONING PLATFORM
                </p>
                <h1 className="hidden md:block text-display-xl font-display-xl text-white tracking-tighter uppercase font-bold leading-none">
                  INTELLIGENCE,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
                    ENGINEERED.
                  </span>
                </h1>
                <h1 className="block md:hidden text-display-xl-mobile font-display-xl-mobile text-white tracking-tighter uppercase font-bold">
                  INTELLIGENCE,<br />
                  <span className="text-sky-400">ENGINEERED.</span>
                </h1>
              </div>

              <div className="lg:col-span-4 border-l border-sky-900/50 pl-6 pt-2">
                <div className="p-4 bg-[#090E1B]/90 border border-sky-500/30 rounded font-mono text-xs space-y-2 shadow-[0_4px_20px_rgba(2,132,199,0.12)] mb-6">
                  <div className="flex justify-between text-slate-400">
                    <span>INFERENCE ENGINE</span>
                    <span className="text-emerald-400 font-bold">ONLINE</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>WEIGHT RESOLUTION</span>
                    <span className="text-white font-medium">FP8 MIXED-PRECISION</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>THROUGHPUT RATIO</span>
                    <span className="text-sky-400 font-bold">482 TOK/SEC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SIGNATURE INTERACTION: PROGRESSIVE AI SYSTEM CONSTRUCTION */}
        <section
          ref={aiSectionRef}
          className="border-b border-sky-950/60 relative bg-gradient-to-b from-[#050814] to-[#070B18] md:min-h-[250vh]"
        >
          <div className="md:sticky md:top-[84px] md:min-h-[calc(100vh-84px)] flex flex-col justify-center py-6">
            <div className="px-6 md:px-12 py-3 bg-[#080E1E] border-b border-sky-900/40 flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-2 font-mono text-xs">
                <span className="text-sky-400 font-bold">02 PIPELINE SPECIFICATION</span>
                <span className="text-slate-600">|</span>
                <span className="text-white font-semibold">HIGH-DIMENSIONAL INFERENCE TOPOLOGY</span>
              </div>
              <div className="flex items-center space-x-4 font-mono text-xs text-slate-400">
                <span>VECTOR DIMS: <span className="text-sky-300 font-bold">1536</span></span>
                <span>ATTENTION HEADS: <span className="text-indigo-300 font-bold">96</span></span>
                <span className="text-emerald-400 font-bold">TOP K: 40</span>
              </div>
            </div>

            <div className="px-6 md:px-12 py-8">
              <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <h2 className="text-headline-lg font-headline-lg uppercase tracking-tight text-white font-bold">
                    Progressive Neural Pipeline Simulator
                  </h2>
                </div>
              </div>

              {/* Interactive Pipeline Controls */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 font-mono text-xs">
                {[
                  { id: 1, label: "01. INGESTION", sub: "Token Decomp & Norm" },
                  { id: 2, label: "02. ATTENTION", sub: "Multi-Head Weighting" },
                  { id: 3, label: "03. DISPATCH", sub: "Tool Protocol & State" },
                  { id: 4, label: "04. RESOLUTION", sub: "Deterministic Synth" },
                ].map((btn) => (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => setCurrentStage(btn.id)}
                    className={`p-3.5 text-left transition-all rounded border cursor-pointer ${
                      currentStage === btn.id
                        ? "border-sky-400 bg-gradient-to-r from-sky-950/90 to-indigo-950/80 text-white shadow-[0_0_18px_rgba(56,189,248,0.25)] ring-1 ring-sky-400/50"
                        : "border-slate-800 bg-[#090E1B] text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    <span className={`block font-mono font-bold ${currentStage === btn.id ? "text-sky-300" : "text-slate-300"}`}>
                      {btn.label}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">{btn.sub}</span>
                  </button>
                ))}
              </div>

              {/* Node & Vector Visual Graph */}
              <div className="border border-sky-500/30 bg-[#080C18] p-6 rounded shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative">
                {/* Live SVG Telemetry Wire */}
                <div className="w-full h-44 md:h-56 relative bg-[#040711] border border-sky-900/40 rounded mb-6 overflow-hidden shadow-inner">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="canvas-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#10182C" strokeWidth="0.75" />
                      </pattern>
                      <linearGradient id="laser-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0066FF" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#00F0FF" stopOpacity="1" />
                        <stop offset="100%" stopColor="#00E55B" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <rect width="1000" height="240" fill="url(#canvas-grid)" />

                    {/* Connection Bezier Curves */}
                    <path
                      d="M 120 120 C 260 120, 240 50, 380 50"
                      stroke={currentStage >= 2 ? "#38BDF8" : "#22314E"}
                      strokeDasharray={currentStage >= 2 ? "none" : "4 4"}
                      strokeWidth={currentStage >= 2 ? "2.5" : "1.5"}
                    />
                    <path
                      d="M 120 120 C 260 120, 240 120, 380 120"
                      stroke="#38BDF8"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 120 120 C 260 120, 240 190, 380 190"
                      stroke={currentStage >= 2 ? "#38BDF8" : "#22314E"}
                      strokeDasharray={currentStage >= 2 ? "none" : "4 4"}
                      strokeWidth={currentStage >= 2 ? "2.5" : "1.5"}
                    />
                    <path
                      d="M 380 50 C 520 50, 500 120, 640 120"
                      stroke={currentStage >= 3 ? "#818CF8" : "#22314E"}
                      strokeWidth={currentStage >= 3 ? "2.5" : "1.5"}
                    />
                    <path
                      d="M 380 120 C 520 120, 500 120, 640 120"
                      stroke={currentStage >= 3 ? "#818CF8" : "#38BDF8"}
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 380 190 C 520 190, 500 120, 640 120"
                      stroke={currentStage >= 3 ? "#818CF8" : "#22314E"}
                      strokeWidth={currentStage >= 3 ? "2.5" : "1.5"}
                    />
                    <path
                      d="M 640 120 C 760 120, 780 120, 900 120"
                      stroke={currentStage >= 4 ? "url(#laser-grad)" : "#22314E"}
                      strokeWidth={currentStage >= 4 ? "3.5" : "1.5"}
                    />

                    {/* Stage 1 Nodes */}
                    <circle
                      cx="120"
                      cy="120"
                      r="8"
                      fill="#0284C7"
                      stroke={currentStage === 1 ? "#FFFFFF" : "#38BDF8"}
                      strokeWidth="2.5"
                    />
                    <text x="120" y="148" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold" textAnchor="middle">
                      INPUT_TOKENS
                    </text>

                    {/* Stage 2 Nodes */}
                    <circle
                      cx="380"
                      cy="50"
                      r="6"
                      fill={currentStage >= 2 ? "#6366F1" : "#131C30"}
                      stroke={currentStage >= 2 ? "#A5B4FC" : "#334155"}
                      strokeWidth="2"
                    />
                    <text x="380" y="38" fill={currentStage >= 2 ? "#A5B4FC" : "#64748B"} fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle">
                      HEAD_01 [0.42]
                    </text>

                    <circle
                      cx="380"
                      cy="120"
                      r="7"
                      fill="#38BDF8"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    <text x="380" y="108" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold" textAnchor="middle">
                      HEAD_02 [0.94]
                    </text>

                    <circle
                      cx="380"
                      cy="190"
                      r="6"
                      fill={currentStage >= 2 ? "#6366F1" : "#131C30"}
                      stroke={currentStage >= 2 ? "#A5B4FC" : "#334155"}
                      strokeWidth="2"
                    />
                    <text x="380" y="214" fill={currentStage >= 2 ? "#A5B4FC" : "#64748B"} fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle">
                      HEAD_03 [0.18]
                    </text>

                    {/* Stage 3 Node */}
                    <rect
                      x="625"
                      y="105"
                      width="32"
                      height="32"
                      fill={currentStage >= 3 ? "#0284C7" : "#0F1A30"}
                      stroke={currentStage >= 3 ? "#00F0FF" : "#38BDF8"}
                      strokeWidth="2"
                      rx="4"
                    />
                    <text x="641" y="154" fill="#00F0FF" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold" textAnchor="middle">
                      MCP_TOOL_ROUTER
                    </text>

                    {/* Stage 4 Node */}
                    <circle
                      cx="900"
                      cy="120"
                      r="9"
                      fill={currentStage === 4 ? "#10B981" : "#0D201A"}
                      stroke={currentStage === 4 ? "#FFFFFF" : "#10B981"}
                      strokeWidth="2.5"
                    />
                    <text x="900" y="148" fill="#10B981" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold" textAnchor="middle">
                      SYNTHESIZED_FRAME
                    </text>

                    {/* Scroll-Driven Dynamic Data Flow Packet Indicator */}
                    <circle
                      cx={120 + scrollProgress * 780}
                      cy="120"
                      r="6"
                      fill="#00F0FF"
                    />
                    <circle
                      cx={120 + scrollProgress * 780}
                      cy="120"
                      r="10"
                      fill="none"
                      stroke="#00F0FF"
                      strokeWidth="1.5"
                      className="opacity-75"
                    />
                  </svg>
                </div>

              {/* Dynamic Stage Telemetry Readout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                <div className="border border-sky-500/30 p-4 bg-[#0A1020] rounded">
                  <span className="text-sky-400 text-[11px] font-bold block mb-1">TRANSFORMATION PHASE</span>
                  <p className="text-white font-bold text-headline-sm font-headline-sm">{stageData.title}</p>
                  <p className="text-slate-300 text-[12px] mt-1.5 leading-relaxed">{stageData.desc}</p>
                </div>

                <div className="border border-indigo-500/30 p-4 bg-[#0A1020] rounded">
                  <span className="text-indigo-400 text-[11px] font-bold block mb-1">INSPECTOR VECTOR DENSITY</span>
                  <div className="space-y-1.5 text-[12px] font-mono mt-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">d_model:</span>
                      <span className="text-white font-bold">{stageData.dModel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">sparsity_ratio:</span>
                      <span className="text-emerald-400 font-bold">{stageData.sparsity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">quantization:</span>
                      <span className="text-cyan-300 font-bold">{stageData.quant}</span>
                    </div>
                  </div>
                </div>

                <div className="border border-emerald-500/30 p-4 bg-[#0A1020] rounded flex flex-col justify-between">
                  <div>
                    <span className="text-emerald-400 text-[11px] font-bold block mb-1">LAYER LATENCY</span>
                    <span className="text-2xl font-bold text-white font-mono">
                      {stageData.latency}
                    </span>
                  </div>
                  <div className="w-full bg-[#111A30] h-2 rounded-full overflow-hidden mt-3">
                    <div
                      className="bg-gradient-to-r from-sky-400 to-emerald-400 h-2 rounded-full transition-all duration-300 shadow-[0_0_8px_#38bdf8]"
                      style={{ width: stageData.barWidth }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>

        {/* 3. AI ENGINEERING SYSTEM MATRIX */}
        <section className="border-b border-sky-950/60 bg-[#05070E]" id="ai-eng">
          <div className="px-6 md:px-12 py-4 bg-[#080E1E] border-b border-sky-900/40 flex items-center justify-between">
            <span className="font-mono text-xs text-sky-400 font-bold">03 ARCHITECTURAL CAPABILITIES</span>
            <span className="font-mono text-xs text-slate-400 font-semibold">4-TIER SUBSYSTEMS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-sky-900/40">
            {/* Module 01: Cyan Neural */}
            <div className="p-6 bg-gradient-to-b from-[#091124] to-[#060A14] hover:from-[#0E1B38] transition-all relative group border-t-2 border-t-sky-400">
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="text-sky-400 font-bold">MODULE 01</span>
                <span className="w-2.5 h-2.5 bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8] inline-block"></span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-6 group-hover:text-sky-300 transition-colors">
                Model Fine-Tuning &amp; Quantization
              </h3>
              <div className="border-t border-sky-900/50 pt-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">METHOD:</span>
                  <span className="text-white font-semibold">QLoRA / AWQ 4-Bit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">EFFICIENCY GAIN:</span>
                  <span className="text-emerald-400 font-bold">4.2x FLOPS Reduction</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">MEMORY ENVELOPE:</span>
                  <span className="text-sky-400 font-bold">8GB VRAM Bound</span>
                </div>
              </div>
            </div>

            {/* Module 02: Indigo Swarms */}
            <div className="p-6 bg-gradient-to-b from-[#0D102A] to-[#060A14] hover:from-[#151940] transition-all relative group border-t-2 border-t-indigo-400">
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="text-indigo-400 font-bold">MODULE 02</span>
                <span className="w-2.5 h-2.5 bg-indigo-400 rounded-full shadow-[0_0_8px_#818cf8] inline-block"></span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-6 group-hover:text-indigo-300 transition-colors">
                Agentic Swarms &amp; State Machines
              </h3>
              <div className="border-t border-indigo-900/50 pt-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">TOPOLOGY:</span>
                  <span className="text-white font-semibold">Directed Acyclic Graph</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">CONSENSUS:</span>
                  <span className="text-emerald-400 font-bold">Raft-Augmented CoT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">CONCURRENCY:</span>
                  <span className="text-indigo-300 font-bold">128 Autonomous Threads</span>
                </div>
              </div>
            </div>

            {/* Module 03: Emerald Vector Graphs */}
            <div className="p-6 bg-gradient-to-b from-[#08151A] to-[#060A14] hover:from-[#0E222A] transition-all relative group border-t-2 border-t-emerald-400">
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="text-emerald-400 font-bold">MODULE 03</span>
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399] inline-block"></span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-6 group-hover:text-emerald-300 transition-colors">
                Context-Engineered Vector Graphs
              </h3>
              <div className="border-t border-emerald-900/50 pt-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">INDEX DENSITY:</span>
                  <span className="text-white font-semibold">50M Entities</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">RECALL RATE:</span>
                  <span className="text-emerald-400 font-bold">99.1% NDCG@10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">SEARCH LATENCY:</span>
                  <span className="text-cyan-300 font-bold">&lt; 3.2ms</span>
                </div>
              </div>
            </div>

            {/* Module 04: Amber Fallback Cascades */}
            <div className="p-6 bg-gradient-to-b from-[#18120B] to-[#060A14] hover:from-[#241A0F] transition-all relative group border-t-2 border-t-amber-400">
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="text-amber-400 font-bold">MODULE 04</span>
                <span className="w-2.5 h-2.5 bg-amber-400 rounded-full shadow-[0_0_8px_#fbbf24] inline-block"></span>
              </div>
              <h3 className="text-lg font-bold text-white uppercase mb-6 group-hover:text-amber-300 transition-colors">
                Production Fallback Cascades
              </h3>
              <div className="border-t border-amber-900/50 pt-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">HEALTH PROBE:</span>
                  <span className="text-white font-semibold">100ms Active Pulse</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">SWITCH DURATION:</span>
                  <span className="text-emerald-400 font-bold">0.04ms (Non-blocking)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">SLA GUARANTEE:</span>
                  <span className="text-amber-300 font-bold">99.999% Execution</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. INTERACTIVE AI CODING CRUCIBLE */}
        <section className="border-b border-sky-950/60 bg-gradient-to-b from-[#070D1F] to-[#05070E]">
          <div className="px-6 md:px-12 py-4 bg-[#080E1E] border-b border-sky-900/40 flex items-center justify-between">
            <span className="font-mono text-xs text-sky-400 font-bold">04 THE CODING CRUCIBLE</span>
            <span className="font-mono text-xs text-slate-400 font-semibold">PIPELINE: INTENT → AST → SERVICE → PRODUCT</span>
          </div>

          <div className="p-6 md:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-headline-lg font-headline-lg uppercase text-white tracking-tight font-bold">
                Deterministic Synthesis Engine
              </h2>
            </div>

            {/* Step Morphing Sequence Component */}
            <div className="grid grid-cols-1 lg:grid-cols-12 border border-sky-500/30 bg-[#080D1A] rounded shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Stage Selector Side-Dock */}
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-sky-900/40 p-4 space-y-2.5 bg-[#060A14]">
                {[
                  { step: 1, title: "PHASE 01: INTENT DECONSTRUCTION", label: "Natural Intent Tokenization" },
                  { step: 2, title: "PHASE 02: AST VALIDATION", label: "Formal Syntax Compiler" },
                  { step: 3, title: "PHASE 03: SERVICE COMPILATION", label: "WASM / Rust Micro-Kernels" },
                  { step: 4, title: "PHASE 04: LIVE EXECUTION", label: "Reactive Edge UI Mesh" },
                ].map((item) => (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setCurrentCrucible(item.step)}
                    className={`w-full text-left p-3.5 transition-all rounded border cursor-pointer ${
                      currentCrucible === item.step
                        ? "border-sky-400 bg-gradient-to-r from-sky-950/80 to-indigo-950/60 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                        : "border-slate-800/80 bg-[#090D18] hover:border-slate-700"
                    }`}
                  >
                    <span
                      className={`text-xs font-mono font-bold block ${
                        currentCrucible === item.step ? "text-sky-300" : "text-slate-400"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`text-xs font-semibold block mt-1 ${
                        currentCrucible === item.step ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Code Inspector Display */}
              <div className="lg:col-span-8 p-6 bg-[#04060E] flex flex-col justify-between font-mono text-xs min-h-[380px]">
                <div>
                  <div className="flex items-center justify-between border-b border-sky-900/40 pb-3 mb-4 text-xs">
                    <span className="text-sky-300 font-bold">{crucibleData.filename}</span>
                    <span className="text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      PARSED STATE: VALIDATED
                    </span>
                  </div>
                  <pre className="text-slate-200 text-xs leading-relaxed overflow-x-auto selection:bg-sky-500 selection:text-white font-mono bg-[#080D1A] p-4 rounded border border-sky-950/60 shadow-inner">
                    <code>{crucibleData.code}</code>
                  </pre>
                </div>

                <div className="mt-6 pt-4 border-t border-sky-900/40 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_6px_#34d399] inline-block"></span>
                    <span className="text-slate-300">SYNTACTIC PARSER: <span className="text-white font-bold">TREE-SITTER VERIFIED</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. AUTONOMOUS AI WORKFLOWS */}
        <section className="border-b border-sky-950/60 bg-[#05070E]">
          <div className="px-6 md:px-12 py-4 bg-[#080E1E] border-b border-sky-900/40 flex items-center justify-between">
            <span className="font-mono text-xs text-sky-400 font-bold">05 AUTONOMOUS WORKFLOW MATRIX</span>
            <span className="font-mono text-xs text-white font-semibold">SWARM DISPATCH TELEMETRY</span>
          </div>

          <div className="p-6 md:px-12 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
              {/* Trigger Column */}
              <div className="border border-sky-500/30 bg-gradient-to-b from-[#091122] to-[#060A14] p-5 rounded shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-3">
                  <span>STEP 01: EVENT</span>
                  <span className="text-sky-400 font-bold">INGEST</span>
                </div>
                <h4 className="text-base font-bold text-white uppercase mb-4">Continuous Trigger</h4>
                <div className="p-2.5 bg-[#060914] border border-sky-900/40 rounded font-mono text-[11px] text-sky-300 font-semibold">
                  EVENT: #9942 SUBSCRIPTION CHURN
                </div>
              </div>

              {/* Intelligence Column */}
              <div className="border border-indigo-500/30 bg-gradient-to-b from-[#0E1029] to-[#060A14] p-5 rounded shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-3">
                  <span>STEP 02: REASON</span>
                  <span className="text-indigo-400 font-bold">EVALUATE</span>
                </div>
                <h4 className="text-base font-bold text-white uppercase mb-4">Contextual Scoring</h4>
                <div className="p-2.5 bg-[#060914] border border-indigo-900/40 rounded font-mono text-[11px] text-emerald-400 font-bold">
                  CONFIDENCE LEVEL: 99.4%
                </div>
              </div>

              {/* Decision Column */}
              <div className="border border-purple-500/30 bg-gradient-to-b from-[#140E26] to-[#060A14] p-5 rounded shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-3">
                  <span>STEP 03: RESOLVE</span>
                  <span className="text-purple-400 font-bold">SYNTHESIS</span>
                </div>
                <h4 className="text-base font-bold text-white uppercase mb-4">Self-Correcting Loop</h4>
                <div className="p-2.5 bg-[#060914] border border-purple-900/40 rounded font-mono text-[11px] text-cyan-300 font-bold">
                  DRIFT TOLERANCE: 0.002
                </div>
              </div>

              {/* Action Column */}
              <div className="border border-emerald-500/30 bg-gradient-to-b from-[#081613] to-[#060A14] p-5 rounded shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-3">
                  <span>STEP 04: DISPATCH</span>
                  <span className="text-emerald-400 font-bold">COMMIT</span>
                </div>
                <h4 className="text-base font-bold text-white uppercase mb-4">External API Dispatch</h4>
                <div className="p-2.5 bg-[#060914] border border-emerald-900/40 rounded font-mono text-[11px] text-emerald-400 font-bold">
                  STATUS: 200 OK (DISPATCHED)
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
