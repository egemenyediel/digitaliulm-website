import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

interface FooterProps {
  lang: 'tr' | 'de' | 'en';
}

export function Footer({ lang }: FooterProps) {
  const translations = {
    tr: {
      tagline: 'Yapay zeka ile daha dijital dünya',
      rights: 'Tüm hakları saklıdır.',
      services: 'Hizmetler',
      company: 'Şirket',
      about: 'Hakkımızda',
      blog: 'Blog',
      careers: 'Kariyer',
      privacy: 'Gizlilik Politikası'
    },
    de: {
      tagline: 'Eine digitalere Welt mit künstlicher Intelligenz',
      rights: 'Alle Rechte vorbehalten.',
      services: 'Dienstleistungen',
      company: 'Unternehmen',
      about: 'Über uns',
      blog: 'Blog',
      careers: 'Karriere',
      privacy: 'Datenschutz'
    },
    en: {
      tagline: 'A more digital world with artificial intelligence',
      rights: 'All rights reserved.',
      services: 'Services',
      company: 'Company',
      about: 'About Us',
      blog: 'Blog',
      careers: 'Careers',
      privacy: 'Privacy Policy'
    }
  };

  const t = translations[lang];

  return (
    <footer className="relative border-t border-white/10 mt-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl md:text-4xl tracking-tight mb-4">
              <span className="text-[#BFFF0A] font-[600]">digital</span>
              <span className="text-white font-[600]">iulm</span>
              <span className="text-[#BFFF0A] font-[600]">.de</span>
            </div>
            <p className="text-white/60 mb-6 max-w-md leading-relaxed">{t.tagline}</p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-11 h-11 rounded-xl bg-white/5 hover:bg-[#BFFF0A]/20 border border-white/10 hover:border-[#BFFF0A]/30 flex items-center justify-center group transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-white/60 group-hover:text-[#BFFF0A] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">{t.services}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#services" className="hover:text-[#BFFF0A] transition-colors">AI {lang === 'tr' ? 'Robotları' : lang === 'de' ? 'Roboter' : 'Robots'}</a></li>
              <li><a href="#services" className="hover:text-[#BFFF0A] transition-colors">{lang === 'tr' ? 'Mobil Uygulamalar' : lang === 'de' ? 'Mobile Apps' : 'Mobile Apps'}</a></li>
              <li><a href="#services" className="hover:text-[#BFFF0A] transition-colors">{lang === 'tr' ? 'Web Siteleri' : lang === 'de' ? 'Websites' : 'Websites'}</a></li>
              <li><a href="#services" className="hover:text-[#BFFF0A] transition-colors">{lang === 'tr' ? 'Danışmanlık' : lang === 'de' ? 'Beratung' : 'Consulting'}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">{t.company}</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-[#BFFF0A] transition-colors">{t.about}</a></li>
              <li><a href="#" className="hover:text-[#BFFF0A] transition-colors">{t.blog}</a></li>
              <li><a href="#" className="hover:text-[#BFFF0A] transition-colors">{t.careers}</a></li>
              <li><a href="#" className="hover:text-[#BFFF0A] transition-colors">{t.privacy}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} digitaliulm.de. {t.rights}</p>
          <p>Made with <span className="text-[#BFFF0A]">♥</span> in Ulm</p>
        </div>
      </div>
    </footer>
  );
}
