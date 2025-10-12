#!/bin/bash

# Web Sitesi Deployment Script
echo "🚀 Web Sitesi Deploy Script Başlatılıyor..."

# Bağımlılıkları yükle
echo "📦 Bağımlılıklar yükleniyor..."
npm ci

# Build oluştur
echo "🔨 Production build oluşturuluyor..."
npm run build

# Build başarılı mı kontrol et
if [ $? -eq 0 ]; then
    echo "✅ Build başarıyla tamamlandı!"
    echo "📁 Dosyalar 'dist' klasöründe hazır."
    echo ""
    echo "🌐 Deployment için:"
    echo "  - Vercel: vercel --prod"
    echo "  - Netlify: netlify deploy --prod --dir=dist"
    echo "  - GitHub Pages: dist klasörünü gh-pages branch'ine push edin"
    echo ""
    echo "📊 Build istatistikleri:"
    echo "  - Klasör boyutu: $(du -sh dist | cut -f1)"
    echo "  - Dosya sayısı: $(find dist -type f | wc -l | tr -d ' ')"
else
    echo "❌ Build sırasında hata oluştu!"
    exit 1
fi