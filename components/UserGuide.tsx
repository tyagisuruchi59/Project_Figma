'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function UserGuide() {
  const menuItems = [
    'Benefits Of Hiring Developers',
    'Key Factors To Consider While Hiring',
    'Defining Your Project Requirements',
    'Choosing The Right Development Model',
    'Typical Challenges For Hiring Developers',
    'Hiring Freelancers Vs. Dedicated Developers',
    'Communication With Remote Developers',
  ];

  const contentData = [
    {
      title: 'Benefits Of Hiring Developers',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry standard since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      points: [
        'Client-Centric Approach',
        'Best-In-Class Project Management',
        'Global Quality Standards',
        'Time-Zone Compatibility',
        'Cutting-Edge Infrastructure',
        'Agile Adaptability',
      ],
      image: '/userguide.png',
    },
    {
      title: 'Key Factors To Consider While Hiring',
      description:
        'Focus on proven expertise, strong communication, ownership mindset, and the ability to collaborate asynchronously across time zones.',
      points: [
        'Relevant stack & domain experience',
        'Code quality & testing discipline',
        'Process maturity (Agile/Scrum)',
        'Security & compliance awareness',
        'Documentation habits',
        'Cultural and time-zone fit',
      ],
      image: '/userguide.png',
    },
    {
      title: 'Defining Your Project Requirements',
      description:
        'Start with clear problem statements, success metrics, and constraints to reduce churn and accelerate delivery.',
      points: [
        'Goals, scope, and success KPIs',
        'User stories & acceptance criteria',
        'Tech constraints & integrations',
        'Non-functional requirements (SLA, perf)',
        'Budget, team, and timeline',
        'Risk register & mitigation',
      ],
      image: '/userguide.png',
    },
    {
      title: 'Choosing The Right Development Model',
      description:
        'Pick the engagement model that matches your velocity, control, and budget needs.',
      points: [
        'Dedicated team vs. staff aug',
        'Fixed bid vs. time & materials',
        'Onshore, nearshore, offshore',
        'Product squads & pods',
        'Discovery → Build → Run handoff',
        'SLAs and governance cadence',
      ],
      image: '/userguide.png',
    },
    {
      title: 'Typical Challenges For Hiring Developers',
      description:
        'Plan ahead for common pitfalls to keep your roadmap on track.',
      points: [
        'Misaligned expectations',
        'Scope creep & shifting priorities',
        'Underestimated integration work',
        'Knowledge silos',
        'Security & compliance gaps',
        'Onboarding and ramp-up time',
      ],
      image: '/userguide.png',
    },
    {
      title: 'Hiring Freelancers Vs. Dedicated Developers',
      description:
        'Understand trade-offs between flexibility and long-term product velocity.',
      points: [
        'Cost vs. continuity',
        'Availability & scheduling',
        'IP protection & security',
        'Process consistency',
        'Team cohesion & mentorship',
        'Ownership & long-term maintainability',
      ],
      image: '/userguide.png',
    },
    {
      title: 'Communication With Remote Developers',
      description:
        'Use crisp written comms, async rituals, and shared source of truth to reduce friction.',
      points: [
        'Weekly demos & async updates',
        'Clear PRD / RFC templates',
        'Decision logs (ADR)',
        'Design handoffs & specs',
        'Standards for PRs & reviews',
        'Overlapping hours & SLAs',
      ],
      image: '/userguide.png',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="py-20"
      style={{
        // smooth “via” feel: 75% cream → soft fade to pink
        background: 'linear-gradient(90deg, #fefcfb 0%, #fefcfb 75%, #fdeff2 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            User Guide To Hire Dedicated Software Developers
          </h2>
        </div>

        <div className="grid lg:grid-cols-[378px_minmax(0,1fr)] gap-10">
          {/* LEFT MENU */}
          <div className="mx-auto lg:mx-0" role="tablist" aria-label="User Guide Topics">
            <div className="rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-black/5">
              {menuItems.map((label, idx) => {
                const active = idx === activeIndex;
                return (
                  <button
                    key={label}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex items-center px-6 text-sm font-medium border-b last:border-b-0 w-full text-left transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/40 ${
                      active ? 'text-white' : 'text-gray-800 hover:bg-gray-50'
                    }`}
                    style={{
                      width: 378,           // px
                      height: 80,           // px
                      background: active ? '#2FC980' : '#ffffff',
                      opacity: 1,
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl md:text-2xl text-gray-900">
                {contentData[activeIndex].title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-gray-600">{contentData[activeIndex].description}</p>

              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                {contentData[activeIndex].points.map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle size={16} className="mr-2 text-emerald-600" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5">
                <img
                  src={contentData[activeIndex].image}
                  alt={contentData[activeIndex].title}
                  className="w-full h-[280px] md:h-[320px] object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
