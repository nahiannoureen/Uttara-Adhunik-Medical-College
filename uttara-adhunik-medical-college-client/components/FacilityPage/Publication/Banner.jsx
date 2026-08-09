// const GREEN = "#018837";

// export default function Banner() {
//   return (
//     <section
//       className="relative w-full h-[500px] bg-cover bg-center flex items-end px-[80px] py-[80px]"
//       style={{
//         backgroundImage: `url("/assets/Asset 1@4x 2.png")`,
//       }}
//     >
//       {/* Green Overlay */}
//       <div
//         className="
//           w-full h-[327.29px]
//           flex flex-row
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
//             flex flex-col
//             justify-end
//             items-start
//             gap-[10px]
//             w-[1090px]
//             h-[118.67px]
//             flex-1
//           "
//         >
//           {/* Breadcrumb */}
//           <div
//             className="
//               w-[292px]
//               h-[24px]
//               flex items-center
//               text-[20px]
//               leading-[24px]
//               font-medium
//               text-black
//               whitespace-nowrap
//             "
//             style={{
//               fontFamily: "'Inter', sans-serif",
//             }}
//           >
//             <span>Home</span>
//             <span className="mx-[5px]">&gt;</span>
//             <span>Facilities</span>
//             <span className="mx-[5px]">&gt;&gt;</span>
//             <span>Cafeteria</span>
//           </div>

//           {/* Heading */}
//           <div
//             className="
//               w-full
//               h-[84.67px]
//               flex items-center
//               py-[10.8332px]
//             "
//           >
//             <h1
//               className="
//                 w-[555px]
//                 h-[63px]
//                 flex items-center
//                 text-[70px]
//                 leading-[62px]
//                 font-light
//                 text-[#262626]
//                 whitespace-nowrap
//                 m-0
//               "
//               style={{
//                 fontFamily: "'Bitter', serif",
//               }}
//             >
//               FACILITIES UAMC
//             </h1>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div
//           className="
//             shrink-0
//             w-[250px]
//             h-[287.29px]
//             flex items-end justify-center
//           "
//         >
//           <img
//             src="/assets/Adobe Express - file.png"
//             alt="UAMC"
//             className="w-[250px] h-[287.29px] object-contain"
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
      className="
        relative
        w-full
        h-[500px]
        bg-cover
        bg-center
        flex
        items-end
        px-[80px]
        py-[80px]
      "
      style={{
        backgroundImage: `url("/assets/Asset 1@4x 2.png")`,
      }}
    >
      {/* Green Overlay */}
      <div
        className="
          w-full
          h-[327.29px]
          flex
          flex-row
          justify-between
          items-end
          gap-[20px]
          px-[50px]
          py-[20px]
        "
        style={{
          background: "rgba(1, 136, 55, 0.3)",
        }}
      >
        {/* Left Content */}
        <div
          className="
            flex
            flex-col
            justify-end
            items-start
            gap-[10px]
            flex-1
            h-[118.67px]
          "
        >
          {/* Breadcrumb */}
          <div
            className="
              w-[313px]
              h-[24px]
              flex
              items-center
              text-[20px]
              leading-[24px]
              font-medium
              whitespace-nowrap
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span className="text-black">HOME</span>

            <span className="text-black mx-[6px]">&gt;</span>

            <span className="text-black">FACILITIES</span>

            <span className="text-black mx-[6px]">&gt;&gt;</span>

            {/* Current page */}
            <span style={{ color: GREEN }}>Publications</span>
          </div>

          {/* FACILITIES UAMC IMAGE */}
          <div
            className="
              w-[1090px]
              h-[84.67px]
              flex
              items-center
              py-[10.8332px]
            "
          >
            <img
              src="/heading.png"
              alt="Facilities UAMC"
              className="
                w-[558px]
                h-[63px]
                object-contain
                object-left
              "
            />
          </div>
        </div>

        {/* Right Image */}
        <div
          className="
            shrink-0
            w-[250px]
            h-[287.29px]
            flex
            items-end
            justify-center
          "
        >
          <img
            src="/assets/Adobe Express - file.png"
            alt="UAMC"
            className="
              w-[250px]
              h-[287.29px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
