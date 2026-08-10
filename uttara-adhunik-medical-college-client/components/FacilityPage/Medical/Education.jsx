export default function Education() {
  return (
    <section className="w-full bg-[#E6F4EB]">
      <div
        className="
          w-full
          max-w-[1600px]
          mx-auto
          min-h-[805px]
          flex
          flex-col
          items-center
          gap-[50px]
          px-[80px]
          py-[80px]
          box-border
        "
      >
        {/* ================= TOP CONTENT ================= */}
        <div
          className="
            w-full
            max-w-[1440px]
            h-[140px]
            flex
            flex-row
            justify-center
            items-start
            gap-[50px]
          "
        >
          {/* ================= LEFT SIDE ================= */}
          <div
            className="
              w-[707px]
              h-[120px]
              flex
              items-start
              flex-1
            "
          >
            {/* ICON + TITLE */}
            <div
              className="
                w-[418px]
                h-[120px]
                flex
                flex-row
                items-center
                gap-[20px]
              "
            >
              {/* Medical Education Icon */}
              <img
                src="/bag.png"
                alt=""
                className="
                  w-[120px]
                  h-[120px]
                  object-contain
                  shrink-0
                "
              />

              {/* TEXT */}
              <div
                className="
                  w-[278px]
                  h-[120px]
                  flex
                  flex-col
                  justify-center
                  items-start
                "
              >
                {/* Medical Education */}
                <h1
                  className="
                    m-0
                    whitespace-nowrap
                    text-[50px]
                    leading-[60px]
                    font-bold
                    tracking-[0.01em]
                    text-[#018837]
                  "
                  style={{
                    fontFamily: "'Bitter', serif",
                  }}
                >
                  Medical Education
                </h1>

                {/* Unit (MEU) */}
                <h1
                  className="
                    m-0
                    whitespace-nowrap
                    text-[50px]
                    leading-[60px]
                    font-bold
                    tracking-[0.01em]
                    text-[#018837]
                  "
                  style={{
                    fontFamily: "'Bitter', serif",
                  }}
                >
                  Unit (MEU)
                </h1>
              </div>
            </div>
          </div>

          {/* ================= DESCRIPTION ================= */}
          <div
            className="
              w-[683px]
              h-[140px]
              flex
              flex-row
              justify-center
              items-center
              px-[10px]
              py-[10px]
              shrink-0
              box-border
            "
          >
            <p
              className="
                w-[663px]
                h-[120px]
                m-0
                flex
                items-center
                text-justify
                text-[20px]
                leading-[30px]
                font-bold
                tracking-[0.01em]
                text-[#444444]
              "
              style={{
                fontFamily: "'Bitter', serif",
              }}
            >
              Enhancing Learning Through Technology &amp; Collaboration The
              Medical Education Unit (MEU) is a vital academic support center of
              the college, situated adjacent to the library. It is designed to
              enhance the quality of medical education by offering digital
              resources, training facilities, and collaborative opportunities.
            </p>
          </div>
        </div>

        {/* ================= LARGE IMAGE ================= */}
        <div
          className="
            w-full
            max-w-[1440px]
            h-[455px]
            flex
            flex-col
            justify-center
            items-start
            gap-[10px]
          "
        >
          <div
            className="
              w-full
              h-[457.35px]
              flex
              flex-row
              items-start
              gap-[10px]
            "
          >
            <img
              src="/assets/eb3eef03-816e-45c5-8b6f-695bc5f3b6eb.jpg"
              alt="Medical Education Unit"
              className="
                w-full
                h-[457.35px]
                object-cover
                flex-1
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
