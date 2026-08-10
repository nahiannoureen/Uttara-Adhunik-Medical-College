// const GREEN = "#018837";

// export default function Banner() {
//   return (
//     <section
//       className="
//         relative
//         w-full
//         h-[500px]
//         bg-cover
//         bg-center
//         flex
//         items-end
//         px-[80px]
//         py-[80px]
//       "
//       style={{
//         backgroundImage: `url("/assets/Asset 1@4x 2.png")`,
//       }}
//     >
//       {/* Green Overlay */}
//       <div
//         className="
//           w-full
//           h-[327.29px]
//           flex
//           flex-row
//           justify-between
//           items-end
//           gap-[20px]
//           px-[50px]
//           py-[20px]
//         "
//         style={{
//           background: "rgba(1, 136, 55, 0.3)",
//         }}
//       >
//         {/* Left Content */}
//         <div
//           className="
//             flex
//             flex-col
//             justify-end
//             items-start
//             gap-[10px]
//             flex-1
//             h-[118.67px]
//           "
//         >
//           {/* Breadcrumb */}
//           <div
//             className="
//               w-[313px]
//               h-[24px]
//               flex
//               items-center
//               text-[20px]
//               leading-[24px]
//               font-medium
//               whitespace-nowrap
//             "
//             style={{
//               fontFamily: "'Inter', sans-serif",
//             }}
//           >
//             <span className="text-black">HOME</span>

//             <span className="text-black mx-[6px]">&gt;</span>

//             <span className="text-black">FACILITIES</span>

//             <span className="text-black mx-[6px]">&gt;&gt;</span>

//             {/* Current page */}
//             <span style={{ color: GREEN }}>Seminar</span>
//           </div>

//           {/* FACILITIES UAMC IMAGE */}
//           <div
//             className="
//               w-[1090px]
//               h-[84.67px]
//               flex
//               items-center
//               py-[10.8332px]
//             "
//           >
//             <img
//               src="/heading.png"
//               alt="Facilities UAMC"
//               className="
//                 w-[558px]
//                 h-[63px]
//                 object-contain
//                 object-left
//               "
//             />
//           </div>
//         </div>

//         {/* Right Image */}
//         <div
//           className="
//             shrink-0
//             w-[250px]
//             h-[287.29px]
//             flex
//             items-end
//             justify-center
//           "
//         >
//           <img
//             src="/assets/Adobe Express - file.png"
//             alt="UAMC"
//             className="
//               w-[250px]
//               h-[287.29px]
//               object-contain
//             "
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// const GREEN = "#018837";

// export default function Banner() {
//   return (
//     <section
//       className="relative w-full bg-cover bg-center flex items-end"
//       style={{
//         height: "500px",
//         padding: "80px",
//         boxSizing: "border-box",
//         backgroundImage: `url("/assets/Asset 1@4x 2.png")`,
//       }}
//     >
//       {/* =========================================
//           GREEN OVERLAY
//       ========================================== */}
//       <div
//         className="w-full flex flex-row justify-between items-end"
//         style={{
//           height: "327.29px",
//           padding: "20px 50px",
//           gap: "20px",
//           background: "rgba(1, 136, 55, 0.3)",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* =========================================
//             LEFT CONTENT
//         ========================================== */}
//         <div
//           className="flex flex-col justify-end"
//           style={{
//             width: "1090px",
//             height: "287.29px",
//             gap: "20px",
//           }}
//         >
//           {/* =========================================
//               BREADCRUMB
//           ========================================== */}
//           <div
//             className="flex items-center"
//             style={{
//               width: "313px",
//               height: "24px",

//               fontFamily: "'Inter', sans-serif",
//               fontStyle: "normal",
//               fontWeight: 500,
//               fontSize: "20px",
//               lineHeight: "24px",

//               whiteSpace: "nowrap",
//             }}
//           >
//             <span style={{ color: "#000000" }}>HOME</span>

//             <span
//               style={{
//                 color: "#000000",
//                 margin: "0 6px",
//               }}
//             >
//               &gt;
//             </span>

