import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustStrip from "@/components/trust-strip";
import Problems from "@/components/problems";
import ModulesGrid from "@/components/modules-grid";
import ProductShowcase from "@/components/product-showcase";
import ErpFlow from "@/components/erp-flow";
import WhyOptimSkool from "@/components/why-optimskool";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Problems />
      <ModulesGrid />
      <ProductShowcase />
      <ErpFlow />
      <WhyOptimSkool />
    </main>
  );
}