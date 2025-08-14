import React from "react";
import { ArrowUpRight } from "lucide-react";

const FEATURES = [
  "English Speaking Programmers",
  "Flexible Work Hours",
  "Rapid Onboarding Process",
  "Expertise In Top Technologies",
  "Reliable Partner Credentials",
];

export default function SoftwareSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "#00003C" }}>
      {/* Canvas: fixed height on lg to match spec; fluid below */}
      <div className="relative mx-auto max-w-[1440px] h-[560px] md:h-[620px] lg:h-[658px] px-6 md:px-10">
        {/* LEFT media (no oval) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-[85%] md:w-[75%] lg:w-[62%]">
          <img
            src="/back.png"
            alt="City skyline silhouette"
            className="h-full w-full object-cover grayscale opacity-90"
          />
          {/* Darken left and feather into brand solid on right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.25) 60%, rgba(0,0,60,1) 100%)",
            }}
          />
        </div>

        {/* HEADLINE */}
        <div className="relative z-10 flex h-full items-center">
          <div className="w-full lg:w-[55%] text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              Why Hire Software Developers
              <br />
              In India?
            </h2>
          </div>
        </div>

        {/* FEATURES – right on desktop, stacked below on small screens */}
        <div className="relative z-10 text-white lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 lg:w-[560px] w-full max-w-[900px] mt-6 lg:mt-0">
          <ul className="divide-y divide-white/10 bg-transparent">
            {FEATURES.map((item) => (
              <li key={item} className="group flex items-center justify-between py-4 md:py-5 lg:py-6">
                <span className="text-base md:text-lg lg:text-xl font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                  {item}
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 group-hover:border-white transition-colors">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
