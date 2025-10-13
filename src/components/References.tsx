import { useState, useEffect } from 'react';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { loadContent, type Reference } from '../utils/contentManager';

interface ReferencesProps {
  lang: 'tr' | 'de' | 'en';
}

export function References({ lang }: ReferencesProps) {
  const [references, setReferences] = useState<Reference[]>([]);

  useEffect(() => {
    loadContent().then(content => {
      setReferences(content.references);
    });
  }, []);

  const translations = {
    tr: {
      subtitle: 'Portföy',
      title: 'Başarılı Projelerimiz',
      description: 'Güvenilir iş ortaklarımız için geliştirdiğimiz dijital çözümler',
      references: [
        {
          name: 'BLUNU Basketball League',
          description: 'Profesyonel basketbol ligi web sitesi ve veri yönetim sistemi',
          image: 'https://images.unsplash.com/photo-1616353352910-15d970ac020b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZXxlbnwxfHx8fDE3NjAxNjY2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Mediterran Tuana Ulm',
          description: 'Restoran için akıllı menü ekranları ve dijital çözümler',
          image: 'https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzYwMTY1OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Mavi Event Hall',
          description: 'Organizasyon yönetim sistemi ve etkinlik planlama yazılımı',
          image: 'https://images.unsplash.com/photo-1759477274116-e3cb02d2b9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGhhbGwlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjAxNzgxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Demir Taş Seramik',
          description: 'E-ticaret platformu ve envanter yönetim sistemi',
          image: 'https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDA3ODcxOHww&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ]
    },
    de: {
      subtitle: 'Portfolio',
      title: 'Unsere Erfolgreichen Projekte',
      description: 'Digitale Lösungen für unsere vertrauenswürdigen Geschäftspartner',
      references: [
        {
          name: 'BLUNU Basketball League',
          description: 'Professionelle Basketball-Liga-Website und Datenverwaltungssystem',
          image: 'https://images.unsplash.com/photo-1616353352910-15d970ac020b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZXxlbnwxfHx8fDE3NjAxNjY2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Mediterran Tuana Ulm',
          description: 'Intelligente Menübildschirme und digitale Lösungen für Restaurants',
          image: 'https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzYwMTY1OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Mavi Event Hall',
          description: 'Organisationsmanagementsystem und Veranstaltungsplanungssoftware',
          image: 'https://images.unsplash.com/photo-1759477274116-e3cb02d2b9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGhhbGwlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjAxNzgxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Demir Taş Seramik',
          description: 'E-Commerce-Plattform und Bestandsverwaltungssystem',
          image: 'https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDA3ODcxOHww&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ]
    },
    en: {
      subtitle: 'Portfolio',
      title: 'Our Successful Projects',
      description: 'Digital solutions developed for our trusted business partners',
      references: [
        {
          name: 'BLUNU Basketball League',
          description: 'Professional basketball league website and data management system',
          image: 'https://images.unsplash.com/photo-1616353352910-15d970ac020b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZXxlbnwxfHx8fDE3NjAxNjY2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Mediterran Tuana Ulm',
          description: 'Smart menu displays and digital solutions for restaurants',
          image: 'https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzYwMTY1OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Mavi Event Hall',
          description: 'Organization management system and event planning software',
          image: 'https://images.unsplash.com/photo-1759477274116-e3cb02d2b9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGhhbGwlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjAxNzgxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Demir Taş Seramik',
          description: 'E-commerce platform and inventory management system',
          image: 'https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDA3ODcxOHww&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ]
    }
  };

  const t = translations[lang];

  return (
    <section id="references" className="py-24 md:py-32 relative">
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm px-4 py-2 rounded-full bg-[#0EA5E9]/10 text-[#0EA5E9] border border-[#0EA5E9]/20">
              {t.subtitle}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            {t.description}
          </p>
        </div>

        {/* References Grid - From Content Manager */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((reference) => (
            <div
              key={reference.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:border-[#0EA5E9]/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={reference.image}
                  alt={reference.name[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl text-white mb-2 group-hover:text-[#0EA5E9] transition-colors">
                  {reference.name[lang]}
                </h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  {reference.description[lang]}
                </p>
                
                <div className="inline-flex items-center gap-2 text-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm">{lang === 'tr' ? 'Projeyi İncele' : lang === 'de' ? 'Projekt ansehen' : 'View Project'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-[#0EA5E9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
