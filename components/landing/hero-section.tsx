"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const words = ["engages", "converts", "impresses", "stands out", "educates"];

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [scope, animate] = useAnimate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    animate(
      scope.current,
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.5, ease: "easeOut" }
    );
  }, [index, animate]);

  return (
    <section
      id="hero"
      className="container relative mt-[calc(var(--header-height)*2)] text-center"
    >
      <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
        <TextShimmer className="inline-flex items-center justify-center">
          <span>✨ Elevate Your Property Portfolio</span>{" "}
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
      </div>
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-4 sm:py-6 text-4xl sm:text-5xl font-medium leading-none tracking-tighter text-transparent text-balance md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Property Content that{" "}
        <motion.span
          ref={scope}
          className="bg-gradient-to-r from-[var(--color-one)] to-[var(--color-two)] bg-clip-text text-transparent"
        >
          {words[index]}
        </motion.span>
      </h1>
      <p className="mb-8 sm:mb-12 text-base sm:text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] px-4 sm:px-0">
        Connect with top-tier creators for photography, videography,
        <br className="hidden md:block" /> and marketing content that elevates your property portfolio.
      </p>
      <Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms]">
        <span>Join Waitlist</span>
        <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Button>
    </section>
  );
}