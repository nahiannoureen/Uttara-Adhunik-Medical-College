"use client";

const GREEN = "#018837";

const LEFT_SERVICES = [
  "24/7 Emergency Services",
  "Ambulance Services",
  "ICU (Intensive Care Unit) – 20 beds, 17 ventilators (10th floor)",
  "CCU (Coronary Care Unit) – 17 beds (3rd floor)",
];

const RIGHT_SERVICES = [
  "NICU (Neonatal Intensive Care Unit) – For critical neonatal cases",
  "Ambulance Services",
  "Haemodialysis Unit",
];

export default function Emergency() {
  const ServiceItem = ({ title }) => {
    return (
      <div
        className="w-full min-h-[76px] flex items-center justify-between gap-4 px-5 py-5"
        style={{
          background: "rgba(1, 136, 55, 0.1)",
        }}
      >
        <span
          className="text-[16px] md:text-[18px] leading-[30px] font-bold tracking-[0.01em] text-[#444444]"
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {title}
        </span>

        {/* Arrow Button */}
        <button
          type="button"
          aria-label={`View ${title}`}
          className="shrink-0 w-[36.4px] h-[36.4px] flex items-center justify-center bg-white rounded-[2px] transition-all duration-200 hover:bg-[#018837] group"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-200"
          >
            <path
              d="M5.2 12.48H19.76"
              stroke={GREEN}
              strokeWidth="2.08"
              strokeLinecap="round"
              className="group-hover:stroke-white"
            />

            <path
              d="M12.48 5.2L19.76 12.48L12.48 19.76"
              stroke={GREEN}
              strokeWidth="2.08"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <section className="w-full bg-white px-6 md:px-20 py-16 md:py-20">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start gap-[30px]">
        {/* =========================
            Section Heading
        ========================== */}
        <div className="w-full min-h-[80px] px-[10px] flex items-center">
          <h2
            className="text-[36px] md:text-[50px] leading-[45px] md:leading-[60px] font-medium tracking-[0.01em] text-black"
            style={{
              fontFamily: "'Bitter', serif",
            }}
          >
            Emergency &amp; Specialized Care
          </h2>
        </div>

        {/* =========================
            Services
        ========================== */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-[30px]">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-[10px]">
            {LEFT_SERVICES.map((service) => (
              <ServiceItem key={service} title={service} />
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-[10px]">
            {RIGHT_SERVICES.map((service) => (
              <ServiceItem key={service} title={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
