export default function Projects() {
  const skills = [
    { title: "Infrastructure", desc: "ServiceNow & SLA Management.", tags: ["ITIL", "Monitoring"], icon: "⚙️" },
    { title: "Automation", desc: "Ansible & PowerShell Scripting.", tags: ["DevOps", "CI/CD"], icon: "🚀" },
    { title: "Cloud Focus", desc: "Azure Fundamentals Certified.", tags: ["Azure", "GCP"], icon: "☁️" },
    { title: "Virtualization", desc: "VMware & Windows Server.", tags: ["VDI", "Hyper-V"], icon: "🖥️" },
  ];

  return (
    <section className="relative z-20 min-h-screen bg-[#0a0a0a] text-white p-8 md:p-24 py-32 overflow-hidden border-t border-white/5">
      {/* Decorative blurred blobs for the glow effect from behind */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-emerald-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-black mb-16 tracking-tighter">
          Core <span className="text-gray-600 italic font-light hover:text-white transition-colors cursor-default">Competencies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group relative h-80 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between 
                         bg-white/[0.03] border border-white/10 backdrop-blur-xl 
                         transition-all duration-700 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]
                         overflow-hidden cursor-pointer"
            >
              {/* Subtle gradient glow inside card */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/5 to-transparent z-0"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 origin-left">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {skill.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  {skill.desc}
                </p>
              </div>

              <div className="relative z-10 flex gap-2 flex-wrap mt-auto">
                {skill.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full border border-white/10 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Nano banana ui flourish: abstract shape */}
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                  <svg className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
