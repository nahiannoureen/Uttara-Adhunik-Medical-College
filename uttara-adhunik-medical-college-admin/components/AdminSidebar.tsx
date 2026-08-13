// // "use client";

// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { ChevronDown, HomeIcon } from "lucide-react";
// // import { usePathname } from "next/navigation";
// // import type { ReactNode } from "react";

// // interface NavItem {
// //   label: string;
// //   href: string;
// //   icon: ReactNode;
// // }

// // interface NavGroup {
// //   label: string;
// //   icon: ReactNode;
// //   items: NavItem[];
// //   isOpen?: boolean;
// // }

// // const defaultNavGroups: NavGroup[] = [
// //   {
// //     label: "Dashboard",
// //     icon: (
// //       <svg
// //         className="w-5 h-5"
// //         fill="none"
// //         stroke="currentColor"
// //         viewBox="0 0 24 24"
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           strokeWidth={2}
// //           d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4V3"
// //         />
// //       </svg>
// //     ),
// //     items: [
// //       {
// //         label: "Dashboard",
// //         href: "/admin",
// //         icon: <span className="w-2 h-2 bg-blue-400 rounded-full"></span>,
// //       },
// //     ],
// //   },
// //   {
// //     label: "Home Page",
// //     icon: <HomeIcon className="w-5 h-5" />,
// //     items: [
// //       {
// //         label: "Hero",
// //         href: "/admin/homepage/hero",
// //         icon: <span className="w-2 h-2 bg-purple-400 rounded-full"></span>,
// //       },
// //       {
// //         label: "Notice",
// //         href: "/admin/homepage/notice",
// //         icon: <span className="w-2 h-2 bg-green-400 rounded-full"></span>,
// //       },
// //       {
// //         label: "Publication",
// //         href: "/admin/homepage/publication",
// //         icon: <span className="w-2 h-2 bg-green-400 rounded-full"></span>,
// //       },
// //       {
// //         label: "Services",
// //         href: "/admin/services",
// //         icon: <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>,
// //       },
// //       {
// //         label: "Buying House",
// //         href: "/admin/buying-house",
// //         icon: <span className="w-2 h-2 bg-blue-400 rounded-full"></span>,
// //       },
// //       {
// //         label: "Catalog",
// //         href: "/admin/catalog",
// //         icon: <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>,
// //       },
// //     ],
// //   },
// //   {
// //     label: "About Page",
// //     icon: (
// //       <svg
// //         className="w-5 h-5"
// //         fill="none"
// //         stroke="currentColor"
// //         viewBox="0 0 24 24"
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           strokeWidth={2}
// //           d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4V3"
// //         />
// //       </svg>
// //     ),
// //     items: [
// //       {
// //         label: "Overview",
// //         href: "/admin/about/overview/hero",
// //         icon: <span className="w-2 h-2 bg-purple-400 rounded-full"></span>,
// //       },
// //       {
// //         label: "We Work",
// //         href: "/admin/we-work",
// //         icon: <span className="w-2 h-2 bg-green-400 rounded-full"></span>,
// //       },
// //     ],
// //   },
// //   {
// //     label: "Buying House",
// //     icon: (
// //       <svg
// //         className="w-5 h-5"
// //         fill="none"
// //         stroke="currentColor"
// //         viewBox="0 0 24 24"
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           strokeWidth={2}
// //           d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4V3"
// //         />
// //       </svg>
// //     ),
// //     items: [
// //       {
// //         label: "Products",
// //         href: "/admin/products",
// //         icon: <span className="w-2 h-2 bg-purple-400 rounded-full"></span>,
// //       },
// //     ],
// //   },
// //   {
// //     label: "Factory Machinery",
// //     icon: (
// //       <svg
// //         className="w-5 h-5"
// //         fill="none"
// //         stroke="currentColor"
// //         viewBox="0 0 24 24"
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           strokeWidth={2}
// //           d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4V3"
// //         />
// //       </svg>
// //     ),
// //     items: [
// //       {
// //         label: "Advance Machinery",
// //         href: "/admin/advance-machinery",
// //         icon: <span className="w-2 h-2 bg-purple-400 rounded-full"></span>,
// //       },
// //       {
// //         label: "Factory Info",
// //         href: "/admin/factory-info",
// //         icon: <span className="w-2 h-2 bg-purple-400 rounded-full"></span>,
// //       },
// //       {
// //         label: "Machinery Inventory",
// //         href: "/admin/machinery-inventory",
// //         icon: <span className="w-2 h-2 bg-purple-400 rounded-full"></span>,
// //       },
// //     ],
// //   },
// //   {
// //     label: "Contact",
// //     icon: (
// //       <svg
// //         className="w-5 h-5"
// //         fill="none"
// //         stroke="currentColor"
// //         viewBox="0 0 24 24"
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           strokeWidth={2}
// //           d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4V3"
// //         />
// //       </svg>
// //     ),
// //     items: [
// //       {
// //         label: "Contact",
// //         href: "/admin/contact",
// //         icon: <span className="w-2 h-2 bg-purple-400 rounded-full"></span>,
// //       },
// //     ],
// //   },
// // ];

// // export default function AdminSidebar() {
// //   const pathname = usePathname();
// //   const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

// //   // Initialize open groups with Create Section open by default
// //   useEffect(() => {
// //     setOpenGroups({
// //       "Create Section": true,
// //     });
// //   }, []);

// //   const toggleGroup = (label: string) => {
// //     setOpenGroups((prev) => ({
// //       ...prev,
// //       [label]: !prev[label],
// //     }));
// //   };

// //   const isItemActive = (href: string) => {
// //     if (href === "/admin") {
// //       return pathname === "/admin";
// //     }
// //     return pathname?.startsWith(href);
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("adminAuth");
// //     window.location.href = "/";
// //   };

// //   return (
// //     <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto fixed h-screen flex flex-col">
// //       {/* Logo */}
// //       <div className="p-6 border-b border-gray-200">
// //         <Link href="/admin" className="flex items-center gap-2">
// //           <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
// //             <span className="text-white font-bold text-lg">AS</span>
// //           </div>
// //           <div>
// //             <p className="font-bold text-gray-900">ASBD </p>
// //             <p className="text-xs text-gray-600">AdminPanel-v1.0</p>
// //           </div>
// //         </Link>
// //       </div>

// //       {/* Navigation */}
// //       <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
// //         {defaultNavGroups.map((group) => {
// //           const isGroupOpen = openGroups[group.label];
// //           const hasMultipleItems = group.items.length > 1;
// //           const firstItemActive =
// //             group.items.length > 0 && isItemActive(group.items[0].href);
// //           const anyItemActive = group.items.some((item) =>
// //             isItemActive(item.href),
// //           );

