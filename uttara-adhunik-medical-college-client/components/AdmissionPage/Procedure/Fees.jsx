"use client";

const GREEN = "#018837";
const TEXT = "#444444";

const bdRows = [
  ["01", "Admission Fee", "19,44,000/-"],
  ["02", "Internship Fee", "1,80,000/-"],
];

const foreignRows = [["01", "Admission & Tuition (5 Years)", "$40,000"]];

function FeeTable({ currency, rows }) {
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

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          padding: "20px",
          gap: "300px",

          background: "rgba(20, 168, 0, 0.1)",
          borderTop: "1px solid rgba(68, 68, 68, 0.5)",
          borderBottom: "1px solid rgba(68, 68, 68, 0.5)",
        }}
      >
        <div
          style={{
            width: "198px",
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
            width: "198px",
            fontFamily: "'Bitter', serif",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "15px",
            color: TEXT,
          }}
        >
          Particulars
        </div>

        <div
          style={{
            width: "16px",
            height: "16px",
            borderLeft: "1px solid #444444",
            transform: "rotate(0deg)",
          }}
        />

        <div
          style={{
            width: "198px",
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
      {rows.map(([number, particulars, amount], index) => (
        <div
          key={number}
          style={{
            width: "832px",
            height: "56px",
            boxSizing: "border-box",

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

            padding: "20px",
            gap: "300px",

            borderTop:
              index === rows.length - 1 ? "none" : "0px solid transparent",
          }}
        >
          <div
            style={{
              width: "198px",
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
              width: "198px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "15px",
              color: TEXT,
            }}
          >
            {particulars}
          </div>

          <div
            style={{
              width: "16px",
              height: "16px",
              borderLeft: "1px solid #444444",
            }}
          />

          <div
            style={{
              width: "198px",
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

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          padding: "20px",
          gap: "300px",

          borderTop: "0.5px solid rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          style={{
            width: "198px",
            opacity: 0,
            fontFamily: "'Lexend', sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "15px",
          }}
        >
          Total Payable
        </div>

        <div
          style={{
            width: "198px",
            display: "flex",
            justifyContent: "flex-end",

            fontFamily: "'Bitter', serif",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "15px",
            color: TEXT,
          }}
        >
          Total Payable
        </div>

        <div
          style={{
            width: "16px",
            height: "16px",
            borderLeft: "1px solid #444444",
          }}
        />

        <div
          style={{
            width: "198px",
            display: "flex",
            justifyContent: "flex-end",

            fontFamily: "'Bitter', serif",
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "15px",
            color: TEXT,
          }}
        >
          {currency === "Amount (BDT)" ? "21,24,000/-" : "$40,000"}
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <div
      style={{
        width: "1440px",
        height: "44.8px",

        display: "flex",
        alignItems: "center",

        position: "relative",
        padding: 0,
        margin: 0,
      }}
    >
      <h2
        style={{
          position: "absolute",
          left: "34px",
          top: 0,

          margin: 0,
          padding: 0,

          fontFamily: "'Bitter', serif",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "45px",

          color: TEXT,
        }}
      >
        {children}
      </h2>
    </div>
  );
}

function EligibilityText({ children }) {
  return (
    <div
      style={{
        width: "1440px",
        height: "82px",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        padding: "0 20px",
        gap: "10px",

        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          width: "1400px",
          height: "82px",

          margin: 0,

          fontFamily: "'Inter', sans-serif",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "27px",

          color: TEXT,
        }}
      >
        {children}
      </p>
    </div>
  );
}

function SubSection({ title, children, width = "663px" }) {
  return (
    <div
      style={{
        width,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        gap: "10px",
        boxSizing: "border-box",
      }}
    >
      <h3
        style={{
          margin: 0,

          fontFamily: "'Bitter', serif",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "25px",
          lineHeight: "45px",

          color: TEXT,
        }}
      >
        {title}
      </h3>

      <div
        style={{
          width,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",

          padding: "10px 20px",
          gap: "10px",

          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            margin: 0,

            fontFamily: "'Inter', sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "27px",

            color: TEXT,
          }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}

function Notice({ children, width = "1242px" }) {
  return (
    <div
      style={{
        width,
        minHeight: "48px",

        boxSizing: "border-box",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        padding: "10px 20px",
        gap: "10px",

        borderLeft: `4px solid ${GREEN}`,
      }}
    >
      <p
        style={{
          margin: 0,

          fontFamily: "'Inter', sans-serif",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "27px",

          color: "#000000",
        }}
      >
        {children}
      </p>
    </div>
  );
}

export default function Fees() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "2405.4px",

        background: "#FFFFFF",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        padding: "80px",
        gap: "50px",

        boxSizing: "border-box",
      }}
    >
      {/* =====================================================
          BD / NATIONAL STUDENTS
      ====================================================== */}
      <div
        style={{
          width: "1440px",
          height: "1092.8px",

          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",

          padding: "30px 0",
          gap: "20px",

          boxSizing: "border-box",
        }}
      >
        {/* Main information */}
        <div
          style={{
            width: "1440px",
            height: "568.8px",

            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",

            padding: 0,
            gap: "20px",
          }}
        >
          {/* Heading + eligibility */}
          <div
            style={{
              width: "1440px",
              height: "146.8px",

              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",

              padding: 0,
              gap: "20px",
            }}
          >
            <SectionHeading>For BD/National Student</SectionHeading>

            <EligibilityText>
              Eligibility Applicants must meet the criteria set by the
              Directorate General of Medical Education (DGME) under the Ministry
              of Health and Family Welfare, Government of Bangladesh.
            </EligibilityText>
          </div>

          {/* Two columns */}
          <div
            style={{
              width: "1440px",

              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",

              gap: "100px",
            }}
          >
            <SubSection title="Full-time tuition" width="663px">
              Admission is based on the results of the DGHS national medical
              admission test. Selection follows candidate preference and merit
              list as per DGHS guidelines. Final selection is done by the
              admission committee formed by DGME.
            </SubSection>

            <SubSection
              title="Full-time domestic tuition fee per term"
              width="615px"
            >
              Total Seats: 90 for 1st Year MBBS (since 2013-2014). Poor Quota:
              5% seats (free studentship) based on merit & financial need.
              Freedom Fighter Quota: Available under DGHS rules.
            </SubSection>
          </div>

          <Notice>
            Selected students must complete admission within the declared
            deadline. Failure to do so will result in cancellation, and seats
            will be filled from the waiting list.
          </Notice>
        </div>

        {/* International students */}
        <div
          style={{
            width: "832px",
            minHeight: "444px",

            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",

            padding: "20px 0",
            gap: "30px",

            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              margin: 0,

              fontFamily: "'Bitter', serif",
              fontWeight: 700,
              fontSize: "25px",
              lineHeight: "45px",

              color: TEXT,
            }}
          >
            Full-time International students
          </h3>

          <FeeTable currency="Amount (BDT)" rows={bdRows} />

          <Notice width="362px">
            Monthly Tuition Fee: ৳10,000 until course VAT applicable as per
            government rules
          </Notice>
        </div>

        <div
          style={{
            width: "1271px",
            height: 0,
            borderTop: "1px solid #444444",
          }}
        />
      </div>

      {/* =====================================================
          FOREIGN STUDENTS
      ====================================================== */}
      <div
        style={{
          width: "1440px",
          height: "828.8px",

          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",

          padding: "30px 0",
          gap: "20px",

          boxSizing: "border-box",
        }}
      >
        {/* Main information */}
        <div
          style={{
            width: "1440px",
            minHeight: "377.8px",

            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",

            padding: 0,
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "1440px",
              height: "146.8px",

              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",

              padding: 0,
              gap: "20px",
            }}
          >
            <SectionHeading>For Foreign Students</SectionHeading>

            <EligibilityText>
              Eligibility Must hold a non-Bangladeshi passport. Must follow
              foreign student admission policy set by the Government of
              Bangladesh.
            </EligibilityText>
          </div>

          <SubSection title="Full-time tuition" width="685px">
            Attested copies of O & A level or equivalent certificates (by their
            Foreign Ministry). Application form from the Bangladesh Embassy of
            the respective country. UAMC’s Foreign Student Application Form
            (available at college office). Photocopies of passport & academic
            documents. Documents must be sent to DGHS via the Foreign Ministry
            of Bangladesh.
          </SubSection>
        </div>

        {/* Foreign student fee table */}
        <div
          style={{
            width: "832px",
            minHeight: "371px",

            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",

            padding: "20px 0",
            gap: "30px",

            boxSizing: "border-box",
          }}
        >
          <h3
            style={{
              margin: 0,

              fontFamily: "'Bitter', serif",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "45px",

              textTransform: "capitalize",
              color: TEXT,
            }}
          >
            Full-time International students
          </h3>

          <FeeTable currency="Amount (USD)" rows={foreignRows} />

          <Notice width="659px">
            VAT & university fees are applicable as per government and
            university regulations.
          </Notice>
        </div>
      </div>

      {/* =====================================================
          CONTACT FOR ADMISSION
      ====================================================== */}
      <div
        style={{
          width: "1440px",
          height: "173.8px",

          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",

          padding: 0,
          gap: "20px",

          boxSizing: "border-box",
        }}
      >
        <SectionHeading>Contact for Admission</SectionHeading>

        <div
          style={{
            width: "1440px",
            height: "109px",

            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            padding: "0 20px",
            gap: "10px",

            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              width: "1400px",
              height: "109px",

              margin: 0,

              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "27px",

              color: TEXT,
            }}
          >
            Uttara Adhunik Medical College
            <br />
            🏥 House # 34, Road # 4, Sector # 9,
            <br />
            Sonargaon Janapath, Uttara Model Town,
            <br />
            Dhaka-1230, Bangladesh
          </p>
        </div>
      </div>
    </section>
  );
}
