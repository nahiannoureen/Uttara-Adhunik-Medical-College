"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  ChevronDown,
  AlignJustify,
  Clock,
  ArrowRight,
  Star,
  Menu,
  // Facebook,
  // Youtube,
  // Linkedin,
  // Instagram,
  X,
} from "lucide-react";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import About from "@/components/About";
import NoticeAndPublication from "@/components/NoticeAndPublication";
import FindDepartment from "@/components/FindDepartment";
import Admission from "@/components/Admission";

/* ------------------------------------------------------------------ */
/*  Shared tokens (kept as plain constants so every section stays     */
/*  visually consistent without a Tailwind config file)               */
/* ------------------------------------------------------------------ */
const GREEN = "#018837";
const YELLOW = "#FECD2F";

const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500;700&family=Inter:wght@400;500;600;700&display=swap');
  .font-display { font-family: 'Bitter', serif; }
  .font-body { font-family: 'Inter', sans-serif; }
`;

/* A neutral placeholder "photo" block — used everywhere a real photo
   would sit in the Figma file, so the layout stays accurate without
   pulling in copyrighted imagery. */
function PhotoPlaceholder({ label, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a3d1f] to-[#018837] ${className}`}
    >
      <span className="font-body text-[11px] uppercase tracking-widest text-white/60 text-center px-4">
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  1. Top utility bar + main nav                                     */
/* ------------------------------------------------------------------ */
// function TopBar() {
//   return (
//     <div className="hidden md:flex items-center justify-center gap-14 border-b border-dashed border-black/20 bg-[#FCFBFB] px-20 py-2.5 font-body text-xs font-medium text-black/50">
//       <span className="flex items-center gap-1.5">
//         <MapPin className="h-3.5 w-3.5" strokeWidth={1.7} />
//         House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model Town
//       </span>
//       <span className="flex items-center gap-1.5">
//         <Mail className="h-3.5 w-3.5" strokeWidth={1.7} />
//         info@uamc.com
//       </span>
//       <span className="flex items-center gap-1.5">
//         <Phone className="h-3.5 w-3.5" strokeWidth={1.7} />
//         +880 1700-220000
//       </span>
//       <span className="ml-auto ..." />
//       <nav className="ml-auto flex items-center gap-0 text-[#444444]">
//         {["Student Portal", "Teachers Portal", "Alumni", "Events"].map(
//           (label, i) => (
//             <span key={label} className="flex items-center">
//               <a href="#" className="px-4 py-1 hover:text-[#018837]">
//                 {label}
//               </a>
//               {i < 3 && <span className="h-4 w-px bg-[#444444]" />}
//             </span>
//           ),
//         )}
//       </nav>
//     </div>
//   );
// }

// function MainNav() {
//   const [open, setOpen] = useState(false);
//   const links = [
//     "Home",
//     "About UAMC",
//     "Facilities",
//     "Admission",
//     "Notice & Media",
//     "Career",
//   ];

//   return (
//     <div className="flex items-center justify-between gap-6 px-6 md:px-20 py-4 bg-white">
//       {/* Logo lockup */}
//       <a href="#home" className="flex items-center gap-3 shrink-0">
//         <div
//           className="flex h-12 w-12 items-center justify-center rounded-full text-white font-display font-bold text-lg"
//           style={{ backgroundColor: GREEN }}
//         >
//           U
//         </div>
//         <span className="font-display text-lg font-bold leading-tight text-black">
//           Uttara Adhunik
//           <br />
//           Medical College (UAMC)
//         </span>
//       </a>

//       {/* Desktop links */}
//       <nav className="hidden lg:flex items-center gap-1 font-display text-sm uppercase tracking-wide">
//         {links.map((label, i) => (
//           <a
//             key={label}
//             href="#"
//             className={`flex items-center gap-1.5 px-4 py-2.5 ${
//               i === 0
//                 ? "border-b-2 font-normal"
//                 : "text-black hover:text-[#018837]"
//             }`}
//             style={i === 0 ? { borderColor: GREEN, color: GREEN } : {}}
//           >
//             {label}
//             {i > 0 && i < 4 && (
//               <ChevronDown className="h-4 w-4" strokeWidth={2} />
//             )}
//           </a>
//         ))}
//       </nav>

//       <div className="hidden lg:flex items-center gap-4 text-black shrink-0">
//         <Search className="h-5 w-5 cursor-pointer" strokeWidth={2} />
//         <AlignJustify className="h-5 w-5 cursor-pointer" strokeWidth={2} />
//       </div>

//       <button
//         className="lg:hidden text-black"
//         onClick={() => setOpen((v) => !v)}
//         aria-label="Toggle menu"
//       >
//         {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//       </button>

//       {open && (
//         <div className="absolute left-0 right-0 top-full z-30 flex flex-col gap-1 bg-white px-6 py-4 shadow-lg lg:hidden font-display text-sm uppercase">
//           {links.map((label) => (
//             <a key={label} href="#" className="py-2 border-b border-black/10">
//               {label}
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// function Navbar() {
//   return (
//     <header className="relative w-full">
//       <TopBar />
//       <MainNav />
//     </header>
//   );
// }

// function Hero() {
//   const slides = ["01", "02", "03", "04", "05"];

