import type { Metadata } from "next";
import { ProductDevelopmentView } from "@/components/product-development-view";

export const metadata: Metadata = {
  title: "Product Development // High-Performance Architectures — Streamli",
  description:
    "Engineered structures of logic, scale, and permanence. Architectonic logic applied to distributed compute.",
};

export default function ProductDevelopmentPage() {
  return <ProductDevelopmentView />;
}
