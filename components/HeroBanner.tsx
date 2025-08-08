export default function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-br from-pink-200 via-white to-blue-200">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#ff7ab6,transparent_40%),radial-gradient(circle_at_80%_30%,#8fd3ff,transparent_40%),radial-gradient(circle_at_50%_80%,#b8ffcb,transparent_40%)]" />
      <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold tracking-tight">Underground Idols</h1>
      <p className="relative z-10 mt-3 text-sm md:text-base text-black/70">聚合票务与场地日历，支持中文辅助信息。</p>
    </div>
  );
}