// //           return (
// //             <div key={group.label} className="mb-1">
// //               {hasMultipleItems ? (
// //                 // Collapsible Group
// //                 <>
// //                   <button
// //                     onClick={() => toggleGroup(group.label)}
// //                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium group ${
// //                       anyItemActive
// //                         ? "bg-blue-50 text-blue-700"
// //                         : "text-gray-700 hover:bg-gray-50"
// //                     }`}
// //                   >
// //                     <span
// //                       className={`${anyItemActive ? "text-blue-600" : "text-gray-600 group-hover:text-blue-600"}`}
// //                     >
// //                       {group.icon}
// //                     </span>
// //                     <span className="flex-1 text-left">{group.label}</span>
// //                     <ChevronDown
// //                       className={`w-4 h-4 transition-transform duration-200 ${isGroupOpen ? "rotate-180" : ""}`}
// //                     />
// //                   </button>

// //                   {isGroupOpen && (
// //                     <div className="mt-1 ml-4 pl-4 border-l-2 border-gray-200 space-y-1">
// //                       {group.items.map((item) => {
// //                         const isActive = isItemActive(item.href);
// //                         return (
// //                           <Link
// //                             key={item.href}
// //                             href={item.href}
// //                             className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${
// //                               isActive
// //                                 ? "text-blue-700 bg-blue-50 font-medium"
// //                                 : "text-gray-700 hover:bg-gray-50"
// //                             }`}
// //                           >
// //                             {item.icon}
// //                             {item.label}
// //                           </Link>
// //                         );
// //                       })}
// //                     </div>
// //                   )}
// //                 </>
// //               ) : (
// //                 // Single Item (no dropdown)
// //                 <Link
// //                   href={group.items[0].href}
// //                   className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium group ${
// //                     firstItemActive
// //                       ? "bg-blue-50 text-blue-700"
// //                       : "text-gray-700 hover:bg-gray-50"
// //                   }`}
// //                 >
// //                   <span
// //                     className={`${firstItemActive ? "text-blue-600" : "text-gray-600 group-hover:text-blue-600"}`}
// //                   >
// //                     {group.icon}
// //                   </span>
// //                   {group.label}
// //                 </Link>
// //               )}
// //             </div>
// //           );
// //         })}
// //       </nav>

// //       {/* Bottom Links */}
// //       <div className="p-4 border-t border-gray-200 space-y-2">
// //         <button
// //           onClick={handleLogout}
// //           className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-700 hover:bg-red-50 rounded-lg transition-colors font-medium"
// //         >
// //           <svg
// //             className="w-5 h-5"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
// //             />
// //           </svg>
// //           Logout
// //         </button>
// //       </div>
// //     </aside>
// //   );
// // }

// /////////

// // "use client";

// // import { useEffect, useState } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import {
// //   ChevronDown,
// //   Home,
// //   Info,
// //   Building2,
// //   GraduationCap,
// //   LogOut,
// // } from "lucide-react";
// // import type { ReactNode } from "react";

// // interface NavItem {
// //   label: string;
// //   href: string;
// //   icon: ReactNode;
// // }

// // interface NavGroup {
// //   label: string;
// //   icon: ReactNode;
// //   items: NavItem[];
// // }

// // const defaultNavGroups: NavGroup[] = [
// //   // Dashboard
// //   {
// //     label: "Dashboard",
// //     icon: <Home className="w-5 h-5" />,
// //     items: [
// //       {
// //         label: "Dashboard",
// //         href: "/admin",
// //         icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
// //       },
// //     ],
// //   },

// //   // Home Page
// //   {
// //     label: "Home Page",
// //     icon: <Home className="w-5 h-5" />,
// //     items: [
// //       {
// //         label: "Hero",
// //         href: "/admin/homepage/hero",
// //         icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
// //       },
// //       {
// //         label: "Notice",
// //         href: "/admin/homepage/notice",
// //         icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
// //       },
// //       {
// //         label: "Publication",
// //         href: "/admin/homepage/publication",
// //         icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
// //       },
// //       {
// //         label: "Services",
// //         href: "/admin/services",
// //         icon: <span className="w-2 h-2 bg-indigo-400 rounded-full" />,
// //       },
// //       {
// //         label: "Buying House",
// //         href: "/admin/buying-house",
// //         icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
// //       },
// //       {
// //         label: "Catalog",
// //         href: "/admin/catalog",
// //         icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
// //       },
// //     ],
// //   },

// //   // About
// //   {
// //     label: "About",
// //     icon: <Info className="w-5 h-5" />,
// //     items: [
// //       {
// //         label: "Overview",
// //         href: "/admin/about/overview",
// //         icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
// //       },
// //       {
// //         label: "History of UAMC",
// //         href: "/admin/about/history",
// //         icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
// //       },
// //       {
// //         label: "Vision & Mission",
// //         href: "/admin/about/vision-mission",
// //         icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
// //       },
// //       {
// //         label: "Aim & Objective",
// //         href: "/admin/about/aim-objective",
// //         icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
// //       },
// //       {
// //         label: "Organizational Structure",
// //         href: "/admin/about/organizational-structure",
// //         icon: <span className="w-2 h-2 bg-indigo-400 rounded-full" />,
// //       },
// //       {
// //         label: "Founder Members",
// //         href: "/admin/about/founder-members",
// //         icon: <span className="w-2 h-2 bg-pink-400 rounded-full" />,
// //       },
// //       {
// //         label: "EC Members",
// //         href: "/admin/about/ec-members",
// //         icon: <span className="w-2 h-2 bg-orange-400 rounded-full" />,
// //       },
// //       {
// //         label: "GB Members",
// //         href: "/admin/about/gb-members",
// //         icon: <span className="w-2 h-2 bg-teal-400 rounded-full" />,
// //       },
// //     ],
// //   },

// //   // Facilities
// //   {
// //     label: "Facilities",
// //     icon: <Building2 className="w-5 h-5" />,
// //     items: [
// //       {
// //         label: "Hospital Service",
// //         href: "/admin/facilities/hospital-service",
// //         icon: <span className="w-2 h-2 bg-red-400 rounded-full" />,
// //       },
// //       {
// //         label: "Departments",
// //         href: "/admin/facilities/departments",
// //         icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
// //       },
// //       {
// //         label: "Library",
// //         href: "/admin/facilities/library",
// //         icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
// //       },
// //       {
// //         label: "Medical Education Unit",
// //         href: "/admin/facilities/medical-education-unit",
// //         icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
// //       },
// //       {
// //         label: "Training",
// //         href: "/admin/facilities/training",
// //         icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
// //       },
// //       {
// //         label: "Publications",
// //         href: "/admin/facilities/publications",
// //         icon: <span className="w-2 h-2 bg-indigo-400 rounded-full" />,
// //       },
// //       {
// //         label: "Seminar",
// //         href: "/admin/facilities/seminar",
// //         icon: <span className="w-2 h-2 bg-pink-400 rounded-full" />,
// //       },
// //       {
// //         label: "Hostel",
// //         href: "/admin/facilities/hostel",
// //         icon: <span className="w-2 h-2 bg-orange-400 rounded-full" />,
// //       },
// //       {
// //         label: "Laboratory",
// //         href: "/admin/facilities/laboratory",
// //         icon: <span className="w-2 h-2 bg-teal-400 rounded-full" />,
// //       },
// //       {
// //         label: "Cafeteria",
// //         href: "/admin/facilities/cafeteria",
// //         icon: <span className="w-2 h-2 bg-cyan-400 rounded-full" />,
// //       },
// //     ],
// //   },

