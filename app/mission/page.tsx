import type { Metadata } from "next";
import { OurMissionView } from "@/components/our-mission-view";

export const metadata: Metadata = {
  title: "Our Mission // Turning Possibility Into Reality — Streamli",
  description:
    "We convert theoretical breakthroughs into resilient, mission-critical infrastructure. Grounded in architectural rigor and execution certainty.",
};

export default function MissionPage() {
  return <OurMissionView />;
}
