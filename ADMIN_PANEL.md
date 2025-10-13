# Admin Panel - digitalIulm.de

## Erişim Bilgileri

**URL:** `/#admin`

**Kullanıcı Adı:** `ege`  
**Şifre:** `ege`

## Özellikler

### 1. Ana Sayfa İçeriği Yönetimi
- Hero başlık ve alt başlık düzenleme
- 3 dilde içerik yönetimi (TR, DE, EN)
- Buton metni değiştirme

### 2. Çözümler Yönetimi
- Çözüm ekleme, düzenleme, silme
- Her çözüm için icon ve açıklama
- Çoklu dil desteği

### 3. Referanslar Yönetimi
- Referans projeleri ekleme/düzenleme
- Görsel yükleme
- Proje açıklamaları

### 4. İletişim Bilgileri
- E-posta adresi
- Telefon numarası
- Ofis adresi (3 dilde)

## Veri Yönetimi

### İçerik Dosya Sistemi

Tüm içerikler **localStorage** üzerinde `digitaliulm_content` anahtarı ile saklanır.

### Dışa Aktarma (Export)
1. Admin panelinin sağ üst köşesindeki **"Dışa Aktar"** butonuna tıklayın
2. `digitaliulm_content_YYYY-MM-DD.json` formatında dosya indirilir
3. Bu dosya yedekleme ve versiyon kontrolü için kullanılabilir

### İçe Aktarma (Import)
1. Admin panelinin sağ üst köşesindeki **"İçe Aktar"** butonuna tıklayın
2. Daha önce dışa aktarılan JSON dosyasını seçin
3. İçerik otomatik olarak yüklenir ve tüm bölümler güncellenir

### Otomatik Kaydetme
- Her "Kaydet" butonuna tıklandığında içerik localStorage'a kaydedilir
- Son kayıt zamanı header'da gösterilir
- Tarayıcı önbelleği silinmediği sürece veriler korunur

### JSON Dosya Yapısı

```json
{
  "hero": {
    "tr": { "title": "...", "subtitle": "...", "buttonText": "..." },
    "de": { "title": "...", "subtitle": "...", "buttonText": "..." },
    "en": { "title": "...", "subtitle": "...", "buttonText": "..." }
  },
  "solutions": [
    {
      "id": "1",
      "icon": "Bot",
      "title": { "tr": "...", "de": "...", "en": "..." },
      "description": { "tr": "...", "de": "...", "en": "..." }
    }
  ],
  "references": [
    {
      "id": "1",
      "name": { "tr": "...", "de": "...", "en": "..." },
      "description": { "tr": "...", "de": "...", "en": "..." },
      "image": "/path/to/image.jpg"
    }
  ],
  "contact": {
    "email": "info@digitaliulm.de",
    "phone": "+49 123 456 789",
    "address": { "tr": "...", "de": "...", "en": "..." }
  },
  "lastUpdated": "2025-10-14T10:30:00.000Z"
}
```

## Kullanım

1. Ana sayfanın en altında sol tarafta **"Panel"** linkine tıklayın
2. Kullanıcı adı ve şifre ile giriş yapın
3. Sol menüden düzenlemek istediğiniz bölümü seçin
4. Değişiklikleri yapın
5. **"Değişiklikleri Kaydet"** butonuna tıklayın
6. İçeriği yedeklemek için **"Dışa Aktar"** butonunu kullanın

## Teknik Detaylar

### Content Manager (`src/utils/contentManager.ts`)

#### Fonksiyonlar:
- `initializeContent()` - İlk yüklemede default content'i oluşturur
- `loadContent()` - localStorage'dan içeriği okur
- `saveContent()` - localStorage'a içeriği kaydeder
- `exportContent()` - JSON dosyası olarak indirir
- `importContent(file)` - JSON dosyasından yükler
- `updateHeroContent(hero)` - Hero bölümünü günceller
- `updateSolutions(solutions)` - Çözümleri günceller
- `updateReferences(references)` - Referansları günceller
- `updateContact(contact)` - İletişim bilgilerini günceller

### Dosya Konumları:
- Admin Login: `src/pages/AdminLogin.tsx`
- Admin Panel: `src/pages/AdminPanel.tsx`
- Content Manager: `src/utils/contentManager.ts`
- Ana App: `src/App.tsx`

## Güvenlik

⚠️ **Önemli Notlar:**
- Veriler **localStorage**'da saklanır (tarayıcı önbelleğinde)
- Tarayıcı önbelleği silinirse veriler kaybolur
- **Düzenli olarak "Dışa Aktar" ile yedek alın!**
- Production için gerçek bir authentication sistemi ve backend API entegre edilmelidir
- Şifre hashleme ve JWT token kullanımı önerilir

## Geliştirme Notları

### Gelecekte Eklenebilecek Özellikler:
- ✅ JSON dosya import/export
- ✅ localStorage ile veri saklama
- ✅ Otomatik kaydetme sistemi
- ⏳ Backend API entegrasyonu
- ⏳ Görsel yükleme sistemi (image upload)
- ⏳ Çoklu kullanıcı desteği
- ⏳ Rol bazlı erişim kontrolü
- ⏳ Gerçek zamanlı önizleme
- ⏳ İçerik versiyonlama (Git gibi)
- ⏳ Otomatik backup sistemi

### Backend API Önerileri:
```
POST   /api/content          - Tüm içeriği kaydet
GET    /api/content          - Tüm içeriği getir
PUT    /api/content/hero     - Hero'yu güncelle
PUT    /api/content/solutions - Solutions'ı güncelle
PUT    /api/content/references - References'ı güncelle
PUT    /api/content/contact  - Contact'ı güncelle
GET    /api/content/export   - JSON olarak indir
POST   /api/content/import   - JSON'dan yükle
```
