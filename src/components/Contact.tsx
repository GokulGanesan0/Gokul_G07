"use client";

export default function Contact() {
  return (
    <section className="bg-[#030303] text-white py-32 md:py-48 relative z-20 overflow-hidden flex flex-col items-center justify-center min-h-screen">
      <div className="text-center w-full px-4">
        <p className="font-mono text-sm tracking-[0.3em] text-zinc-500 mb-8 uppercase">Let's Connect</p>
        
        <a data-cursor-hover href="mailto:ganesangokul81@gmail.com" className="block w-full group overflow-hidden">
          <h2 className="font-oswald text-[12vw] leading-[0.8] tracking-tighter text-white uppercase group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_white] transition-all duration-300">
            SAY HELLO
          </h2>
        </a>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-24 font-mono text-xs tracking-widest uppercase border-t border-zinc-800 pt-12 max-w-3xl mx-auto w-full">
          <a data-cursor-hover href="mailto:ganesangokul81@gmail.com" className="hover:text-white text-zinc-400 transition-colors">ganesangokul81@gmail.com</a>
          <span className="hidden md:block text-zinc-800">/</span>
          <a data-cursor-hover href="https://www.linkedin.com/in/gokul-g15/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-zinc-400 transition-colors">LinkedIn Profile</a>
          <span className="hidden md:block text-zinc-800">/</span>
          <a data-cursor-hover href="tel:6379605538" className="hover:text-white text-zinc-400 transition-colors">+91 6379605538</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-6 border-t border-zinc-900 relative z-20 flex flex-col md:flex-row justify-between items-center font-mono text-[10px] tracking-widest uppercase">
      <div>Gokul Ganesan &copy; {new Date().getFullYear()}</div>
      <div className="text-zinc-600 mt-4 md:mt-0">IT INFRASTRUCTURE / DEVOPS</div>
      <div className="mt-4 md:mt-0 opacity-50">All Rights Reserved.</div>
    </footer>
  );
}
