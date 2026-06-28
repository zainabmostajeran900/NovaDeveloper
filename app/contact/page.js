"use client"
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail } from "lucide-react";
import { XIcon, GithubIcon, InstagramIcon, LinkedinIcon, FacebookIcon } from "@/components/icons";
import { site } from "@/data/site";

function ContactCard({ icon: Icon, title, value, isAccent }) {
  return (
    <div className="flex items-center gap-5">
      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/20">
        <Icon className="h-6 w-6 text-bg" />
      </span>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className={`mt-0.5 text-sm ${isAccent ? "text-accent" : "text-gray-400"}`}>{value}</p>
      </div>
    </div>
  );
}

const socialLinks = [
  { href: site.social.twitter,   Icon: XIcon,          label: "X" },
  { href: site.social.github,    Icon: GithubIcon,     label: "GitHub" },
  { href: site.social.instagram, Icon: InstagramIcon,  label: "Instagram" },
  { href: site.social.linkedin,  Icon: LinkedinIcon,   label: "LinkedIn" },
];

function SocialRow() {
  return (
    <div className="flex items-center gap-5">
      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/20">
        <svg className="h-6 w-6 text-bg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 0 0 18 8a3 3 0 1 0-3-3c0 .24.04.47.09.7L8.04 9.81A2.99 2.99 0 0 0 6 9a3 3 0 0 0 0 6c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65a3 3 0 1 0 3-3Z"/>
        </svg>
      </span>
      <div className="flex items-center gap-3">
        {socialLinks.map(({ href, Icon, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-colors hover:border-accent hover:text-accent"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div>
      <PageBanner title="Contact" />

      <section className="mx-auto max-w-5xl px-6 py-20">

        {/* اطلاعات تماس */}
        <AnimatedSection delay={0} className="mb-14 grid gap-10 sm:grid-cols-2">
          <ContactCard icon={MapPin} title="Address"  value={site.address} />
          <ContactCard icon={Phone}  title="Call Me"  value={site.phone} isAccent />
          <ContactCard icon={Mail}   title="Email Me" value={site.email} isAccent />
          <SocialRow />
        </AnimatedSection>

        {/* فرم */}
        <AnimatedSection delay={150}>
          <ContactForm />
        </AnimatedSection>

      </section>
    </div>
  );
}
