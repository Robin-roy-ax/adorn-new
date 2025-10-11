
import PricingCard from "./index";
import { pricingPlans } from "./data";

export default function PricingPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-12">Our Pricing Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {pricingPlans.map((plan, i) => (
          <PricingCard key={i} {...plan} />
        ))}
      </div>
    </section>
  );
}
