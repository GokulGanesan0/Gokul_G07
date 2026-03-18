import ScrollyCanvas from "@/components/ScrollyCanvas";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white selection:bg-white selection:text-black min-h-screen font-sans">
      <ScrollyCanvas />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
