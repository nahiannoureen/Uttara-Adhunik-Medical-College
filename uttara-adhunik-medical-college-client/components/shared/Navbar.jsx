// "use client";

// import { useState } from "react";
// import Link from "next/link";

// import {
//   MapPin,
//   Mail,
//   Phone,
//   Search,
//   ChevronDown,
//   AlignJustify,
//   Menu,
//   X,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaYoutube,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// /* =========================================================
//    TOP HEADER
// ========================================================= */

// function TopHeader() {
//   return (
//     <div
//       className="w-full border-b border-dashed"
//       style={{
//         backgroundColor: "#FCFBFB",
//         borderColor: "rgba(0,0,0,0.2)",
//       }}
//     >
//       <div className="mx-auto flex min-h-[58px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-0">
//         {/* LEFT INFORMATION */}
//         <div className="flex items-center gap-5">
//           {/* Location */}
//           <div className="flex h-[30px] items-center gap-[10px]">
//             <MapPin
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model
//               Town
//             </span>
//           </div>

//           {/* Email */}
//           <div className="hidden items-center gap-[10px] md:flex">
//             <Mail
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               info@uamc.com
//             </span>
//           </div>

//           {/* Phone */}
//           <div className="hidden items-center gap-[10px] lg:flex">
//             <Phone
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               +880 1700-220000
//             </span>
//           </div>
//         </div>

//         {/* RIGHT PORTAL LINKS */}
//         <div className="hidden items-center gap-1 lg:flex">
//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444]"
//           >
//             Student Portal
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444]"
//           >
//             Faculty Portal
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444]"
//           >
//             Notice
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444]"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    MAIN NAVIGATION
// ========================================================= */

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
//     <div className="relative w-full bg-white">
//       <div className="mx-auto flex min-h-[106.23px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-0">
//         {/* =================================================
//             LEFT SIDE
//         ================================================= */}

//         <div className="flex items-center gap-[30px]">
//           {/* LOGO + COLLEGE NAME */}
//           <Link href="/" className="flex items-center gap-[8.28px]">
//             {/* Change /logo.png if your logo has another filename */}
//             <img
//               src="/logo.png"
//               alt="Uttara Adhunik Medical College"
//               className="h-[66.23px] w-[66.23px] shrink-0 object-contain"
//             />

//             <div className="font-display text-[20.6954px] font-bold leading-[25px] text-black">
//               <div>Uttara Adhunik</div>
//               <div>Medical College (UAMC)</div>
//             </div>
//           </Link>

//           {/* VERTICAL DIVIDER */}
//           <div className="hidden h-[20px] w-px bg-[#444444] lg:block" />

//           {/* =================================================
//               SOCIAL MEDIA
//           ================================================= */}

//           <div className="hidden items-center gap-[16.13px] lg:flex">
//             {/* Facebook */}
//             <a
//               href="https://www.facebook.com/profile.php?id=61560225192182"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaFacebookF className="h-[13px] w-[13px]" />
//             </a>

//             {/* YouTube */}
//             <a
//               href="https://www.youtube.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="YouTube"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaYoutube className="h-[13px] w-[13px]" />
//             </a>

//             {/* LinkedIn */}
//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaLinkedinIn className="h-[13px] w-[13px]" />
//             </a>

//             {/* Instagram */}
//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaInstagram className="h-[13px] w-[13px]" />
//             </a>
//           </div>
//         </div>

//         {/* =================================================
//             DESKTOP NAVIGATION
//         ================================================= */}

//         <nav className="hidden items-center lg:flex">
//           {links.map((label, i) => {
//             const hasDropdown = i > 0 && i < 4;

//             let href = "#";

//             if (label === "Home") {
//               href = "/";
//             }

//             if (label === "About UAMC") {
//               href = "/about/overview";
//             }

//             return (
//               <Link
//                 key={label}
//                 href={href}
//                 className={`flex h-[44px] items-center gap-[10px] px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] ${
//                   i === 0 ? "border-b" : ""
//                 }`}
//                 style={
//                   i === 0
//                     ? {
//                         color: GREEN,
//                         borderColor: GREEN,
//                       }
//                     : {
//                         color: "#000000",
//                       }
//                 }
//               >
//                 <span>{label}</span>

//                 {hasDropdown && (
//                   <ChevronDown className="h-6 w-6" strokeWidth={2} />
//                 )}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* =================================================
//             RIGHT ACTIONS
//         ================================================= */}

