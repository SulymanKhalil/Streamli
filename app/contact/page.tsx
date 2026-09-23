import type { Metadata } from "next";
import { ContactView } from "@/components/contact-view";

export const metadata: Metadata = {
  title: "Contact // Let's Build Something Together — Streamli",
  description:
    "Direct engagement for complex technical systems. We partner with leadership and engineering teams to conceptualize, architect, and execute high-resilience software, production AI models, and real-time streaming infrastructure.",
};

export default function ContactPage() {
  return <ContactView />;
}
