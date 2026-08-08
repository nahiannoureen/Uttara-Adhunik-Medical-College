// "use client";
// import { useState } from "react";
// import Link from "next/link";

// import TopBar from "@/components/Topbar";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   Search,
//   ChevronDown,
//   AlignJustify,
//   Clock,
//   ArrowRight,
//   Star,
//   Menu,
//   // Facebook,
//   // Youtube,
//   // Linkedin,
//   // Instagram,
//   X,
// } from "lucide-react";
// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

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
//           <Link
//             key={label}
//             href="about/overview"
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
//           </Link>
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
//             <Link
//               key={label}
//               href="about/overview"
//               className="py-2 border-b border-black/10"
//             >
//               {label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function Navbar() {
//   return (
//     <header className="relative w-full">
//       <TopBar />
//       <MainNav />
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";

import TopBar from "@/components/Topbar";
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
  X,
} from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

function MainNav() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About UAMC",
    "Facilities",
    "Admission",
    "Notice & Media",
    "Career",
  ];

  return (
    <div className="relative flex items-center justify-between gap-6 bg-white px-6 py-4 md:px-20">
      {/* Logo lockup */}
      <Link href="#home" className="flex shrink-0 items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center">
          <img
            src="/logo.png"
            alt="Uttara Adhunik Medical College logo"
            className="h-12 w-12 object-contain"
          />
        </div>

        <div className="font-display font-bold leading-tight">
          <div>Uttara Adhunik</div>
          <div>Medical College (UAMC)</div>
        </div>
      </Link>

      {/* Desktop links */}
      <nav className="hidden items-center gap-1 font-display text-sm uppercase tracking-wide lg:flex">
        {links.map((label, i) => (
          <Link
            key={label}
            href="about/overview"
            className={`flex items-center gap-1.5 px-4 py-2.5 ${
              i === 0
                ? "border-b-2 font-normal"
                : "text-black hover:text-[#018837]"
            }`}
            style={i === 0 ? { borderColor: GREEN, color: GREEN } : {}}
          >
            {label}

            {i > 0 && i < 4 && (
              <ChevronDown className="h-4 w-4" strokeWidth={2} />
            )}
          </Link>
        ))}
      </nav>

      {/* Desktop actions */}
      <div className="hidden shrink-0 items-center gap-4 text-black lg:flex">
        <Search className="h-5 w-5 cursor-pointer" strokeWidth={2} />

        <AlignJustify className="h-5 w-5 cursor-pointer" strokeWidth={2} />
      </div>

      {/* Mobile menu button */}
      <button
        className="text-black lg:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-30 flex flex-col gap-1 bg-white px-6 py-4 font-display text-sm uppercase shadow-lg lg:hidden">
          {links.map((label) => (
            <Link
              key={label}
              href="about/overview"
              className="border-b border-black/10 py-2"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  return (
    <>
      <TopBar />
      <MainNav />
    </>
  );
}
