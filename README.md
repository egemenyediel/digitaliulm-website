
# Web Sitesi Tasarımı

Modern ve responsive bir web sitesi tasarımı. React, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## Özellikler

- ⚡ Vite ile hızlı geliştirme
- ⚛️ React 18 ve TypeScript
- 🎨 Tailwind CSS ile modern tasarım
- 📱 Tam responsive tasarım
- 🧩 Radix UI bileşenleri
- 🚀 Production için optimize edilmiş

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Production build oluşturun:
```bash
npm run build
```

4. Production build'i önizleyin:
```bash
npm run preview
```

## Deployment

Bu proje statik hosting servislerinde (Vercel, Netlify, GitHub Pages, vb.) çalışmak üzere optimize edilmiştir.

### Vercel
1. Vercel hesabınıza giriş yapın
2. "Import Project" butonuna tıklayın
3. GitHub repository'nizi seçin
4. Deploy butonuna tıklayın

### Netlify
1. Netlify hesabınıza giriş yapın
2. "New site from Git" butonuna tıklayın
3. GitHub repository'nizi seçin
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy butonuna tıklayın

## Geliştirme

Proje yapısı:
```
src/
├── components/        # React bileşenleri
├── styles/           # CSS dosyaları
└── main.tsx         # Ana giriş noktası
```

## Lisans

MIT  