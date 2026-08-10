const GREEN = "#018837";
const YELLOW = "#FECD2F";

export default function Banner() {
  return (
    <div
      className="relative flex w-full items-end bg-cover bg-center px-6 py-16 md:px-20 md:py-20"
      style={{
        backgroundImage: `linear-gradient(
          rgba(255,255,255,0.4),
          rgba(255,255,255,0.4)
        ), url("/bg.png)`,
      }}
    >
      <div
        className="flex w-full flex-col items-center justify-between gap-8 rounded px-6 py-8 md:flex-row md:items-end md:px-12 md:py-10"
        style={{
          background: "rgba(1, 136, 55, 0.3)",
        }}
      >
        {/* Breadcrumb + Title */}
        <div className="flex flex-col gap-3">
          <div
            className="flex items-center gap-2 text-sm font-medium text-black"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span>HOME</span>
            <span>›</span>
            <span>FACILITIES</span>
            <span>››</span>
            <span className="text-[#018837]">Medical Education Unit</span>
          </div>

          <h1
            className="text-4xl font-light md:text-6xl"
            style={{
              fontFamily: "'Bitter', serif",
            }}
          >
            FACILITIES <span className="font-bold text-[#018837]">UAMC</span>
          </h1>
        </div>

        {/* College Logo */}
        <div className="flex shrink-0 items-center justify-center">
          <img
            src="/logo2.png"
            alt="Uttara Adhunik Medical College"
            className="h-[90px] w-[90px] object-contain md:h-[120px] md:w-[120px]"
          />
        </div>
      </div>
    </div>
  );
}
