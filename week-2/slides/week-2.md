# Kursus Coding Froyo Framework
## Week 2: HTML

---

# Pengenalan HTML

- HTML, singkatan dari HyperText Markup Language
- *Markup language* standar untuk membuat halaman web
- Web browser bisa membaca file HTML dan me-*render*-nya menjadi halaman web
- HTML mendeskripsikan struktur sebuah website secara semantik, karena itu disebut sebagai *markup language* bukan *programming language*

---

# Pengenalan HTML

- Elemen-elemen HTML adalah penyusun dari sebuah halaman HTML
- HTML memungkinkan gambar dan objek lainnya untuk dimasukkan ke dalam halaman web dan bisa digunakan untuk membuat form yang interaktif
- HTML juga mampu menciptakan dokumen yang terstruktur dengan memberikan elemen struktural seperti *heading*, paragraf, list, link, quote, serta yang lain
- Elemen HTML ditandai oleh tag <>
- Tag tidak ditampilkan browser, tapi digunakan untuk menginterpretasikan isi dari sebuah halaman web

---

# Pengenalan HTML

- Sebuah script JS dan CSS bisa di-embed di dalam file HTML
- Ini bisa dilakukan untuk mendefinisikan tampilan dan layout teks dan elemen lainnya
- Praktek seperti ini lebih dianjurkan dibandingkan melakukan *styling* lewat tag HTML

---

# HTML dan Browser

- Ketika mer-*render* sebuah halaman HTML, browser akan membaca elemen-elemen serta *tag* HTML yang didefinisikan dalam file tersebut
- Dari situ, browser akan menampilkan halaman web, sesuai dengan struktur yang didefinisikan oleh file HTML
- Dengan demikian, untuk bisa menampilkan halaman web dengan benar, maka struktur halamannya harus benar dulu
- Kita bisa mulai dengan mendaftar dan mendefinisikan elemen-elemen apa saja yang harus ada di file HTML

---

# Elemen HTML

- Elemen HTML adalah sebuah objek yang didefinisikan menggunakan *tag* HTML
- Elemen-elemen ini bisa berupa:
    + text: heading, paragraf, list
    + media: gambar, video, audio
    + layout: div, section, dsb.
    + form: button, form teks, menu dropdown, dsb.
- Secara otomatis, browser akan memberikan tempat bagi elemen-elemen ini di halaman web jika tag yang berkaitan ditemukan
- *Default*-nya, elemen yang akan di-*render* secara berurutan oleh browser, dan ditampilkan dari atas ke bawah

---

# HTML5

- Versi terakhir dari HTML ini membawa beberapa *tag* yang bisa digunakan untuk membuat web yang lebih semantik, artinya elemen-elemen yang ada, jelas kedudukannya dalam layout
- Contoh:
    + footer
    + figcaption
    + section
    + dsb
- Selain itu, ia juga menyediakan beberapa elemen yang memungkinkan penggunaan media yang lebih beragam seperti canvas untuk animasi, webcam, audio, dsb

---

# Penulisan HTML

- Secara umum, sebuah elemen HTML ditulis sebagai berikut:

```
<tag attribut="isi atribut">isiElemen</tag>
```

- Sebuah tag ditulis diawali dengan <tag> dan diakhiri dengan </tag>
- Sebuah tag bisa berisi atribut tertentu
- Isi sebuah elemen ditulis di antara <tag> dan </tag>

Contoh:

```
<a href="www.google.com">Link ke Google</a>
```

---

# Heading dan Paragraf

- Menyediakan tingkat heading dari 1-6
- Sebuah paragraf bisa ditulis sebanyak-banyaknya baru kemudian ditutup

```
<h1>Heading 1</h1>
<h2>Heading 1</h2>
<h3>Heading 1</h3>
<h4>Heading 1</h4>
<h5>Heading 1</h5>
<h6>Heading 1</h6>
<p>Ini adalah kalimat awal sebuah paragraf. </p>
```

---

# Link

- tagnya adalah <a> 
- atributnya berupa link yang dituju

```
<a href = "www.goal.com">Goal.com</a>
```

---

# Gambar

- tagnya adalah <img>
- atributnya adalah alamat gambar tersebut, caption dan deskripsi gambar (opsional)

```
<img src="pohon.png" />
```

---

# List

---

# Form

---

# Tabel

---

# Membagi Halaman ke dalam Bagian

---

# Praktek

---

# Membuat Sitemap Website Project

---

# Meninjau Referensi Desain Website Project

---

# Membuat Struktur Halaman Home

---

# Membuat Judul

---

# Membuat Menu

---

# Menampilkan Gambar

---

# Menampilkan Cuplikan Tulisan

---

# Membuat Footer

---