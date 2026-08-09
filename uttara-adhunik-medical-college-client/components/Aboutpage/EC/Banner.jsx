const GREEN = "#018837";
const YELLOW = "#FECD2F";

export default function Banner() {
  return (
    <div
      className="relative w-full bg-cover bg-center flex items-end px-6 md:px-20 py-16 md:py-20"
      style={{
        backgroundImage: `linear-gradient(
          rgba(255,255,255,0.4),
          rgba(255,255,255,0.4)
        ), url("https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1600&h=500&fit=crop")`,
      }}
    >
      <div
        className="w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-8 px-6 md:px-12 py-8 md:py-10 rounded"
        style={{ background: "rgba(1, 136, 55, 0.3)" }}
      >
        <div>
          <div className="flex items-center gap-2 text-sm md:text-base font-medium text-black mb-2">
            <span>HOME</span>
            <span>&gt;</span>
            <span>ABOUT UAMC</span>
            <span>&gt;&gt;</span>
            <span className="font-semibold">EC MEMBERS</span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-light text-[#262626]"
            style={{ fontFamily: "'Bitter', serif" }}
          >
            About <span className="font-bold">UAMC</span>
          </h1>
        </div>

        <div className="shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full bg-white p-2 shadow-lg flex flex-col items-center justify-center text-center border-4 border-yellow-400">
          <div
            className="w-full h-full rounded-full flex flex-col items-center justify-center text-white text-[10px] md:text-xs font-semibold p-2"
            style={{ background: GREEN }}
          >
            <span className="uppercase tracking-wider">Uttara Adhunik</span>

            <span className="uppercase tracking-wider">Medical College</span>

            <span
              className="my-1 px-2 py-0.5 rounded text-black text-[9px] md:text-[10px] font-bold"
              style={{ background: YELLOW }}
            >
              ESTD · 2007
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