//   return (
//     <section
//       id="home"
//       className="relative flex min-h-[750px] flex-col justify-end px-6 py-[50px] text-white md:px-20"
//       style={{
//         backgroundImage: `
//       linear-gradient(
//         180deg,
//         rgba(0, 0, 0, 0.2) 0%,
//         rgba(1, 136, 55, 0.7) 100%
//       ),
//       url("/hero.jpg")
//     `,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Main content wrapper */}
//       <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-between">
//         {/* =========================
//             SLIDE NAVIGATION
//         ========================== */}
//         <div className="mx-auto flex h-7 w-full max-w-[896px] items-center justify-center gap-6 md:gap-[100px]">
//           {/* Prev */}
//           <button
//             type="button"
//             className="font-display text-[13px] font-bold uppercase leading-[13px]"
//           >
//             Prev
//           </button>

//           {/* Slide numbers */}
//           <div className="flex h-7 items-center justify-center gap-4 md:gap-[37px]">
//             {/* Left divider */}
//             <span className="hidden h-px w-[125px] bg-white/30 md:block" />

//             <div className="flex items-center">
//               {slides.map((slide, index) => (
//                 <div key={slide} className="flex items-center">
//                   <button
//                     type="button"
//                     className="flex h-7 w-8 items-center justify-center px-[5px] font-display text-[18px] font-bold leading-[18px]"
//                     style={{
//                       color: index === 0 ? YELLOW : "rgba(255, 255, 255, 1)",
//                     }}
//                   >
//                     {slide}
//                   </button>

//                   {index < slides.length - 1 && (
//                     <span className="mx-2 h-[22px] w-px bg-white/30" />
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Right divider */}
//             <span className="hidden h-px w-[125px] bg-white/30 md:block" />
//           </div>

//           {/* Next */}
//           <button
//             type="button"
//             className="font-display text-[13px] font-bold uppercase leading-[13px]"
//           >
//             Next
//           </button>
//         </div>

//         {/* =========================
//             CONTENT PANEL
//         ========================== */}
//         <div
//           className="
//             mx-auto flex w-full max-w-[1440px]
//             flex-col justify-between gap-12
//             bg-black/10 p-5
//             backdrop-blur-[2.5px]
//             md:min-h-[399px]
//             md:flex-row
//             md:items-end
//           "
//         >
//           {/* =========================
//               LEFT CONTENT
//           ========================== */}
//           <div className="flex w-full max-w-[600px] flex-col gap-7">
//             {/* Intro */}
//             <div className="flex items-center gap-2">
//               {/* Left decorative line */}
//               <span className="h-[40px] w-[2px] bg-white" />

//               <span className="font-body text-[14px] font-normal leading-[23px]">
//                 Shaping the Future of Healthcare, One Student at a Time
//               </span>
//             </div>

//             {/* Heading */}
//             <h1
//               className="
//                 max-w-[670px]
//                 font-display
//                 text-[40px]
//                 font-bold
//                 leading-[1.2]
//                 md:text-[60px]
//                 md:leading-[75px]
//               "
//             >
//               Excellence in Medical Education,{" "}
//               <span style={{ color: YELLOW }}>Innovation</span> in Healthcare
//             </h1>

//             {/* CTA */}
//             <button
//               type="button"
//               className="
//                 flex
//                 h-[48px]
//                 w-fit
//                 items-center
//                 justify-center
//                 gap-[10px]
//                 bg-white
//                 px-[26px]
//                 py-[13px]
//                 font-body
//                 text-[14px]
//                 font-medium
//                 leading-[22px]
//                 transition-opacity
//                 hover:opacity-90
//               "
//               style={{ color: GREEN }}
//             >
//               <span>View Our Program</span>

//               <ArrowRight className="h-[22px] w-[12px]" strokeWidth={2} />
//             </button>
//           </div>

//           {/* =========================
//               MBBS CONTENT
//           ========================== */}
//           <div className="flex w-full max-w-[272px] flex-col gap-[22px]">
//             <h3
//               className="
//                 flex
//                 h-[54px]
//                 items-center
//                 font-display
//                 text-[30px]
//                 font-bold
//                 leading-[34px]
//               "
//               style={{ color: YELLOW }}
//             >
//               MBBS Degrees
//             </h3>

//             <div className="flex w-full flex-col gap-[10px]">
//               {/* Bachelor of Medicine */}
//               <div className="flex flex-col pb-[10px]">
//                 <a
//                   href="#"
//                   className="
//                     flex
//                     h-[26px]
//                     w-full
//                     items-center
//                     justify-between
//                     font-display
//                     text-[16px]
//                     font-normal
//                     leading-[26px]
//                   "
//                 >
//                   <span>Bachelor of Medicine</span>

//                   <ArrowRight className="h-6 w-6 shrink-0" strokeWidth={2} />
//                 </a>

//                 <p
//                   className="
//                     mt-[10px]
//                     font-body
//                     text-[12px]
//                     font-normal
//                     leading-[15px]
//                     text-white/50
//                   "
//                 >
//                   Comprehensive medical education preparing students for
//                   professional healthcare practice.
//                 </p>
//               </div>

