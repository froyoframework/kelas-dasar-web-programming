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

- Ketika me-*render* sebuah halaman HTML, browser akan membaca elemen-elemen serta *tag* HTML yang didefinisikan dalam file tersebut
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

# Struktur File HTML

- Sebuah File HTML dinyatakan dengan tag <html>, karena ada *markup language* lain seperti XML
- Biasanya, file dibagi menjadi 2 bagian, <head> dan <body>
- <head> berisi metadata dari file HTML, bisa berisi:
    + judul halaman <title>
    + style CSS <style>
    + script JS <script>
    + dll.
- <body> mendefinisikan isi sebenarnya dari dokumen, di sinilah semua elemen dalam halaman didefinisikan

---

# Struktur File HTML

```
<html>
<head>
    <title>Judul Halaman</title>
</head>

<body>
    Isi halaman
</body>

</html>
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

- Bisa berupa list berurut <ol> atau tak berurut <ul>
- Setiap elemen dalam list menggunakan tag <li>

```
<ol>
    <li>elemen no 1</li>
    <li>elemen no 2</li>
    <li>elemen no 3</li>
</ol>
<ul>
    <li>elemen tak berurut</li>
    <li>elemen tak berurut</li>
    <li>elemen tak berurut</li>
</ul>
```

---

# Form

- Elemen yang digunakan untuk mengambil input dari user, baik berupa text, pilihan, berikut tombol submit

```
<form>
    Nama Lengkap: <input type="text" name="fullName">
    Jenis Kelamin:  <select name="gender">
                        <option value="pria">Pria</option>
                        <option value="wanita">Wanita</option>
                    </select>
    <input type="submit" value="Submit">
</form>
```

---

# Tabel

- Sesuai namanya, bisa digunakan untuk membuat tabel
- Bisa juga digunakan untuk membuat layout, meski sekarang tidak dianjurkan
- Tagnya adalah <table>, setiap baris dibuat dengan <tr> dan kolom dengan <td>

```
<table>
    <tr>
        <td>Nama Depan</td>
        <td>Nama Belakang</td>
        <td>Gol</td>
    </tr>
    <tr>
        <td>Lionel</td>
        <td>Messi</td>
        <td>500</td>
    </tr>
</table>

```

---

# Membagi Halaman ke dalam Bagian

- Sebuah halaman bisa dibagi ke dalam beberapa bagian, untuk kepentingan layout dan pengelompokan konten
- Kita bisa menggunakan tag <div>
- Selain itu, ada juga tag lain yang memiliki arti khusus sesuai penggunannya:
    + <nav> untuk elemen navigasi
    + <article> untuk keseluruhan artikel
    + <section> untuk sebuah bagian dalam artikel
    + <figure> untuk gambar dalam artikel
- Biasanya, <div> digunakan untuk menyatakan sebuah bagian halaman yang memiliki *style* CSS tersendiri
- Tag lain bisa digunakan untuk membagi halaman secara lebih semantik

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
