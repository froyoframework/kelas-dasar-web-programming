# Kursus Coding Froyo Framework
## Week 5: JavaScript Lanjutan

---

# Review

- Progress project
- Konsep dasar JavaScript:
  + Variabel
  + Operasi
  + Kondisional
  + Loop
  + Function
- JavaScript dan HTML
  + Mengakses dan mengubah isi elemen HTML

---

# String

- Tipe data yang berisi sekumpulan huruf, bisa berupa kata atau kalimat
- Kita bisa mengetahui panjang string dengan menggunakan property `length`

```
var namaSaya = "Michael Jordan"
var jumlahKarakter = namaSaya.length;
console.log(jumlahKarakter);
```

---

# Method String

- String memiliki beberapa fungsi bawaan yang bisa kita gunakan untuk memanipulasi string tersebut
- Berikut ini beberapa yang sering digunakan

- `concat()` -> menggabungkan 2 string
- `split()` -> memisahkan 1 string menjadi 2 atau lebih substring
- `slice()` -> mengabil bagian dari 1 string dan mengembalikan string baru
- `substr()` -> mengambil substring dengan menentukan posisi dan jumlah string yang ingin diambil
- `trim()` -> menghilangkan whitespace dari kedua ujung string
- `toLoweCase()`
- `toUpperCase()`

---

# Array

- Array adalah sebuah variabel yang menyimpan beberapa nilai dalam 1 tempat
- Bisa dibayangkan sebagai sebuah himpunan
- Memudahkan kita menyimpan beberapa nilai berbeda

```
var beberapaNama = ["Ahmad", "Gino", "Wati"];
document.getElementById("tempat-nama").innerHTML = beberapaNama;
```

---

# Mengakses Elemen Array

- Sebuah array terdiri dari 1 atau lebih elemen
- Masing-masing elemen ini diberi indeks ke-n dalam array tersebut
- Elemen pertama adalah elemen ke-0
- Untuk mengakses elemen, kita gunakan sintaks berikut:

```
// mengakses elemen ke-0 dari array beberapaNama
beberapaNama[0];

// mengakses elemen ke-7 dari array beberapaNama
beberapaNama[6];

// mengubah elemen ke-2 menjadi "Tina"
beberapaNama[1] = "Tina";

// cek perubahan anggota array
console.log(beberapaNama);
```

---

# Property Array

- Untuk menguji ukuran array (berapa banyak elemen di dalam array), kita bisa menggunakan `length()`

```
beberapaNama.length;
```

- Untuk menambahkan elemen baru ke dalam array, kita bisa menggunakan 'push()'

```
// Menambahkan nama baru ke dalam array beberapaNama
beberapaNama.push ("Tania")
```

--- 

# Fungsi Bawaan Array

- `join()` -> menggabungkan semua anggota array ke dalam 1 string
- `pop()` -> menghilangkan elemen terakhir dari array
- `push()` -> menambahkan elemen baru ke dalam array
- `shift()` -> mirip dengan `pop()` tapi yang diambil adalah elemen pertama
- `splice()` -> menambahkan beberapa elemen ke dalam array
- `sort()` -> menyusun elemen-elemen array sesuai abjad
- `reverse()` -> membalik urutan elemen dalam orrau

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
