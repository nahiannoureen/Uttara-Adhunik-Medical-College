import { Check } from "lucide-react";
const GREEN = "#018837";
const YELLOW = "#FECD2F";

function SustainabilityItem({ text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 shrink-0">
        <Check size={18} style={{ color: YELLOW }} strokeWidth={3} />
      </div>

      <p className="text-[#444444] font-bold text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default function SustainabilitySection() {
  return (
    <section className="bg-white px-6 md:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <h2
            className="text-3xl md:text-4xl font-bold mb-5"
            style={{
              color: GREEN,
              fontFamily: "'Bitter', serif",
            }}
          >
            Sustainability at UAMC
          </h2>

          <p className="text-[#525271] leading-relaxed mb-8">
            Uttara Adhunik Medical College (UAMC) is committed to sustainability
            by integrating innovative solutions in healthcare and education
            while minimizing its environmental impact.
          </p>

          <div className="flex flex-col gap-6">
            <SustainabilityItem text="Eco-Friendly Campus – UAMC integrates energy-efficient infrastructure and waste management to promote a greener learning environment." />

            <SustainabilityItem text="Sustainable Healthcare Practices – The institution adopts responsible resource management to reduce environmental impact in medical education and patient care." />

            <SustainabilityItem text="Innovation & Collaboration – UAMC explores partnerships and modern solutions to enhance long-term sustainability in healthcare and education." />
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 h-80 md:h-96">
          <div
            className="absolute right-0 top-8 w-1/2 h-4/5"
            style={{ background: "#B7D8EF" }}
          />

          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=420&fit=crop"
            alt="Student"
            className="absolute left-0 top-16 w-1/3 h-3/4 object-cover shadow-lg"
          />

          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=420&fit=crop"
            alt="Campus walkway"
            className="absolute right-4 top-0 w-1/3 h-3/4 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
