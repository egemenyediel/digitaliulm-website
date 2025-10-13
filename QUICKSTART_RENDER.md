# 🚀 Hızlı Başlangıç - Render.com Deployment

## 5 Dakikada Deploy!

### 1️⃣ Git Push (1 dk)
```bash
git init
git add .
git commit -m "Ready for Render"
git remote add origin https://github.com/KULLANICI_ADINIZ/digitaliulm.git
git push -u origin main
```

### 2️⃣ Render'a Git (2 dk)
1. https://render.com → GitHub ile giriş
2. "New +" → "Web Service"
3. Repo'yu seç: **digitaliulm**
4. Ayarlar (otomatik dolacak):
   - Name: `digitaliulm-api`
   - Build: `npm install`
   - Start: `npm run server`
5. "Create Web Service" → BEKLE

### 3️⃣ URL'i Al (30 sn)
Deploy bitince URL gelecek:
```
https://digitaliulm-api.onrender.com
```

### 4️⃣ Frontend'i Güncelle (1 dk)
`.env.production` dosyasını düzenle:
```env
VITE_API_URL=https://digitaliulm-api.onrender.com/api
```

### 5️⃣ Deploy (30 sn)
```bash
npm run build
vercel --prod
# veya
netlify deploy --prod
```

## ✅ TAMAM!
- Frontend: https://digitaliulm.vercel.app
- Backend: https://digitaliulm-api.onrender.com
- Admin: https://digitaliulm.vercel.app/#admin

---

## ⚠️ Hatırlatmalar
- İlk istek 30 saniye sürebilir (sleep mode)
- İçerik değişiklikleri geçici (her deploy'da sıfırlanır)
- Kalıcı için: PostgreSQL kullanın

PostgreSQL kurulumu için: `docs/RENDER_DEPLOYMENT.md`
