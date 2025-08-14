'use client';

import { CheckCircle } from 'lucide-react';

/* ---------- Card ---------- */
type TechCardProps = {
  tone: 'lilac' | 'peach' | 'pink' | 'mint' | 'sand' | 'rose';
  title: string;
  stacks: string[];
  iconBg: string;
  iconSrc: string;
  iconAlt: string;
};

function TechCard({ tone, title, stacks, iconBg, iconSrc, iconAlt }: TechCardProps) {
  const tones: Record<TechCardProps['tone'], { bg: string; border: string; accent: string }> = {
    lilac: { bg: 'bg-[#F1F3FF]', border: 'border-[#D7DCFF]', accent: 'linear-gradient(90deg, #B9C3FF 0%, #9FAAFD 100%)' },
    peach: { bg: 'bg-[#FFF1E3]', border: 'border-[#FFD7B8]', accent: 'linear-gradient(90deg, #FFBE88 0%, #FF9F69 100%)' },
    pink:  { bg: 'bg-[#FDEBFF]', border: 'border-[#F6C8FF]', accent: 'linear-gradient(90deg, #E6B4FF 0%, #F39AFF 100%)' },
    mint:  { bg: 'bg-[#E8FFF8]', border: 'border-[#C9F6E7]', accent: 'linear-gradient(90deg, #7FEBD8 0%, #58D7C8 100%)' },
    sand:  { bg: 'bg-[#F7FFE9]', border: 'border-[#E5F1C5]', accent: 'linear-gradient(90deg, #FFD292 0%, #FFBD6B 100%)' },
    rose:  { bg: 'bg-[#FFECEC]', border: 'border-[#FFC9CF]', accent: 'linear-gradient(90deg, #FFAAB5 0%, #FF8FA2 100%)' },
  };
  const t = tones[tone];

  return (
    <div className={`relative rounded-xl shadow-[0_10px_24px_rgba(16,24,40,0.06)] border ${t.border} ${t.bg}`}>
      <div className="p-8">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: iconBg }}>
          <img src={iconSrc} alt={iconAlt} className="h-7 w-7 object-contain" />
        </div>
        <h3 className="text-xl font-extrabold text-[#1F2937] mb-3">{title}</h3>
        <ul className="text-sm text-[#374151] leading-7 flex flex-wrap gap-x-3 gap-y-1">
          {stacks.map((item, i) => (
            <li key={i} className="flex items-center">
              <span>{item}</span>
              {i !== stacks.length - 1 && <span className="mx-3 opacity-50">|</span>}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-2 w-full rounded-b-xl" style={{ background: t.accent }} />
    </div>
  );
}

/* ---------- Page ---------- */
export default function Middle() {
  return (
    <main className="relative overflow-hidden">
      {/* ===== Unified, page-wide background (no seams) ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Base continuous wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #F9FDFB 0%, #F2FCF6 35%, #F7FFF9 70%, #EFFFF6 100%)',
          }}
        />
        {/* Soft pink glows */}
        <div className="absolute -top-40 right-[-120px] w-[900px] h-[900px] rounded-full"
             style={{ background: '#FF8578', opacity: 0.33, filter: 'blur(380px)' }} />
        <div className="absolute -top-24 left-[-60px] w-[520px] h-[520px] rounded-full"
             style={{ background: '#FF8578', opacity: 0.16, filter: 'blur(320px)' }} />
        {/* Mint fog on top-right */}
        <div className="absolute -top-24 right-6 h-20 w-64 rounded-2xl"
             style={{ background: 'radial-gradient(60% 140% at 50% 50%, rgba(209,250,229,0.55) 0%, rgba(209,250,229,0) 70%)' }} />
        {/* Halftone + rings shared across page */}
        <img src="/side2.png" alt="" className="absolute -top-10 right-0 w-[900px] max-w-none opacity-50" style={{ mixBlendMode: 'screen' }} />
        <img src="/sideL.png" alt="" className="absolute -top-28 -left-24 w-[520px] max-w-none opacity-60" style={{ mixBlendMode: 'multiply' }} />
        <img src="/sideL.png" alt="" className="absolute -bottom-40 right-[-160px] w-[540px] max-w-none opacity-60"
             style={{ transform: 'scaleX(-1) rotate(2deg)', mixBlendMode: 'multiply' }} />
      </div>

      {/* ===== Section 1: Why Hire (transparent container) ===== */}
      <section className="py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* squiggle accent */}
          <img src="/img.png" alt="" className="pointer-events-none select-none absolute right-1 top-[50%] w-28 opacity-80" />
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Hire Developers From Our Name</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy Text Ever Since
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Illustration */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-96 h-80 rounded-3xl relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 shadow-sm">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-4 bg-gray-800 rounded-t-lg" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-72 h-2 bg-gray-700" />
                  <div className="absolute bottom-8 right-20 w-16 h-20 bg-blue-100 rounded-lg" />
                  <div className="absolute bottom-6 right-24 w-12 h-4 bg-blue-200 rounded-full" />
                  <div className="absolute bottom-16 right-16 w-12 h-16">
                    <div className="w-8 h-8 bg-orange-300 rounded-full mx-auto mb-1" />
                    <div className="absolute top-0 left-1 w-6 h-4 bg-orange-800 rounded-t-full" />
                    <div className="w-10 h-8 bg-orange-400 rounded-lg mx-auto" />
                  </div>
                  <div className="absolute bottom-20 left-16 w-32 h-20 bg-gray-800 rounded-lg">
                    <div className="w-28 h-16 bg-blue-900 rounded m-2 relative overflow-hidden">
                      <div className="absolute top-2 left-2 w-16 h-1 bg-yellow-400 rounded" />
                      <div className="absolute top-4 left-2 w-12 h-1 bg-green-400 rounded" />
                      <div className="absolute top-6 left-2 w-20 h-1 bg-blue-400 rounded" />
                      <div className="absolute top-8 left-2 w-8 h-1 bg-purple-400 rounded" />
                      <div className="absolute top-10 left-2 w-14 h-1 bg-red-400 rounded" />
                    </div>
                  </div>
                  <div className="absolute bottom-16 left-24 w-8 h-4 bg-gray-600 rounded" />
                  <div className="absolute top-8 left-8 w-20 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">&lt;/&gt;</span>
                  </div>
                  <div className="absolute top-6 right-8 w-16 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white rounded-full relative">
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute top-16 right-12 w-12 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">{'{}'}</span>
                  </div>
                  <div className="absolute bottom-12 right-4 w-6 h-12">
                    <div className="w-4 h-4 bg-green-500 rounded-full mx-auto" />
                    <div className="w-2 h-8 bg-green-600 mx-auto" />
                    <div className="w-6 h-3 bg-gray-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Points */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">High Quality/Cost Ratio</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      <span className="text-lg font-semibold text-gray-800">Hire Silicon Valley Caliber At Half The Cost</span>
                    </div>
                    <p className="text-gray-600 ml-8">Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                      <span className="text-lg font-semibold text-gray-800">100+ Skills Available</span>
                    </div>
                    <p className="text-gray-600 ml-8">Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lower row */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Rigorous Vetting</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      <span className="text-lg font-semibold text-gray-800">5+ Hours Of Tests And Interviews</span>
                    </div>
                    <p className="text-gray-600 ml-8">Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3" />
                      <span className="text-lg font-semibold text-gray-800">Seniority Tests</span>
                    </div>
                    <p className="text-gray-600 ml-8">Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-80 bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl relative overflow-hidden">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-6 bg-orange-400 rounded-t-2xl" />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-72 h-3 bg-orange-500" />
                  <div className="absolute bottom-12 left-20 w-16 h-20 bg-teal-200 rounded-lg" />
                  <div className="absolute bottom-10 left-24 w-12 h-4 bg-teal-300 rounded-full" />
                  <div className="absolute bottom-20 left-16 w-12 h-16">
                    <div className="w-8 h-8 bg-teal-300 rounded-full mx-auto mb-1" />
                    <div className="absolute top-0 left-1 w-6 h-4 bg-teal-800 rounded-t-full" />
                    <div className="w-10 h-8 bg-teal-400 rounded-lg mx-auto" />
                  </div>
                  <div className="absolute bottom-24 right-16 w-32 h-20 bg-gray-800 rounded-lg">
                    <div className="w-28 h-16 bg-blue-900 rounded m-2 relative overflow-hidden">
                      <div className="absolute top-2 left-2 w-16 h-1 bg-yellow-400 rounded" />
                      <div className="absolute top-4 left-2 w-12 h-1 bg-green-400 rounded" />
                      <div className="absolute top-6 left-2 w-20 h-1 bg-blue-400 rounded" />
                      <div className="absolute top-8 left-2 w-8 h-1 bg-purple-400 rounded" />
                      <div className="absolute top-10 left-2 w-14 h-1 bg-red-400 rounded" />
                    </div>
                  </div>
                  <div className="absolute bottom-20 right-24 w-8 h-4 bg-gray-600 rounded" />
                  <div className="absolute top-12 left-12 w-16 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">HTML</span>
                  </div>
                  <div className="absolute top-8 right-8 w-12 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">&lt;/&gt;</span>
                  </div>
                  <div className="absolute top-20 left-24 w-10 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 border border-white rounded-sm relative">
                      <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="absolute top-16 right-20 space-y-1">
                    <div className="w-8 h-1 bg-orange-400 rounded" />
                    <div className="w-6 h-1 bg-teal-400 rounded" />
                    <div className="w-10 h-1 bg-orange-400 rounded" />
                  </div>
                  <div className="absolute bottom-32 left-8 space-y-1">
                    <div className="w-6 h-1 bg-teal-400 rounded" />
                    <div className="w-8 h-1 bg-orange-400 rounded" />
                    <div className="w-4 h-1 bg-teal-400 rounded" />
                  </div>
                  <div className="absolute bottom-16 left-4 w-8 h-16">
                    <div className="w-6 h-6 bg-green-400 rounded-full mx-auto rotate-12" />
                    <div className="w-4 h-4 bg-green-500 rounded-full mx-auto -mt-2 -rotate-12" />
                    <div className="w-2 h-8 bg-green-600 mx-auto" />
                  </div>
                  <div className="absolute bottom-12 right-4 w-6 h-12">
                    <div className="w-4 h-4 bg-green-400 rounded-full mx-auto rotate-45" />
                    <div className="w-3 h-3 bg-green-500 rounded-full mx-auto -mt-1 -rotate-45" />
                    <div className="w-1 h-6 bg-green-600 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: Technology Grid (also transparent) ===== */}
      <section className="py-24">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1F2937]">
              Our Diverse Technology Competency
            </h2>
            <p className="mt-5 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since
            </p>
          </div>
                <img src="/arrow-tech.png" alt="" className="pointer-events-none select-none absolute"
           style={{ width: 76, height: 56.3, left: 50, top: 1 }} />
          <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
            <TechCard
              tone="lilac"
              iconBg="#E8F0FF"
              iconSrc="/backend.png"
              iconAlt="Backend Development Icon"
              title="Backend Development"
              stacks={['.NET','C/C++','DJANGO','Firebase','GOLANG','SYMFONY','LARAVEL','NODE','PHP','PYTHON','RUBY ON RAILS','JAVA']}
            />
            <TechCard
              tone="peach"
              iconBg="#FFF0DF"
              iconSrc="/frontend.png"
              iconAlt="Frontend Development Icon"
              title="Frontend Development"
              stacks={['.NET','C/C++','DJANGO','Firebase','GOLANG','SYMFONY','LARAVEL','NODE','PHP','PYTHON','RUBY ON RAILS','JAVA']}
            />
            <TechCard
              tone="pink"
              iconBg="#FFE9FF"
              iconSrc="/mobile.png"
              iconAlt="Mobile Development Icon"
              title="Mobile Development"
              stacks={['.NET','C/C++','DJANGO','Firebase','GOLANG','SYMFONY','LARAVEL','NODE','PHP','PYTHON','RUBY ON RAILS','JAVA']}
            />
            <TechCard
              tone="mint"
              iconBg="#E8FFF8"
              iconSrc="/blockchain.png"
              iconAlt="Blockchain, AI/ML Icon"
              title="Blockchain, AI/ML"
              stacks={['.NET','C/C++','DJANGO','Firebase','GOLANG','SYMFONY','LARAVEL','NODE','PHP','PYTHON','RUBY ON RAILS','JAVA']}
            />
            <TechCard
              tone="sand"
              iconBg="#F4FFF0"
              iconSrc="/devops.png"
              iconAlt="DevOps & Low-Code Icon"
              title="DevOps & Low-Code"
              stacks={['.NET','C/C++','DJANGO','Firebase','GOLANG','SYMFONY','LARAVEL','NODE','PHP','PYTHON','RUBY ON RAILS','JAVA']}
            />
            <TechCard
              tone="rose"
              iconBg="#FFF0F2"
              iconSrc="/ecommerce.png"
              iconAlt="E-commerce & CMS Icon"
              title="E-commerce & CMS"
              stacks={['.NET','C/C++','DJANGO','Firebase','GOLANG','SYMFONY','LARAVEL','NODE','PHP','PYTHON','RUBY ON RAILS','JAVA']}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
