import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { 
  LogOut, 
  Home, 
  FileText, 
  Image, 
  MessageSquare, 
  Plus,
  Trash2,
  Save,
  Download,
  Upload
} from 'lucide-react';
import { 
  loadContent, 
  updateHeroContent, 
  updateSolutions, 
  updateReferences, 
  updateContact,
  exportContent,
  importContent,
  type HeroContent,
  type Solution,
  type Reference,
  type ContactInfo
} from '../utils/contentManager';

interface AdminPanelProps {
  onLogout: () => void;
}

type ContentType = 'hero' | 'solutions' | 'references' | 'contact';

interface SaveResult {
  status: 'success' | 'error' | null;
  message: string;
  timestamp: string;
}

export function AdminPanel({ onLogout }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<ContentType>('hero');
  const [lastSaved, setLastSaved] = useState<string>('');
  const [saveResult, setSaveResult] = useState<SaveResult>({
    status: null,
    message: '',
    timestamp: ''
  });

  // Hero Content
  const [heroContent, setHeroContent] = useState<HeroContent>({
    tr: { title: '', subtitle: '', buttonText: '' },
    de: { title: '', subtitle: '', buttonText: '' },
    en: { title: '', subtitle: '', buttonText: '' }
  });

  // Solutions Content
  const [solutions, setSolutions] = useState<Solution[]>([]);

  // References Content
  const [references, setReferences] = useState<Reference[]>([]);

  // Contact Content
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: '',
    phone: '',
    address: { tr: '', de: '', en: '' }
  });

  // Load content on mount
  useEffect(() => {
    loadContent().then(content => {
      setHeroContent(content.hero);
      setSolutions(content.solutions);
      setReferences(content.references);
      setContactInfo(content.contact);
      setLastSaved(content.lastUpdated);
    });
  }, []);

  const tabs = [
    { id: 'hero' as ContentType, icon: Home, label: 'Ana Sayfa' },
    { id: 'solutions' as ContentType, icon: FileText, label: 'Çözümler' },
    { id: 'references' as ContentType, icon: Image, label: 'Referanslar' },
    { id: 'contact' as ContentType, icon: MessageSquare, label: 'İletişim' },
  ];

  const handleSaveHero = async () => {
    try {
      await updateHeroContent(heroContent);
      setLastSaved(new Date().toISOString());
      setSaveResult({
        status: 'success',
        message: '✅ Ana sayfa içeriği başarıyla kaydedildi!',
        timestamp: new Date().toLocaleString('tr-TR')
      });
      toast.success('Ana sayfa içeriği başarıyla kaydedildi!', {
        description: 'Değişiklikler veritabanına gönderildi.',
      });
      // 5 saniye sonra mesajı temizle
      setTimeout(() => setSaveResult({ status: null, message: '', timestamp: '' }), 5000);
    } catch (error) {
      setSaveResult({
        status: 'error',
        message: '❌ Hata: ' + (error instanceof Error ? error.message : 'Bilinmeyen hata'),
        timestamp: new Date().toLocaleString('tr-TR')
      });
      toast.error('Hata oluştu!', {
        description: 'Ana sayfa kaydedilirken hata: ' + (error instanceof Error ? error.message : 'Bilinmeyen hata'),
      });
    }
  };

  const handleSaveSolutions = async () => {
    try {
      await updateSolutions(solutions);
      setLastSaved(new Date().toISOString());
      setSaveResult({
        status: 'success',
        message: `✅ ${solutions.length} çözüm başarıyla kaydedildi!`,
        timestamp: new Date().toLocaleString('tr-TR')
      });
      toast.success('Çözümler başarıyla kaydedildi!', {
        description: `${solutions.length} çözüm veritabanına gönderildi.`,
      });
      setTimeout(() => setSaveResult({ status: null, message: '', timestamp: '' }), 5000);
    } catch (error) {
      setSaveResult({
        status: 'error',
        message: '❌ Hata: ' + (error instanceof Error ? error.message : 'Bilinmeyen hata'),
        timestamp: new Date().toLocaleString('tr-TR')
      });
      toast.error('Hata oluştu!', {
        description: 'Çözümler kaydedilirken hata: ' + (error instanceof Error ? error.message : 'Bilinmeyen hata'),
      });
    }
  };

  const handleSaveReferences = async () => {
    try {
      await updateReferences(references);
      setLastSaved(new Date().toISOString());
      setSaveResult({
        status: 'success',
        message: `✅ ${references.length} referans başarıyla kaydedildi!`,
        timestamp: new Date().toLocaleString('tr-TR')
      });
      toast.success('Referanslar başarıyla kaydedildi!', {
        description: `${references.length} referans veritabanına gönderildi.`,
      });
      setTimeout(() => setSaveResult({ status: null, message: '', timestamp: '' }), 5000);
    } catch (error) {
      setSaveResult({
        status: 'error',
        message: '❌ Hata: ' + (error instanceof Error ? error.message : 'Bilinmeyen hata'),
        timestamp: new Date().toLocaleString('tr-TR')
      });
      toast.error('Hata oluştu!', {
        description: 'Referanslar kaydedilirken hata: ' + (error instanceof Error ? error.message : 'Bilinmeyen hata'),
      });
    }
  };

  const handleSaveContact = async () => {
    try {
      await updateContact(contactInfo);
      setLastSaved(new Date().toISOString());
      setSaveResult({
        status: 'success',
        message: '✅ İletişim bilgileri başarıyla kaydedildi!',
        timestamp: new Date().toLocaleString('tr-TR')
      });
      toast.success('İletişim bilgileri başarıyla kaydedildi!', {
        description: 'Değişiklikler veritabanına gönderildi.',
      });
      setTimeout(() => setSaveResult({ status: null, message: '', timestamp: '' }), 5000);
    } catch (error) {
      setSaveResult({
        status: 'error',
        message: '❌ Hata: ' + (error instanceof Error ? error.message : 'Bilinmeyen hata'),
        timestamp: new Date().toLocaleString('tr-TR')
      });
      toast.error('Hata oluştu!', {
        description: 'İletişim bilgileri kaydedilirken hata: ' + (error instanceof Error ? error.message : 'Bilinmeyen hata'),
      });
    }
  };

  const handleExport = () => {
    try {
      exportContent();
      toast.success('İçerik başarıyla indirildi!', {
        description: 'JSON dosyası indirilme klasörünüze kaydedildi.',
      });
    } catch (error) {
      toast.error('Hata oluştu!', {
        description: 'İçerik indirilemedi: ' + (error instanceof Error ? error.message : 'Bilinmeyen hata'),
      });
    }
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      importContent(file)
        .then(() => {
          return loadContent().then(content => {
            setHeroContent(content.hero);
            setSolutions(content.solutions);
            setReferences(content.references);
            setContactInfo(content.contact);
            setLastSaved(content.lastUpdated);
            toast.success('İçerik başarıyla yüklendi!', {
              description: 'Dosyadaki tüm içerik veritabanına kaydedildi.',
            });
          });
        })
        .catch((error) => {
          toast.error('Hata oluştu!', {
            description: 'İçerik yüklenirken hata: ' + (error instanceof Error ? error.message : 'Bilinmeyen hata'),
          });
        });
    }
  };

  // Solutions Handlers
  const handleAddSolution = () => {
    const newSolution: Solution = {
      id: Date.now().toString(),
      icon: 'Zap',
      title: {
        tr: 'Yeni Çözüm',
        de: 'Neue Lösung',
        en: 'New Solution'
      },
      description: {
        tr: 'Açıklama ekleyin',
        de: 'Beschreibung hinzufügen',
        en: 'Add description'
      }
    };
    setSolutions([...solutions, newSolution]);
  };

  const handleUpdateSolution = (id: string, field: string, lang: 'tr' | 'de' | 'en', value: string) => {
    setSolutions(solutions.map(solution => {
      if (solution.id === id) {
        if (field === 'icon') {
          return { ...solution, icon: value };
        }
        return {
          ...solution,
          [field]: {
            ...solution[field as 'title' | 'description'],
            [lang]: value
          }
        };
      }
      return solution;
    }));
  };

  const handleDeleteSolution = (id: string) => {
    const solution = solutions.find(s => s.id === id);
    toast.custom((t) => (
      <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-red-500">
        <p className="font-semibold text-gray-900">Silmek istediğinize emin misiniz?</p>
        <p className="text-sm text-gray-600 mt-1">"{solution?.title.tr}" silinecek</p>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => {
              setSolutions(solutions.filter(solution => solution.id !== id));
              toast.dismiss(t);
              toast.success('Çözüm silindi!', {
                description: 'Çözüm başarıyla silindi.',
              });
            }}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
          >
            Sil
          </button>
          <button
            onClick={() => toast.dismiss(t)}
            className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm hover:bg-gray-300"
          >
            İptal
          </button>
        </div>
      </div>
    ));
  };

  // References Handlers
  const handleAddReference = () => {
    const newReference: Reference = {
      id: Date.now().toString(),
      name: {
        tr: 'Yeni Referans',
        de: 'Neue Referenz',
        en: 'New Reference'
      },
      description: {
        tr: 'Açıklama ekleyin',
        de: 'Beschreibung hinzufügen',
        en: 'Add description'
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop'
    };
    setReferences([...references, newReference]);
  };

  const handleUpdateReference = (id: string, field: string, lang: 'tr' | 'de' | 'en', value: string) => {
    setReferences(references.map(reference => {
      if (reference.id === id) {
        if (field === 'image') {
          return { ...reference, image: value };
        }
        return {
          ...reference,
          [field]: {
            ...reference[field as 'name' | 'description'],
            [lang]: value
          }
        };
      }
      return reference;
    }));
  };

  const handleDeleteReference = (id: string) => {
    const reference = references.find(r => r.id === id);
    toast.custom((t) => (
      <div className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-red-500">
        <p className="font-semibold text-gray-900">Silmek istediğinize emin misiniz?</p>
        <p className="text-sm text-gray-600 mt-1">"{reference?.name.tr}" silinecek</p>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => {
              setReferences(references.filter(reference => reference.id !== id));
              toast.dismiss(t);
              toast.success('Referans silindi!', {
                description: 'Referans başarıyla silindi.',
              });
            }}
            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
          >
            Sil
          </button>
          <button
            onClick={() => toast.dismiss(t)}
            className="px-3 py-1 bg-gray-200 text-gray-800 rounded text-sm hover:bg-gray-300"
          >
            İptal
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Sidebar */}
      <div className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6">
        {/* Logo */}
        <div className="text-2xl tracking-tight mb-8">
          <span className="text-[#0EA5E9] font-[600]">digital</span>
          <span className="text-white font-[600]">iulm</span>
          <span className="text-[#0EA5E9] font-[600]">.de</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#0EA5E9] text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Çıkış Yap</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          {/* Save Result Banner */}
          {saveResult.status && (
            <div className={`mb-6 p-4 rounded-lg border-l-4 flex items-center justify-between ${
              saveResult.status === 'success'
                ? 'bg-green-900/20 border-green-500 text-green-100'
                : 'bg-red-900/20 border-red-500 text-red-100'
            }`}>
              <div className="flex-1">
                <p className="font-semibold text-lg">{saveResult.message}</p>
                <p className="text-sm opacity-75">{saveResult.timestamp}</p>
              </div>
              <button
                onClick={() => setSaveResult({ status: null, message: '', timestamp: '' })}
                className="text-2xl opacity-50 hover:opacity-100 ml-4"
              >
                ×
              </button>
            </div>
          )}

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {tabs.find(t => t.id === activeTab)?.label}
              </h1>
              <p className="text-white/60">
                İçerikleri düzenleyin ve yönetin
                {lastSaved && (
                  <span className="ml-3 text-[#0EA5E9] text-xs">
                    Son kayıt: {new Date(lastSaved).toLocaleString('tr-TR')}
                  </span>
                )}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {/* Export Button */}
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg text-green-400 transition-colors"
                title="İçeriği JSON olarak indir"
              >
                <Download className="w-4 h-4" />
                Dışa Aktar
              </button>

              {/* Import Button */}
              <label className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 transition-colors cursor-pointer">
                <Upload className="w-4 h-4" />
                İçe Aktar
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
              </label>

              {/* Home Button */}
              <a
                href="/"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-colors"
              >
                <Home className="w-4 h-4" />
                Ana Sayfaya Dön
              </a>
            </div>
          </div>

          {/* Hero Content */}
          {activeTab === 'hero' && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Ana Sayfa İçeriği</h2>
              
              {/* Turkish */}
              <div className="mb-6">
                <h3 className="text-[#0EA5E9] font-semibold mb-3">🇹🇷 Türkçe</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Başlık</label>
                    <input
                      type="text"
                      value={heroContent.tr.title}
                      onChange={(e) => setHeroContent({
                        ...heroContent,
                        tr: { ...heroContent.tr, title: e.target.value }
                      })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Alt Başlık</label>
                    <input
                      type="text"
                      value={heroContent.tr.subtitle}
                      onChange={(e) => setHeroContent({
                        ...heroContent,
                        tr: { ...heroContent.tr, subtitle: e.target.value }
                      })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Buton Metni</label>
                    <input
                      type="text"
                      value={heroContent.tr.buttonText}
                      onChange={(e) => setHeroContent({
                        ...heroContent,
                        tr: { ...heroContent.tr, buttonText: e.target.value }
                      })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* German */}
              <div className="mb-6">
                <h3 className="text-[#0EA5E9] font-semibold mb-3">🇩🇪 Almanca</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Başlık</label>
                    <input
                      type="text"
                      value={heroContent.de.title}
                      onChange={(e) => setHeroContent({
                        ...heroContent,
                        de: { ...heroContent.de, title: e.target.value }
                      })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Alt Başlık</label>
                    <input
                      type="text"
                      value={heroContent.de.subtitle}
                      onChange={(e) => setHeroContent({
                        ...heroContent,
                        de: { ...heroContent.de, subtitle: e.target.value }
                      })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    />
                  </div>
                </div>
              </div>

              {/* English */}
              <div className="mb-6">
                <h3 className="text-[#0EA5E9] font-semibold mb-3">🇬🇧 İngilizce</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Başlık</label>
                    <input
                      type="text"
                      value={heroContent.en.title}
                      onChange={(e) => setHeroContent({
                        ...heroContent,
                        en: { ...heroContent.en, title: e.target.value }
                      })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Alt Başlık</label>
                    <input
                      type="text"
                      value={heroContent.en.subtitle}
                      onChange={(e) => setHeroContent({
                        ...heroContent,
                        en: { ...heroContent.en, subtitle: e.target.value }
                      })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleSaveHero}
                className="flex items-center gap-2 px-6 py-3 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0EA5E9]/90 transition-colors"
              >
                <Save className="w-5 h-5" />
                Değişiklikleri Kaydet
              </button>
            </div>
          )}

          {/* Solutions Content */}
          {activeTab === 'solutions' && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Çözümler</h2>
                <button 
                  onClick={handleAddSolution}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0EA5E9]/90 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Yeni Çözüm Ekle
                </button>
              </div>

              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={solution.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-white font-medium">Çözüm #{index + 1}</h3>
                        <button 
                          onClick={() => handleDeleteSolution(solution.id)}
                          className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Icon */}
                      <div className="mb-4">
                        <label className="block text-white/80 text-sm mb-2">İkon</label>
                        <input
                          type="text"
                          value={solution.icon}
                          onChange={(e) => handleUpdateSolution(solution.id, 'icon', 'tr', e.target.value)}
                          placeholder="Bot, Smartphone, Globe, etc."
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
                        />
                      </div>

                      {/* Turkish */}
                      <div className="mb-3">
                        <label className="block text-[#0EA5E9] text-sm mb-2">🇹🇷 Türkçe</label>
                        <input
                          type="text"
                          value={solution.title.tr}
                          onChange={(e) => handleUpdateSolution(solution.id, 'title', 'tr', e.target.value)}
                          placeholder="Başlık"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm mb-2"
                        />
                        <textarea
                          value={solution.description.tr}
                          onChange={(e) => handleUpdateSolution(solution.id, 'description', 'tr', e.target.value)}
                          placeholder="Açıklama"
                          rows={2}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
                        />
                      </div>

                      {/* German */}
                      <div className="mb-3">
                        <label className="block text-[#0EA5E9] text-sm mb-2">🇩🇪 Deutsch</label>
                        <input
                          type="text"
                          value={solution.title.de}
                          onChange={(e) => handleUpdateSolution(solution.id, 'title', 'de', e.target.value)}
                          placeholder="Titel"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm mb-2"
                        />
                        <textarea
                          value={solution.description.de}
                          onChange={(e) => handleUpdateSolution(solution.id, 'description', 'de', e.target.value)}
                          placeholder="Beschreibung"
                          rows={2}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
                        />
                      </div>

                      {/* English */}
                      <div>
                        <label className="block text-[#0EA5E9] text-sm mb-2">🇬🇧 English</label>
                        <input
                          type="text"
                          value={solution.title.en}
                          onChange={(e) => handleUpdateSolution(solution.id, 'title', 'en', e.target.value)}
                          placeholder="Title"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm mb-2"
                        />
                        <textarea
                          value={solution.description.en}
                          onChange={(e) => handleUpdateSolution(solution.id, 'description', 'en', e.target.value)}
                          placeholder="Description"
                          rows={2}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleSaveSolutions}
                className="flex items-center gap-2 px-6 py-3 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0EA5E9]/90 transition-colors mt-6"
              >
                <Save className="w-5 h-5" />
                Değişiklikleri Kaydet
              </button>
            </div>
          )}

          {/* References Content */}
          {activeTab === 'references' && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Referanslar</h2>
                <button 
                  onClick={handleAddReference}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0EA5E9]/90 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Yeni Referans Ekle
                </button>
              </div>

              <div className="space-y-6">
                {references.map((reference, index) => (
                  <div key={reference.id} className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-medium">Referans #{index + 1}</h3>
                      <button 
                        onClick={() => handleDeleteReference(reference.id)}
                        className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Image URL */}
                    <div className="mb-4">
                      <label className="block text-white/80 text-sm mb-2">Resim URL</label>
                      <input
                        type="text"
                        value={reference.image}
                        onChange={(e) => handleUpdateReference(reference.id, 'image', 'tr', e.target.value)}
                        placeholder="https://example.com/image.jpg"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
                      />
                      {reference.image && (
                        <img 
                          src={reference.image} 
                          alt="Preview"
                          className="mt-2 w-full h-48 object-cover rounded-lg"
                        />
                      )}
                    </div>

                    {/* Turkish */}
                    <div className="mb-3">
                      <label className="block text-[#0EA5E9] text-sm mb-2">🇹🇷 Türkçe</label>
                      <input
                        type="text"
                        value={reference.name.tr}
                        onChange={(e) => handleUpdateReference(reference.id, 'name', 'tr', e.target.value)}
                        placeholder="Proje Adı"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm mb-2"
                      />
                      <textarea
                        value={reference.description.tr}
                        onChange={(e) => handleUpdateReference(reference.id, 'description', 'tr', e.target.value)}
                        placeholder="Proje Açıklaması"
                        rows={2}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
                      />
                    </div>

                    {/* German */}
                    <div className="mb-3">
                      <label className="block text-[#0EA5E9] text-sm mb-2">🇩🇪 Deutsch</label>
                      <input
                        type="text"
                        value={reference.name.de}
                        onChange={(e) => handleUpdateReference(reference.id, 'name', 'de', e.target.value)}
                        placeholder="Projektname"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm mb-2"
                      />
                      <textarea
                        value={reference.description.de}
                        onChange={(e) => handleUpdateReference(reference.id, 'description', 'de', e.target.value)}
                        placeholder="Projektbeschreibung"
                        rows={2}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
                      />
                    </div>

                    {/* English */}
                    <div>
                      <label className="block text-[#0EA5E9] text-sm mb-2">🇬🇧 English</label>
                      <input
                        type="text"
                        value={reference.name.en}
                        onChange={(e) => handleUpdateReference(reference.id, 'name', 'en', e.target.value)}
                        placeholder="Project Name"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm mb-2"
                      />
                      <textarea
                        value={reference.description.en}
                        onChange={(e) => handleUpdateReference(reference.id, 'description', 'en', e.target.value)}
                        placeholder="Project Description"
                        rows={2}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleSaveReferences}
                className="flex items-center gap-2 px-6 py-3 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0EA5E9]/90 transition-colors mt-6"
              >
                <Save className="w-5 h-5" />
                Değişiklikleri Kaydet
              </button>
            </div>
          )}

          {/* Contact Content */}
          {activeTab === 'contact' && (
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-6">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm mb-2">E-posta</label>
                  <input
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Adres (Türkçe)</label>
                  <textarea
                    value={contactInfo.address.tr}
                    onChange={(e) => setContactInfo({ 
                      ...contactInfo, 
                      address: { ...contactInfo.address, tr: e.target.value } 
                    })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white h-20"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Adres (Almanca)</label>
                  <textarea
                    value={contactInfo.address.de}
                    onChange={(e) => setContactInfo({ 
                      ...contactInfo, 
                      address: { ...contactInfo.address, de: e.target.value } 
                    })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white h-20"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Adres (İngilizce)</label>
                  <textarea
                    value={contactInfo.address.en}
                    onChange={(e) => setContactInfo({ 
                      ...contactInfo, 
                      address: { ...contactInfo.address, en: e.target.value } 
                    })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white h-20"
                  />
                </div>
                <button 
                  onClick={handleSaveContact}
                  className="flex items-center gap-2 px-6 py-3 bg-[#0EA5E9] text-white rounded-lg hover:bg-[#0EA5E9]/90 transition-colors"
                >
                  <Save className="w-5 h-5" />
                  Değişiklikleri Kaydet
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
