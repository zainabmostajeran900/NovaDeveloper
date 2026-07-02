export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-accent/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-accent rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
      </div>
    </div>
  );
}