"use client";

const GREEN = "#018837";

export default function Banner() {
  return (
    <section
      style={{
        width: "100%",
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
          1440px × 327.29px
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
            flex: "1 1 auto",
            width: "auto",
            height: "118.67px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",

            padding: 0,
            margin: 0,

            gap: "10px",

            minWidth: 0,
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              width: "303px",
              height: "24px",

              display: "flex",
              alignItems: "center",

              padding: 0,
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

            <span>ADMISSION</span>

            <span
              style={{
                margin: "0 6px",
              }}
            >
              &gt;&gt;
            </span>

            <span style={{ color: GREEN }}>Admission Papers</span>
          </div>

          {/* =========================================
              FRAME 51
          ========================================== */}
          <div
            style={{
              width: "100%",
              height: "84.67px",

              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              padding: "10.8332px 0",
              gap: "10.83px",

              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "558px",
                height: "63px",

                display: "flex",
                alignItems: "center",

                flexShrink: 0,

                fontFamily: "'Inter', sans-serif",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "48px",
                lineHeight: "63px",

                color: "#000000",
                whiteSpace: "nowrap",
              }}
            >
              Admission <span style={{  }}>UAMC</span>
            </div>
          </div>
        </div>

        {/* =========================================
            RIGHT IMAGE
            EXACT FIGMA SIZE
            250px × 287.29px
        ========================================== */}
        <div
          style={{
            width: "250px",
            height: "287.29px",

            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",

            padding: 0,
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
