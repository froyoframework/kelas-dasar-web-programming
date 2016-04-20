# Week 1:

## Pengenalan Pemrograman dan Computational Thinking

### Kelas Coding Froyo Framework

---

# Apa itu programming?

---

# Computational Thinking

--

- Memecah masalah yang besar, yang bisa dipecahkan dalam berbagai cara
- Menjadi masalah-masalah yang lebih kecil, yang dipecahkan dengan cara yang spesifik
- Ini adalah salah satu metode pemecahan masalah 

--

Melibatkan hal-hal berikut:

- Merumuskan masalah dengan cara yang memungkinkan pemecahan masalah dengan komputer
- Analisa dan penyusunan data secara logis
- Mewakili data melalui abstraksi seperti model dan simulasi
- Mengotomasi solusi melalui pemikiran secara algoritmis (sekumpulan langkah berurutan)
- Identifikasi, analisa dan implementasi solusi yang memungkinkan dengan tujuan mencapai kombinasi langkah dan penggunaan sumber daya yang paling efektif dan efisien
- Menggeneralisir dan memindahkan proses pemecahan masalah ini ke masalah yang lebih luas

---

## Computational Thinking

Contoh

--

Bagaimana membuat sistem pembayaran tol non-tunai?

--

- Uang dalam bentuk kartu
- Kartu mengandung sejumlah uang
- Untuk membayar, kartu dibaca oleh alat tertentu
- Ketika dibaca, saldo dalam kartu diketahui
    + Jika saldo cukup untuk membayar, maka:
        * Saldo di kartu akan dikurangi
        * Pintu tol akan terbuka
    + Jika saldo kurang, maka:
        * Saldo tidak akan berkurang
        * Pintu tol tetap tertutup

--

Uang dalam bentuk kartu

![e-money 1](materi/slide-images/compThinking0.png)

--

Kartu mengandung sejumlah uang

![e-money 2](materi/slide-images/compThinking1.png)

--

Untuk membayar, kartu dibaca oleh alat tertentu

![e-money 3](materi/slide-images/compThinking2.png)

--

Ketika dibaca, saldo dalam kartu diketahui ...

![e-money 4](materi/slide-images/compThinking3.png)

--

- Pemecahan masalah dilakukan dengan memecah permasalahan tadi menjadi langkah-langkah yang lebih kecil
- Langkah-langkah ini kemudian akan diimplementasikan melalui pemrograman
- Langkah-langkah tersebut bisa juga kemudian dipecahkan menjadi bagian-bagian yang lebih kecil lagi pada saat implementasi
- Secara umum, contoh bisa diaplikasikan untuk hal lain yang berhubungan dengan penggunaan sistem pembayaran elektronik

---

## Computational Thinking 

Latihan

--

- Aplikasikan computational thinking untuk memecahkan masalah berikut:

  1. Mengurutkan pemain di sebuah klub sepakbola dalam sebuah daftar
  2. Memilih barang di toko online agar barang datang secepat mungkin

- Gambarkan diagram solusi Anda pada selembar kertas, lalu presentasikan

---

# Apa itu programming?

--

- Sebuah kegiatan mengimplementasikan algoritma ke dalam perintah-perintah dan bentuk yang dimengerti oleh komputer
- Perintah-perintah ini nampak sebagai kode
    + Oleh karena itu, lazim juga disebut *coding*
- Pemrograman ini bisa dilakukan dengan cara:
    + Mengetikkan langsung perintah-perintah dalam bahasa manusia yang nantinya akan diterjemahkan oleh mesin (komputer)
    + Tergantung bahasa, bisa juga dilakukan secara visual dengan menghubungkan *node-node* tertentu

---

# Alur Programming

- Merumuskan masalah
- Menjabarkan masalah ke dalam langkah-langkah yang lebih kecil
- Menentukan algoritma untuk memecahkan langkah-langkah tersebut
- Mengimplementasikan algoritma dengan programming
- Mengevaluasi hasil programming

---

# Mengapa Melakukan Programming?

--

- Melatih kemampuan menyelesaikan masalah
- Memungkinkan untuk memanfaatkan komputer lebih dalam, sebagai alat memecahkan masalah
    + Aplikasi
    + Web site
    + Pengolah data
    + Robot
    + etc.
- *Barrier* untuk mempelajari programming sekarang sudah cukup rendah
- Banyaknya perangkat digital yang *powerful* 

---

# Pertanyaan Umum

- Apakah programming susah?
- Apakah programming hanya untuk mahasiswa/lulusan IT?
- Apakah programming hanya untuk yang pintar?

---

# Kelas Coding Froyo Framework

---

# Materi

- Project-based class
- Mempelajari programming dengan membuat sebuah website sederhana
    - HTML
    - CSS
    - JS
- Mengaplikasikan computational thinking untuk menyelesaikan project
- Menggunakan *tool* programming yang lazim digunakan
- Mengupload website kita ke internet

---

# Project

Membuat website yang menampilkan foto dari Instagram

--

![Website Project](materi/slide-images/website-project.png)

--

# Project

