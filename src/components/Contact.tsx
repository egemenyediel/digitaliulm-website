import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { loadContent, ContactInfo } from '../utils/contentManager';

interface ContactProps {
  lang: 'tr' | 'de' | 'en';
}

export function Contact({ lang }: ContactProps) {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

  useEffect(() => {
    loadContent().then(content => {
      if (content) {
        setContactInfo(content.contact);
      }
    });
  }, []);

  const translations = {
    tr: {
      subtitle: 'İletişim',
      title: 'Projeleriniz İçin Bizimle İletişime Geçin',
      description: '24 saat içinde geri dönüş yapıyoruz',
      name: 'Adınız',
      email: 'E-posta',
      message: 'Mesajınız',
      send: 'Gönder'
    },
    de: {
      subtitle: 'Kontakt',
      title: 'Kontaktieren Sie uns für Ihre Projekte',
      description: 'Wir antworten innerhalb von 24 Stunden',
      name: 'Ihr Name',
      email: 'E-Mail',
      message: 'Ihre Nachricht',
      send: 'Senden'
    },
    en: {
      subtitle: 'Contact',
      title: 'Get in Touch for Your Projects',
      description: 'We respond within 24 hours',
      name: 'Your Name',
      email: 'Email',
      message: 'Your Message',
      send: 'Send'
    }
  };

  const t = translations[lang];

  if (!contactInfo) return null;

  return (
    <section id="contact" className="py-24 md:py-32 relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder={t.name}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl h-12 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder={t.email}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl h-12 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                />
              </div>
              <div>
                <Textarea 
                  placeholder={t.message} 
                  rows={6}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl resize-none focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                />
              </div>
              <button 
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0EA5E9] text-white rounded-full hover:bg-[#0284c7] transition-all duration-300 shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)]"
              >
                <span className="font-medium">{t.send}</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <p className="text-white">{contactInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">
                    {lang === 'tr' ? 'Telefon' : lang === 'de' ? 'Telefon' : 'Phone'}
                  </p>
                  <p className="text-white">{contactInfo.phone}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">
                    {lang === 'tr' ? 'Adres' : lang === 'de' ? 'Adresse' : 'Address'}
                  </p>
                  <p className="text-white">{contactInfo.address[lang]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
