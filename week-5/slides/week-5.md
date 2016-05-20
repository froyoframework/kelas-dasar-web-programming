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

# Mengakses Elemen Array dengan Loop For

- Menggunakan loop for, kita bisa dengan mudah mengakses elemen array tanpa perlu memanggilnya satu persatu
- Kita gunakan 1 variabel untuk menunjuk elemen array

```
var namaHari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
for (var i = 0; i < 10; i++) {
    console.log(namaHari[i]);
}
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

- Dalam pemrograman, object didefinisikan sebagai sebuah entitas yang memiliki tipe, property dan method (fungsi) tersendiri
- Sebagai permisalan: jika manusia adalah object, maka ia memiliki:
    - tipe: manusia, 
    - property: mata, tangan, kaki, dsb.
    - method: jalan, berenang, lompat, dsb.
- Bandingkan dengan kura-kura, jika ia adalah object maka:
    + tipe: reptil
    + property: tempurung, kepala, kaki, dsb.
    + method: berenang, berjalan, sembunyi, dsb.

---

# Object dan Property

- Dalam JS, object bisa memiliki property berupa variabel, serta function (method)
- Property sebuah object bisa diakses seperti ini:

```
objectName.propertyName;
```

---

# Membuat Object dan Property

- Contoh membuat Object dan mengakses propertyinya

```
var kopiku = new Object();
kopiku.jenis = "Arabica";
kopiku.ukuran = "kecil";
kopiku.harga = "12000";
```
- Cara berikut juga valid
```
kopiku["jenis"] = "Arabica";
kopiku["ukuran"] = "kecil";
kopiku["harga"] = "12000";
```

---

# Membuat Object dengan Initializer

- Cara berikut, kita bisa membuat object dengan object initializer, fitur bawaan JS untuk membuat object yang sintaksnya mirip dengan C++

```
var obj = {
    property_1: value_1,
    property_2: value_2,
    //...,
    property_n: value_n
};
```
- Contoh:

```
var kopiku = {
    jenis: "Arabica",
    ukuran: "kecil",
    harga: 12000
};
```

---

# Mendefinisikan Property

- Apabila sebuah object telah dibuat, maka kita bisa mengakses dan mendefinisikan propertynya, ataupun membuat property baru

```
kopiku.jenis = "Robusta" //mengganti jenis kopiku
kopiku.suhu = "panas" //menambah property baru
```

---

# Mendefinisikan Method

- Pada dasarnya, membuat method bisa diartikan membuat fungsi yang kita definisikan sebagai milik sebuah object
- Nantinya, method ini akan dipanggil beserta dengan nama object pemiliknya

```
var myObj = {
  myMethod: function(params) {
    // isi method
  }
};
```

---

# Mendefinisikan Method

- Contoh:

```
var kopiku = {
    // ditambahkan dari property sebelumnya
    ubahHarga: function(hargaBaru) {
        this.harga = hargaBaru;
    }
}
```

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
