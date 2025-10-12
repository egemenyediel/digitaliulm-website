import { Play, Pause, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

interface VideoHeroProps {
  lang: 'tr' | 'de' | 'en';
}

export function VideoHero({ lang }: VideoHeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToContent = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Video */}
      <div 
        className="absolute inset-0 group"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(isPlaying ? false : true)}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1630505331189-4ca903b81824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDE3ODE1OXww&ixlib=rb-4.1.0&q=80&w=1080"
          muted={isMuted}
          loop
          playsInline
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Play Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={togglePlay}
              className="w-24 h-24 rounded-full bg-[#BFFF0A] flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-[0_0_60px_rgba(191,255,10,0.6)]"
            >
              <Play className="w-12 h-12 text-black ml-1.5" fill="currentColor" />
            </button>
          </div>
        )}

        {/* Video Controls - Bottom Left */}
        <div 
          className={`absolute bottom-8 left-8 flex items-center gap-3 transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all border border-white/10"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" fill="currentColor" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" fill="currentColor" />
            )}
          </button>

          <button
            onClick={toggleMute}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all border border-white/10"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white hover:text-[#BFFF0A] transition-colors group/scroll"
        >
          <span className="text-sm uppercase tracking-wider opacity-80">
            {lang === 'tr' ? 'Aşağı Kaydır' : lang === 'de' ? 'Nach unten scrollen' : 'Scroll Down'}
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 group-hover/scroll:border-[#BFFF0A] flex items-start justify-center p-2 transition-colors">
            <div className="w-1 h-3 bg-white/80 group-hover/scroll:bg-[#BFFF0A] rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
