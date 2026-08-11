// "use client";

// const GREEN = "#018837";
// const TEXT = "#444444";

// const bdRows = [
//   ["01", "Admission Fee", "19,44,000/-"],
//   ["02", "Internship Fee", "1,80,000/-"],
// ];

// const foreignRows = [["01", "Admission & Tuition (5 Years)", "$40,000"]];

// function FeeTable({ currency, rows }) {
//   const total = currency === "Amount (BDT)" ? "21,24,000/-" : "$40,000";

//   return (
//     <div
//       style={{
//         width: "832px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "stretch",
//         padding: 0,
//         margin: 0,
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Header */}
//       <div
//         style={{
//           width: "832px",
//           height: "56px",
//           display: "grid",
//           gridTemplateColumns: "90px 1fr 1px 198px",
//           alignItems: "center",
//           boxSizing: "border-box",
//           background: "rgba(20, 168, 0, 0.1)",
//           borderTop: "1px solid rgba(68, 68, 68, 0.5)",
//           borderBottom: "1px solid rgba(68, 68, 68, 0.5)",
//         }}
//       >
//         <div
//           style={{
//             paddingLeft: "20px",
//             fontFamily: "'Bitter', serif",
//             fontWeight: 700,
//             fontSize: "15px",
//             lineHeight: "15px",
//             color: TEXT,
//           }}
//         >
//           No.
//         </div>

//         <div
//           style={{
//             paddingLeft: "20px",
//             fontFamily: "'Bitter', serif",
//             fontWeight: 700,
//             fontSize: "15px",
//             lineHeight: "15px",
//             color: TEXT,
//           }}
//         >
//           Particulars
//         </div>

//         {/* Perfectly aligned divider */}
//         <div
//           style={{
//             width: "1px",
//             height: "56px",
//             background: "#444444",
//           }}
//         />

//         <div
//           style={{
//             height: "56px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-end",
//             paddingRight: "20px",
//             fontFamily: "'Bitter', serif",
//             fontWeight: 700,
//             fontSize: "15px",
//             lineHeight: "15px",
//             color: TEXT,
//             boxSizing: "border-box",
//           }}
//         >
//           {currency}
//         </div>
//       </div>

//       {/* Rows */}
//       {rows.map(([number, particulars, amount]) => (
//         <div
//           key={number}
//           style={{
//             width: "832px",
//             height: "56px",
//             display: "grid",
//             gridTemplateColumns: "90px 1fr 1px 198px",
//             alignItems: "center",
//             boxSizing: "border-box",
//           }}
//         >
//           <div
//             style={{
//               paddingLeft: "20px",
//               fontFamily: "'Inter', sans-serif",
//               fontWeight: 400,
//               fontSize: "15px",
//               lineHeight: "15px",
//               color: TEXT,
//             }}
//           >
//             {number}
//           </div>

//           <div
//             style={{
//               paddingLeft: "20px",
//               fontFamily: "'Inter', sans-serif",
//               fontWeight: 400,
//               fontSize: "15px",
//               lineHeight: "15px",
//               color: TEXT,
//               whiteSpace: "nowrap",
//             }}
//           >
//             {particulars}
//           </div>

//           {/* Perfectly aligned divider */}
//           <div
//             style={{
//               width: "1px",
//               height: "56px",
//               background: "#444444",
//             }}
//           />

//           <div
//             style={{
//               height: "56px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-end",
//               paddingRight: "20px",
//               fontFamily: "'Inter', sans-serif",
//               fontWeight: 400,
//               fontSize: "15px",
//               lineHeight: "15px",
//               color: TEXT,
//               whiteSpace: "nowrap",
//               boxSizing: "border-box",
//             }}
//           >
//             {amount}
//           </div>
//         </div>
//       ))}

//       {/* Total row */}
//       <div
//         style={{
//           width: "832px",
//           height: "56px",
//           display: "grid",
//           gridTemplateColumns: "90px 1fr 1px 198px",
//           alignItems: "center",
//           boxSizing: "border-box",
//           borderTop: "0.5px solid rgba(0, 0, 0, 0.5)",
//         }}
//       >
//         <div />

//         <div
//           style={{
//             paddingLeft: "20px",
//             fontFamily: "'Bitter', serif",
//             fontWeight: 700,
//             fontSize: "15px",
//             lineHeight: "15px",
//             color: TEXT,
//             whiteSpace: "nowrap",
//           }}
//         >
//           Total Payable
//         </div>

//         {/* Perfectly aligned divider */}
//         <div
//           style={{
//             width: "1px",
//             height: "56px",
//             background: "#444444",
//           }}
//         />

