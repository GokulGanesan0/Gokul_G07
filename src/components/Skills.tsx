"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { title: "Operating Systems", tags: ["Windows Server", "Linux", "macOS"] },
    { title: "Cloud Platforms", tags: ["AWS", "Microsoft Azure"] },
    { title: "Automation Tools", tags: ["Ansible", "PowerShell", "MDT"] },
    { title: "Networking", tags: ["TCP/IP", "DNS", "DHCP"] },
    { title: "ITSM & Ticketing", tags: ["ServiceNow", "Zendesk", "Incident Management"] },
    { title: "Core Competencies", tags: ["Root Cause Analysis", "24/7 Support", "SLA Management"] },
  ];

  return (
    <section className="bg-[#030303] text-white py-32 border-t border-zinc-900 border-b relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800 pb-12">
          <h2 className="font-oswald text-6xl md:text-9xl leading-[0.8] tracking-tighter uppercase mb-6 md:mb-0">
            Tech<br/><span className="text-zinc-700">Arsenal</span>
          </h2>
          <p className="font-mono text-xs tracking-[0.2em] text-zinc-500 max-w-xs text-right hidden md:block">
            01 / TOOLSET / ARCHITECTURE & INFRASTRUCTURE LOGISTICS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-zinc-900 overflow-hidden border border-zinc-900">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-cursor-hover
              className="bg-[#030303] p-10 md:p-16 flex flex-col justify-between aspect-square group hover:bg-white hover:text-black transition-colors duration-500"
            >
              <h3 className="font-oswald text-4xl tracking-tight uppercase mb-8">
                {skill.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {skill.tags.map((tag, j) => (
                  <span 
                    key={j} 
                    className="font-mono text-[10px] uppercase tracking-widest px-3 py-2 border border-zinc-800 group-hover:border-black transition-colors duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
