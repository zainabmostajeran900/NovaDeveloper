export default function LoadingSpinner({ size = "md", color = "accent", fullScreen = false }) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const colorClasses = {
    accent: "border-accent",
    white: "border-white",
    gray: "border-gray-400",
  };

  const spinner = (
    <div className={`relative ${sizeClasses[size]}`}>
      <div className={`absolute inset-0 border-4 border-${color}/20 rounded-full`}></div>
      <div className={`absolute inset-0 border-4 ${colorClasses[color]} rounded-full border-t-transparent animate-spin`}></div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="flex flex-col items-center gap-4">
          {spinner}
          <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }

  return spinner;
}