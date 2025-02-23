"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";

type Interval = "month" | "year";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price / 100).toFixed(decimals);
};
const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for single-family homes and small properties",
    monthlyPrice: 29900,
    yearlyPrice: 299000,
    features: [
      "Professional photography (up to 25 photos)",
      "Basic photo editing",
      "24-hour turnaround",
      "Digital delivery",
      "Limited revisions"
    ],
    isMostPopular: false,
  },
  {
    id: "professional",
    name: "Premium",
    description: "Ideal for luxury homes and medium-sized properties",
    monthlyPrice: 49900,
    yearlyPrice: 499000,
    features: [
      "Everything in Basic, plus:",
      "Up to 40 professional photos",
      "Drone aerial photography",
      "Virtual tour",
      "Advanced photo editing",
      "Social media optimized images",
      "Unlimited revisions"
    ],
    isMostPopular: true,
    cta: "Go Professional"
  },
  {
    id: "premium",
    name: "Premium",
    description: "Best for luxury estates and commercial properties",
    monthlyPrice: 79900,
    yearlyPrice: 799000,
    features: [
      "Everything in Professional, plus:",
      "Unlimited professional photos",
      "4K video tour",
      "3D virtual walkthrough",
      "Premium photo editing",
      "Marketing materials",
      "Dedicated support",
      "Rush delivery available"
    ],
    isMostPopular: false,
    cta: "Go Premium"
  },
];

export default function PricingSection() {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    setIsLoading(false);
  };

  return (
    <section id="pricing">
      <div className="container space-y-10 sm:space-y-16 py-12 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-muted-foreground">
            Choose the perfect plan for your property marketing needs
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <Switch
            id="interval"
            onCheckedChange={(checked) => {
              setInterval(checked ? "year" : "month");
            }}
          />
          <span>Annual</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
            2 MONTHS FREE ✨
          </span>
        </div>

        <div className="mx-auto grid w-full max-w-5xl gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex max-w-[400px] flex-col gap-8 rounded-2xl border p-4 text-black dark:text-white overflow-hidden",
                {
                  "border-2 border-[var(--color-one)] dark:border-[var(--color-one)] scale-105":
                    plan.isMostPopular,
                }
              )}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">
                    {plan.name}
                  </h2>
                  <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                    {plan.description}
                  </p>
                </div>
              </div>

              <motion.div
                key={`${plan.id}-${interval}`}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 12,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-row gap-1"
              >
                <span className="text-4xl font-bold text-black dark:text-white">
                  $
                  {interval === "year"
                    ? toHumanPrice(plan.yearlyPrice, 0)
                    : toHumanPrice(plan.monthlyPrice, 0)}
                  <span className="text-base">/project</span>
                </span>
              </motion.div>

              <Button
                className={cn(
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2",
                  plan.isMostPopular ? 
                    "bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] text-white dark:text-black" :
                    "text-white dark:text-black"
                )}
                disabled={isLoading}
                onClick={() => void onSubscribeClick(plan.id)}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                {(!isLoading || (isLoading && id !== plan.id)) && (
                  <p>{plan.cta || "Subscribe"}</p>
                )}

                {isLoading && id === plan.id && (
                  <div className="flex items-center gap-2">
                    <Loader className="h-4 w-4 animate-spin" />
                    <span>Processing...</span>
                  </div>
                )}
              </Button>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
              {plan.features && plan.features.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {plan.features.map((feature: any, idx: any) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                    >
                      <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
