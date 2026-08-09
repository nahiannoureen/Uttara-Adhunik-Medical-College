"use client";
import { useState } from "react";

const GREEN = "#018837";

const FACILITIES = [
  "Intensive Care Unit (ICU)",
  "Critical Care Unit or Coronary Care Unit (CCU)",
  "Neonatal Intensive Care Unit (NICU)",
];

export default function FacilitySection() {
  const [selectedFacility, setSelectedFacility] = useState(
    "Intensive Care Unit (ICU)",
  );

  const facilityDetails = {
    "Intensive Care Unit (ICU)": {
      title: "Intensive Care Unit (ICU)",
      description:
        "Equipped with ventilators and advanced life support. A 20-bed unit on the 10th floor equipped with 17 ventilators, providing continuous care and life support for critically ill adult patients.",
    },
    "Critical Care Unit or Coronary Care Unit (CCU)": {
      title: "Critical Care Unit or Coronary Care Unit (CCU)",
      description:
        "Provides specialized monitoring and treatment for patients requiring intensive cardiac and critical care.",
    },
    "Neonatal Intensive Care Unit (NICU)": {
      title: "Neonatal Intensive Care Unit (NICU)",
      description:
        "Provides specialized intensive care and continuous monitoring for newborns requiring advanced medical support.",
    },
  };

  const activeFacility = facilityDetails[selectedFacility];

  return (
    <section className="w-full bg-white px-6 md:px-20 py-16 md:py-20">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-5">
        {/* =========================
            Section Heading
        ========================== */}
        <div className="w-full max-w-[664px] flex flex-col items-center">
          <h2
            className="w-full text-[36px] md:text-[50px] leading-[45px] md:leading-[60px] font-bold text-center tracking-[0.01em]"
            style={{
              fontFamily: "'Bitter', serif",
              color: GREEN,
            }}
          >
            UAMCH Facilities &amp; Services
          </h2>

          <div className="w-full max-w-[481px] px-[10px] py-[10px] flex items-center justify-center">
            <p
              className="w-full text-[14px] md:text-[15px] leading-[30px] font-normal text-center md:text-justify tracking-[0.01em] text-black"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Patients requiring intensive care receive specialized attention in
            </p>
          </div>
        </div>

        {/* =========================
            Facility Content
        ========================== */}
        <div className="w-full max-w-[1316px] flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-[75px] mt-5">
          {/* Facility List */}
          <div className="w-full lg:w-[433px] flex flex-col items-start py-5 gap-[10px]">
            {FACILITIES.map((facility, index) => {
              const isActive = selectedFacility === facility;

              return (
                <button
                  key={facility}
                  type="button"
                  onClick={() => setSelectedFacility(facility)}
                  className={`w-full min-h-[50px] flex items-center text-left transition-all duration-200 ${
                    index === 0 ? "h-[60px]" : "h-[50px]"
                  }`}
                  style={{
                    padding: index === 0 ? "15px 20px" : "10px",
                    background: isActive
                      ? "linear-gradient(270deg, #FFFFFF 0%, #018837 100%)"
                      : "transparent",
                  }}
                >
                  <span
                    className="text-[16px] md:text-[18px] leading-[30px] font-bold tracking-[0.01em]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: isActive ? "#FFFFFF" : "#444444",
                    }}
                  >
                    {facility}
                  </span>
                </button>
              );
            })}
          </div>

          {/* =========================
              Facility Card
          ========================== */}
          <div className="w-full lg:w-[808px] min-h-[365px] flex flex-col md:flex-row items-stretch overflow-hidden bg-white rounded-[10px] border border-black/20 shadow-[2px_2px_10px_rgba(0,0,0,0.25)]">
            {/* Image */}
            <div className="w-full md:w-[306px] h-[250px] md:h-[365px] shrink-0">
              <img
                src="/assets/team-young-specialist-doctors-standing-corridor-hospital.jpg"
                alt="Hospital medical team"
                className="w-full h-full object-cover md:rounded-l-[10px]"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-h-[365px] flex flex-col justify-center items-start gap-[5px] px-6 md:px-0 md:pr-[50px] py-8 md:py-0">
              {/* Title */}
              <div className="w-full flex items-center py-[10px]">
                <h3
                  className="text-[18px] leading-[30px] font-bold text-[#444444]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {activeFacility.title}
                </h3>
              </div>

              {/* Description */}
              <div className="w-full min-h-[140px] flex items-center py-[10px]">
                <p
                  className="w-full text-[14px] md:text-[15px] leading-[30px] font-normal text-black text-justify tracking-[0.01em]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {activeFacility.description}
                </p>
              </div>

              {/* Read More */}
              <button
                type="button"
                className="w-[162px] h-[39px] flex items-center justify-center gap-[10px] px-[21px] py-[10px] text-white transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: GREEN,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <span className="text-[11px] leading-[18px] font-medium">
                  Read More
                </span>

                {/* Arrow */}
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L8 9L1 17"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