// //   // Admission
// //   {
// //     label: "Admission",
// //     icon: <GraduationCap className="w-5 h-5" />,
// //     items: [
// //       {
// //         label: "Admission Procedure & Fees",
// //         href: "/admin/admission/procedure-fees",
// //         icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
// //       },
// //       {
// //         label: "Admission Papers",
// //         href: "/admin/admission/papers",
// //         icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
// //       },
// //       {
// //         label: "Application Form",
// //         href: "/admin/admission/application-form",
// //         icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
// //       },
// //       {
// //         label: "Admission Results",
// //         href: "/admin/admission/results",
// //         icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
// //       },
// //       {
// //         label: "Online Registration",
// //         href: "/admin/admission/online-registration",
// //         icon: <span className="w-2 h-2 bg-indigo-400 rounded-full" />,
// //       },
// //     ],
// //   },

// //   // Contact
// //   {
// //     label: "Contact",
// //     icon: (
// //       <svg
// //         className="w-5 h-5"
// //         fill="none"
// //         stroke="currentColor"
// //         viewBox="0 0 24 24"
// //       >
// //         <path
// //           strokeLinecap="round"
// //           strokeLinejoin="round"
// //           strokeWidth={2}
// //           d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
// //         />
// //       </svg>
// //     ),
// //     items: [
// //       {
// //         label: "Contact",
// //         href: "/admin/contact",
// //         icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
// //       },
// //     ],
// //   },
// // ];

// // export default function AdminSidebar() {
// //   const pathname = usePathname();

// //   const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

// //   /*
// //    * Automatically open the group containing the current page.
// //    * This also fixes the old "Create Section" initialization.
// //    */
// //   useEffect(() => {
// //     const initialOpenGroups: Record<string, boolean> = {};

// //     defaultNavGroups.forEach((group) => {
// //       const hasActiveItem = group.items.some((item) => isItemActive(item.href));

// //       initialOpenGroups[group.label] = hasActiveItem;
// //     });

// //     setOpenGroups(initialOpenGroups);
// //   }, [pathname]);

// //   const toggleGroup = (label: string) => {
// //     setOpenGroups((prev) => ({
// //       ...prev,
// //       [label]: !prev[label],
// //     }));
// //   };

// //   const isItemActive = (href: string) => {
// //     if (href === "/admin") {
// //       return pathname === "/admin";
// //     }

// //     return pathname === href || pathname?.startsWith(`${href}/`);
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("adminAuth");
// //     window.location.href = "/";
// //   };

// //   return (
// //     <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto fixed left-0 top-0 h-screen flex flex-col">
// //       {/* Logo */}
// //       <div className="p-6 border-b border-gray-200">
// //         <Link href="/admin" className="flex items-center gap-2">
// //           <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
// //             <span className="text-white font-bold text-lg">AS</span>
// //           </div>

// //           <div>
// //             <p className="font-bold text-gray-900">ASBD</p>
// //             <p className="text-xs text-gray-600">AdminPanel-v1.0</p>
// //           </div>
// //         </Link>
// //       </div>

// //       {/* Navigation */}
// //       <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
// //         {defaultNavGroups.map((group) => {
// //           const isGroupOpen = openGroups[group.label];

// //           const hasMultipleItems = group.items.length > 1;

// //           const firstItemActive =
// //             group.items.length > 0 && isItemActive(group.items[0].href);

// //           const anyItemActive = group.items.some((item) =>
// //             isItemActive(item.href),
// //           );

// //           return (
// //             <div key={group.label} className="mb-1">
// //               {hasMultipleItems ? (
// //                 <>
// //                   {/* Parent Group */}
// //                   <button
// //                     type="button"
// //                     onClick={() => toggleGroup(group.label)}
// //                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium group ${
// //                       anyItemActive
// //                         ? "bg-blue-50 text-blue-700"
// //                         : "text-gray-700 hover:bg-gray-50"
// //                     }`}
// //                   >
// //                     <span
// //                       className={
// //                         anyItemActive
// //                           ? "text-blue-600"
// //                           : "text-gray-600 group-hover:text-blue-600"
// //                       }
// //                     >
// //                       {group.icon}
// //                     </span>

// //                     <span className="flex-1 text-left">{group.label}</span>

// //                     <ChevronDown
// //                       className={`w-4 h-4 transition-transform duration-200 ${
// //                         isGroupOpen ? "rotate-180" : ""
// //                       }`}
// //                     />
// //                   </button>

// //                   {/* Child Items */}
// //                   {isGroupOpen && (
// //                     <div className="mt-1 ml-4 pl-4 border-l-2 border-gray-200 space-y-1">
// //                       {group.items.map((item) => {
// //                         const isActive = isItemActive(item.href);

// //                         return (
// //                           <Link
// //                             key={item.href}
// //                             href={item.href}
// //                             className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${
// //                               isActive
// //                                 ? "text-blue-700 bg-blue-50 font-medium"
// //                                 : "text-gray-700 hover:bg-gray-50"
// //                             }`}
// //                           >
// //                             {item.icon}
// //                             <span>{item.label}</span>
// //                           </Link>
// //                         );
// //                       })}
// //                     </div>
// //                   )}
// //                 </>
// //               ) : (
// //                 /* Single Item */
// //                 <Link
// //                   href={group.items[0].href}
// //                   className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium group ${
// //                     firstItemActive
// //                       ? "bg-blue-50 text-blue-700"
// //                       : "text-gray-700 hover:bg-gray-50"
// //                   }`}
// //                 >
// //                   <span
// //                     className={
// //                       firstItemActive
// //                         ? "text-blue-600"
// //                         : "text-gray-600 group-hover:text-blue-600"
// //                     }
// //                   >
// //                     {group.icon}
// //                   </span>

// //                   <span>{group.label}</span>
// //                 </Link>
// //               )}
// //             </div>
// //           );
// //         })}
// //       </nav>

