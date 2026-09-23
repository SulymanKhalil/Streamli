import type { Metadata } from "next";
import { OurPhilosophyView } from "@/components/our-philosophy-view";

export const metadata: Metadata = {
  title: "Our Philosophy // How We See the World — Streamli",
  description:
    "Orientation, perspective, and foundational principles. Deep structural deduction over surface iteration.",
};

export default function PhilosophyPage() {
  return <OurPhilosophyView />;
}
