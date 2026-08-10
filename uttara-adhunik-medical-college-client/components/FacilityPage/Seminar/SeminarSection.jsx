import React from "react";

const GREEN = "#018837";

export default function SeminarSection() {
  return (
    <section
      className="w-full bg-[#E6F4EB]"
      style={{
        padding: "80px",
      }}
    >
      <div
        className="mx-auto flex flex-col"
        style={{
          width: "100%",
          maxWidth: "1440px",
          gap: "50px",
        }}
      >
        {/* =========================================
            TOP CONTENT
        ========================================== */}
        <div
          className="flex w-full flex-col md:flex-row"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: "200px",
            minHeight: "170px",
          }}
        >
          {/* =========================================
              LEFT SIDE
              ICON + SCIENTIFIC SEMINARS IMAGE
          ========================================== */}
          <div
            className="flex w-full flex-1"
            style={{
              alignItems: "center",
            }}
          >
            <div
              className="flex"
              style={{
                width: "381px",
                height: "120px",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {/* Scientific Seminar Icon */}
              <img
                src="tv.png"
                alt=""
                style={{
                  width: "120px",
                  height: "120px",
                  flexShrink: 0,
                  objectFit: "contain",
                }}
              />

              {/* Scientific Seminars IMAGE
                  This is an image, NOT HTML text */}
              <img
                src="seminar.png"
                alt="Scientific Seminars"
                style={{
                  width: "241px",
                  height: "120px",
                  flexShrink: 0,
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE
              DESCRIPTION
          ========================================== */}
          <div
            className="flex w-full flex-1"
            style={{
              width: "683px",
              height: "170px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                width: "663px",
                height: "150px",
                margin: 0,
                display: "flex",
                alignItems: "center",
                fontFamily: "'Bitter', serif",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "30px",
                letterSpacing: "0.01em",
                textAlign: "justify",
                color: "#444444",
              }}
            >
              Promoting Knowledge Through Shared Clinical Experiences At Uttara
              Adhunik Medical College (UAMC), Scientific Seminars are held every
              Saturday, playing a key role in enhancing academic exchange and
              clinical insight. These sessions are coordinated by the Medical
              Education Unit (MEU).
            </p>
          </div>
        </div>

        {/* =========================================
            LARGE SEMINAR IMAGE
        ========================================== */}
        <div
          className="flex w-full"
          style={{
            height: "455px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "10px",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <div
            className="w-full"
            style={{
              height: "532.5px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <img
              src="/seminar-large.png"
              alt="Scientific Seminar at UAMC"
              style={{
                width: "100%",
                height: "532.5px",
                flexGrow: 1,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