// //       {/* Bottom Links */}
// //       <div className="p-4 border-t border-gray-200">
// //         <button
// //           type="button"
// //           onClick={handleLogout}
// //           className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-700 hover:bg-red-50 rounded-lg transition-colors font-medium"
// //         >
// //           <LogOut className="w-5 h-5" />
// //           Logout
// //         </button>
// //       </div>
// //     </aside>
// //   );
// // }

// // section wise new
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   ChevronDown,
//   Home,
//   Info,
//   Building2,
//   GraduationCap,
//   LogOut,
// } from "lucide-react";
// import type { ReactNode } from "react";

// interface NavItem {
//   label: string;
//   href?: string;
//   icon?: ReactNode;
//   items?: NavItem[];
// }

// interface NavGroup {
//   label: string;
//   icon: ReactNode;
//   items: NavItem[];
// }

// const defaultNavGroups: NavGroup[] = [
//   // ============================================================
//   // DASHBOARD
//   // ============================================================
//   {
//     label: "Dashboard",
//     icon: <Home className="w-5 h-5" />,
//     items: [
//       {
//         label: "Dashboard",
//         href: "/admin",
//         icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
//       },
//     ],
//   },

//   // ============================================================
//   // HOME PAGE
//   // ============================================================
//   {
//     label: "Home Page",
//     icon: <Home className="w-5 h-5" />,
//     items: [
//       {
//         label: "Hero",
//         href: "/admin/homepage/hero",
//         icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
//       },
//       {
//         label: "Notice",
//         href: "/admin/homepage/notice",
//         icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
//       },
//       {
//         label: "Publication",
//         href: "/admin/homepage/publication",
//         icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
//       },
//       {
//         label: "Services",
//         href: "/admin/services",
//         icon: <span className="w-2 h-2 bg-indigo-400 rounded-full" />,
//       },
//       {
//         label: "Buying House",
//         href: "/admin/buying-house",
//         icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
//       },
//       {
//         label: "Catalog",
//         href: "/admin/catalog",
//         icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
//       },
//     ],
//   },

//   // ============================================================
//   // ABOUT
//   // ============================================================
//   {
//     label: "About",
//     icon: <Info className="w-5 h-5" />,
//     items: [
//       // ----------------------------------------------------------
//       // Overview
//       // ----------------------------------------------------------
//       {
//         label: "Overview",
//         items: [
//           {
//             label: "Hero",
//             href: "/admin/about/overview/hero",
//             icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
//           },
//           {
//             label: "Visiting",
//             href: "/admin/about/overview/visiting",
//             icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
//           },
//           {
//             label: "Sustainability",
//             href: "/admin/about/overview/sustainability",
//             icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
//           },
//           {
//             label: "Admission Aid",
//             href: "/admin/about/overview/admission-aid",
//             icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
//           },
//         ],
//       },

//       // ----------------------------------------------------------
//       // History of UAMC
//       // ----------------------------------------------------------
//       {
//         label: "History of UAMC",
//         items: [
//           {
//             label: "History Banner",
//             href: "/admin/about/history/hero",
//             icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
//           },
//           {
//             label: "Year",
//             href: "/admin/about/history/year",
//             icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
//           },
//         ],
//       },

//       // ----------------------------------------------------------
//       // Vision & Mission
//       // No dropdown because only one section
//       // ----------------------------------------------------------
//       {
//         label: "Vision & Mission",
//         href: "/admin/about/vision-mission",
//         icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
//       },

//       // ----------------------------------------------------------
//       // Aim & Objective
//       // ----------------------------------------------------------
//       {
//         label: "Aim & Objective",
//         items: [
//           {
//             label: "Banner",
//             href: "/admin/about/aim-objective/banner",
//             icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
//           },
//           {
//             label: "Objective",
//             href: "/admin/about/aim-objective/objective",
//             icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
//           },
//         ],
//       },

//       // ----------------------------------------------------------
//       // Founder Members
//       // Direct page - no dropdown
//       // ----------------------------------------------------------
//       {
//         label: "Founder Members",
//         href: "/admin/about/founder-members",
//         icon: <span className="w-2 h-2 bg-pink-400 rounded-full" />,
//       },

//       // ----------------------------------------------------------
//       // EC Members
//       // Direct page - no dropdown
//       // ----------------------------------------------------------
//       {
//         label: "EC Members",
//         href: "/admin/about/ec-members",
//         icon: <span className="w-2 h-2 bg-orange-400 rounded-full" />,
//       },

//       // ----------------------------------------------------------
//       // GB Members
//       // Direct page - no dropdown
//       // ----------------------------------------------------------
//       {
//         label: "GB Members",
//         href: "/admin/about/gb-members",
//         icon: <span className="w-2 h-2 bg-teal-400 rounded-full" />,
//       },
//     ],
//   },

//   // ============================================================
//   // FACILITIES
//   // ============================================================
//   {
//     label: "Facilities",
//     icon: <Building2 className="w-5 h-5" />,
//     items: [
//       {
//         label: "Hospital Service",
//         href: "/admin/facilities/hospital-service",
//         icon: <span className="w-2 h-2 bg-red-400 rounded-full" />,
//       },
//       {
//         label: "Departments",
//         href: "/admin/facilities/departments",
//         icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
//       },
//       {
//         label: "Library",
//         href: "/admin/facilities/library",
//         icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
//       },
//       {
//         label: "Medical Education Unit",
//         href: "/admin/facilities/medical-education-unit",
//         icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
//       },
//       {
//         label: "Training",
//         href: "/admin/facilities/training",
//         icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
//       },
//       {
//         label: "Publications",
//         href: "/admin/facilities/publications",
//         icon: <span className="w-2 h-2 bg-indigo-400 rounded-full" />,
//       },
//       {
//         label: "Seminar",
//         href: "/admin/facilities/seminar",
//         icon: <span className="w-2 h-2 bg-pink-400 rounded-full" />,
//       },
//       {
//         label: "Hostel",
//         href: "/admin/facilities/hostel",
//         icon: <span className="w-2 h-2 bg-orange-400 rounded-full" />,
//       },
//       {
//         label: "Laboratory",
//         href: "/admin/facilities/laboratory",
//         icon: <span className="w-2 h-2 bg-teal-400 rounded-full" />,
//       },
//       {
//         label: "Cafeteria",
//         href: "/admin/facilities/cafeteria",
//         icon: <span className="w-2 h-2 bg-cyan-400 rounded-full" />,
//       },
//     ],
//   },

