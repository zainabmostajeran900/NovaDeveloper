import { XIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";
import { site } from "@/data/site";

export default function SocialLinks({ variant = "dark", includeFacebook = false }) {
  const items = [
    { href: site.social.youtube, Icon: XIcon, label: "X" },
    { href: site.social.github, Icon: GithubIcon, label: "GitHub" },
    { href: site.social.instagram, Icon: InstagramIcon, label: "Instagram" },
    { href: site.social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
  ];

  const list = includeFacebook
    ? [...items]
    : items;

  const base = "flex h-9 w-9 items-center justify-center rounded-full transition-colors";
  const styles =
    variant === "dark"
      ? `${base} bg-white/5 text-white hover:bg-accent hover:text-bg`
      : `${base} bg-accent text-bg hover:bg-accent-dark`;

  return (
    <div className="flex items-center gap-3">
      {list.map(({ href, Icon, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={styles}>
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