//         <div
//           style={{
//             height: "56px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-end",
//             paddingRight: "20px",
//             fontFamily: "'Bitter', serif",
//             fontWeight: 700,
//             fontSize: "15px",
//             lineHeight: "15px",
//             color: TEXT,
//             whiteSpace: "nowrap",
//             boxSizing: "border-box",
//           }}
//         >
//           {total}
//         </div>
//       </div>
//     </div>
//   );
// }

// function SectionHeading({ children }) {
//   return (
//     <div
//       style={{
//         width: "1440px",
//         minHeight: "45px",
//         display: "flex",
//         alignItems: "center",
//         padding: 0,
//         margin: 0,
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Green vertical bar */}
//       <div
//         style={{
//           width: "5px",
//           height: "45px",
//           background: GREEN,
//           marginLeft: "34px",
//           flexShrink: 0,
//         }}
//       />

//       <h2
//         style={{
//           margin: 0,
//           marginLeft: "15px",
//           padding: 0,
//           fontFamily: "'Bitter', serif",
//           fontStyle: "normal",
//           fontWeight: 700,
//           fontSize: "40px",
//           lineHeight: "45px",
//           color: TEXT,
//         }}
//       >
//         {children}
//       </h2>
//     </div>
//   );
// }

// function EligibilityText({ children }) {
//   return (
//     <div
//       style={{
//         width: "1400px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//         padding: 0,
//         marginLeft: "34px",
//         gap: "8px",
//         boxSizing: "border-box",
//       }}
//     >
//       <p
//         style={{
//           margin: 0,
//           fontFamily: "'Inter', sans-serif",
//           fontWeight: 700,
//           fontSize: "18px",
//           lineHeight: "27px",
//           color: TEXT,
//         }}
//       >
//         Eligibility
//       </p>

//       <p
//         style={{
//           width: "1400px",
//           margin: 0,
//           fontFamily: "'Inter', sans-serif",
//           fontWeight: 400,
//           fontSize: "18px",
//           lineHeight: "27px",
//           color: TEXT,
//         }}
//       >
//         {children}
//       </p>
//     </div>
//   );
// }

// function BulletSection({ title, children, width = "900px" }) {
//   return (
//     <div
//       style={{
//         width,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//         padding: 0,
//         marginLeft: "34px",
//         gap: "10px",
//         boxSizing: "border-box",
//       }}
//     >
//       <h3
//         style={{
//           margin: 0,
//           fontFamily: "'Bitter', serif",
//           fontStyle: "normal",
//           fontWeight: 700,
//           fontSize: "25px",
//           lineHeight: "45px",
//           color: TEXT,
//         }}
//       >
//         {title}
//       </h3>

//       <ul
//         style={{
//           margin: 0,
//           paddingLeft: "25px",
//           fontFamily: "'Inter', sans-serif",
//           fontWeight: 400,
//           fontSize: "16px",
//           lineHeight: "27px",
//           color: TEXT,
//         }}
//       >
//         {children}
//       </ul>
//     </div>
//   );
// }

// function Notice({ children, width = "1242px" }) {
//   return (
//     <div
//       style={{
//         width,
//         minHeight: "48px",
//         boxSizing: "border-box",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "flex-start",
//         alignItems: "center",
//         padding: "10px 20px",
//         marginLeft: "34px",
//         borderLeft: `4px solid ${GREEN}`,
//       }}
//     >
//       <p
//         style={{
//           margin: 0,
//           fontFamily: "'Inter', sans-serif",
//           fontWeight: 400,
//           fontSize: "16px",
//           lineHeight: "27px",
//           color: "#000000",
//         }}
//       >
//         {children}
//       </p>
//     </div>
//   );
// }

// export default function Fees() {
//   return (
//     <section
//       style={{
//         width: "100%",
//         minHeight: "2405.4px",
//         background: "#FFFFFF",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "80px",
//         gap: "50px",
//         boxSizing: "border-box",
//       }}
//     >
//       {/* =====================================================
//           BD / NATIONAL STUDENTS
//       ====================================================== */}
//       <div
//         style={{
//           width: "1440px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           padding: "30px 0",
//           gap: "20px",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* Main information */}
//         <div
//           style={{
//             width: "1440px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             padding: 0,
//             gap: "28px",
//           }}
//         >
//           {/* Heading + Eligibility */}
//           <div
//             style={{
//               width: "1440px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               gap: "14px",
//             }}
//           >
//             <SectionHeading>For BD/National Student</SectionHeading>

