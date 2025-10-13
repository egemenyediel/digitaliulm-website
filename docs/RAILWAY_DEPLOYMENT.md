# Railway.app Deployment Guide

## Backend'i Railway.app'e Deploy Etme

### Avantajlar
- ✅ Çok kolay setup
- ✅ Dosya yazma kalıcı
- ✅ Hızlı (sleep mode yok)
- ✅ PostgreSQL dahil

### Maliyet
- İlk $5 ücretsiz (kredi)
- Sonra ~$5/ay

### Kurulum

#### Adım 1: Railway Hesabı
1. https://railway.app adresine git
2. GitHub ile giriş yap

#### Adım 2: Yeni Proje
1. "New Project" → "Deploy from GitHub repo"
2. Repo'nu seç
3. Otomatik deploy başlar

#### Adım 3: Ayarlar
Railway otomatik algılar:
- `package.json` var → Node.js
- `npm install` → Otomatik
- Start komutu: `npm run server`

#### Adım 4: URL Al
- Deploy bittikten sonra URL verilir
- Örnek: `https://digitaliulm-api.up.railway.app`

#### Adım 5: .env.production Güncelle
```env
VITE_API_URL=https://digitaliulm-api.up.railway.app/api
```

### Önemli
- ✅ Dosya yazma kalıcı (content.json kaybolmaz)
- ✅ Sleep mode yok (hızlı yanıt)
- ✅ Kolay yönetim paneli
