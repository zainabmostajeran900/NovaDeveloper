"use client"
import PageBanner from "@/components/PageBanner";
import AnimatedSection from "@/components/AnimatedSection";
import { resumeSummary, education, skillCategories, experience } from "@/data/resume";

function TimelineItem({ children }) {
  return (
    <div className="relative mt-6 border-l border-white/10 pl-6">
      <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
      {children}
    </div>
  );
}

export default function ResumePage() {
  return (
    <div>
      <PageBanner title="Resume" />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2">

          {/* ستون چپ */}
          <div>
            <AnimatedSection delay={0}>
              <h2 className="font-heading text-2xl font-bold">Summary</h2>
              <TimelineItem>
                <p className="font-semibold uppercase tracking-wide">{resumeSummary.name}</p>
                <p className="mt-2 italic text-gray-400">{resumeSummary.bio}</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-400">
                  <li>{resumeSummary.location}</li>
                  <li>{resumeSummary.phone}</li>
                  <li>{resumeSummary.email}</li>
                </ul>
              </TimelineItem>
            </AnimatedSection>

            <AnimatedSection delay={100} className="mt-14">
              <h2 className="font-heading text-2xl font-bold">Education</h2>
              {education.map((e) => (
                <TimelineItem key={e.degree}>
                  <p className="font-semibold uppercase tracking-wide">{e.degree}</p>
                  <p className="mt-1 text-sm text-accent">{e.period}</p>
                  <p className="mt-1 italic text-gray-400">{e.school}</p>
                  <p className="mt-2 text-sm text-gray-400">{e.description}</p>
                </TimelineItem>
              ))}
            </AnimatedSection>

            <AnimatedSection delay={200} className="mt-14">
              <h2 className="font-heading text-2xl font-bold">Skills</h2>
              {skillCategories.map((c) => (
                <TimelineItem key={c.title}>
                  <p className="font-semibold">{c.title}</p>
                  <p className="mt-1 text-sm text-gray-400">{c.items}</p>
                </TimelineItem>
              ))}
            </AnimatedSection>
          </div>

          {/* ستون راست */}
          <div>
            <AnimatedSection delay={150}>
              <h2 className="font-heading text-2xl font-bold">Professional Experience</h2>
              {experience.map((job) => (
                <TimelineItem key={job.role + job.company}>
                  <p className="font-heading text-xl font-bold">{job.role}</p>
                  <p className="text-sm font-semibold text-gray-400">{job.company}</p>
                  <p className="mt-1 text-sm text-accent">{job.period}</p>
                  <p className="italic text-gray-400">{job.location}</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-400">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </AnimatedSection>
          </div>

        </div>
      </section>
    </div>
  );
}