//         <div className="flex items-center gap-5">
//           {/* Search */}
//           <button
//             type="button"
//             aria-label="Search"
//             className="text-black transition-colors hover:text-[#018837]"
//           >
//             <Search className="h-6 w-6" strokeWidth={2} />
//           </button>

//           {/* Desktop menu/alignment icon */}
//           <button
//             type="button"
//             aria-label="Menu"
//             className="hidden text-black transition-colors hover:text-[#018837] lg:block"
//           >
//             <AlignJustify className="h-6 w-6" strokeWidth={2} />
//           </button>

//           {/* Mobile menu */}
//           <button
//             type="button"
//             aria-label="Toggle menu"
//             className="text-black lg:hidden"
//             onClick={() => setOpen((value) => !value)}
//           >
//             {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* =================================================
//           MOBILE NAVIGATION
//       ================================================= */}

//       {open && (
//         <div className="absolute left-0 right-0 top-full z-50 flex flex-col border-t border-black/10 bg-white px-6 py-4 shadow-lg lg:hidden">
//           {links.map((label) => {
//             let href = "#";

//             if (label === "Home") {
//               href = "/";
//             }

//             if (label === "About UAMC") {
//               href = "/about/overview";
//             }

//             return (
//               <Link
//                 key={label}
//                 href={href}
//                 onClick={() => setOpen(false)}
//                 className="border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] text-black"
//               >
//                 {label}
//               </Link>
//             );
//           })}

//           {/* Mobile social icons */}
//           <div className="mt-5 flex items-center gap-5">
//             <a
//               href="https://www.facebook.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaFacebookF className="h-4 w-4" />
//             </a>

//             <a
//               href="https://www.youtube.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="YouTube"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaYoutube className="h-4 w-4" />
//             </a>

//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaLinkedinIn className="h-4 w-4" />
//             </a>

//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaInstagram className="h-4 w-4" />
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* =========================================================
//    NAVBAR
// ========================================================= */

// export default function Navbar() {
//   return (
//     <header className="w-full">
//       <TopHeader />
//       <MainNav />
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";