- Kita akan mencicil pembuatannya, dari langkah-langkah yang paling kecil
- Semua akan membuat hal yang sama, tapi bebas untuk dikembangkan sesuai kebutuhan
- Bisa digunakan untuk website:
    + Portfolio
    + Galeri foto
    + Profil pribadi
    + dsb.

--

# Project

- Kita akan fokus pada pemrogramannya
- Teori akan dijelaskan di awal dan dilanjutkan dengan praktek *hands-on*
- Desain hanya untuk referensi
- Di pertemuan terakhir, semua akan menunjukkan project masing-masing

--

# Mengapa Dimulai dengan Web

- Paling lazim ditemui saat ini
- *Barrier* pemrogramannya rendah
- Masih sangat dalam untuk dieksplorasi lebih lanjut
- Perkembangannya sangat pesat

---

# Mengapa JavaScript

- Bahasa yang dipahami oleh *web browser*
- Mudah dipahami oleh pemula
- Perkembangannya pesat sekali, tidak hanya untuk website, tapi juga untuk:
    + mobile app
    + hardware/elektronik
    + game
    + visual interaktif
    + animasi
    + etc

---

# Pengenalan Website

---

# Website

- Sebuah file HTML
    + bisa juga mengandung file CSS dan JS
- Diolah dan ditampilkan oleh browser
- Berisi link-link ke halaman lain
- Satu website berisi sebuah struktur yang menghubungkan antara halaman-halaman ini
- Link di 1 halaman web juga bisa menghubungkan ke halaman di website lain

---

# Struktur Website: Sitemap

- Menggambarkan dengan jelas, struktur dari sebuah website
    + daftar halaman-halaman
    + hubungan antar halaman
    + membantu user dalam melakukan navigasi di dalam website
- Langkah computational thinking pertama kita dalam membuat website

---

# Sitemap

![contoh sitemap](http://technori.com/wp-content/uploads/Screen-Shot-2013-02-18-at-12.38.26-PM.png)

---

# Membuat Sitemap

- Sebuah sitemap bisa dibuat dengan mendaftarkan dulu fitur-fitur apa saja yang diinginkan dalam sebuah website
- Lalu dibuat bagaimana hubungan antar fitur-fitur ini
    + Menggunakan metode mindmapping bisa membantu
- Struktur formalnya kemudian bisa dibuat dengan software untuk membuat diagram

---

# Website

- Sebuah website bisa dibuat di komputer sendiri tanpa diletakkan di sebuah server di internet
    + Disebut sebagai local server
- Bisa juga diupload di internet
    + Disebut juga "live" website

---

# File Penyusun Halaman Web

- HTML
    + mendefinisikan struktur sebuah halaman web
- CSS
    + mendefinisikan tampilan visual 
- JS
    + mengimplementasikan interaksi dinamis di halaman web

---

![file web](http://blog.teamtreehouse.com/wp-content/uploads/2014/11/progressive-enhancement.png)

---

# File Penyusun Halaman Web

![analogi](https://s3.amazonaws.com/media-p.slid.es/uploads/abaker/images/317610/userinterface-html5-css3-javascript.jpg)

---

# Web Development

- Kegiatan melakukan programming atas keseluruhan komponen penyusun web
    + Back-end (database dan server)
    + Front-end (tampilan halaman web di sisi user)
- Fokus kelas ini pada front-end web development

---

# Front-end Web Development

- Kegiatannya banyak menggunakan HTML, CSS dan JS
- Menggunakan kombinasi ketiganya untuk membuat sebuah halaman web yang diinginkan
- Cukup menggunakan:
    + text editor untuk mengetik kode dan 
    + browser untuk menguji halaman

---

## Praktek Membuat Halaman Web Sederhana

---

![Halaman Web](/materi/slide-images/web-pohon.png)

---

## Struktur Dokumen HTML

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>

  <body>
    ...
  </body>
</html>
```

---

## Memberi Judul Pada Browser

```html
<head>
  <title>Judul Halaman</title>
</head>
```

---

## Isi Dokumen HTML

```html
<body>
  <h1>Sebuah Cerita Tentang Pohon</h1>

  <p>Ini adalah paragraf</p>
</body>
```

---

## Menampilkan Image Resource

```html
<body>
  <img src="/path/to/resource">
</body>
```

---

## Menambahkan Interaksi Berupa Tombol

```html
<body>
  <button>Tekan untuk Menyumbang</button>
</body>
```

---

## Mempercantik tampilan dengan CSS

```css
<style>
  selector-name {
    property: value
  }
</style>
```

---

## Menambah interaksi dengan javascript

```html
<script>
  // javascript code here
</script>
```

---

# Alur Website Lokal

- Untuk sebuah website lokal, kita cukup membuka saja file HTML di browser kita
- File-file CSS dan JS yang berkaitan akan diolah juga

---

# Alur Website Live

- Seorang user akan mengakses resource tertentu di server yang dapat ditampilkan di halaman web
- Server kemudian akan menyajikan resource-resource tersebut ke user (klien)
- Browser di klien akan mengolah file resource-resource tersebut dan menampilkannya untuk dibaca oleh user yang bisa juga berinteraksi dengannya

--

# HTTP Protocol

![alur website](materi/slide-images/HTTP.png)
