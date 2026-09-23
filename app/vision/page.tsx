import type { Metadata } from "next";
import { OurVisionView } from "@/components/our-vision-view";

export const metadata: Metadata = {
  title: "Our Vision // A Glimpse of Tomorrow — Streamli",
  description:
    "Perceiving horizon-scale systems engineered beyond present constraints. Transcending legacy computing paradigms through crystalline architectural precision.",
};

export default function VisionPage() {
  return <OurVisionView />;
}