//               {/* Bachelor of Surgery */}
//               <div className="flex flex-col pb-[10px]">
//                 <a
//                   href="#"
//                   className="
//                     flex
//                     h-[26px]
//                     w-full
//                     items-center
//                     justify-between
//                     font-display
//                     text-[16px]
//                     font-normal
//                     leading-[26px]
//                   "
//                 >
//                   <span>Bachelor of Surgery</span>

//                   <ArrowRight className="h-6 w-6 shrink-0" strokeWidth={2} />
//                 </a>

//                 <p
//                   className="
//                     mt-[10px]
//                     font-body
//                     text-[12px]
//                     font-normal
//                     leading-[15px]
//                     text-white/50
//                   "
//                 >
//                   Develop practical surgical knowledge and skills through
//                   hands-on clinical learning.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/*  8. Facilities                                                     */
/* ------------------------------------------------------------------ */
function OurFacilities() {
  const items = [
    "Hostel",
    "Laboratory",
    "Hospital Service",
    "Cafeteria",
    "Training",
    "Medical Education Unit",
    "Departments",
    "Publications",
    "Seminar",
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white">
      {/* =====================================================
          SECTION HEADER
      ====================================================== */}
      <div className="flex w-full flex-col items-center gap-[10px] px-5 py-10 md:px-10 lg:py-[50px]">
        {/* Eyebrow */}
        <div className="flex h-[45.67px] w-fit items-end">
          {/* Knowledge Icon */}
          <div className="flex h-[45.03px] w-[32.5px] shrink-0 items-center">
            <img
              src="/knowledge.png"
              alt=""
              className="h-[23.36px] w-[32.5px] object-contain"
            />
          </div>

          {/* Knowledge Text */}
          <span
            className="flex h-[45.67px] items-center justify-center px-[10.83px] font-body text-[19.5px] font-medium leading-[23px]"
            style={{ color: GREEN }}
          >
            knowledge meets innovation
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-center text-[42px] font-bold leading-[1.2] tracking-[0.03em] text-black md:text-[60px] md:leading-[72px]">
          Our Facilities
        </h2>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="flex w-full justify-center bg-[#FAF6F6] px-5 pb-20 pt-10 md:px-10 lg:px-20">
        <div className="flex w-full max-w-[1432px] flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-0">
          {/* =================================================
              LEFT — FACILITIES MENU
          ================================================== */}
          <div className="flex w-full max-w-[600px] flex-col gap-5 lg:mr-[-70px] lg:shrink-0">
            {items.map((item, i) => (
              <button
                key={item}
                type="button"
                onClick={() => setActive(i)}
                className="flex h-[65px] w-full items-center justify-between rounded-[5px] bg-white p-[10px] transition-all"
                style={{
                  color: i === active ? GREEN : "#000000",
                  boxShadow:
                    i === active ? "0 0 0 1px rgba(1,136,55,0.05)" : "none",
                }}
              >
                {/* Facility Name */}
                <span
                  className="flex items-center px-[10px] font-display text-[18.7px] font-bold leading-[22px]"
                  style={{
                    color: i === active ? GREEN : "#000000",
                  }}
                >
                  {item}
                </span>

                {/* Arrow Box */}
                <span
                  className="flex h-[36.4px] w-[36.4px] shrink-0 items-center justify-center rounded-[2px]"
                  style={{
                    backgroundColor:
                      i === active
                        ? "rgba(1,136,55,0.5)"
                        : "rgba(1,136,55,0.1)",
                  }}
                >
                  <ArrowRight
                    className="h-[25px] w-[25px]"
                    style={{ color: YELLOW }}
                    strokeWidth={2}
                  />
                </span>
              </button>
            ))}
          </div>

          {/* =================================================
              RIGHT — FACILITY CARD
          ================================================== */}
          <div className="flex w-full max-w-[832px] flex-col overflow-hidden bg-white lg:ml-0 lg:h-[741px] lg:flex-row">
            {/* Facility Image */}
            <div className="relative h-[400px] w-full shrink-0 overflow-hidden lg:h-full lg:w-[404px]">
              <img
                src="/hostel.jpg"
                alt="UAMC Hostel building"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Facility Details */}
            <div className="flex w-full flex-col justify-center px-6 py-12 lg:h-full lg:w-[418px] lg:px-[10px]">
              <div className="flex flex-col gap-[38px] px-2 lg:px-[7.7px]">
                {/* Title */}
                <h3
                  className="font-display text-[32px] font-bold leading-[46px] lg:text-[38.4px]"
                  style={{ color: GREEN }}
                >
                  Hostel Facilities
                </h3>

                {/* Description */}
                <div className="flex flex-col gap-[8px]">
                  <p className="font-display text-[19px] font-medium leading-[23px] text-[#4A4A4A]">
                    Ladies hostel:
                  </p>

                  <p className="font-body text-[19px] font-normal leading-[23px] text-[#4A4A4A]">
                    Hostel accommodations for female students are available with
                    limited number of seats.
                  </p>
                </div>

                {/* View Details */}
                <a
                  href="#"
                  className="flex w-fit items-center gap-5 border-b border-[#0094D3] pb-[2px] font-body text-[11px] font-semibold leading-[13px] text-[#0094D3]"
                >
                  <span>View Details</span>

                  <ArrowRight className="h-[11px] w-[11px]" strokeWidth={1.5} />
                </a>
              </div>

              {/* View Program Button */}
              <button
                type="button"
                className="mt-[50px] flex h-[55px] w-[230px] items-center justify-center gap-2 px-[30px] font-body text-[16px] font-medium leading-[25px] text-white"
                style={{ backgroundColor: GREEN }}
              >
                <span>View Our Program</span>

                <ArrowRight className="h-[14px] w-[14px]" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ------------------------------------------------------------------ */
/*  9. Principal message                                              */
/* ------------------------------------------------------------------ */

function PrincipalMessage() {
  const GREEN = "#018837";
  const YELLOW = "#FFBF2F";

  return (
    <section
      className="
        flex
        w-full
        flex-col
        items-center
        gap-10
        px-6
        py-16

        md:px-20
        md:py-20
      "
      style={{ backgroundColor: "rgba(1,136,55,0.1)" }}
    >
      {/* =====================================================
          SECTION HEADING
      ====================================================== */}
      <div
        className="
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-[10px]
        "
      >
        {/* Eyebrow */}
        <div className="flex h-[45.67px] w-[321.17px] items-end">
          {/* Figma Frame 48 / Vector */}
          <div
            className="
              flex
              h-[45.03px]
              w-[32.5px]
              shrink-0
              items-center
            "
          >
            <img
              src="/knowledge.png"
              alt=""
              className="h-[23.36px] w-[32.5px] object-contain"
            />
          </div>

          {/* Figma Frame 49 */}
          <div
            className="
              flex
              h-[45.67px]
              w-[288.67px]
              items-center
              justify-center
              gap-[10.83px]
              px-[10.83px]
            "
          >
            <span
              className="
                font-body
                text-[19.5px]
                font-medium
                leading-[23px]
              "
              style={{ color: GREEN }}
            >
              knowledge meets innovation
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h2
          className="
            m-0
            w-full
            text-center
            font-display
            text-[42px]
            font-bold
            leading-[1.2]
            tracking-[0.03em]
            text-black

            md:text-[60px]
            md:leading-[72px]
          "
        >
          Message from the <span style={{ color: YELLOW }}>Principal</span>
        </h2>
      </div>

      {/* =====================================================
          MAIN CONTENT
          Figma: 1440 × 573
      ====================================================== */}
      <div
        className="
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-10

          lg:flex-row
          lg:items-center
          lg:gap-[50px]
        "
      >
        {/* ===================================================
            LEFT CONTENT
            Figma: 695px
        ==================================================== */}
        <div
          className="
            flex
            w-full
            max-w-[695px]
            flex-col
            gap-[28px]

            lg:h-[541px]
            lg:w-[695px]
            lg:max-w-none
            lg:shrink-0
          "
        >
          {/* Principal Information */}
          <div
            className="
              flex
              flex-col
              gap-[20px]
            "
          >
            {/* -----------------------------------------------
                SIGNATURE
            ------------------------------------------------ */}
            <div className="flex h-[141px] w-[186px] items-start">
              <img
                src="/sig.png"
                alt="Principal's signature"
                className="
                  block
                  h-[141px]
                  w-[186px]
                  object-contain
                  object-left
                "
              />
            </div>

            {/* -----------------------------------------------
                NAME + POSITION
            ------------------------------------------------ */}
            <div className="flex flex-col">
              <p
                className="
                  m-0
                  font-display
                  text-[24px]
                  font-bold
                  leading-[29px]
                  tracking-[0.03em]
                  text-black
                "
              >
                Honorable
              </p>

              <p
                className="
                  m-0
                  font-display
                  text-[28px]
                  font-bold
                  leading-[38px]
                  tracking-[0.03em]

                  md:text-[32px]
                "
                style={{ color: GREEN }}
              >
                Prof. Dr. Mohammad Mohibur Rahman
              </p>

              <p
                className="
                  m-0
                  font-display
                  text-[48px]
                  font-bold
                  leading-[120%]
                  tracking-[0.03em]
                  text-[#444444]

                  md:text-[70px]
                "
              >
                Principal{" "}
                <span
                  className="
                    align-middle
                    text-[28px]

                    md:text-[32px]
                  "
                >
                  (In Charge)
                </span>
              </p>
            </div>
          </div>

          {/* =================================================
              MESSAGE
          ================================================== */}
          <div
            className="
              flex
              flex-col
              gap-[20px]
            "
          >
            <h4
              className="
                m-0
                font-body
                text-[20px]
                font-bold
                leading-[24px]
                text-[#444444]
              "
            >
              Ensuring Quality Healthcare &amp; Medical Education
            </h4>

            <p
              className="
                m-0
                font-body
                text-[15px]
                font-normal
                leading-[18px]
                text-[#444444]
                lg:text-justify
              "
            >
              Bangladesh faces significant challenges in delivering healthcare
              nationwide. To support government efforts, Uttara Adhunik Medical
              College Hospital (UAMCH) has been providing comprehensive health
              services since 2003, evolving into a tertiary-level
              multidisciplinary hospital.
            </p>

            {/* Read More */}
            <button
              type="button"
              className="
                flex
                h-[55px]
                w-[230px]
                items-center
                justify-center
                gap-[10px]
                px-[30px]
                py-[15px]
                font-body
                text-[16px]
                font-medium
                leading-[25px]
                text-white
                transition-opacity
                hover:opacity-90
              "
              style={{ backgroundColor: GREEN }}
            >
              <span>Read More</span>

              <ArrowRight className="h-[25px] w-[14.02px]" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ===================================================
            PRINCIPAL IMAGE
            Figma: 695 × 573
        ==================================================== */}
        <div
          className="
            h-[420px]
            w-full
            max-w-[695px]
            overflow-hidden

            lg:h-[573px]
            lg:w-[695px]
            lg:max-w-none
            lg:shrink-0
          "
        >
          <img
            src="/principal.jpg"
            alt="Prof. Dr. Mohammad Mohibur Rahman"
            className="
              block
              h-full
              w-full
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}
/* ------------------------------------------------------------------ */
/*  10. Campus life                                                   */
/* ------------------------------------------------------------------ */

import { ArrowUpRight } from "lucide-react";

function CampusLife() {
  const GREEN = "#018837";

  const campusItems = [
    {
      title: "Student Life",
      image: "/popular.jpg",
    },
    {
      title: "Arts & Culture",
      image: "/art.png",
    },
    {
      title: "Recreation & Wellness",
      image: "/recreation.png",
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: GREEN }}
    >
      {/* Main container */}
      <div className="relative mx-auto flex min-h-[777px] w-full max-w-[1440px] flex-col px-6 py-16 md:px-10 lg:px-0">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="relative mx-auto flex w-full max-w-[645px] flex-col items-center">
          {/* Description + Campus Life heading */}
          <div className="flex w-full flex-col items-center">
            {/* Description */}
            <p className="absolute left-0 top-[120px] w-[304px] font-body text-[16px] font-normal leading-[29px] text-white">
              Building a vibrant community of creative and accomplished people
              from around the world
            </p>

            {/* Campus Life Image */}
            <div className="relative z-10 ml-auto mr-[155px] h-[192px] w-[273px] overflow-hidden">
              <img
                src="/campus.png"
                alt="Campus Life"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Yellow decorative mark */}
            <div className="absolute right-[116px] top-[-20px] z-20 h-[50px] w-[50px]">
              <img
                src="/yellow.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            CAMPUS LIFE CARDS
        ====================================================== */}
        <div className="mx-auto mt-[90px] flex w-full max-w-[1285px] flex-col gap-10 md:flex-row md:justify-center md:gap-[36px]">
          {campusItems.map((item) => (
            <div
              key={item.title}
              className="flex w-full flex-col gap-[34px] md:w-[397px]"
            >
              {/* Image */}
              <div className="h-[305px] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title + Arrow */}
              <div className="flex items-center gap-[22.93px]">
                <span className="font-display text-[22.85px] font-normal leading-[34px] text-white">
                  {item.title}
                </span>

                <ArrowRight
                  className="h-[26px] w-[26px] rotate-[-30deg] text-white"
                  strokeWidth={1.8}
                />
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            RIGHT SIDE DECORATIVE ICON
            ONLY decorative icon remaining
        ====================================================== */}
        <div className="absolute right-[60px] top-[175px] hidden h-[60px] w-[60px] lg:block">
          <img
            src="/degree.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  11. Alumni events                                                 */
/* ------------------------------------------------------------------ */

import { CalendarDays, Clock3 } from "lucide-react";

function AlumniEvents() {
  const events = [
    {
      num: "01",
      title: "Bridging Cultures: Global Perspectives in Medicine",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
    {
      num: "02",
      title: "Literary Voices: Celebrating Diverse Narratives",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
    {
      num: "03",
      title: "Cultural Exchange: Building Global Connections",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
  ];

  return (
    <section className="w-full bg-[#E6F3EB] px-6 py-20 md:px-20 md:py-[100px]">
      {/* Header */}
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <h2 className="font-display text-[43px] font-bold leading-[48px] text-[#018837]">
          Alumni Event
        </h2>

        <a
          href="#"
          className="flex items-center gap-1 font-body text-base font-medium text-[#018837]"
        >
          View All
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </a>
      </div>

      {/* Content */}
      <div className="mx-auto mt-[50px] flex w-full max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-[90px]">
        {/* Events */}
        <div className="flex w-full flex-col gap-0 lg:w-[722px]">
          {events.map((event) => (
            <div
              key={event.num}
              className="flex min-h-[190px] w-full items-center bg-[#F6F6F6] px-[18px]"
            >
              {/* Number */}
              <div
                className="
                  flex h-[108px] w-[108px]
                  shrink-0 items-center justify-center
                  border border-[#018837]
                  font-display text-[90px]
                  font-normal leading-[108px]
                  text-black
                "
              >
                {event.num}
              </div>

              {/* Event information */}
              <div className="ml-[30px] flex min-w-0 flex-1 flex-col justify-center gap-[9px]">
                <p className="font-body text-[19px] font-normal leading-[31px] text-[#018837]">
                  {event.title}
                </p>

                <div className="flex flex-wrap items-center gap-[18px] font-body text-[14px] leading-[26px] text-[#444444]">
                  <span className="flex items-center gap-[9px]">
                    <CalendarDays className="h-[15px] w-[15px]" />
                    {event.date}
                  </span>

                  <span className="flex items-center gap-[9px]">
                    <Clock3 className="h-[17px] w-[17px]" />
                    {event.time}
                  </span>

                  <span className="flex items-center gap-[9px]">
                    <MapPin className="h-[15px] w-[15px]" />
                    {event.place}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="w-full lg:w-[627px] lg:shrink-0">
          <img
            src="/alumni.png"
            alt="Alumni gathered on campus lawn"
            className="h-[607px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
/* ------------------------------------------------------------------ */
/*  12. News                                                           */
/* ------------------------------------------------------------------ */
// function NewsSection() {
//   const posts = [
//     {
//       tag: "Education",
//       date: "August 6, 2024",
//       title: "10 Effective Study Tips for College Success",
//     },
//     {
//       tag: "University",
//       date: "July 4, 2024",
//       title: "After Decades Of Improvement, Cardiovascular Care Advances",
//     },
//   ];
//   return (
//     <section className="flex flex-col gap-12 px-6 md:px-20 py-20 bg-white">
//       <div>
//         <h2
//           className="font-display text-3xl md:text-5xl font-bold"
//           style={{ color: GREEN }}
//         >
//           Read Our Latest News
//         </h2>
//         <p className="mt-2 font-body text-[#444444]">
//           You'll find something to spark your curiosity and enhance
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {posts.map((p) => (
//           <div
//             key={p.title}
//             className="flex flex-col sm:flex-row items-center gap-6 border border-dashed p-5"
//             style={{ borderColor: GREEN }}
//           >
//             <img
//               src="/news1.png"
//               alt={""}
//               className="h-[220px] w-full sm:w-[240px] shrink-0"
//             />
//             <div className="flex flex-col gap-4">
//               <span
//                 className="w-fit px-3 py-1 font-body text-xs"
//                 style={{ backgroundColor: YELLOW }}
//               >
//                 {p.tag}
//               </span>
//               <p className="font-body text-lg text-[#110C2D]">{p.title}</p>
//               <div className="flex items-center gap-3 font-body text-sm text-[#737477]">
//                 <span>{p.date}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
function NewsSection() {
  const posts = [
    {
      tag: "Education",
      date: "August 6, 2024",
      title: "10 Effective Study Tips for College Success",
      image: "/news1.png",
    },
    {
      tag: "University",
      date: "July 4, 2024",
      title: "After Decades Of Improvement, Cardiovascular Care Advances",
      image: "/news2.png",
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:px-20 md:py-20">
      {/* ================================
          SECTION HEADING
      ================================= */}
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="mb-4 flex items-center">
          {/* Green decorative mark */}
          <span
            className="mr-3 block h-[23px] w-[32.5px]"
            style={{ backgroundColor: GREEN }}
          />

          <span
            className="font-body text-[19.5px] font-medium leading-[23px]"
            style={{ color: GREEN }}
          >
            knowledge meets innovation
          </span>
        </div>

        <h2
          className="font-display text-3xl font-bold md:text-5xl"
          style={{ color: GREEN }}
        >
          Read Our Latest News
        </h2>

        <p className="mt-4 max-w-[700px] font-body text-[16px] leading-[28px] text-[#737477]">
          You'll find something to spark your curiosity and enhance your
          knowledge.
        </p>
      </div>

      {/* ================================
          NEWS CARDS
      ================================= */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.title}
            className="
              flex
              flex-col
              overflow-hidden
              border
              border-dashed
              bg-white
              sm:flex-row
            "
            style={{ borderColor: GREEN }}
          >
            {/* ==========================
                NEWS IMAGE
            =========================== */}
            <div className="h-[240px] w-full shrink-0 overflow-hidden sm:h-[220px] sm:w-[240px]">
              <img
                src={post.image}
                alt={post.title}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* ==========================
                NEWS CONTENT
            =========================== */}
            <div
              className="
                flex
                flex-1
                flex-col
                justify-center
                gap-4
                p-6
              "
            >
              {/* Tag */}
              <span
                className="
                  w-fit
                  px-3
                  py-1
                  font-body
                  text-xs
                  font-medium
                  text-[#110C2D]
                "
                style={{ backgroundColor: YELLOW }}
              >
                {post.tag}
              </span>

              {/* Title */}
              <h3
                className="
                  m-0
                  font-display
                  text-[20px]
                  font-semibold
                  leading-[28px]
                  text-[#110C2D]
                "
              >
                {post.title}
              </h3>

              {/* Date */}
              <div className="flex items-center gap-3">
                <span className="font-body text-sm text-[#737477]">
                  {post.date}
                </span>
              </div>

              {/* Read More */}
              <button
                type="button"
                className="
                  flex
                  w-fit
                  items-center
                  gap-2
                  font-body
                  text-[15px]
                  font-medium
                  transition-opacity
                  hover:opacity-75
                "
                style={{ color: GREEN }}
              >
                Read More
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  13. Testimonials                                                  */
/* ------------------------------------------------------------------ */

function Testimonials() {
  const reviews = [
    {
      name: "Emma Elizabeth",
      role: "Assistant Teacher",
      image: "/student1.png",
    },
    {
      name: "Zent Ekizie",
      role: "Assistant Teacher",
      image: "/student2.png",
    },
    {
      name: "Samantha Willow",
      role: "Teacher",
      image: "/student3.png",
    },
  ];

  return (
    <section className="w-full bg-[#F8F8F8] px-6 py-16 md:px-20 md:py-20">
      {/* =========================================
          HEADING
      ========================================== */}
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          {/* Green decorative mark */}
          <span
            className="mr-3 block h-[23px] w-[32.5px]"
            style={{ backgroundColor: GREEN }}
          />

          <span
            className="font-body text-[19.5px] font-medium leading-[23px]"
            style={{ color: GREEN }}
          >
            knowledge meets innovation
          </span>
        </div>

        <h2
          className="
            mt-4
            text-center
            font-display
            text-[42px]
            font-bold
            leading-[48px]
            md:text-[50px]
          "
          style={{ color: GREEN }}
        >
          My Students Feedback
        </h2>

        <p className="mt-3 w-full text-center font-body text-base leading-[29px] text-[#737477]">
          You'll find something to spark your curiosity and enhance
        </p>
      </div>

      {/* =========================================
          TESTIMONIALS
      ========================================== */}
      <div className="mx-auto mt-[50px] w-full max-w-[1290px] overflow-hidden">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-0">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="
                relative
                flex
                h-[317px]
                flex-col
                bg-white
                px-10
                pt-12
              "
            >
              {/* =================================
                  STARS
              ================================== */}
              <div className="flex gap-[5px]">
                {Array.from({
                  length: index === 1 ? 5 : 4,
                }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-[16px] w-[16px] fill-current"
                    style={{ color: YELLOW }}
                  />
                ))}
              </div>

              {/* =================================
                  REVIEW
              ================================== */}
              <p className="mt-[21px] max-w-[340px] font-body text-[18px] leading-[28px] text-[#444444]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>

              {/* =================================
                  AUTHOR
              ================================== */}
              <div className="absolute bottom-[39px] left-10 flex items-center">
                {/* Student Image */}
                <div className="h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Name + Role */}
                <div className="ml-[10px]">
                  <p
                    className="font-display text-[17.8px] font-bold leading-5"
                    style={{ color: GREEN }}
                  >
                    {review.name}
                  </p>

                  <p className="mt-[6px] font-body text-[15px] leading-[27px] text-[#444444]">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* =================================
                  QUOTE
              ================================== */}
              <div
                className="
                  absolute
                  bottom-[38px]
                  right-[40px]
                  font-display
                  text-[70px]
                  leading-none
                "
                style={{ color: GREEN }}
              >
                ”
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            SLIDER DOTS
        ========================================== */}
        <div className="mt-[48px] flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#FECD2F]" />
          <span className="h-2 w-2 rounded-full bg-[#444444]/20" />
        </div>
      </div>
    </section>
  );
}
/* ------------------------------------------------------------------ */
/*  14. Footer                                                        */
/* ------------------------------------------------------------------ */

// function Footer() {
//   const campusLinks = [
//     "Our Campus",
//     "Careers",
//     "News",
//     "Support",
//     "Accessible mode",
//   ];

//   const pageLinks = ["Home", "About", "Facilities", "Admission", "Contact"];

//   const posts = [
//     {
//       title: "Those inequalities that Matter",
//       date: "August 6, 2024",
//       image: "/post1.png",
//     },
//     {
//       title: "After Decades Of Improvement, Cardiovascular",
//       date: "July 4, 2024",
//       image: "/post2.png",
//     },
//   ];

//   return (
//     <footer className="w-full bg-black text-white">
//       {/* ================= NEWSLETTER ================= */}
//       <div className="border-b border-[#242424]">
//         <div
//           className="
//             mx-auto flex w-full max-w-[1130px]
//             flex-col gap-8
//             px-5 py-[50px]
//             md:flex-row md:items-center md:justify-between
//             md:gap-10
//           "
//         >
//           <h4
//             className="
//               font-body text-[30.94px]
//               font-normal leading-[36px]
//               text-white
//             "
//           >
//             Subscribe To Newsletter
//           </h4>

//           <form
//             className="
//               flex w-full max-w-[494px]
//               flex-col gap-[10px]
//               sm:flex-row
//             "
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <input
//               type="email"
//               placeholder="Enter Your mail"
//               className="
//                 box-border h-[53px] w-full
//                 border border-[#018837]
//                 bg-transparent
//                 px-[21px] py-[18px]
//                 font-body text-[14px]
//                 leading-[17px]
//                 text-white
//                 outline-none
//                 placeholder:text-white
//               "
//             />

//             <button
//               type="submit"
//               className="
//                 flex h-[53px]
//                 w-full shrink-0
//                 items-center justify-center
//                 gap-[3px]
//                 bg-white
//                 px-[38px]
//                 text-[16px]
//                 font-medium
//                 leading-[18px]
//                 text-[#110C2D]
//                 transition-colors
//                 hover:bg-[#FECD2F]
//                 sm:w-[208px]
//               "
//             >
//               <span>Submit Button</span>

//               <span className="text-[18px] leading-none">→</span>
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* ================= MAIN FOOTER ================= */}
//       <div className="mx-auto w-full max-w-[1290px] px-5">
//         <div
//           className="
//             grid
//             grid-cols-1
//             gap-12
//             py-[65px]
//             sm:grid-cols-2
//             lg:grid-cols-4
//             lg:gap-0
//           "
//         >
//           {/* ================= BRAND ================= */}
//           <div className="pr-8">
//             <div className="mb-[25px] flex items-center gap-[8px]">
//               {/* Replace this with your actual logo */}
//               <div
//                 className="
//                   flex h-[66px] w-[66px]
//                   shrink-0 items-center justify-center
//                   overflow-hidden rounded-full
//                 "
//               >
//                 <img
//                   src="/logo2.png"
//                   alt="Uttara Adhunik Medical College"
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               <h3
//                 className="
//                   max-w-[175px]
//                   font-display
//                   text-[20.7px]
//                   font-bold
//                   leading-[25px]
//                   text-white
//                 "
//               >
//                 Uttara Adhunik Medical College
//               </h3>
//             </div>

//             <p
//               className="
//                 max-w-[333px]
//                 font-body
//                 text-[16px]
//                 font-normal
//                 leading-[29px]
//                 text-[#737477]
//               "
//             >
//               We are passionate education dedicated to providing high-quality
//               resources for learners of all backgrounds.
//             </p>
//           </div>

//           {/* ================= OUR CAMPUS ================= */}
//           <div>
//             <h4
//               className="
//                 mb-[46px]
//                 inline-block
//                 font-body
//                 text-[20px]
//                 font-medium
//                 leading-[26px]
//                 text-white
//                 underline
//                 underline-offset-4
//               "
//             >
//               Our Campus
//             </h4>

//             <ul className="flex flex-col">
//               {campusLinks.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="
//                       block
//                       py-[8px]
//                       font-body
//                       text-[16px]
//                       font-normal
//                       leading-[25px]
//                       text-[#737477]
//                       transition-colors
//                       hover:text-white
//                     "
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ================= OUR PAGES ================= */}
//           <div>
//             <h4
//               className="
//                 mb-[46px]
//                 inline-block
//                 font-body
//                 text-[20px]
//                 font-medium
//                 leading-[26px]
//                 text-white
//                 underline
//                 underline-offset-4
//               "
//             >
//               Our Pages
//             </h4>

//             <ul className="flex flex-col">
//               {pageLinks.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="
//                       block
//                       py-[8px]
//                       font-body
//                       text-[16px]
//                       font-normal
//                       leading-[25px]
//                       text-[#737477]
//                       transition-colors
//                       hover:text-white
//                     "
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ================= RECENT POSTS ================= */}
//           <div>
//             <h4
//               className="
//                 mb-[46px]
//                 inline-block
//                 font-body
//                 text-[20px]
//                 font-medium
//                 leading-[26px]
//                 text-white
//                 underline
//                 underline-offset-4
//               "
//             >
//               Recent Posts
//             </h4>

//             <div className="flex flex-col gap-[28px]">
//               {posts.map((post) => (
//                 <a
//                   href="#"
//                   key={post.title}
//                   className="
//                     group
//                     flex
//                     items-start
//                     gap-[20px]
//                   "
//                 >
//                   {/* Figma uses 190x80 post images */}
//                   <div
//                     className="
//                       h-[80px]
//                       w-[80px]
//                       shrink-0
//                       overflow-hidden
//                       bg-[#242424]
//                     "
//                   >
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="
//                         h-full
//                         w-full
//                         object-cover
//                         transition-transform
//                         duration-300
//                         group-hover:scale-105
//                       "
//                     />
//                   </div>

//                   <div className="pt-[1px]">
//                     <div className="mb-[10px] flex items-center gap-[8px]">
//                       <span className="text-[#737477]">›</span>

//                       <p
//                         className="
//                           font-body
//                           text-[14px]
//                           font-normal
//                           leading-[25px]
//                           text-[#737477]
//                         "
//                       >
//                         {post.date}
//                       </p>
//                     </div>

//                     <p
//                       className="
//                         max-w-[236px]
//                         font-body
//                         text-[15.75px]
//                         font-normal
//                         leading-[18px]
//                         capitalize
//                         text-white
//                       "
//                     >
//                       {post.title}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= COPYRIGHT ================= */}
//       <div className="border-t border-[#242424]">
//         <div
//           className="
//             mx-auto
//             flex
//             min-h-[64px]
//             w-full
//             max-w-[1290px]
//             items-center
//             px-5
//           "
//         >
//           <p
//             className="
//               font-body
//               text-[16px]
//               font-normal
//               leading-[29px]
//               text-[#737477]
//             "
//           >
//             Copyright @ 2024. All Rights Reserved by{" "}
//             <span className="text-white">Umaio</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function LandingPage() {
  return (
    <div className="font-body text-black">
      <style>{fontImport}</style>
      {/* <Navbar /> */}
      <Hero />
      <NoticeAndPublication />
      <About />
      <StatStrip />
      <FindDepartment />
      <Admission />
      <OurFacilities />
      <PrincipalMessage />
      <CampusLife />
      <AlumniEvents />
      <NewsSection />
      <Testimonials />
    </div>
  );
}
