import { ChevronDown } from "lucide-react";

interface VideoHeroProps {
  lang: 'tr' | 'de' | 'en';
}

export function VideoHero({ lang }: VideoHeroProps) {
  const scrollToContent = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0c0c16] via-[#1a1a2e] to-[#0c0c16]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#BFFF0A] rounded-full opacity-70 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        
        {/* Moving Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#BFFF0A] to-transparent animate-pulse"
              style={{
                left: `${i * 10}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#BFFF0A] to-transparent animate-pulse"
              style={{
                top: `${i * 10}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-[#BFFF0A] rounded-full opacity-60 animate-bounce blur-sm"
            style={{
              left: `${10 + (i * 10)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <div className="text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#BFFF0A] to-white bg-clip-text text-transparent">
            {lang === 'tr' ? 'Dijital Dönüşüm' : lang === 'de' ? 'Digitale Transformation' : 'Digital Transformation'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed opacity-90">
            {lang === 'tr' 
              ? 'Geleceğin teknolojileri ile işinizi güçlendirin' 
              : lang === 'de' 
              ? 'Stärken Sie Ihr Unternehmen mit den Technologien der Zukunft'
              : 'Empower your business with tomorrow\'s technologies'
            }
          </p>
          <button className="bg-[#BFFF0A] text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(191,255,10,0.3)] hover:shadow-[0_0_50px_rgba(191,255,10,0.5)]">
            {lang === 'tr' ? 'Keşfedin' : lang === 'de' ? 'Entdecken' : 'Explore'}
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white hover:text-[#BFFF0A] transition-colors group z-10"
      >
        <span className="text-sm uppercase tracking-wider opacity-80">
          {lang === 'tr' ? 'Aşağı Kaydır' : lang === 'de' ? 'Nach unten scrollen' : 'Scroll Down'}
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 group-hover:border-[#BFFF0A] flex items-start justify-center p-2 transition-colors">
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </button>
    </section>
  );
}
