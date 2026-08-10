import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    text: "Secure & Comfortable: Hostel accommodations are available for female students with a limited number of seats.",
  },
  {
    text: "Secure & Comfortable: Hostel accommodations are available for female students with a limited number of seats.",
  },
  {
    text: "Essential Amenities: Basic facilities such as furnished rooms, electricity, water, and security are provided to ensure a safe and supportive environment for learning.",
  },
];

export default function Service() {
  return (
    <section className="w-full bg-white px-20 py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[30px]">
        {/* =========================================
            SECTION TITLE
        ========================================== */}
        <div className="flex h-[80px] w-full items-center gap-[10px] p-[10px]">
          <h2 className="font-['Bitter'] text-[50px] font-medium leading-[60px] tracking-[0.01em] text-black">
            Facilities &amp; Services
          </h2>
        </div>

        {/* =========================================
            SERVICES GRID
        ========================================== */}
        <div className="flex w-full flex-col gap-[30px]">
          {/* Top Row */}
          <div className="flex w-full flex-col gap-[30px] md:flex-row">
            {/* Service Card 1 */}
            <ServiceCard text={services[0].text} />

            {/* Service Card 2 */}
            <ServiceCard text={services[1].text} />
          </div>

          {/* Bottom Row */}
          <div className="flex w-full flex-col gap-[30px] md:flex-row">
            <ServiceCard text={services[2].text} className="md:w-[705px]" />

            {/* Empty space matching Figma */}
            <div className="hidden flex-1 md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SERVICE CARD
========================================= */

function ServiceCard({ text, className = "" }) {
  return (
    <div
      className={`flex min-h-[100px] flex-1 items-center justify-between gap-[10px] bg-[rgba(1,136,55,0.1)] p-[20px] ${className}`}
    >
      {/* Text */}
      <p className="m-0 flex-1 font-['Inter'] text-[18px] font-bold leading-[30px] tracking-[0.01em] text-[#444444]">
        {text}
      </p>

      {/* Arrow Button */}
      <button
        type="button"
        aria-label="View service details"
        className="flex h-[36.4px] w-[36.4px] shrink-0 items-center justify-center rounded-[2.08px] bg-white"
      >
        <ArrowRight
          size={24.96}
          strokeWidth={2.08}
          className="text-[#018837]"
        />
      </button>
    </div>
  );
}
