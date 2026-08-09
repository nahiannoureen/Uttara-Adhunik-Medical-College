"use client";

import { useState } from "react";

const GREEN = "#018837";
const GRAY = "#737477";

const TABS = [
  "Hospital Service",
  "Departments",
  "Library",
  "Medical Education Unit",
  "Training",
  "Publications",
  "Seminar",
  "Hostel",
  "Labratory",
  "Cafeteria",
];

export default function TabNav() {
  const [active, setActive] = useState("Hospital Service");

  const renderTab = (tab) => {
    const isActive = active === tab;

    return (
      <button
        key={tab}
        type="button"
        onClick={() => setActive(tab)}
        className="shrink-0 w-[200px] h-[45px] px-[30px] py-[15px] rounded-[5px] flex items-center justify-center transition-all duration-200"
        style={{
          backgroundColor: isActive ? GREEN : GRAY,
          border: isActive ? `2px dashed ${GREEN}` : "2px solid transparent",
          backdropFilter: "blur(25px)",
        }}
      >
        <span
          className="text-white text-[12px] leading-[15px] font-medium text-center whitespace-nowrap"
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {tab}
        </span>
      </button>
    );
  };

  return (
    <section className="w-full bg-[#FBFBFB] px-6 md:px-20 py-10 md:py-[50px]">
      <div className="w-full max-w-[1441px] mx-auto flex flex-col items-center gap-[30px]">
        {/* First Row - 5 Tabs */}
        <div className="w-full flex flex-wrap lg:flex-nowrap justify-center items-center gap-[30px]">
          {TABS.slice(0, 5).map(renderTab)}
        </div>

        {/* Second Row - 3 Tabs */}
        <div className="w-full flex flex-wrap justify-center items-center gap-[30px]">
          {TABS.slice(5).map(renderTab)}
        </div>
      </div>
    </section>
  );
}
