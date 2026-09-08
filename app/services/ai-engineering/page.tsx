import type { Metadata } from "next";
import { AiEngineeringView } from "@/components/ai-engineering-view";

export const metadata: Metadata = {
  title: "AI Engineering // Continuous Reasoning Platform — Streamli",
  description:
    "We architect autonomous inference systems, dynamic model orchestrations, and mission-critical agentic products.",
};

export default function AiEngineeringPage() {
  return <AiEngineeringView />;
}
