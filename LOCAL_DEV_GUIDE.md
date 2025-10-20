# DigitaliUlm - Local Development Guide

## 🚀 Admin Panel - Kayıt İşlemini Test Etme

Admin panelde "Değişiklikleri Kaydet" butonunun çalışması için, Netlify Functions API'nin erişilebilir olması gerekir.

### Seçenek 1: Netlify Dev (ÖNERILEN) ⭐

Netlify Functions'ı lokal makinede çalıştırır ve test etmenizi sağlar.

```bash
# Proje klasöründe:
cd "/Users/egemenyediel/Desktop/Digitaliulm/Web Sitesi Tasarımı"

# Netlify dev modunu başlat:
netlify dev
```

**Beklenen çıktı:**
```
◈ Netlify Dev ◈
◈ Version: 23.9.1
◈ Starting Netlify Dev server...
◈ Functions available at: http://localhost:8888/.netlify/functions
```

**Test adımları:**
1. Browser'da `http://localhost:8888` açılır (veya `http://localhost:3000`)
2. Siteye git
3. Admin Panel'e gir (/admin)
4. Bir çözüm veya referans düzenle
5. "Değişiklikleri Kaydet" butonuna bas
6. ✅ Toast mesajı görmeli (Başarı veya Hata)

**Browser Console'da Debug Mesajları:**
```
[contentManager] API_URL = http://localhost:8888/.netlify/functions
[saveContent] Sending POST to: http://localhost:8888/.netlify/functions/content
[saveContent] Response status: 200
✅ Content saved to database
```

---

### Seçenek 2: Vite Dev Server (HATA BEKLENMELİ)

Eğer sadece `npm run dev` ile başlatırsan:

```bash
npm run dev
```

**Problem:**
- Netlify Functions API erişilemez
- Toast'ta hata göreceksin: "Failed to save content: 503 - Database not available"
- **Bu normaldir!** Çünkü lokal serverda database bağlantısı yok

**Console Hatası:**
```
[saveContent] Sending POST to: http://localhost:8888/.netlify/functions/content
[saveContent] Response status: 503
❌ Error saving content to database: Failed to save content: 503 - Database not available
```

---

### Seçenek 3: Production Deploy (Test Yapılacak)

Gerçek database ile test etmek için Netlify'a deploy et:

1. dist/ klasörünü Netlify'a yükle
2. https://super-syrniki-46e03c.netlify.app/ aç
3. Admin Panel test et (/admin)
4. Değişiklikleri Kaydet butonuna bas
5. ✅ Başarı mesajı görmeli

---

## 🔧 Sorun Giderme

### "Değişiklikleri Kaydet" butonuna bastığımda hiçbirşey olmuyor?

**Olası nedenler:**

1. **Netlify dev başlatılmamış**
   ```bash
   # Çözüm: netlify dev başlat
   netlify dev
   ```

2. **Wrong API URL**
   - `.env` dosyasında `VITE_API_URL` kontrol et
   - Development: `http://localhost:8888/.netlify/functions`
   - Production: `/.netlify/functions`

3. **Browser Console'da hata yok mu?**
   - F12 aç → Console tab'a git
   - Kaydet butonuna bas
   - Hata mesajı gözükecek mi diye kontrol et

4. **Network hata**
   - F12 aç → Network tab'a git
   - Kaydet butonuna bas
   - POST request'ini gözlemle
   - Status 200 mi? 403/503 mi?

---

## 📊 Debug Mesajları

Kayıt işleminde console'da şu mesajları görmeli:

**Başarılı:**
```
[saveContent] Sending POST to: http://localhost:8888/.netlify/functions/content
[saveContent] Content: { hero: {...}, solutions: [...], ... }
[saveContent] Response status: 200
[saveContent] Response OK: true
[saveContent] Response data: { success: true, message: 'Content updated successfully' }
✅ Content saved to database
```

**Hata:**
```
[saveContent] Sending POST to: http://localhost:8888/.netlify/functions/content
[saveContent] Response status: 503
[saveContent] Response error: Database not available
❌ Error saving content to database: Failed to save content: 503 - Database not available
```

---

## 🎯 Özet

| Seçenek | Komut | API Çalışır | Veritabanı | Durum |
|---------|-------|-----------|-----------|-------|
| **Netlify Dev** | `netlify dev` | ✅ Evet | ✅ Evet (Neon) | **Önerilen** |
| **Vite Dev** | `npm run dev` | ❌ Hayır | ❌ Hayır | Hata beklenir |
| **Production** | Deploy dist/ | ✅ Evet | ✅ Evet (Neon) | **Canlı test** |

---

## 💾 Gerekli Ortam Değişkenleri

### Development (.env)
```env
VITE_API_URL=http://localhost:8888/.netlify/functions
DATABASE_URL=postgresql://neondb_owner:npg_Bw5WKgRaFXo0@ep-twilight-boat-a9crisxh-pooler.gwc.azure.neon.tech/neondb?sslmode=require&channel_binding=require
```

### Production (.env.production)
```env
VITE_API_URL=/.netlify/functions
DATABASE_URL=postgresql://neondb_owner:npg_Bw5WKgRaFXo0@ep-twilight-boat-a9crisxh-pooler.gwc.azure.neon.tech/neondb?sslmode=require&channel_binding=require
```

---

## 📞 İletişim & Destek

Hala sorun yaşıyorsan:
1. Console mesajlarını kontrol et
2. Network tab'daki request/response'ı gözlemle
3. DATABASE_URL'in doğru olduğundan emin ol
4. Netlify dashboard'da Functions log'larını kontrol et
