import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { TopProgressBar } from "./components/TopProgressBar";
import { VideoHero } from "./components/VideoHero";
import { Solutions } from "./components/Solutions";
import { References } from "./components/References";
import { ChatWidget } from "./components/ChatWidget";
import { Footer } from "./components/Footer";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminPanel } from "./pages/AdminPanel";
// initializeContent kaldırıldı; içerik doğrudan sunucudan yüklenecek

export default function App() {
  // Browser diline göre varsayılan dil belirleme (Almanca öncelikli)
  const getDefaultLanguage = (): 'tr' | 'de' | 'en' => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('de')) return 'de';
    if (browserLang.startsWith('tr')) return 'tr';
    if (browserLang.startsWith('en')) return 'en';
    return 'de'; // Varsayılan Almanca
  };

  const [currentLang, setCurrentLang] = useState<'tr' | 'de' | 'en'>(() => getDefaultLanguage());
  const [currentPage, setCurrentPage] = useState<'home' | 'admin-login' | 'admin-panel'>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // İçerik artık sunucudan yüklenecek (bileşenler loadContent çağırıyor)

  // URL hash'e göre sayfa yönetimi
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#admin') {
        setCurrentPage('admin-login');
      } else if (hash === '#admin-panel' && isAuthenticated) {
        setCurrentPage('admin-panel');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('admin-panel');
    window.location.hash = '#admin-panel';
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('home');
    window.location.hash = '';
  };

  // Admin sayfaları
  if (currentPage === 'admin-login') {
    return <AdminLogin onLogin={handleLogin} />;
  }

  if (currentPage === 'admin-panel' && isAuthenticated) {
    return <AdminPanel onLogout={handleLogout} />;
  }

  // Ana sayfa
  return (
    <div className="min-h-screen relative overflow-hidden">
      <TopProgressBar />
      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          key="background-video"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/assets/jkj.mp4" type="video/mp4" />
        </video>
      </div>

      <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <VideoHero lang={currentLang} />
      <Solutions lang={currentLang} />
      <References lang={currentLang} />
      <ChatWidget lang={currentLang} />
      <Footer lang={currentLang} />
    </div>
  );
}