import {
  MapPin,
  Mail,
  Phone,
  Search,
  ChevronDown,
  AlignJustify,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

/* =========================================================
   DROPDOWN DATA
========================================================= */

const dropdownMenus = {
  "About UAMC": [
    {
      label: "Overview",
      href: "/about/overview",
    },
    {
      label: "History of UAMC",
      href: "/about/history",
    },
    {
      label: "Vision & Mission",
      href: "/about/vision-mission",
    },
    {
      label: "Aim & Objective",
      href: "/about/aim-objective",
    },
    {
      label: "Organizational Structure",
      href: "/about/organizational-structure",
    },
    {
      label: "Founder Members",
      href: "/about/founder-members",
    },
    {
      label: "EC Members",
      href: "/about/ec-members",
    },
    {
      label: "GB Members",
      href: "/about/gb-members",
    },
  ],

  Facilities: [
    {
      label: "Hospital Service",
      href: "/facilities/hospital-service",
    },
    {
      label: "Departments",
      href: "/facilities/departments",
    },
    {
      label: "Library",
      href: "/facilities/library",
    },
    {
      label: "Medical Education Unit",
      href: "/facilities/medical-education-unit",
    },
    {
      label: "Training",
      href: "/facilities/training",
    },
    {
      label: "Publications",
      href: "/facilities/publications",
    },
    {
      label: "Seminar",
      href: "/facilities/seminar",
    },
    {
      label: "Hostel",
      href: "/facilities/hostel",
    },
    {
      label: "Laboratory",
      href: "/facilities/laboratory",
    },
    {
      label: "Cafeteria",
      href: "/facilities/cafeteria",
    },
  ],

  Admission: [
    {
      label: "Admission Procedure & Fees",
      href: "/admission/procedure-fees",
    },
    {
      label: "Admission Papers",
      href: "/admission/papers",
    },
    {
      label: "Application Form",
      href: "/admission/application-form",
    },
    {
      label: "Admission Results",
      href: "/admission/results",
    },
    {
      label: "Online Registration",
      href: "/admission/online-registration",
    },
  ],
};

/* =========================================================
   TOP HEADER
========================================================= */

function TopHeader() {
  return (
    <div
      className="w-full border-b border-dashed"
      style={{
        backgroundColor: "#FCFBFB",
        borderColor: "rgba(0,0,0,0.2)",
      }}
    >
      <div className="mx-auto flex min-h-[42px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-10 xl:px-[60px]">
        {/* LEFT INFORMATION */}
        <div className="flex items-center gap-5">
          {/* Location */}
          <div className="flex items-center gap-[10px]">
            <MapPin
              className="h-5 w-5 shrink-0"
              strokeWidth={1.67}
              style={{ color: "rgba(0,0,0,0.5)" }}
            />

            <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
              House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model
              Town
            </span>
          </div>

          {/* Email */}
          <div className="hidden items-center gap-[10px] md:flex">
            <Mail
              className="h-5 w-5 shrink-0"
              strokeWidth={1.67}
              style={{ color: "rgba(0,0,0,0.5)" }}
            />

            <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
              info@uamc.com
            </span>
          </div>

          {/* Phone */}
          <div className="hidden items-center gap-[10px] lg:flex">
            <Phone
              className="h-5 w-5 shrink-0"
              strokeWidth={1.67}
              style={{ color: "rgba(0,0,0,0.5)" }}
            />

            <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
              +880 1700-220000
            </span>
          </div>
        </div>

        {/* RIGHT PORTAL LINKS */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="#"
            className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
          >
            Student Portal
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
          >
            Faculty Portal
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
          >
            Notice
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   DESKTOP DROPDOWN
========================================================= */

function DesktopDropdown({ label, items, isOpen, onToggle }) {
  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex h-[44px] items-center gap-[7px] px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] text-black transition-colors hover:text-[#018837]"
      >
        <span>{label}</span>

        <ChevronDown
          className={`h-[20px] w-[20px] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={2}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute top-[calc(100%+8px)] z-[100] overflow-hidden border border-[#FECD2F] bg-[#4D4D4D]/90 shadow-[0_8px_25px_rgba(0,0,0,0.18)] ${
            label === "About UAMC"
              ? "left-0 w-[320px]"
              : label === "Facilities"
                ? "left-1/2 w-[320px] -translate-x-1/2"
                : "right-0 w-[345px]"
          }`}
        >
          {items.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`group flex min-h-[52px] items-center justify-between gap-4 px-4 py-3 text-white transition-colors hover:bg-[#3F3F3F] ${
                index !== items.length - 1 ? "border-b border-[#FECD2F]" : ""
              }`}
              onClick={onToggle}
            >
              <span className="font-body text-[15px] font-medium leading-[20px]">
                {item.label}
              </span>

              <ArrowRight
                className="h-[21px] w-[21px] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   MAIN NAVIGATION
========================================================= */

function MainNav() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const simpleLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Notice & Media",
      href: "/notice-media",
    },
    {
      label: "Career",
      href: "/career",
    },
  ];

  const toggleDropdown = (label) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  const toggleMobileDropdown = (label) => {
    setMobileDropdown((current) => (current === label ? null : label));
  };

  return (
    <div className="relative w-full border-b border-black/10 bg-white">
      <div className="mx-auto flex min-h-[88px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-10 xl:px-[60px]">
        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="flex items-center gap-[30px]">
          {/* LOGO + COLLEGE NAME */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-[8.28px]"
            onClick={() => setOpenDropdown(null)}
          >
            <img
              src="/logo.png"
              alt="Uttara Adhunik Medical College"
              className="h-[66.23px] w-[66.23px] shrink-0 object-contain"
            />

            <div className="font-display text-[20.6954px] font-bold leading-[25px] text-black">
              <div>Uttara Adhunik</div>
              <div>Medical College (UAMC)</div>
            </div>
          </Link>

          {/* VERTICAL DIVIDER */}
          <div className="hidden h-[20px] w-px bg-[#444444] lg:block" />

          {/* SOCIAL MEDIA */}
          <div className="hidden items-center gap-[16.13px] lg:flex">
            <a
              href="https://www.facebook.com/profile.php?id=61560225192182"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-black transition-colors duration-200 hover:text-[#018837]"
            >
              <FaFacebookF className="h-[13px] w-[13px]" />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-black transition-colors duration-200 hover:text-[#018837]"
            >
              <FaYoutube className="h-[13px] w-[13px]" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black transition-colors duration-200 hover:text-[#018837]"
            >
              <FaLinkedinIn className="h-[13px] w-[13px]" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black transition-colors duration-200 hover:text-[#018837]"
            >
              <FaInstagram className="h-[13px] w-[13px]" />
            </a>
          </div>
        </div>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="hidden items-center lg:flex">
          {/* HOME */}
          <Link
            href="/"
            onClick={() => setOpenDropdown(null)}
            className="flex h-[44px] items-center border-b px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em]"
            style={{
              color: GREEN,
              borderColor: GREEN,
            }}
          >
            Home
          </Link>

          {/* ABOUT DROPDOWN */}
          <DesktopDropdown
            label="About UAMC"
            items={dropdownMenus["About UAMC"]}
            isOpen={openDropdown === "About UAMC"}
            onToggle={() => toggleDropdown("About UAMC")}
          />

          {/* FACILITIES DROPDOWN */}
          <DesktopDropdown
            label="Facilities"
            items={dropdownMenus.Facilities}
            isOpen={openDropdown === "Facilities"}
            onToggle={() => toggleDropdown("Facilities")}
          />

          {/* ADMISSION DROPDOWN */}
          <DesktopDropdown
            label="Admission"
            items={dropdownMenus.Admission}
            isOpen={openDropdown === "Admission"}
            onToggle={() => toggleDropdown("Admission")}
          />

          {/* NOTICE & MEDIA */}
          <Link
            href="/notice-media"
            onClick={() => setOpenDropdown(null)}
            className="flex h-[44px] items-center px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] text-black transition-colors hover:text-[#018837]"
          >
            Notice & Media
          </Link>

          {/* CAREER */}
          <Link
            href="/career"
            onClick={() => setOpenDropdown(null)}
            className="flex h-[44px] items-center px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] text-black transition-colors hover:text-[#018837]"
          >
            Career
          </Link>
        </nav>

        {/* =================================================
            RIGHT ACTIONS
        ================================================= */}

        <div className="flex items-center gap-5">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="text-black transition-colors hover:text-[#018837]"
          >
            <Search className="h-6 w-6" strokeWidth={2} />
          </button>

          {/* Desktop menu/alignment icon */}
          <button
            type="button"
            aria-label="Menu"
            className="hidden text-black transition-colors hover:text-[#018837] lg:block"
          >
            <AlignJustify className="h-6 w-6" strokeWidth={2} />
          </button>

          {/* Mobile menu */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="text-black lg:hidden"
            onClick={() => {
              setMobileOpen((value) => !value);
              setMobileDropdown(null);
            }}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full z-[200] border-t border-black/10 bg-white px-6 py-4 shadow-lg lg:hidden">
          {/* HOME */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] text-black"
          >
            Home
          </Link>

          {/* MOBILE DROPDOWNS */}
          {Object.entries(dropdownMenus).map(([label, items]) => {
            const isOpen = mobileDropdown === label;

            return (
              <div key={label} className="border-b border-black/10">
                {/* Trigger */}
                <button
                  type="button"
                  onClick={() => toggleMobileDropdown(label)}
                  className="flex w-full items-center justify-between py-3 font-display text-sm uppercase tracking-[0.02em] text-black"
                >
                  <span>{label}</span>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Items */}
                {isOpen && (
                  <div className="mb-3 overflow-hidden border border-[#FECD2F] bg-[#4D4D4D]/80">
                    {items.map((item, index) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileDropdown(null);
                        }}
                        className={`flex items-center justify-between px-4 py-3 text-white ${
                          index !== items.length - 1
                            ? "border-b border-[#FECD2F]"
                            : ""
                        }`}
                      >
                        <span className="font-body text-[14px]">
                          {item.label}
                        </span>

                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* NOTICE & MEDIA */}
          <Link
            href="/notice-media"
            onClick={() => setMobileOpen(false)}
            className="flex border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] text-black"
          >
            Notice & Media
          </Link>

          {/* CAREER */}
          <Link
            href="/career"
            onClick={() => setMobileOpen(false)}
            className="flex border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] text-black"
          >
            Career
          </Link>

          {/* MOBILE SOCIAL ICONS */}
          <div className="mt-5 flex items-center gap-5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-black hover:text-[#018837]"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-black hover:text-[#018837]"
            >
              <FaYoutube className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black hover:text-[#018837]"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black hover:text-[#018837]"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  return (
    <header className="relative z-[100] w-full">
      <TopHeader />
      <MainNav />
    </header>
  );
}
