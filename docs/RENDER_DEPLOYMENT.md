# Render.com Deployment Guide 🚀

## Backend'i Render.com'a Deploy Etme

### ✅ Hazırlık Tamamlandı!

Projeniz Render.com için hazır:
- ✅ `render.yaml` oluşturuldu
- ✅ `server/index.js` PORT yapılandırması güncellendi
- ✅ `.gitignore` kontrol edildi

---

## 📝 Adım Adım Kurulum

### 1️⃣ Git Repository'ye Push Edin

```bash
# Eğer henüz git repo oluşturmadıysanız:
git init
git add .
git commit -m "Initial commit - Ready for Render deployment"

# GitHub'a push edin:
git remote add origin https://github.com/KULLANICI_ADINIZ/digitaliulm.git
git branch -M main
git push -u origin main
```

---

### 2️⃣ Render Hesabı Oluşturun

1. 🌐 https://render.com adresine gidin
2. 🔐 "Get Started" → **GitHub ile giriş yapın** (ücretsiz)
3. ✅ GitHub hesabınızı bağlayın

---

### 3️⃣ Web Service Oluşturun

#### A. Dashboard'dan Başlayın
1. Dashboard'da **"New +"** butonuna tıklayın
2. **"Web Service"** seçin

#### B. Repository'yi Bağlayın
1. **"Connect a repository"** seçeneğini kullanın
2. GitHub'dan **digitaliulm** repo'nuzu seçin
3. **"Connect"** butonuna tıklayın

#### C. Ayarları Yapın
Render otomatik `render.yaml` dosyasını algılayacak, ama yine de kontrol edin:

| Ayar | Değer |
|------|-------|
| **Name** | `digitaliulm-api` |
| **Region** | `Frankfurt (EU)` |
| **Branch** | `main` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm run server` |
| **Plan** | `Free` |

#### D. Environment Variables (Otomatik)
Render otomatik şunları ekler:
- `PORT` → Render tarafından atanır
- `NODE_ENV` → `production` (render.yaml'dan)

---

### 4️⃣ Deploy Edin

1. ✅ Tüm ayarları kontrol edin
2. 🚀 **"Create Web Service"** butonuna tıklayın
3. ⏳ Deploy başlayacak (2-3 dakika sürer)
4. 📊 Logları izleyin:
   ```
   Installing dependencies...
   Starting server...
   🚀 Content API server running on http://0.0.0.0:PORT
   ```

---

### 5️⃣ URL'nizi Alın

Deploy tamamlandığında size bir URL verilecek:
```
https://digitaliulm-api.onrender.com
```

veya

```
https://digitaliulm-api-xxxx.onrender.com
```

📝 **Bu URL'yi not alın!**

---

### 6️⃣ API'yi Test Edin

Tarayıcınızda veya terminalde test edin:

```bash
# Tarayıcıda:
https://digitaliulm-api.onrender.com/api/content

# Terminal'de:
curl https://digitaliulm-api.onrender.com/api/content

# Başarılı response:
{
  "hero": {
    "tr": { "title": "Dijital Dönüşüm", ... },
    ...
  },
  "solutions": [...],
  ...
}
```

---

### 7️⃣ Frontend'i Güncelleyin

`.env.production` dosyasını açın ve API URL'ini güncelleyin:

```env
# .env.production
VITE_API_URL=https://digitaliulm-api.onrender.com/api
```

**Önemli:** `digitaliulm-api.onrender.com` yerine **kendi URL'inizi** yazın!

---

### 8️⃣ Frontend'i Build ve Deploy Edin

```bash
# Build yapın
npm run build

# Vercel'e deploy (eğer Vercel kullanıyorsanız)
vercel --prod

