export interface SubFeatures {
  [category: string]: {
    [feature: string]: boolean | string;
  };
}

export interface PricingPlan {
  title: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  credits: number;
  addOns: number;
  subFeatures: SubFeatures;
  buttonLabel: string;
  secondaryButton: string;
  highlight?: boolean;
  badge?: string;
}

interface ApiPlan {
  id: string;
  name: string;
  metadata: {
    features: string[];
    credits: number;
    target_audience: string;
    add_ons: number;
    "sub-features": SubFeatures;
  };
  price: {
    price: number;
    period_unit: string;
  };
}

export async function fetchPricingPlans(): Promise<PricingPlan[]> {
  try {
    const response = await fetch('https://app.picassofusion.com/backend/api/credit-payments/plans');
    const data: ApiPlan[] = await response.json();

    return data.map((plan, index) => ({
      title: plan.name,
      price: plan.price.price / 100,
      period: `/${plan.price.period_unit}`,
      description: plan.metadata.target_audience,
      features: plan.metadata.features,
      credits: plan.metadata.credits,
      addOns: plan.metadata.add_ons,
      subFeatures: plan.metadata["sub-features"] || {},
      buttonLabel: "Get Started",
      secondaryButton: "Book a call",
      highlight: index === 1,
    }));
  } catch (error) {
    console.error('Failed to fetch pricing plans:', error);
    return [];
  }
}

export const pricingPlans: PricingPlan[] = [];
