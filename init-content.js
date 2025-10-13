// Script to initialize content in localStorage
// This will be run in the browser console or via a setup page

const content = {
  hero: {
    tr: {
      title: 'Dijital Dönüşüm',
      subtitle: 'Geleceğin teknolojileri ile işinizi güçlendirin',
      buttonText: 'Keşfedin'
    },
    de: {
      title: 'Digitale Transformation',
      subtitle: 'Stärken Sie Ihr Unternehmen mit den Technologien der Zukunft',
      buttonText: 'Entdecken'
    },
    en: {
      title: 'Digital Transformation',
      subtitle: 'Empower your business with tomorrow\'s technologies',
      buttonText: 'Explore'
    }
  },
  solutions: [
    {
      id: '1',
      icon: 'Bot',
      title: { tr: 'Yapay Zeka Robotları', de: 'KI-Roboter', en: 'AI Robots' },
      description: { 
        tr: 'Akıllı AI çözümleriyle verimliliğinizi artırın', 
        de: 'Steigern Sie Ihre Produktivität mit intelligenten KI-Lösungen', 
        en: 'Increase your productivity with intelligent AI solutions' 
      }
    },
    {
      id: '2',
      icon: 'Package',
      title: { tr: 'Özel Uygulamalar', de: 'Maßgeschneiderte Anwendungen', en: 'Custom Applications' },
      description: { 
        tr: 'İhtiyaçlarınıza özel yazılım çözümleri', 
        de: 'Maßgeschneiderte Softwarelösungen für Ihre Bedürfnisse', 
        en: 'Custom software solutions tailored to your needs' 
      }
    },
    {
      id: '3',
      icon: 'Smartphone',
      title: { tr: 'Mobil Uygulamalar', de: 'Mobile Apps', en: 'Mobile Apps' },
      description: { 
        tr: 'iOS ve Android için kullanıcı dostu mobil uygulamalar', 
        de: 'Benutzerfreundliche mobile Anwendungen für iOS und Android', 
        en: 'User-friendly mobile applications for iOS and Android' 
      }
    },
    {
      id: '4',
      icon: 'Globe',
      title: { tr: 'Web Siteleri', de: 'Websites', en: 'Websites' },
      description: { 
        tr: 'Modern, hızlı ve SEO uyumlu web siteleri', 
        de: 'Moderne, schnelle und SEO-freundliche Websites', 
        en: 'Modern, fast, and SEO-friendly websites' 
      }
    },
    {
      id: '5',
      icon: 'Camera',
      title: { tr: 'Fotoğraf Çekimi', de: 'Fotografie', en: 'Photography' },
      description: { 
        tr: 'Profesyonel ürün, kurumsal ve reklam fotoğrafçılığı', 
        de: 'Professionelle Produkt-, Unternehmens- und Werbefotografie', 
        en: 'Professional product, corporate, and advertising photography' 
      }
    },
    {
      id: '6',
      icon: 'Video',
      title: { tr: 'Video Prodüksiyon', de: 'Videoproduktion', en: 'Video Production' },
      description: { 
        tr: 'Reklam filmleri, tanıtım videoları ve kurumsal videolar', 
        de: 'Werbefilme, Werbevideos und Unternehmensvideos', 
        en: 'Commercial films, promotional videos, and corporate videos' 
      }
    },
    {
      id: '7',
      icon: 'Package',
      title: { tr: 'Ürün Çekimi ve Hazırlık', de: 'Produktaufnahmen & Vorbereitung', en: 'Product Shoots & Prep' },
      description: { 
        tr: 'E-ticaret için profesyonel ürün fotoğrafları ve videoları', 
        de: 'Professionelle Produktfotografie und Videos für E-Commerce', 
        en: 'Professional product photography and videos for e-commerce' 
      }
    },
    {
      id: '8',
      icon: 'Film',
      title: { tr: 'İçerik Üretimi', de: 'Content-Produktion', en: 'Content Production' },
      description: { 
        tr: 'Sosyal medya, reklam ve pazarlama için yaratıcı içerik', 
        de: 'Kreative Inhalte für soziale Medien, Werbung und Marketing', 
        en: 'Creative content for social media, advertising, and marketing' 
      }
    },
    {
      id: '9',
      icon: 'MessageSquare',
      title: { tr: 'Sosyal Medya Yönetimi', de: 'Social-Media-Management', en: 'Social Media Management' },
      description: { 
        tr: 'Profesyonel sosyal medya stratejisi ve içerik yönetimi', 
        de: 'Professionelle Social-Media-Strategie und Content-Management', 
        en: 'Professional social media strategy and content management' 
      }
    },
    {
      id: '10',
      icon: 'Paintbrush',
      title: { tr: 'Marka Oluşturma', de: 'Markenerstellung', en: 'Brand Creation' },
      description: { 
        tr: 'Sıfırdan marka kimliği tasarımı ve kurumsal kimlik', 
        de: 'Markenidentitätsdesign und Corporate Identity von Grund auf', 
        en: 'Brand identity design and corporate identity from scratch' 
      }
    },
    {
      id: '11',
      icon: 'TrendingUp',
      title: { tr: 'Marka Geliştirme Danışmanlığı', de: 'Markenentwicklungsberatung', en: 'Brand Development Consulting' },
      description: { 
        tr: 'Mevcut markanızı güçlendirmek ve büyütmek için stratejiler', 
        de: 'Strategien zur Stärkung und zum Wachstum Ihrer bestehenden Marke', 
        en: 'Strategies to strengthen and grow your existing brand' 
      }
    },
    {
      id: '12',
      icon: 'Zap',
      title: { tr: 'Dijital Dönüşüm', de: 'Digitale Transformation', en: 'Digital Transformation' },
      description: { 
        tr: 'İş süreçlerinizi dijitalleştirin', 
        de: 'Digitalisieren Sie Ihre Geschäftsprozesse', 
        en: 'Digitize your business processes' 
      }
    },
    {
      id: '13',
      icon: 'Users',
      title: { tr: 'Danışmanlık', de: 'Beratung', en: 'Consulting' },
      description: { 
        tr: 'Uzman ekibimizle teknoloji stratejinizi belirleyin', 
        de: 'Definieren Sie Ihre Technologiestrategie mit unserem Expertenteam', 
        en: 'Define your technology strategy with our expert team' 
      }
    }
  ],
  references: [
    {
      id: '1',
      name: { tr: 'BLUNU Basketbol Ligi', de: 'BLUNU Basketball Liga', en: 'BLUNU Basketball League' },
      description: { 
        tr: 'Profesyonel basketbol ligi web sitesi ve veri yönetim sistemi', 
        de: 'Professionelle Basketball-Liga-Website und Datenverwaltungssystem', 
        en: 'Professional basketball league website and data management system' 
      },
      image: 'https://images.unsplash.com/photo-1616353352910-15d970ac020b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwZ2FtZXxlbnwxfHx8fDE3NjAxNjY2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '2',
      name: { tr: 'Mediterran Tuana Ulm', de: 'Mediterran Tuana Ulm', en: 'Mediterran Tuana Ulm' },
      description: { 
        tr: 'Restoranlar için akıllı menü ekranları ve dijital çözümler', 
        de: 'Intelligente Menüdisplays und digitale Lösungen für Restaurants', 
        en: 'Smart menu displays and digital solutions for restaurants' 
      },
      image: 'https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzYwMTY1OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '3',
      name: { tr: 'Mavi Düğün Salonu', de: 'Mavi Event Hall', en: 'Mavi Event Hall' },
      description: { 
        tr: 'Organizasyon yönetim sistemi ve etkinlik planlama yazılımı', 
        de: 'Organisationsmanagementsystem und Veranstaltungsplanungssoftware', 
        en: 'Organization management system and event planning software' 
      },
      image: 'https://images.unsplash.com/photo-1759477274116-e3cb02d2b9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGhhbGwlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjAxNzgxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: '4',
      name: { tr: 'Demir Taş Seramik', de: 'Demir Taş Seramik', en: 'Demir Taş Seramik' },
      description: { 
        tr: 'E-ticaret platformu ve envanter yönetim sistemi', 
        de: 'E-Commerce-Plattform und Bestandsverwaltungssystem', 
        en: 'E-commerce platform and inventory management system' 
      },
      image: 'https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDA3ODcxOHww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  contact: {
    email: 'info@digitaliulm.de',
    phone: '+49 731 XXX XXXX',
    address: {
      tr: 'Ulm, Almanya',
      de: 'Ulm, Deutschland',
      en: 'Ulm, Germany'
    }
  },
  lastUpdated: new Date().toISOString()
};

// Save to localStorage
localStorage.setItem('digitaliulm_content', JSON.stringify(content));
console.log('✅ İçerikler başarıyla kaydedildi!');
console.log('Content saved successfully to localStorage!');