//   // ============================================================
//   // ADMISSION
//   // ============================================================
//   {
//     label: "Admission",
//     icon: <GraduationCap className="w-5 h-5" />,
//     items: [
//       {
//         label: "Admission Procedure & Fees",
//         href: "/admin/admission/procedure-fees",
//         icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
//       },
//       {
//         label: "Admission Papers",
//         href: "/admin/admission/papers",
//         icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
//       },
//       {
//         label: "Application Form",
//         href: "/admin/admission/application-form",
//         icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
//       },
//       {
//         label: "Admission Results",
//         href: "/admin/admission/results",
//         icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
//       },
//       {
//         label: "Online Registration",
//         href: "/admin/admission/online-registration",
//         icon: <span className="w-2 h-2 bg-indigo-400 rounded-full" />,
//       },
//     ],
//   },

//   // ============================================================
//   // CONTACT
//   // ============================================================
//   {
//     label: "Contact",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//         />
//       </svg>
//     ),
//     items: [
//       {
//         label: "Contact",
//         href: "/admin/contact",
//         icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
//       },
//     ],
//   },
// ];

// export default function AdminSidebar() {
//   const pathname = usePathname();

//   // Top-level dropdown state
//   const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

//   // Second-level dropdown state
//   const [openSubGroups, setOpenSubGroups] = useState<Record<string, boolean>>(
//     {},
//   );

//   // ------------------------------------------------------------
//   // Check if a URL is active
//   // ------------------------------------------------------------
//   const isItemActive = (href?: string) => {
//     if (!href) return false;

//     if (href === "/admin") {
//       return pathname === "/admin";
//     }

//     return pathname === href || pathname?.startsWith(`${href}/`);
//   };

//   // ------------------------------------------------------------
//   // Check whether a nested item is active
//   // ------------------------------------------------------------
//   const hasActiveChild = (item: NavItem): boolean => {
//     if (item.href) {
//       return isItemActive(item.href);
//     }

//     return item.items?.some((child) => hasActiveChild(child)) ?? false;
//   };

//   // ------------------------------------------------------------
//   // Automatically open the correct dropdowns
//   // ------------------------------------------------------------
//   useEffect(() => {
//     const groups: Record<string, boolean> = {};
//     const subGroups: Record<string, boolean> = {};

//     defaultNavGroups.forEach((group) => {
//       const groupHasActiveItem = group.items.some((item) =>
//         hasActiveChild(item),
//       );

//       groups[group.label] = groupHasActiveItem;

//       group.items.forEach((item) => {
//         if (item.items && item.items.length > 0) {
//           subGroups[`${group.label}-${item.label}`] = hasActiveChild(item);
//         }
//       });
//     });

//     setOpenGroups(groups);
//     setOpenSubGroups(subGroups);
//   }, [pathname]);

//   // ------------------------------------------------------------
//   // Toggle top-level group
//   // ------------------------------------------------------------
//   const toggleGroup = (label: string) => {
//     setOpenGroups((prev) => ({
//       ...prev,
//       [label]: !prev[label],
//     }));
//   };

//   // ------------------------------------------------------------
//   // Toggle second-level group
//   // ------------------------------------------------------------
//   const toggleSubGroup = (groupLabel: string, itemLabel: string) => {
//     const key = `${groupLabel}-${itemLabel}`;

//     setOpenSubGroups((prev) => ({
//       ...prev,
//       [key]: !prev[key],
//     }));
//   };

//   // ------------------------------------------------------------
//   // Logout
//   // ------------------------------------------------------------
//   const handleLogout = () => {
//     localStorage.removeItem("adminAuth");
//     window.location.href = "/";
//   };

//   return (
//     <aside className="w-64 bg-white border-r border-gray-200 fixed left-0 top-0 h-screen flex flex-col">
//       {/* ======================================================
//           LOGO
//       ======================================================= */}
//       <div className="p-6 border-b border-gray-200">
//         <Link href="/admin" className="flex items-center gap-2">
//           <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
//             <span className="text-white font-bold text-lg">AS</span>
//           </div>

//           <div>
//             <p className="font-bold text-gray-900">ASBD</p>
//             <p className="text-xs text-gray-600">AdminPanel-v1.0</p>
//           </div>
//         </Link>
//       </div>

//       {/* ======================================================
//           NAVIGATION
//       ======================================================= */}
//       <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
//         {defaultNavGroups.map((group) => {
//           const isGroupOpen = openGroups[group.label];

//           const groupHasActiveItem = group.items.some((item) =>
//             hasActiveChild(item),
//           );

//           const hasMultipleItems = group.items.length > 1;

//           return (
//             <div key={group.label} className="mb-1">
//               {/* ==================================================
//                   TOP LEVEL WITH MULTIPLE ITEMS
//               ================================================== */}
//               {hasMultipleItems ? (
//                 <>
//                   <button
//                     type="button"
//                     onClick={() => toggleGroup(group.label)}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium group ${
//                       groupHasActiveItem
//                         ? "bg-blue-50 text-blue-700"
//                         : "text-gray-700 hover:bg-gray-50"
//                     }`}
//                   >
//                     <span
//                       className={
//                         groupHasActiveItem
//                           ? "text-blue-600"
//                           : "text-gray-600 group-hover:text-blue-600"
//                       }
//                     >
//                       {group.icon}
//                     </span>

//                     <span className="flex-1 text-left">{group.label}</span>

//                     <ChevronDown
//                       className={`w-4 h-4 transition-transform duration-200 ${
//                         isGroupOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {/* ==================================================
//                       LEVEL 2 ITEMS
//                   ================================================== */}
//                   {isGroupOpen && (
//                     <div className="mt-1 ml-4 pl-4 border-l-2 border-gray-200 space-y-1">
//                       {group.items.map((item) => {
//                         const hasChildren =
//                           !!item.items && item.items.length > 0;

//                         const itemActive = hasActiveChild(item);

//                         const subKey = `${group.label}-${item.label}`;

//                         const isSubGroupOpen = openSubGroups[subKey];

//                         {
//                           /* ==================================================
//                             ITEM WITH SECOND LEVEL DROPDOWN
//                         ================================================== */
//                         }
//                         if (hasChildren) {
//                           return (
//                             <div key={item.label}>
//                               <button
//                                 type="button"
//                                 onClick={() =>
//                                   toggleSubGroup(group.label, item.label)
//                                 }
//                                 className={`w-full flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${
//                                   itemActive
//                                     ? "text-blue-700 bg-blue-50 font-medium"
//                                     : "text-gray-700 hover:bg-gray-50"
//                                 }`}
//                               >
//                                 <span className="flex-1 text-left">
//                                   {item.label}
//                                 </span>

//                                 <ChevronDown
//                                   className={`w-4 h-4 transition-transform duration-200 ${
//                                     isSubGroupOpen ? "rotate-180" : ""
//                                   }`}
//                                 />
//                               </button>

//                               {/* ==================================================
//                                   LEVEL 3 ITEMS
//                               ================================================== */}
//                               {isSubGroupOpen && (
//                                 <div className="mt-1 ml-3 pl-3 border-l border-gray-200 space-y-1">
//                                   {item.items?.map((child) => {
//                                     const childActive = isItemActive(
//                                       child.href,
//                                     );