//             <EligibilityText>
//               Applicants must meet the criteria set by the Directorate General
//               of Medical Education (DGME) under the Ministry of Health and
//               Family Welfare, Government of Bangladesh.
//             </EligibilityText>
//           </div>

//           {/* Selection & Admission */}
//           <BulletSection title="Selection & Admission">
//             <li>
//               Admission is based on the results of the DGHS national medical
//               admission test.
//             </li>

//             <li>
//               Selection follows candidate preference and merit list as per DGHS
//               guidelines.
//             </li>

//             <li>
//               Final selection is done by the admission committee formed by DGME.
//             </li>
//           </BulletSection>

//           {/* Student Quotas */}
//           <BulletSection title="Student Quotas">
//             <li>
//               <strong>Poor Quota:</strong> 5% seats (free studentship) based on
//               merit & financial need.
//             </li>

//             <li>
//               <strong>Freedom Fighter Quota:</strong> Available under DGHS
//               rules.
//             </li>

//             <li>
//               <strong>Total Seats:</strong> 90 for 1st Year MBBS (since
//               2013-2014).
//             </li>
//           </BulletSection>

//           {/* Notice closer to the green bar */}
//           <Notice>
//             Selected students must complete admission within the declared
//             deadline. Failure to do so will result in cancellation, and seats
//             will be filled from the waiting list.
//           </Notice>
//         </div>

//         {/* =====================================================
//             FEE STRUCTURE
//         ====================================================== */}
//         <div
//           style={{
//             width: "832px",
//             minHeight: "444px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             padding: "20px 0",
//             gap: "30px",
//             boxSizing: "border-box",
//           }}
//         >
//           <h3
//             style={{
//               margin: 0,
//               fontFamily: "'Bitter', serif",
//               fontWeight: 700,
//               fontSize: "25px",
//               lineHeight: "45px",
//               color: TEXT,
//             }}
//           >
//             Fee Structure (Session 2024-2025)
//           </h3>

//           <FeeTable currency="Amount (BDT)" rows={bdRows} />

//           <Notice width="362px">
//             <strong>Monthly Tuition Fee:</strong>&nbsp;৳10,000
//             <br />
//             <strong>VAT</strong> applicable as per government rules
//           </Notice>
//         </div>

//         <div
//           style={{
//             width: "1271px",
//             height: 0,
//             borderTop: "1px solid #444444",
//           }}
//         />
//       </div>

//       {/* =====================================================
//           FOREIGN STUDENTS
//       ====================================================== */}
//       <div
//         style={{
//           width: "1440px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           padding: "30px 0",
//           gap: "20px",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* Main information */}
//         <div
//           style={{
//             width: "1440px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             padding: 0,
//             gap: "20px",
//           }}
//         >
//           <div
//             style={{
//               width: "1440px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               padding: 0,
//               gap: "14px",
//             }}
//           >
//             <SectionHeading>For Foreign Students</SectionHeading>

//             <div
//               style={{
//                 width: "1400px",
//                 display: "flex",
//                 flexDirection: "column",
//                 marginLeft: "34px",
//                 gap: "8px",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   fontFamily: "'Inter', sans-serif",
//                   fontWeight: 700,
//                   fontSize: "18px",
//                   lineHeight: "27px",
//                   color: TEXT,
//                 }}
//               >
//                 Eligibility
//               </p>

//               <p
//                 style={{
//                   margin: 0,
//                   fontFamily: "'Inter', sans-serif",
//                   fontWeight: 400,
//                   fontSize: "18px",
//                   lineHeight: "27px",
//                   color: TEXT,
//                 }}
//               >
//                 Must hold a non-Bangladeshi passport. Must follow foreign
//                 student admission policy set by the Government of Bangladesh.
//               </p>
//             </div>
//           </div>

//           <BulletSection title="Full-time tuition">
//             <li>
//               Attested copies of O & A level or equivalent certificates (by
//               their Foreign Ministry).
//             </li>

//             <li>
//               Application form from the Bangladesh Embassy of the respective
//               country. UAMC’s Foreign Student Application Form (available at
//               college office).
//             </li>

//             <li>
//               Photocopies of passport & academic documents. Documents must be
//               sent to DGHS via the Foreign Ministry of Bangladesh.
//             </li>
//           </BulletSection>
//         </div>

//         {/* Foreign student fee table */}
//         <div
//           style={{
//             width: "832px",
//             minHeight: "371px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             padding: "20px 0",
//             gap: "30px",
//             boxSizing: "border-box",
//           }}
//         >
//           <h3
//             style={{
//               margin: 0,
//               fontFamily: "'Bitter', serif",
//               fontWeight: 700,
//               fontSize: "32px",
//               lineHeight: "45px",
//               textTransform: "capitalize",
//               color: TEXT,
//             }}
//           >
//             Fee Structure (Session 2024-2025)
//           </h3>

