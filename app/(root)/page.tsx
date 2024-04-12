"use client";
import CallToAction from "@/components/shared/CallToAction";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/shared/Hero";
import HowItWorks from "@/components/shared/HowItWorks";
import WhatIsDreamweaver from "@/components/shared/WhatIsDreamweaver";
import { TracingBeam } from "@/components/ui/tracing-beam";

const TextGeneration = () => {
  return (
    <div className="flex flex-col h-full">
      <Hero />
      <TracingBeam>
        <WhatIsDreamweaver />
        <HowItWorks />
        <CallToAction />
      </TracingBeam>
      <Footer />
    </div>
  );
};

export default TextGeneration;
