import SocialLinks from "./SocialLinks";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-bg-soft">
      <div className="mx-auto max-w-7xl px-6 py-14 text-center">
        <h3 className="font-heading text-2xl font-bold">{site.name}</h3>

        <div className="mt-6 flex justify-center">
          <SocialLinks variant="light" includeFacebook />
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="font-semibold text-white">{site.name}.</span> All Rights
            Reserved
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Designed with <span className="text-red-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
