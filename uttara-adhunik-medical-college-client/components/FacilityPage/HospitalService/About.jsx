"use client";

const GREEN = "#018837";

export default function About() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 md:px-10 lg:px-20 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 md:gap-14 lg:gap-[50px]">
        {/* =========================
            Header Section
        ========================== */}
        <div className="flex w-full flex-col items-center gap-6 md:gap-8">
          {/* Title + Icon */}
          <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            {/* Hospital Icon */}
            <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center md:h-[100px] md:w-[100px]">
              <svg
                viewBox="0 0 120 120"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 40H105"
                  stroke={GREEN}
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.3"
                />

                <path
                  d="M60 15V45"
                  stroke={GREEN}
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                <path
                  d="M45 30H75"
                  stroke={GREEN}
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                <path
                  d="M30 110V75H50V110"
                  stroke={GREEN}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M70 110V75H90V110"
                  stroke={GREEN}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Heading */}
            <div className="flex min-w-0 items-center justify-center">
              <h2
                className="text-center text-[32px] font-normal leading-[40px] tracking-[0.01em] text-black sm:text-[40px] sm:leading-[50px] md:text-[50px] md:leading-[60px]"
                style={{
                  fontFamily: "'Bitter', serif",
                }}
              >
                About the Hospital
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="w-full max-w-[683px] px-2.5">
            <p
              className="w-full text-[15px] font-bold leading-[22px] tracking-[0.01em] text-[#444444] sm:text-[16px] md:text-[18px] md:leading-[26px]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Uttara Adhunik Medical College Hospital (UAMCH) is the teaching
              and training hospital of the college. It is a 500-bedded,
              multidisciplinary tertiary care facility located in Uttara, Dhaka.
              The hospital serves patients from all over the country,
              particularly from Uttara, Tongi, Gazipur, and Savar.
            </p>
          </div>
        </div>

        {/* =========================
            Hospital Image
        ========================== */}
        <div className="w-full px-2.5">
          <div className="h-[250px] w-full overflow-hidden rounded-sm sm:h-[350px] md:h-[450px] lg:h-[532px]">
            <img
              src="/assets/2f49a432-a6a2-458a-9c3e-7b83a7bffcf2.jpg"
              alt="Uttara Adhunik Medical College Hospital"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* =========================
            Hospital Statistics
        ========================== */}
        <div className="mx-auto flex w-full max-w-[971px] flex-col items-center gap-8 md:gap-10">
          {/* Statistics Row */}
          <div className="flex w-full flex-col items-stretch justify-center gap-8 md:flex-row md:items-center md:gap-8 lg:gap-10">
            {/* Total Land Area */}
            <div className="flex w-full flex-1 flex-col items-center text-center md:min-h-[115px]">
              <div
                className="flex w-full items-center justify-center px-2 text-[28px] font-bold leading-[36px] tracking-[0.01em] sm:text-[34px] sm:leading-[42px] md:min-h-[60px] md:text-[40px] md:leading-[48px] lg:text-[45px] lg:leading-[54px]"
                style={{
                  fontFamily: "'Bitter', serif",
                  color: GREEN,
                }}
              >
                87,260.035 sq. ft.
              </div>

              <div
                className="mt-2 w-full text-[15px] font-bold leading-[22px] tracking-[0.01em] text-black sm:text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                (5 Bighas)
              </div>

              <div
                className="mt-1 w-full text-[15px] font-bold leading-[22px] tracking-[0.01em] text-black sm:text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Total Land Area
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-[70px] w-px shrink-0 bg-black md:block" />

            {/* Main Building */}
            <div className="flex w-full flex-1 flex-col items-center text-center md:min-h-[115px]">
              <div
                className="flex min-h-[60px] w-full items-center justify-center px-2 text-[34px] font-bold leading-[44px] tracking-[0.01em] sm:text-[40px] sm:leading-[48px] md:text-[45px] md:leading-[54px]"
                style={{
                  fontFamily: "'Bitter', serif",
                  color: GREEN,
                }}
              >
                17 Storied
              </div>

              <div
                className="mt-2 w-full text-[15px] font-bold leading-[22px] tracking-[0.01em] text-black sm:text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Main Building
              </div>
            </div>
          </div>

          {/* Additional Structures */}
          <div className="w-full px-2.5 text-center">
            <p
              className="mx-auto max-w-[900px] text-[15px] font-bold leading-[24px] tracking-[0.01em] text-[#444444] sm:text-[16px] md:text-[18px] md:leading-[26px]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Additional Structures: Separate buildings for Radiology,
              Orthopedics, ENT, Dental &amp; Emergency Departments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
