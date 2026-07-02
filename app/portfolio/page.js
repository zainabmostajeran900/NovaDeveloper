// "use client"
// import PageBanner from "@/components/PageBanner";
// import PortfolioGrid from "@/components/PortfolioGrid";
// import AnimatedSection from "@/components/AnimatedSection";
// import { portfolioProjects } from "@/data/portfolio";

// export default function PortfolioPage() {
//   return (
//     <div>
//       <PageBanner title="Portfolio" />
//       <AnimatedSection className="mx-auto max-w-7xl px-6 py-20">
//       <PortfolioGrid projects={portfolioProjects} />
//       </AnimatedSection>
//     </div>
//   );
// }
import PortfolioGrid from "@/components/PortfolioGrid";
import { portfolioProjects } from "@/data/portfolio";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Portfolio - NovaDev",
  description: "Check out my latest projects and work",
};

export default function PortfolioPage() {
  return (
    <section>
      <PageBanner title="Portfolio" />
      <div className="text-center mb-16"></div>
      <PortfolioGrid projects={portfolioProjects} />
    </section>
  );
}
