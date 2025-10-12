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
      {/* Hyperspace Journey Effect */}
      <div className="absolute inset-0 perspective-1000 overflow-hidden">
        {/* Fast Moving Particles */}
        <div className="absolute inset-0 transform-gpu">
          {Array.from({ length: 150 }).map((_, i) => {
            const depth = Math.random() * 2000 + 100;
            const x = (Math.random() - 0.5) * 3000;
            const y = (Math.random() - 0.5) * 2000;
            const speed = 0.5 + Math.random() * 1.5;
            const isLightStreak = Math.random() > 0.7;
            return (
              <div
                key={i}
                className={`absolute rounded-full transition-all duration-1000 ${
                  isLightStreak 
                    ? 'bg-gradient-to-r from-transparent via-[#BFFF0A] to-transparent opacity-80 animate-pulse' 
                    : 'bg-[#BFFF0A] opacity-60'
                }`}
                style={{
                  width: isLightStreak ? `${20 + Math.random() * 40}px` : `${1 + (2000 - depth) / 200}px`,
                  height: isLightStreak ? '2px' : `${1 + (2000 - depth) / 200}px`,
                  left: `${50 + (x / depth) * 100}%`,
                  top: `${50 + (y / depth) * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animation: `hyperspaceMove ${1 + speed}s linear infinite`,
                  transform: `translateZ(${depth}px) ${isLightStreak ? 'rotate(' + Math.random() * 360 + 'deg)' : ''}`,
                  boxShadow: isLightStreak 
                    ? '0 0 20px #BFFF0A, 0 0 40px #BFFF0A, 0 0 60px #BFFF0A' 
                    : '0 0 10px #BFFF0A',
                }}
              />
            );
          })}
        </div>
        
        {/* Light Refraction Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`refraction-${i}`}
              className="absolute bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              style={{
                width: '100%',
                height: '1px',
                top: `${Math.random() * 100}%`,
                left: '0',
                animationDelay: `${Math.random() * 3}s`,
                animation: `lightRefraction ${2 + Math.random() * 3}s ease-in-out infinite`,
                transform: `rotate(${Math.random() * 20 - 10}deg)`,
              }}
            />
          ))}
        </div>
        
        {/* Speed Lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`speedline-${i}`}
              className="absolute bg-gradient-to-r from-transparent via-[#BFFF0A] to-transparent opacity-30"
              style={{
                width: `${100 + Math.random() * 200}px`,
                height: '1px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animation: `speedLine ${0.5 + Math.random() * 1}s linear infinite`,
                transform: `rotate(${-10 + Math.random() * 20}deg)`,
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

      {/* Content Overlay with Journey Effect */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <div className="text-center max-w-4xl px-6 transform-gpu">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#BFFF0A] to-white bg-clip-text text-transparent transition-all duration-1000 journey-text">
            {lang === 'tr' ? 'Dijital Dönüşüm' : lang === 'de' ? 'Digitale Transformation' : 'Digital Transformation'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed opacity-90 transition-all duration-1000 journey-text-sub">
            {lang === 'tr' 
              ? 'Geleceğin teknolojileri ile işinizi güçlendirin' 
              : lang === 'de' 
              ? 'Stärken Sie Ihr Unternehmen mit den Technologien der Zukunft'
              : 'Empower your business with tomorrow\'s technologies'
            }
          </p>
          <button className="bg-[#BFFF0A] text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(191,255,10,0.3)] hover:shadow-[0_0_50px_rgba(191,255,10,0.5)] journey-button">
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
  @keyframes hyperspaceMove {
    0% {
      transform: translateZ(2000px) translateX(0) translateY(0) scale(0.1);
      opacity: 0;
    }
    5% {
      opacity: 0.8;
    }
    95% {
      opacity: 0.8;
    }
    100% {
      transform: translateZ(-200px) translateX(-50px) translateY(-30px) scale(3);
      opacity: 0;
    }
  }
  
  @keyframes lightRefraction {
    0% {
      opacity: 0;
      transform: translateX(-100%) scaleX(0.5);
    }
    50% {
      opacity: 0.6;
      transform: translateX(0%) scaleX(1);
    }
    100% {
      opacity: 0;
      transform: translateX(100%) scaleX(0.5);
    }
  }
  
  @keyframes speedLine {
    0% {
      transform: translateX(-200px) scaleX(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: translateX(0px) scaleX(1);
    }
    100% {
      transform: translateX(200px) scaleX(0);
      opacity: 0;
    }
  }
  
  @keyframes journeyShake {
    0%, 100% {
      transform: translateX(0) translateY(0);
    }
    25% {
      transform: translateX(-1px) translateY(-1px);
    }
    50% {
      transform: translateX(1px) translateY(1px);
    }
    75% {
      transform: translateX(-1px) translateY(1px);
    }
  }
  
  @keyframes textGlow {
    0%, 100% {
      text-shadow: 0 0 5px rgba(191, 255, 10, 0.3);
    }
    50% {
      text-shadow: 0 0 20px rgba(191, 255, 10, 0.6), 0 0 30px rgba(191, 255, 10, 0.4);
    }
  }
  
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .transform-gpu {
    transform-style: preserve-3d;
    will-change: transform;
  }
  
  .journey-text {
    animation: journeyShake 0.1s infinite, textGlow 2s ease-in-out infinite;
  }
  
  .journey-text-sub {
    animation: journeyShake 0.15s infinite reverse;
  }
  
  .journey-button {
    animation: journeyShake 0.2s infinite;
  }
  
  /* Hyperspace warp effect */
  .perspective-1000::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 2px;
    background: radial-gradient(circle, #BFFF0A 0%, transparent 70%);
    transform: translate(-50%, -50%);
    animation: warpCore 3s ease-in-out infinite;
  }
  
  @keyframes warpCore {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.3;
    }
    50% {
      transform: translate(-50%, -50%) scale(20);
      opacity: 0.8;
    }
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