//                                     return (
//                                       <Link
//                                         key={child.href}
//                                         href={child.href!}
//                                         className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
//                                           childActive
//                                             ? "text-blue-700 bg-blue-50 font-medium"
//                                             : "text-gray-600 hover:bg-gray-50"
//                                         }`}
//                                       >
//                                         {child.icon}
//                                         <span>{child.label}</span>
//                                       </Link>
//                                     );
//                                   })}
//                                 </div>
//                               )}
//                             </div>
//                           );
//                         }

//                         {
//                           /* ==================================================
//                             NORMAL SECOND LEVEL LINK
//                         ================================================== */
//                         }
//                         return (
//                           <Link
//                             key={item.href}
//                             href={item.href!}
//                             className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors ${
//                               itemActive
//                                 ? "text-blue-700 bg-blue-50 font-medium"
//                                 : "text-gray-700 hover:bg-gray-50"
//                             }`}
//                           >
//                             {item.icon}
//                             <span>{item.label}</span>
//                           </Link>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 /* ==================================================
//                    SINGLE TOP LEVEL ITEM
//                 ================================================== */
//                 <Link
//                   href={group.items[0].href!}
//                   className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium group ${
//                     groupHasActiveItem
//                       ? "bg-blue-50 text-blue-700"
//                       : "text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   <span
//                     className={
//                       groupHasActiveItem
//                         ? "text-blue-600"
//                         : "text-gray-600 group-hover:text-blue-600"
//                     }
//                   >
//                     {group.icon}
//                   </span>

//                   <span>{group.label}</span>
//                 </Link>
//               )}
//             </div>
//           );
//         })}
//       </nav>

//       {/* ======================================================
//           LOGOUT
//       ======================================================= */}
//       <div className="p-4 border-t border-gray-200">
//         <button
//           type="button"
//           onClick={handleLogout}
//           className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-700 hover:bg-red-50 rounded-lg transition-colors font-medium"
//         >
//           <LogOut className="w-5 h-5" />
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// }

// final code
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Home,
  Info,
  Building2,
  GraduationCap,
  LogOut,
} from "lucide-react";
import type { ReactNode } from "react";

/* ============================================================
   TYPES
============================================================ */

interface NavItem {
  label: string;
  href?: string;
  icon?: ReactNode;
  items?: NavItem[];
}

interface NavGroup {
  label: string;
  icon: ReactNode;
  items: NavItem[];
}

/* ============================================================
   NAVIGATION DATA
============================================================ */

