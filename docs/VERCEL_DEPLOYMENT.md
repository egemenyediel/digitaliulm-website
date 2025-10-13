# Vercel Serverless Deployment Guide

## Backend'i Vercel Serverless ile Deploy Etme

### Avantajlar
- ✅ TAM ÜCRETSİZ
- ✅ Frontend ile aynı yerde
- ✅ Otomatik SSL/CDN
- ✅ Git push = otomatik deploy

### ⚠️ Önemli Not
Vercel serverless'ta dosya yazma kalıcı DEĞİL. Her request'te dosya kaybolabilir.

**Çözüm:** Vercel KV (Key-Value Database) kullan (ücretsiz)

## Kurulum

### Adım 1: vercel.json Güncelle
Dosya zaten mevcut, API route'u eklenmiş.

### Adım 2: API Endpoint Oluşturuldu
✅ `api/content.js` dosyası oluşturuldu

### Adım 3: Deploy
```bash
# Vercel CLI kur
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Adım 4: URL
Deploy sonrası URL:
```
Frontend: https://digitaliulm.vercel.app
API: https://digitaliulm.vercel.app/api/content
```

### Adım 5: .env.production
```env
VITE_API_URL=https://digitaliulm.vercel.app/api
```

## ⚠️ Dosya Kalıcılığı Sorunu

Vercel'de dosya yazma geçici. Her deploy'da sıfırlanır.

### Çözüm 1: Vercel KV (Önerilen)
```bash
# Vercel KV ekle
vercel env add KV_REST_API_URL
vercel env add KV_REST_API_TOKEN
```

### Çözüm 2: GitHub API ile
Admin panelden değişiklik → GitHub API ile commit → Otomatik deploy

### Çözüm 3: Harici Database
- Supabase (ücretsiz PostgreSQL)
- MongoDB Atlas (ücretsiz)
- PlanetScale (ücretsiz MySQL)

Hangi çözümü tercih edersiniz?
