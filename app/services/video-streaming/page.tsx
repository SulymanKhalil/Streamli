import type { Metadata } from "next";
import { VideoStreamingView } from "@/components/video-streaming-view";

export const metadata: Metadata = {
  title: "Video Streaming // High-Throughput Real-Time Architecture — Streamli",
  description:
    "Deterministic low-latency pipelines engineered for mission-critical video distribution. Uncompressed ingest, hardware-accelerated discrete cosine transforms, and edge routing built on custom WebRTC mesh protocols.",
};

export default function VideoStreamingPage() {
  return <VideoStreamingView />;
}
