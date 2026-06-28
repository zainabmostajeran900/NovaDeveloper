import Link from "next/link";

export default function PageBanner({ title }) {
  return (
    <div>
      <div className="py-20 text-center">
        <h1 className="font-heading text-4xl font-bold sm:text-5xl">{title}</h1>
      </div>
      <div className="border-y border-white/5 bg-bg-soft">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm">
          <Link href="/" className="text-accent hover:underline">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-300">{title}</span>
        </div>
      </div>
    </div>
  );
}
