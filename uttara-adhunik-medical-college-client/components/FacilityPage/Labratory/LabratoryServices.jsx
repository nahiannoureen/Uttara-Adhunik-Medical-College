export default function LaboratoryServices() {
  return (
    <section className="w-full bg-[#E6F4EB]">
      <div
        className="
          w-full
          max-w-[1600px]
          mx-auto
          h-auto
          min-h-[805px]
          flex
          flex-col
          items-center
          gap-[50px]
          px-[80px]
          py-[80px]
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
          {/* LEFT SIDE */}
          <div
            className="
              w-[707px]
              h-[120px]
              flex
              flex-col
              items-start
              gap-[50px]
              flex-1
            "
          >
            {/* Icon + Laboratory Services Image */}
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
              {/* Laboratory Icon */}
              <img
                src="/microscope.png"
                alt=""
                className="
                  w-[120px]
                  h-[120px]
                  object-contain
                  shrink-0
                "
              />

              {/* Laboratory Services Image */}
              <div
                className="
                  w-[278px]
                  h-[120px]
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  src="/lab.png"
                  alt="Laboratory Services"
                  className="
                    w-[278px]
                    h-[120px]
                    object-contain
                  "
                />
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
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
              Accuracy. Efficiency. Around-the-Clock Support. At Uttara Adhunik
              Medical College &amp; Hospital (UAMCH), we prioritize precision
              and speed in delivering diagnostic test results, ensuring optimal
              care for every patient.
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
              alt="Laboratory Services"
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
