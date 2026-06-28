"use client"
import PageBanner from "@/components/PageBanner";
import PortfolioGrid from "@/components/PortfolioGrid";
import AnimatedSection from "@/components/AnimatedSection";

export default function PortfolioPage() {
  return (
    <div>
      <PageBanner title="Portfolio" />
      <AnimatedSection className="mx-auto max-w-7xl px-6 py-20">
        <PortfolioGrid />
      </AnimatedSection>
    </div>
  );
}