# Veya Netlify'a deploy (eğer Netlify kullanıyorsanız)
netlify deploy --prod
```

---

## 🎉 Tamamlandı!

Artık sisteminiz çalışıyor:
- 🌐 **Frontend:** https://digitaliulm.vercel.app (veya Netlify URL'iniz)
- 🔧 **Backend API:** https://digitaliulm-api.onrender.com
- 🔐 **Admin Panel:** https://digitaliulm.vercel.app/#admin (ege/ege)

---

## ⚠️ Önemli Notlar

### 1. Ücretsiz Plan Limitleri
- ✅ **750 saat/ay** (31 gün × 24 saat = 744 saat → tam yeterli!)
- ⚠️ **15 dakika hareketsizlikten sonra sleep mode**
  - İlk istek 30 saniye sürebilir (cold start)
  - Sonraki istekler hızlı
- ✅ **Aylık 100 GB bandwidth** (çoğu site için yeterli)

### 2. Dosya Yazma Sorunu ⚠️
Render'da dosya yazma **GEÇİCİ**:
- Admin panelden değişiklik yaptığınızda `content.json` güncellenir
- ✅ Çalışır ve herkes görür
- ❌ **ANCAK:** Her deploy'da sıfırlanır
- ❌ Server restart olursa kaybolur

**Çözüm Seçenekleri:**

#### A. Manuel Git Workflow (Basit)
```bash
# 1. Admin panelden değişiklik yap
# 2. Render'dan content.json dosyasını indir
# 3. Lokal projeye ekle
git add public/content.json
git commit -m "Content updated"
git push
# 4. Render otomatik yeniden deploy olacak
```

#### B. PostgreSQL Database (Profesyonel) 
```bash
# Render'da ücretsiz PostgreSQL ekle
# İçeriği database'de sakla
# Kalıcı ve güvenilir
```

**PostgreSQL versiyonunu ister misiniz?**

---

## 🔄 Güncellemeler

### Code Değişikliği Yaptıysanız:
```bash
git add .
git commit -m "Update message"
git push
```
→ Render otomatik yeniden deploy eder (2-3 dakika)

### İçerik Değişikliği Yaptıysanız:
Admin panelden değişiklik yaptıktan sonra içeriği kaydetmek için:

1. **Geçici çözüm:** Elle indirip Git'e commit
2. **Kalıcı çözüm:** PostgreSQL kullanın

---

## 🐛 Sorun Giderme

### Problem 1: "Service not found"
- ✅ URL'yi doğru yazdınız mı?
- ✅ Deploy tamamlandı mı? (Render dashboard'dan kontrol edin)

### Problem 2: Sleep mode yüzünden yavaş
- ⏳ İlk istek 30 saniye sürer (normal)
- ✅ Sonraki istekler hızlı olacak
- 💡 **Çözüm:** Render'ı $7/ay plan'a yükseltin (sleep mode kalkar)

### Problem 3: Content değişiklikleri kayboldu
- ⚠️ Deploy veya restart olduysa normal
- ✅ PostgreSQL kullanarak kalıcı hale getirin

### Problem 4: CORS hatası
- ✅ `server/index.js` dosyasında CORS zaten aktif
- ✅ Frontend URL'inde API URL'ini doğru yazdığınızdan emin olun

---

## 📞 Sonraki Adımlar

### 1. PostgreSQL ile Kalıcı Storage (Önerilen)
İçerik değişikliklerinin kaybolmaması için:

```bash
# Render'da New PostgreSQL oluştur
# Server kodunu database kullanacak şekilde güncelle
```

**Hazırlayayım mı?** → "PostgreSQL versiyonunu hazırla" deyin

### 2. Custom Domain Ekleyin
```
digitaliulm-api.onrender.com → api.digitaliulm.de
```

### 3. Monitoring Ekleyin
- Render dashboard'dan uptime takibi
- UptimeRobot ile 5 dakikada bir ping (sleep mode önleme)

---

## ✅ Checklist

- [ ] Render hesabı oluşturuldu
- [ ] GitHub repo bağlandı
- [ ] Web service deploy edildi
- [ ] API test edildi (`/api/content`)
- [ ] `.env.production` güncellendi
- [ ] Frontend deploy edildi
- [ ] Admin panel test edildi
- [ ] İçerik değişikliği test edildi

---

## 🎯 Başarılı Deployment İçin

1. ✅ **İlk istek yavaş olabilir** (cold start) - Bu normal!
2. ✅ **İçerik değişiklikleri geçici** - PostgreSQL ile kalıcı yapın
3. ✅ **Aylık 750 saat yeterli** - Sorunsuz çalışır
4. ✅ **Otomatik SSL** - HTTPS ücretsiz geliyor

---

Sorularınız var mı? PostgreSQL versiyonu için hazır mıyız? 🚀
