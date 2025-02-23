"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Plane, Video, Share2, UserCheck, Clock, CreditCard, Shield } from "lucide-react";

const iconClasses = "h-5 w-5 absolute-center text-white";

const services = [
  {
    icon: <Camera className={iconClasses} />,
    title: "Professional Photography",
    description:
      "High-quality photography that showcases properties at their best.",
  },
  {
    icon: <Plane className={iconClasses} />,
    title: "Drone Aerial Coverage",
    description:
      "FAA-certified drone operators capturing stunning aerial views.",
  },
  {
    icon: <Video className={iconClasses} />,
    title: "Video Production",
    description:
      "Cinematic property tours and promotional videos for your listings.",
  },
  {
    icon: <Share2 className={iconClasses} />,
    title: "Social Media Content",
    description:
      "Engaging content optimized for all major social platforms.",
  },
  {
    icon: <UserCheck className={iconClasses} />,
    title: "Verified Creators",
    description:
      "Thoroughly vetted professionals you can trust.",
  },
  {
    icon: <Clock className={iconClasses} />,
    title: "24/7 Availability",
    description:
      "Flexible scheduling to meet your project deadlines.",
  },
  {
    icon: <CreditCard className={iconClasses} />,
    title: "Transparent Pricing",
    description:
      "Clear, upfront pricing with no hidden fees.",
  },
  {
    icon: <Shield className={iconClasses} />,
    title: "Quality Guaranteed",
    description:
      "100% satisfaction guarantee on all delivered content.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="container relative space-y-8 sm:space-y-12 py-8 sm:py-16">
      <div className="mx-auto max-w-[800px] space-y-3 text-center">
        <h2 className="bg-gradient-to-br from-foreground from-30% to-foreground/70 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-4xl">
          Professional Content Creation
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground px-4 sm:px-0">
          Everything you need to showcase your properties with stunning visuals
        </p>
      </div>

      <div
        ref={ref}
        className="mx-auto grid max-w-7xl gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="group relative flex flex-col rounded-xl border border-[#27272A] bg-[#111111] p-6 transition-all duration-200 ease-out hover:-translate-y-2 hover:bg-[#161616] hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] min-h-[200px]"
          >
            <div className="mb-4 flex">
              <div className="relative h-10 w-10 rounded-full border border-[#27272A] bg-[#18181B] transition-colors duration-200 group-hover:bg-[#27272A]">
                {service.icon}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#A1A1AA]">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}