"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Calendar, Search, Upload } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Search className="h-5 w-5" />,
    title: "Search & Filter",
    description:
      "Find your perfect creator based on expertises, style, and budget.",
  },
  {
    number: "02",
    icon: <Camera className="h-5 w-5" />,
    title: "Review & Compare",
    description:
      "Browse profiles, portfolios and reviews to match with trusted local creators.",
  },
  {
    number: "03",
    icon: <Calendar className="h-5 w-5" />,
    title: "Book & Pay",
    description:
      "Schedule service through our secure milestone-based payment system.",
  },
  {
    number: "04",
    icon: <Upload className="h-5 w-5" />,
    title: "Get Content",
    description:
      "Receive professionally edited content that gets your properties noticed.",
  },
];

const StepLine = () => (
  <div className="absolute -right-4 top-[3.5rem] hidden h-[1px] w-[calc(100%+2rem)] bg-[#27272A] lg:block" />
);

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="container relative space-y-8 sm:space-y-12 py-8 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-[800px] space-y-3 text-center">
        <h2 className="bg-gradient-to-br from-foreground from-30% to-foreground/70 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl">
          How It Works
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground px-4 sm:px-0">
          Your journey to amazing content in four simple steps
        </p>
      </div>

      <div
        ref={ref}
        className="mx-auto grid max-w-6xl gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6"
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="group relative flex flex-col rounded-xl border border-[#27272A] bg-[#111111] p-6 transition-all duration-200 ease-out hover:-translate-y-2 hover:bg-[#161616] hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
          >
            {index < steps.length - 1 && <StepLine />}
            <div className="mb-4 text-base font-bold tracking-tight text-[#71717A]">
              {step.number.padStart(2, '0')}
            </div>
            <div className="mb-4 flex">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#27272A] bg-[#18181B] transition-colors duration-200 group-hover:bg-[#27272A]">
                <div className="h-5 w-5 text-white">
                  {step.icon}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#A1A1AA]">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}