"use client"
import PageBanner from "@/components/PageBanner";
import SkillBar from "@/components/SkillBar";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import AnimatedSection from "@/components/AnimatedSection";
import { profile } from "@/data/profile";
import { skillsLeft, skillsRight } from "@/data/skills";
import { interests } from "@/data/interests";
import { testimonials } from "@/data/testimonials";

function Eyebrow({ label }) {
  return (
    <div className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-gray-400">
      {label}
      <span className="h-px w-16 bg-accent" />
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <p className="text-sm text-gray-300">
      <span className="mr-1 text-accent text-2xl">›</span>
      <span className="font-semibold text-white">{label}: </span>
      {value}
    </p>
  );
}

export default function AboutPage() {
  return (
    <div>
      <PageBanner title="About" />

      {/* Profile */}
      <AnimatedSection className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[320px_1fr]">
          <img src={profile.photoAbout} alt={profile.name} className="h-full w-full rounded-lg object-cover" />
          <div>
            <h2 className="font-heading text-2xl font-bold">{profile.title}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <InfoRow label="Birthday" value={profile.birthday} />
              <InfoRow label="Age"      value={profile.age} />
              <InfoRow label="Website"  value={profile.website} />
              <InfoRow label="Degree"   value={profile.degree} />
              <InfoRow label="Phone"    value={profile.phone} />
              <InfoRow label="Email"    value={profile.email} />
              <InfoRow label="City"     value={profile.city} />
              <InfoRow label="Freelance" value={profile.freelance} />
            </div>
            <p className="mt-8 leading-relaxed text-gray-400">{profile.bio}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection className="mx-auto max-w-7xl px-6 py-10" delay={0}>
        <Eyebrow label="Skills" />
        <h2 className="mb-10 font-heading text-3xl font-bold">My Skills</h2>
        <div className="grid gap-x-12 sm:grid-cols-2">
          <div>
            {skillsLeft.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
          <div>
            {skillsRight.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Features */}
      <AnimatedSection className="mx-auto max-w-7xl px-6 py-10" delay={0}>
        <Eyebrow label="Features" />
        <h2 className="mb-10 font-heading text-3xl font-bold">I&apos;m Interested In</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map(({ icon: Icon, label, bg, iconColor }) => (
            <div
              key={label}
              className="group flex items-center gap-4 rounded-lg border border-white/5 bg-[#1a1a1a] px-5 py-5 transition-all duration-200 hover:bg-accent hover:border-accent cursor-pointer"
            >
              <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md ${bg} group-hover:bg-white/20 transition-colors duration-200`}>
                <Icon className={`h-5 w-5 ${iconColor} group-hover:text-white transition-colors duration-200`} />
              </span>
              <span className="text-sm font-medium text-white group-hover:text-[#0a0a0a] transition-colors duration-200">
                {label}
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection className="mx-auto max-w-7xl px-6 py-10 pb-24" delay={0}>
        <Eyebrow label="Testimonials" />
        <h2 className="mb-10 font-heading text-3xl font-bold">Check My Testimonials</h2>
        <TestimonialsCarousel items={testimonials} />
      </AnimatedSection>
    </div>
  );
}
