# Kursus Coding Froyo Framework
## Week 5: JavaScript Lanjutan

---

# Review

---

# String

---

# Array

---

# Object

---

# API

Application Programming Interface adalah antar muka (UI) yang disediakan oleh penyedia layanan agar aplikasi pihak ketiga dapat berinteraksi dengan data di dalamnya.

---

# Menghubungkan dengan API Instagram

Untuk bisa mengakses data Instagram, kita memerlukan `access_token`.

--

## Jalankan Mekanisme OAuth

1. Akses url https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=token
2. Dapatkan `access_token` dari url ini http://your-redirect-uri#access_token=ACCESS-TOKEN 

---

# Membaca Data dari API Instagram

Kita akan menggunakan jQuery untuk memudahkan akses data Instagram.

---

# Memfilter Berdasarkan Hashtag

```
$.get("https://api.instagram.com/v1/tags/{tag-name}/media/recent?access_token=ACCESS-TOKEN", function(res) {
  // lakukan parsing terhadap json data di sini
});
```
