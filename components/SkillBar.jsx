export default function SkillBar({ name, value }) {
  return (
    <div className="mb-7">
      <div className="mb-2 flex justify-between text-sm font-semibold uppercase tracking-wide">
        <span>{name}</span>
        <span className="text-gray-400">{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10">
        <div className="h-2 rounded-full bg-accent" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
