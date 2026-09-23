import type { Metadata } from "next";
import { CareersView } from "@/components/careers-view";

export const metadata: Metadata = {
  title: "Careers & Engineering // Build What's Next With Us — Streamli",
  description:
    "We architect future-defining compute substrates and planetary systems with enduring structural craft and uncompromising rigor.",
};

export default function CareersPage() {
  return <CareersView />;
}
