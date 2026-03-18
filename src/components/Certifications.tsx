"use client";
import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      title: "Azure Fundamentals (AZ-900)",
      body: "Microsoft Certified",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/GokulGanesan-9576/ACA6D62AC22152FB?sharingId=917B58C301490E2E"
    },
    { title: "Google IT Support", body: "Professional Certificate", link: "#" },
    { title: "Google UX Design", body: "Professional Certificate", link: "https://www.credly.com/badges/982adbb5-6600-4c93-a17b-7c97496b1d50/linked_in_profile" },
    { title: "IATA Customer Service", body: "Certification", link: "#" }
  ];

  return (
    <section className="bg-[#030303] text-white py-32 border-b border-zinc-900 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <h2 className="font-oswald text-6xl md:text-9xl leading-[0.8] tracking-tighter uppercase mb-24">
          Verified<br/><span className="text-zinc-700">Credentials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-[1px] bg-zinc-900 border border-zinc-900">
          {certs.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="group block bg-[#030303] p-12 hover:bg-white hover:text-black transition-colors duration-500 aspect-[3/4] flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs opacity-50">0{i+1}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs uppercase tracking-widest">Verify ↗</span>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest mb-4 opacity-60 group-hover:opacity-100">{cert.body}</p>
                <h3 className="font-oswald text-3xl uppercase leading-[1.1]">{cert.title}</h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-32 border border-zinc-800 p-8 md:p-16 text-center max-w-4xl mx-auto group hover:bg-white hover:text-black transition-colors duration-500">
          <a data-cursor-hover href="https://drive.google.com/file/d/1CjCQ2wnv0B1VCJc4L_ANI_nViH7BI6yz/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="inline-block w-full">
            <h3 className="font-oswald text-4xl md:text-6xl uppercase tracking-tighter mb-4">View Curriculum Vitae</h3>
            <p className="font-mono text-xs tracking-widest uppercase">📄 Download PDF Document</p>
          </a>
        </div>
      </div>
    </section>
  );
}
