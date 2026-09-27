# HASALMBM'27 Web Sitesi

Hasal Anadolu Lisesi Model Birleşmiş Milletler (MBM) kulübünün resmi web sitesi.
Konferans: **6-7-8 Şubat 2027** — Medeniyet Üniversitesi Kuzey Kampüsü

## Sayfalar

| Dosya | İçerik |
|---|---|
| `index.html` | Ana sayfa — hero, geri sayım, başkanlık mektupları |
| `komiteler.html` | 9 komitenin tanıtım kartları |
| `komite-1.html` … `komite-9.html` | Komite detay sayfaları |
| `ekip.html` | 14 kişilik ekip kartları |
| `sss.html` | Sıkça sorulan sorular (akordiyon) |
| `takvim.html` | Konferans takvimi |
| `basvuru.html` | Komite başvuru formları (Google Forms) |
| `iletisim.html` | İletişim bilgileri |

## Klasörler

- `css/style.css` — tüm sayfalarda ortak stil
- `js/script.js` — geri sayım, mobil menü, SSS akordiyonu
- `images/` — logo, komite afişleri, ekip fotoğrafları

## Çalıştırma

Site tamamen statiktir; `index.html` dosyasına çift tıklayarak çalışır.
Yerel sunucu ile açmak isterseniz:

```bash
python -m http.server 8000
```

Ardından tarayıcıdan `http://localhost:8000` adresini açın.

## Güncelleme İpuçları

- **Ekip fotoğrafları:** Yeni fotoğrafı `images/ekip-01.png` … `ekip-14.png` adıyla kaydırın, site otomatik uyum sağlar.
- **Hero görseli:** Yeni görseli `images/hero-bg.jpeg` adıyla klasöre bırakın veya `css/style.css` içindeki `.hero` / `.page-hero` kurallarındaki dosya adını değiştirin.
- **Geri sayım:** `js/script.js` içindeki hedef tarih (`2027-02-06T09:00:00+03:00`) değiştirilebilir.
- **Görsel kimlik:** Siyah zemin, bordo (#340000) ve gri (#d9d9d9) renkleri `css/style.css` başındaki CSS değişkenlerinde tanımlıdır.

## İletişim

- E-posta: hasalmbm@gmail.com
- Instagram: [@hasalmbm](https://www.instagram.com/hasalmbm/)
- TikTok: [@hasalmbm](https://www.tiktok.com/@hasalmbm)
