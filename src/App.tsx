import { useState } from "react";
import { Header } from "./components/Header";
import { VideoHero } from "./components/VideoHero";
import { Services } from "./components/Services";
import { References } from "./components/References";
import { Applications } from "./components/Applications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentLang, setCurrentLang] = useState<'tr' | 'de' | 'en'>('tr');

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Dark Background with Green Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f1f0a] via-[#0a0a0a] to-[#0a0a0a]">
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-[#BFFF0A]/[0.03] rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[60%] right-[5%] w-[400px] h-[400px] bg-[#7FBF0A]/[0.02] rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[40%] w-[500px] h-[500px] bg-[#BFFF0A]/[0.015] rounded-full blur-[110px] animate-blob animation-delay-4000" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
      </div>

      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <VideoHero lang={currentLang} />
      <Services lang={currentLang} />
      <References lang={currentLang} />
      <Applications lang={currentLang} />
      <Contact lang={currentLang} />
      <Footer lang={currentLang} />
    </div>
  );
}