//           <FeeTable currency="Amount (USD)" rows={foreignRows} />

//           <Notice width="659px">
//             <strong>VAT & university fees:</strong>&nbsp; are applicable as per
//             government and university regulations.
//           </Notice>
//         </div>
//       </div>

//       {/* =====================================================
//           CONTACT FOR ADMISSION
//       ====================================================== */}
//       <div
//         style={{
//           width: "1440px",
//           minHeight: "173.8px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           padding: 0,
//           gap: "20px",
//           boxSizing: "border-box",
//         }}
//       >
//         <SectionHeading>Contact for Admission</SectionHeading>

//         <div
//           style={{
//             width: "1440px",
//             minHeight: "109px",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//             padding: "0 20px",
//             gap: "10px",
//             boxSizing: "border-box",
//           }}
//         >
//           <p
//             style={{
//               width: "1400px",
//               margin: 0,
//               fontFamily: "'Inter', sans-serif",
//               fontWeight: 400,
//               fontSize: "18px",
//               lineHeight: "27px",
//               color: TEXT,
//             }}
//           >
//             Uttara Adhunik Medical College
//             <br />
//             🏥 House # 34, Road # 4, Sector # 9,
//             <br />
//             Sonargaon Janapath, Uttara Model Town,
//             <br />
//             Dhaka-1230, Bangladesh
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


function FeeTable({ currency, rows }) {
  const isBDT = currency === "Amount (BDT)";

  return (
    <div
      style={{
        width: "832px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          width: "832px",
          height: "56px",
          boxSizing: "border-box",

          display: "grid",
          gridTemplateColumns: "80px 1fr 1px 198px",
          alignItems: "center",

          paddingTop: 0,
          paddingRight: "20px",
          paddingBottom: 0,
          paddingLeft: "20px",

          background: "rgba(20, 168, 0, 0.1)",
          borderTop: "1px solid rgba(68, 68, 68, 0.5)",
          borderBottom: "1px solid rgba(68, 68, 68, 0.5)",
        }}
      >
        <div
          style={{
            fontFamily: "'Bitter', serif",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "15px",
            color: TEXT,
          }}
        >
          No.
        </div>

        <div
          style={{
            fontFamily: "'Bitter', serif",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "15px",
            color: TEXT,
          }}
        >
          Particulars
        </div>

        {/* Short divider */}
        <div
          style={{
            width: "1px",
            height: "16px",
            background: "#444444",
            justifySelf: "center",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontFamily: "'Bitter', serif",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "15px",
            color: TEXT,
          }}
        >
          {currency}
        </div>
      </div>

      {/* Rows */}
      {rows.map(([number, particulars, amount]) => (
        <div
          key={number}
          style={{
            width: "832px",
            height: "56px",
            boxSizing: "border-box",

            display: "grid",
            gridTemplateColumns: "80px 1fr 1px 198px",
            alignItems: "center",

            paddingTop: 0,
            paddingRight: "20px",
            paddingBottom: 0,
            paddingLeft: "20px",
          }}
        >
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "15px",
              color: TEXT,
            }}
          >
            {number}
          </div>

          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "15px",
              color: TEXT,
            }}
          >
            {particulars}
          </div>

          {/* Short divider */}
          <div
            style={{
              width: "1px",
              height: "16px",
              background: "#444444",
              justifySelf: "center",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "15px",
              color: TEXT,
            }}
          >
            {amount}
          </div>
        </div>
      ))}

      {/* Total row */}
      <div
        style={{
          width: "832px",
          height: "56px",
          boxSizing: "border-box",

          display: "grid",
          gridTemplateColumns: "80px 1fr 1px 198px",
          alignItems: "center",

          paddingTop: 0,
          paddingRight: "20px",
          paddingBottom: 0,
          paddingLeft: "20px",

          borderTop: "0.5px solid rgba(0, 0, 0, 0.5)",
        }}
      >
        <div />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "12px",

            fontFamily: "'Bitter', serif",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "15px",
            color: TEXT,
          }}
        >
          Total Payable
        </div>

        {/* Short divider */}
        <div
          style={{
            width: "1px",
            height: "16px",
            background: "#444444",
            justifySelf: "center",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",

            fontFamily: "'Bitter', serif",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "15px",
            color: TEXT,
          }}
        >
          {isBDT ? "21,24,000/-" : "$40,000"}
        </div>
      </div>
    </div>
  );
}