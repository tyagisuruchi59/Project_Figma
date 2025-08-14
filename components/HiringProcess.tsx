import React from "react";
import { Search, Code, Users, Zap } from "lucide-react";

/**
 * HiringProcess – matches the provided reference image layout & styling.
 * - Green → Pink gradient background as per reference
 * - Four circular step cards (179×179) with #2FC980 8px ring and pink number badge (#FF8C91)
 * - Arrows between steps on desktop, stacked responsively on mobile
 */

const steps = [
  { id: 1, title: "INQUIRY", icon: Search, desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry." },
  { id: 2, title: "SELECT DEVELOPERS", icon: Code, desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry." },
  { id: 3, title: "TEAM INTEGRATION", icon: Users, desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry." },
  { id: 4, title: "TEAM SCALING", icon: Zap, desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry." },
];

export default function HiringProcess() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background gradient green to pink */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(224,248,244,1) 0%, rgba(255,255,255,1) 50%, rgba(255,232,234,1) 100%)",
        }}
      />

      {/* right dotted blob */}
      <svg className="pointer-events-none absolute right-16 top-24 -z-10 hidden sm:block" width="110" height="110" viewBox="0 0 110 110" fill="none">
        <g fill="#FF8C91" opacity="0.35">
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <circle key={`d-${r}-${c}`} cx={15 + c * 18} cy={15 + r * 18} r={3} />
            ))
          )}
        </g>
      </svg>

      {/* left scribbles */}
      <svg className="pointer-events-none absolute left-20 bottom-16 -z-10 hidden sm:block" width="90" height="60" viewBox="0 0 90 60" fill="none">
        <path d="M10 45 C15 25, 25 15, 30 10" stroke="#9FE4D5" strokeWidth="8" strokeLinecap="round" opacity="0.5"/>
        <path d="M40 50 C45 30, 55 20, 60 15" stroke="#9FE4D5" strokeWidth="8" strokeLinecap="round" opacity="0.5"/>
        <path d="M70 55 C75 35, 85 25, 88 20" stroke="#9FE4D5" strokeWidth="8" strokeLinecap="round" opacity="0.5"/>
      </svg>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <header className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">Our Hiring Process</h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Take A Look At Our Simple And Straightforward Process To Hire Software Developers From ValueCoders.
          </p>
        </header>

        {/* Steps */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          {steps.map((s, i) => (
            <li key={s.id} className="relative">
              {/* Arrow to next (desktop only) */}
              {i < steps.length - 1 && (
                <svg className="hidden lg:block absolute top-[90px] right-[-22px]" width="44" height="18" viewBox="0 0 44 18" fill="none">
                  <path d="M0 9 H36" stroke="#CFE8DF" strokeWidth="2"/>
                  <path d="M36 1 L44 9 L36 17" fill="#CFE8DF"/>
                </svg>
              )}

              {/* Circle avatar */}
              <div className="mx-auto flex h-[179px] w-[179px] items-center justify-center rounded-full bg-white shadow-sm relative" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.05)" }}>
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: "inset 0 0 0 8px #2FC980" }} />
                <s.icon className="h-14 w-14 text-slate-800" />

                {/* Number badge */}
                <div className="absolute -top-3 -right-3 h-14 w-14 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ background: "#FF8C91" }}>
                  {s.id}
                </div>
              </div>

              <h3 className="mt-6 text-center text-xl font-extrabold tracking-wide text-slate-900">
                {s.title}
              </h3>
              <p className="mt-3 text-center text-slate-600 max-w-[320px] mx-auto leading-relaxed">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
