import { PricingSection } from "@/components/sections/pricing";

export default function PricingPage() {
  return (
    <main className="py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Pricing</h1>
      <p className="text-center mb-10 text-lg text-text-secondary">Choose the plan that fits your needs. Transparent pricing for every business size.</p>
      <PricingSection />
    </main>
  );
} 