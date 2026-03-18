"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Associate Engineer - IT Infrastructure",
      company: "Orion Innovation",
      date: "Dec 2022 — Present",
      location: "Chennai, India",
      points: [
        "Resolved complex technical issues across hardware, software, and network infrastructure.",
        "Managed ServiceNow tickets with 98% SLA compliance rate.",
        "Collaborated with development, operations, and security teams.",
        "Conducted root cause analysis to prevent recurring incidents.",
        "Provided 24/7 on-call support for critical infrastructure.",
        "Executed Windows OS upgrades using MDT with zero data loss."
      ]
    },
    {
      role: "B.Sc Aeronautical Science",
      company: "Nehru College of Aeronautics & Applied Science",
      date: "Apr 2019 — Jun 2022",
      location: "Coimbatore, India",
      points: [
        "CGPA: 73.9% — Rigorous focus on operational safety, systemic troubleshooting, and aerospace logic translating to robust IT mentalities."
      ]
    }
  ];

  return (
    <section className="bg-[#030303] text-white py-32 border-b border-zinc-900 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <h2 className="font-oswald text-6xl md:text-9xl leading-[0.8] tracking-tighter uppercase mb-24 text-right">
          <span className="text-zinc-700">Pro</span><br/>Journey
        </h2>

        <div className="flex flex-col border-t border-zinc-900 border-b">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group flex flex-col lg:flex-row border-b border-zinc-900 last:border-b-0 py-16 hover:bg-zinc-950 transition-colors"
            >
              {/* Left Column: Date and Company */}
              <div className="w-full lg:w-1/3 mb-8 lg:mb-0 px-8">
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-6">{exp.date} // {exp.location}</p>
                <h3 className="font-oswald text-4xl uppercase leading-[0.9]">{exp.company}</h3>
              </div>
              
              {/* Right Column: Role and Points */}
              <div className="w-full lg:w-2/3 px-8 lg:border-l lg:border-zinc-800">
                <h4 className="font-mono text-xl tracking-wider uppercase mb-8 text-white">{exp.role}</h4>
                <div className="space-y-4">
                  {exp.points.map((pt, j) => (
                    <p key={j} className="text-zinc-400 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
                      {pt}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
