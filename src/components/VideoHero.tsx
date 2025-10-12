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
      {/* Animated Background - Camera Movement Effect */}
      <div className="absolute inset-0 perspective-1000">
        {/* Moving Particles with Camera Effect */}
        <div className="absolute inset-0 transform-gpu">
          {Array.from({ length: 80 }).map((_, i) => {
            const depth = Math.random() * 1000 + 100;
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 1000;
            return (
              <div
                key={i}
                className="absolute bg-[#BFFF0A] rounded-full opacity-70"
                style={{
                  width: `${2 + (1000 - depth) / 100}px`,
                  height: `${2 + (1000 - depth) / 100}px`,
                  left: `${50 + (x / depth) * 50}%`,
                  top: `${50 + (y / depth) * 50}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animation: `moveTowardsCamera ${3 + Math.random() * 2}s linear infinite`,
                  transform: `translateZ(${depth}px)`,
                }}
              />
            );
          })}
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

      {/* Scroll Down Indicator - Right Side */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full border-2 border-white/30 hover:border-[#BFFF0A] flex items-center justify-center text-white hover:text-[#BFFF0A] transition-all duration-300 group z-10 hover:scale-110"
      >
        <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-pulse" />
      </button>
    </section>
  );
}

// CSS animasyonları için global stiller
const styles = `
  @keyframes moveTowardsCamera {
    0% {
      transform: translateZ(1000px) scale(0.1);
      opacity: 0;
    }
    10% {
      opacity: 0.7;
    }
    90% {
      opacity: 0.7;
    }
    100% {
      transform: translateZ(-100px) scale(2);
      opacity: 0;
    }
  }
  
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .transform-gpu {
    transform-style: preserve-3d;
    will-change: transform;
  }
`;

// Stilleri DOM'a ekle
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  if (!document.head.querySelector('style[data-hero-styles]')) {
    styleSheet.setAttribute('data-hero-styles', 'true');
    document.head.appendChild(styleSheet);
  }
}