const defaultNavGroups: NavGroup[] = [
  /* ==========================================================
     DASHBOARD
  ========================================================== */
  {
    label: "Dashboard",
    icon: <Home className="w-5 h-5" />,
    items: [
      {
        label: "Dashboard",
        href: "/admin",
        icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
      },
    ],
  },

  /* ==========================================================
     HOME PAGE
  ========================================================== */
  {
    label: "Home Page",
    icon: <Home className="w-5 h-5" />,
    items: [
      {
        label: "Hero",
        href: "/admin/homepage/hero",
        icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
      },
      {
        label: "Notice Board",
        href: "/admin/homepage/notice",
        icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
      },
      {
        label: "Publication",
        href: "/admin/homepage/publication",
        icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
      },
      {
        label: "About UAMC",
        href: "/admin/homepage/about",
        icon: <span className="w-2 h-2 bg-indigo-400 rounded-full" />,
      },
      {
        label: "Admission",
        href: "/admin/homepage/admission",
        icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
      },
      {
        label: "Alumni Events",
        href: "/admin/homepage/alumni-events",
        icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
      },
      {
        label: "Alumni Events Image",
        href: "/admin/homepage/alumni-events-image",
        icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
      },
      {
        label: "Campus Life",
        href: "/admin/homepage/campus-life",
        icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
      },
      {
        label: "Our Facilities",
        href: "/admin/homepage/feature",
        icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
      },
      {
        label: "Students Feedback",
        href: "/admin/homepage/feedback",
        icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
      },
      {
        label: "Find Department",
        href: "/admin/homepage/find-department-left",
        icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
      },
      {
        label: "Find Department Image",
        href: "/admin/homepage/find-department-right",
        icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
      },
      {
        label: "Latest News",
        href: "/admin/homepage/news",
        icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
      },
      {
        label: "Principal Message",
        href: "/admin/homepage/principle-message",
        icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
      },
      {
        label: "Statistics",
        href: "/admin/homepage/stat",
        icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
      },
    ],
  },

  /* ==========================================================
     ABOUT
  ========================================================== */
  {
    label: "About UAMC",
    icon: <Info className="w-5 h-5" />,
    items: [
      /* --------------------------------------------------------
         Overview
      -------------------------------------------------------- */
      {
        label: "Overview",
        items: [
          {
            label: "Hero",
            href: "/admin/about/overview/hero",
            icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
          },
          {
            label: "Visiting at UAMC",
            href: "/admin/about/overview/visit",
            icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
          },
          {
            label: "Sustainability",
            href: "/admin/about/overview/sustainability",
            icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
          },
          {
            label: "Admission Aid",
            href: "/admin/about/overview/admission-aid",
            icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
          },
        ],
      },

      /* --------------------------------------------------------
         History of UAMC
      -------------------------------------------------------- */
      {
        label: "History of UAMC",
        items: [
          {
            label: "About",
            href: "/admin/about/history/history-banner",
            icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
          },
          {
            label: "Timeline",
            href: "/admin/about/history/year",
            icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
          },
        ],
      },

      /* --------------------------------------------------------
         Vision & Mission
         Single page - no dropdown
      -------------------------------------------------------- */
      {
        label: "Vision & Mission",
        href: "/admin/about/vision-and-mission",
        icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
      },

      /* --------------------------------------------------------
         Aim & Objective
      -------------------------------------------------------- */
      {
        label: "Aim & Objective",
        items: [
          {
            label: "About",
            href: "/admin/about/aim/banner",
            icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
          },
          {
            label: "Objective",
            href: "/admin/about/aim/objective",
            icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
          },
        ],
      },

      /* --------------------------------------------------------
         Founder Members
      -------------------------------------------------------- */
      {
        label: "Founder Members",
        href: "/admin/about/member",
        icon: <span className="w-2 h-2 bg-pink-400 rounded-full" />,
      },

      /* --------------------------------------------------------
         EC Members
      -------------------------------------------------------- */
      {
        label: "EC Members",
        href: "/admin/about/ec-member",
        icon: <span className="w-2 h-2 bg-orange-400 rounded-full" />,
      },

      /* --------------------------------------------------------
         GB Members
      -------------------------------------------------------- */
      {
        label: "GB Members",
        href: "/admin/about/gb-member",
        icon: <span className="w-2 h-2 bg-teal-400 rounded-full" />,
      },
    ],
  },

  /* ==========================================================
     FACILITIES
  ========================================================== */
  {
    label: "Facilities",
    icon: <Building2 className="w-5 h-5" />,
    items: [
      /* --------------------------------------------------------
         Hospital Service
      -------------------------------------------------------- */
      {
        label: "Hospital Service",
        items: [
          {
            label: "About Hospital",
            href: "/admin/facility/hospital-service/about",
            icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
          },
          {
            label: "Additional Services",
            href: "/admin/facility/hospital-service/additional-service",
            icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
          },
          {
            label: "Medicine Related Clinical Departments",
            href: "/admin/facility/hospital-service/clinical-service",
            icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
          },
          {
            label: "Diagnostic & Imaging Services",
            href: "/admin/facility/hospital-service/diagnostic-service",
            icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
          },
          {
            label: "Emergency Services",
            href: "/admin/facility/hospital-service/emergency-service",
            icon: <span className="w-2 h-2 bg-red-400 rounded-full" />,
          },
          {
            label: "UAMCH Facilities & Services",
            href: "/admin/facility/hospital-service/facilities",
            icon: <span className="w-2 h-2 bg-indigo-400 rounded-full" />,
          },
          {
            label: "Hero",
            href: "/admin/facility/hospital-service/hero",
            icon: <span className="w-2 h-2 bg-pink-400 rounded-full" />,
          },
          {
            label: "Medical Services",
            href: "/admin/facility/hospital-service/medical-service",
            icon: <span className="w-2 h-2 bg-teal-400 rounded-full" />,
          },
          {
            label: "Surgical Related Clinical Departments",
            href: "/admin/facility/hospital-service/surgical-service",
            icon: <span className="w-2 h-2 bg-orange-400 rounded-full" />,
          },
        ],
      },

      /* --------------------------------------------------------
         Departments
         Single page - no dropdown
      -------------------------------------------------------- */
      {
        label: "Departments",
        href: "/admin/facility/department",
        icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
      },

      /* --------------------------------------------------------
         Library
      -------------------------------------------------------- */
      {
        label: "Library",
        items: [
          {
            label: "About Library",
            href: "/admin/facility/library/about",
            icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
          },
          {
            label: "Features",
            href: "/admin/facility/library/feature",
            icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
          },
        ],
      },

      /* --------------------------------------------------------
         Medical Education Unit
      -------------------------------------------------------- */
      {
        label: "Medical Education Unit",
        items: [
          {
            label: "About",
            href: "/admin/facility/meu/about",
            icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
          },
          {
            label: "Academic Databases",
            href: "/admin/facility/meu/database",
            icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
          },
          {
            label: "Facilities & Resources",
            href: "/admin/facility/meu/facility",
            icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
          },
          {
            label: "Features",
            href: "/admin/facility/meu/feature",
            icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
          },
        ],
      },

      /* --------------------------------------------------------
         Training
      -------------------------------------------------------- */
      {
        label: "Training",
        items: [
          {
            label: "About",
            href: "/admin/facility/training/about",
            icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
          },
          {
            label: "Training Facilities",
            href: "/admin/facility/training/facility",
            icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
          },
        ],
      },

      /* --------------------------------------------------------
         Seminar
      -------------------------------------------------------- */
      {
        label: "Seminar",
        items: [
          {
            label: "About",
            href: "/admin/facility/seminar/about",
            icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
          },
          {
            label: "Academic Activities",
            href: "/admin/facility/seminar/activity",
            icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
          },
          {
            label: "Speakers & Collaboration",
            href: "/admin/facility/seminar/collaboration",
            icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
          },
          {
            label: "Academic Presentations",
            href: "/admin/facility/seminar/presentation",
            icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
          },
        ],
      },

      /* --------------------------------------------------------
         Hostel
      -------------------------------------------------------- */
      {
        label: "Hostel",
        items: [
          {
            label: "About",
            href: "/admin/facility/hostel-service/hostel",
            icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
          },
          {
            label: "Services",
            href: "/admin/facility/hostel-service/service",
            icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
          },
        ],
      },

      /* --------------------------------------------------------
         Laboratory
      -------------------------------------------------------- */
      {
        label: "Laboratory",
        items: [
          {
            label: "About",
            href: "/admin/facility/laboratory/about",
            icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
          },
          {
            label: "Facilities",
            href: "/admin/facility/laboratory/facility",
            icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
          },
        ],
      },

      /* --------------------------------------------------------
         Cafeteria
      -------------------------------------------------------- */
      {
        label: "Cafeteria",
        items: [
          {
            label: "About",
            href: "/admin/facility/cafeteria/about",
            icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
          },
          {
            label: "Facilities",
            href: "/admin/facility/cafeteria/cafe-facility",
            icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
          },
        ],
      },
    ],
  },

  /* ==========================================================
     ADMISSION
  ========================================================== */
  {
    label: "Admission",
    icon: <GraduationCap className="w-5 h-5" />,
    items: [
      /* --------------------------------------------------------
         Admission Procedure & Fees
      -------------------------------------------------------- */
      {
        label: "Admission Procedure & Fees",
        items: [
          {
            label: "About",
            href: "/admin/admission/procedure-and-fee/about",
            icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
          },
          {
            label: "Required Documents",
            href: "/admin/admission/procedure-and-fee/document",
            icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
          },
          {
            label: "Eligibility for Foreign",
            href: "/admin/admission/procedure-and-fee/eligibility-foreign-student",
            icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
          },
          {
            label: "Eligibility for National",
            href: "/admin/admission/procedure-and-fee/eligibility-national-student",
            icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
          },
          {
            label: "Foreign Fees",
            href: "/admin/admission/procedure-and-fee/fee-foreign",
            icon: <span className="w-2 h-2 bg-red-400 rounded-full" />,
          },
          {
            label: "National Fees",
            href: "/admin/admission/procedure-and-fee/fee-national",
            icon: <span className="w-2 h-2 bg-indigo-400 rounded-full" />,
          },
          {
            label: "Monthly Fees",
            href: "/admin/admission/procedure-and-fee/monthly-fee",
            icon: <span className="w-2 h-2 bg-pink-400 rounded-full" />,
          },
          {
            label: "Student Quotas",
            href: "/admin/admission/procedure-and-fee/quota",
            icon: <span className="w-2 h-2 bg-orange-400 rounded-full" />,
          },
          {
            label: "Selection & Admission",
            href: "/admin/admission/procedure-and-fee/selection",
            icon: <span className="w-2 h-2 bg-teal-400 rounded-full" />,
          },
        ],
      },

      /* --------------------------------------------------------
         Admission Papers
      -------------------------------------------------------- */
      {
        label: "Admission Papers",
        href: "/admin/admission/paper",
        icon: <span className="w-2 h-2 bg-blue-400 rounded-full" />,
      },

      /* --------------------------------------------------------
         Application Form
      -------------------------------------------------------- */
      {
        label: "Application Form",
        href: "/admin/admission/form",
        icon: <span className="w-2 h-2 bg-green-400 rounded-full" />,
      },

      /* --------------------------------------------------------
         Admission Results
      -------------------------------------------------------- */
      {
        label: "Admission Results",
        href: "/admin/admission/result",
        icon: <span className="w-2 h-2 bg-yellow-400 rounded-full" />,
      },
    ],
  },

  /* ==========================================================
     CONTACT
  ========================================================== */
  {
    label: "Contact",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    items: [
      {
        label: "Contact",
        href: "/admin/site-setting",
        icon: <span className="w-2 h-2 bg-purple-400 rounded-full" />,
      },
    ],
  },
];

