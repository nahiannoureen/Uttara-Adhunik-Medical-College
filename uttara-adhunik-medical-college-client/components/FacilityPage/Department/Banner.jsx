const GREEN = "#018837";
const YELLOW = "#FECD2F";

export default function Banner() {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center flex items-end px-6 md:px-20 py-16 md:py-20"
      style={{
        backgroundImage: `url("/assets/Asset 1@4x 2.png")`,
      }}
    >
      <div
        className="w-full h-full md:h-[327px] flex flex-col md:flex-row items-center md:items-end justify-between gap-8 px-6 md:px-12 py-8 md:py-5"
        style={{
          background: "rgba(1, 136, 55, 0.3)",
        }}
      >
        {/* Left Content */}
        <div className="w-full flex flex-col justify-end items-start gap-3">
          {/* Breadcrumb */}
          <div
            className="text-sm md:text-xl font-medium text-black"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span>HOME</span>
            <span className="mx-2">&gt;</span>

            <span>FACILITIES</span>
            <span className="mx-2">&gt;&gt;</span>

            <span>DEPARTMENTS</span>
          </div>

          {/* Heading */}
          <div className="flex items-center py-2">
            <h1
              className="text-4xl md:text-6xl lg:text-[70px] font-light leading-none text-[#262626]"
              style={{
                fontFamily: "'Bitter', serif",
              }}
            >
              Departments
            </h1>
          </div>
        </div>

        {/* Right Image */}
        <div className="shrink-0 w-[160px] md:w-[200px] lg:w-[250px] h-[190px] md:h-[240px] lg:h-[287px] flex items-end justify-center">
          <img
            src="/assets/Adobe Express - file.png"
            alt="Departments"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