//             <span style={{ color: "#000000" }}>FACILITIES</span>

//             <span
//               style={{
//                 color: "#000000",
//                 margin: "0 6px",
//               }}
//             >
//               &gt;&gt;
//             </span>

//             <span style={{ color: GREEN }}>Seminar</span>
//           </div>

//           {/* =========================================
//               FACILITIES UAMC IMAGE
//           ========================================== */}
//           <div
//             className="flex items-center"
//             style={{
//               width: "1090px",
//               height: "84.67px",
//               padding: "10.8332px 0",
//               boxSizing: "border-box",
//             }}
//           >
//             <img
//               src="/heading.png"
//               alt="Facilities UAMC"
//               style={{
//                 width: "558px",
//                 height: "63px",
//                 objectFit: "contain",
//                 objectPosition: "left center",
//                 display: "block",
//               }}
//             />
//           </div>
//         </div>

//         {/* =========================================
//             RIGHT IMAGE
//         ========================================== */}
//         <div
//           className="flex shrink-0 items-end justify-center"
//           style={{
//             width: "250px",
//             height: "287.29px",
//           }}
//         >
//           <img
//             src="/assets/Adobe Express - file.png"
//             alt="UAMC"
//             style={{
//               width: "250px",
//               height: "287.29px",
//               objectFit: "contain",
//               display: "block",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

const GREEN = "#018837";

export default function Banner() {
  return (
    <section
      className="relative w-full"
      style={{
        height: "500px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",

        padding: "80px",

        boxSizing: "border-box",

        backgroundImage: `url("/assets/Asset 1@4x 2.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* =========================================
          FRAME 1261155625
          GREEN OVERLAY
      ========================================== */}
      <div
        style={{
          width: "100%",
          height: "327.29px",

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",

          padding: "20px 50px",
          gap: "20px",

          boxSizing: "border-box",

          background: "rgba(1, 136, 55, 0.3)",
        }}
      >
        {/* =========================================
            FRAME 1261155626
            LEFT CONTENT
        ========================================== */}
        <div
          style={{
            width: "1090px",
            height: "118.67px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",

            padding: 0,
            gap: "10px",

            flexGrow: 1,
            flexShrink: 1,
            margin: 0,
          }}
        >
          {/* =========================================
              BREADCRUMB
          ========================================== */}
          <div
            style={{
              width: "303px",
              height: "24px",

              display: "flex",
              alignItems: "center",

              margin: 0,

              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "24px",

              color: "#000000",
              whiteSpace: "nowrap",
            }}
          >
            <span>HOME</span>

            <span
              style={{
                margin: "0 6px",
              }}
            >
              &gt;
            </span>

            <span>FACILITIES</span>

            <span
              style={{
                margin: "0 6px",
              }}
            >
              &gt;&gt;
            </span>

            <span style={{ color: GREEN }}>Seminar</span>
          </div>

          {/* =========================================
              FRAME 51
              HEADING IMAGE
          ========================================== */}
          <div
            style={{
              width: "1090px",
              height: "84.67px",

              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              padding: "10.8332px 0",
              gap: "10.83px",

              boxSizing: "border-box",
            }}
          >
            <img
              src="/heading.png"
              alt="Facilities UAMC"
              style={{
                width: "558px",
                height: "63px",

                display: "block",

                objectFit: "contain",
                objectPosition: "left center",

                flexShrink: 0,
              }}
            />
          </div>
        </div>

        {/* =========================================
            RIGHT IMAGE
            FIGMA: 250 × 287.29
        ========================================== */}
        <div
          style={{
            width: "250px",
            height: "287.29px",

            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",

            margin: 0,

            flexShrink: 0,
          }}
        >
          <img
            src="/assets/Adobe Express - file.png"
            alt="UAMC"
            style={{
              width: "250px",
              height: "287.29px",

              display: "block",

              objectFit: "contain",
              objectPosition: "center bottom",
            }}
          />
        </div>
      </div>
    </section>
  );
}