/* ============================================================
   COMPONENT
============================================================ */

export default function AdminSidebar() {
  const pathname = usePathname();

  /*
   * Stores open/closed state for all navigation levels.
   *
   * Example:
   * {
   *   "About": true,
   *   "About-Overview": true,
   *   "Facilities": true,
   *   "Facilities-Hospital Service": true
   * }
   */
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  /* ==========================================================
     ACTIVE URL CHECK
  ========================================================== */

  const isItemActive = (href?: string) => {
    if (!href) return false;

    if (href === "/admin") {
      return pathname === "/admin";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  /* ==========================================================
     CHECK IF ITEM OR ANY CHILD IS ACTIVE
  ========================================================== */

  const hasActiveChild = (item: NavItem): boolean => {
    if (item.href) {
      return isItemActive(item.href);
    }

    if (item.items) {
      return item.items.some((child) => hasActiveChild(child));
    }

    return false;
  };

  /* ==========================================================
     CREATE KEY
  ========================================================== */

  const getItemKey = (parentKey: string, itemLabel: string) => {
    return parentKey ? `${parentKey}-${itemLabel}` : itemLabel;
  };

  /* ==========================================================
     AUTOMATICALLY OPEN ACTIVE MENUS
  ========================================================== */

  useEffect(() => {
    const initialState: Record<string, boolean> = {};

    const processItems = (items: NavItem[], parentKey: string) => {
      items.forEach((item) => {
        if (item.items && item.items.length > 0) {
          const key = getItemKey(parentKey, item.label);

          if (hasActiveChild(item)) {
            initialState[key] = true;
          }

          processItems(item.items, key);
        }
      });
    };

    defaultNavGroups.forEach((group) => {
      if (group.items.length > 1) {
        if (group.items.some((item) => hasActiveChild(item))) {
          initialState[group.label] = true;
        }

        processItems(group.items, group.label);
      }
    });

    setOpenItems(initialState);
  }, [pathname]);

  /* ==========================================================
     TOGGLE ITEM
  ========================================================== */

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  /* ==========================================================
     LOGOUT
  ========================================================== */

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    window.location.href = "/";
  };

  /* ==========================================================
     RECURSIVE NAVIGATION RENDERER
  ========================================================== */

  const renderNavItems = (
    items: NavItem[],
    parentKey: string,
    level: number = 1,
  ): ReactNode => {
    return (
      <div
        className={
          level === 1
            ? "mt-1 ml-4 pl-4 border-l-2 border-gray-200 space-y-1"
            : "mt-1 ml-3 pl-3 border-l border-gray-200 space-y-1"
        }
      >
        {items.map((item) => {
          const hasChildren = !!item.items && item.items.length > 0;

          const active = hasActiveChild(item);

          const key = getItemKey(parentKey, item.label);

          /* ====================================================
             ITEM HAS CHILDREN
          ==================================================== */

          if (hasChildren) {
            const isOpen = openItems[key];

            return (
              <div key={key}>
                <button
                  type="button"
                  onClick={() => toggleItem(key)}
                  className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors ${
                    active
                      ? "text-blue-700 bg-blue-50 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="flex-1 text-left">{item.label}</span>

                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && renderNavItems(item.items!, key, level + 1)}
              </div>
            );
          }

          /* ====================================================
             NORMAL LINK
          ==================================================== */

          const childActive = isItemActive(item.href);

          return (
            <Link
              key={key}
              href={item.href!}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors ${
                childActive
                  ? "text-blue-700 bg-blue-50 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {item.icon}

              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    );
  };

  /* ==========================================================
     RETURN
  ========================================================== */

  return (
    <aside className="w-64 bg-white border-r border-gray-200 fixed left-0 top-0 h-screen flex flex-col">
      {/* ======================================================
          LOGO
      ======================================================= */}

      <div className="p-6 border-b border-gray-200">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AS</span>
          </div>

          <div>
            <p className="font-bold text-gray-900">ASBD</p>

            <p className="text-xs text-gray-600">AdminPanel-v1.0</p>
          </div>
        </Link>
      </div>

      {/* ======================================================
          NAVIGATION
      ======================================================= */}

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {defaultNavGroups.map((group) => {
          const hasMultipleItems = group.items.length > 1;

          const groupActive = group.items.some((item) => hasActiveChild(item));

          /* ====================================================
             GROUP WITH MULTIPLE ITEMS
          ==================================================== */

          if (hasMultipleItems) {
            const isOpen = openItems[group.label];

            return (
              <div key={group.label} className="mb-1">
                <button
                  type="button"
                  onClick={() => toggleItem(group.label)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium group ${
                    groupActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={
                      groupActive
                        ? "text-blue-600"
                        : "text-gray-600 group-hover:text-blue-600"
                    }
                  >
                    {group.icon}
                  </span>

                  <span className="flex-1 text-left">{group.label}</span>

                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && renderNavItems(group.items, group.label, 1)}
              </div>
            );
          }

          /* ====================================================
             SINGLE ITEM GROUP
          ==================================================== */

          const item = group.items[0];

          return (
            <div key={group.label} className="mb-1">
              <Link
                href={item.href!}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium group ${
                  groupActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span
                  className={
                    groupActive
                      ? "text-blue-600"
                      : "text-gray-600 group-hover:text-blue-600"
                  }
                >
                  {group.icon}
                </span>

                <span>{group.label}</span>
              </Link>
            </div>
          );
        })}
      </nav>

      {/* ======================================================
          LOGOUT
      ======================================================= */}

      <div className="p-4 border-t border-gray-200">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-700 hover:bg-red-50 rounded-lg transition-colors font-medium"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}
