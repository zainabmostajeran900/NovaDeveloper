"use client"
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div>
      <PageBanner title="Services" />
      <section className="mx-auto max-w-7xl px-6 py-20">

        {/* ردیف اول — با delay 0 */}
        <AnimatedSection delay={0} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center px-10 py-14 border border-white/5 bg-[#1c1c1c] hover:bg-accent hover:border-accent cursor-pointer transition-all duration-200"
            >
              <span className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-accent group-hover:bg-white/20 transition-colors duration-200">
                <Icon className="h-8 w-8 text-[#0a0a0a] group-hover:text-white transition-colors duration-200" strokeWidth={1.8} />
              </span>
              <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#0a0a0a] transition-colors duration-200">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400 group-hover:text-[#0a0a0a]/80 transition-colors duration-200">
                {description}
              </p>
            </div>
          ))}
        </AnimatedSection>

        {/* ردیف دوم — با delay 200 */}
        <AnimatedSection delay={200} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.slice(3, 6).map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center px-10 py-14 border border-white/5 bg-[#1c1c1c] hover:bg-accent hover:border-accent cursor-pointer transition-all duration-200"
            >
              <span className="mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-accent group-hover:bg-white/20 transition-colors duration-200">
                <Icon className="h-8 w-8 text-[#0a0a0a] group-hover:text-white transition-colors duration-200" strokeWidth={1.8} />
              </span>
              <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#0a0a0a] transition-colors duration-200">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400 group-hover:text-[#0a0a0a]/80 transition-colors duration-200">
                {description}
              </p>
            </div>
          ))}
        </AnimatedSection>

      </section>
    </div>
  );
}