# Kursus Coding Froyo Framework
## Week 3: CSS Lanjutan

---

# Box Model

- Secara default, ini adalah cara yang diambil oleh browser untuk me-render tampilan sebuah halaman website
- Semua elemen akan dianggap sebagai sebuah elemen box (kotak)
- Model ini mendeskripsikan ukuran tempat yang digunakan oleh sebuah elemen
- Dalam 1 box, ada 4 sisi yang menentukan ukuran box:
    + margin
    + border
    + padding
    + content
- Untuk bisa memahami layout CSS dengan baik, kita perlu memahami model ini

---

# Box Model

![box-model](https://mdn.mozillademos.org/files/8685/boxmodel-(3).png)

---

# Logika CSS: Content

- Content adalah ukuran sebenarnya milik sebuah elemen
- Meski isinya bukan kotak, ia akan tetap di-render sebagai kotak
- Saat `box-sizing` di-set default, maka untuk mengontrol ukuran content ini, parameter-parameter yang digunakan adalah:
    + `width`
    + `min-width`
    + `max-width`
    + `height`
    + `min-height`
    + `max-height`

---

# Logika CSS: Padding

- Padding adalah ukuran jarak antara content dengan elemen yang menampungnya
- Ia bisa dibayangkan sebagai jarak antara sisi padding dengan sisi content
- Ketika ukuran ini diubah, ia akan nampak mengubah ukuran dari content
- Bila sebuah content memiliki background warna atau gambar, ia akan mengikuti padding juga
- Parameter pengatur padding adalah:
    + `padding-right`
    + `padding-left`
    + `padding-top`
    + `padding-bottom`

---

# Logika CSS: Border

- Border adalah ukuran garis tepi sebuah elemen
- Ia opsional, bisa ada atau tidak
- Jika ada, maka ia akan menambahkan ukuran dari sebuah content
- Parameter pengaturnya adalah:
    + `border-width`
- Untuk menampilkan border, perlu diatur juga `border-style`-nya
    + contoh: `border-style:solid`

---

# Logika CSS: Margin

- Margin adalah jarak antara 1 elemen dengan elemen di dekatnya
- Ia memperluas area dari border ke area kosong yang memisahkan satu elemen dengan tetangganya
- Margin tidak akan memperbesar ukuran yang nampak dari sebuah elemen, tapi jadi mengatur jarak dan posisinya, relatif terhadap elemen tetangganya
- Yang berubah ukurannya, adalah elemen kontainernya
- Parameter pengaturnya adalah:
    + `margin-top`
    + `margin-bottom`
    + `margin-left`
    + `margin-right`

---

# Contoh Kasus:

- **Mendekatkan 2 elemen**
- Kita bisa menggunakan margin untuk melakukan ini
- Margin di sisi mana yang digunakan, bergantung dari elemen mana yang akan diubah CSS-nya

---

# Contoh Kasus:

- **Mengatur posisi elemen** 
- Kita bisa menggunakan padding di elemen div kontainer untuk mengatur posisi elemen di dalamnya
- Sebagai tambahan, kita bisa juga mengubah margin milik elemen tersebut

---

# Logika CSS: Display

- `inline`:
    + Semua elemen ditampilkan bersebelahan, dalam 1 baris
    + Tidak memperdulikan margin dan padding di sisi atas dan bawah
    + Tidak bisa mengatur properti `width` dan `height`
- `block`
    + Semua elemen ditampilkan vertikal, dari atas ke bawah, karena memaksa untuk mengganti baris
    + Semua margin dan padding akan diperhitungkan
- `inline-block`
    + Memungkinkan semua elemen untuk bersebelahan
    + Memperdulikan margin dan padding di sisi atas dan bawah
    + Bisa mengatur properti `width` dan `height`

---

# Logika CSS: Display

![perbandingan-display](http://i.stack.imgur.com/mGTYI.png)

- Properti ini diatur di dalam elemen yang ingin kita ubah posisinya

---

# Contoh Kasus: Mengatur Elemen agar Bersebelahan

- Apabila kita memiliki 2 `div` yang ingin kita buat bersebelahan, maka keduanya perlu diatur agar properti `display`-nya adalah `inline` atau `inline-block`
- Defaultnya, ini bernilai `block` sehingga posisinya atas-bawah
- Mana properti `display` yang dipilih, bergantung dari konten `div` tersebut

---

# Logika CSS: Float

- `float` mengatur apakah sebuah elemen harus ditarik dari alur render normal (vertikal, dari atas-bawah) dan diposisikan di kiri atau kanan, serta elemen lain diposisikan mengelilinginya
- Menggunakan `float` di sebuah elemen juga otomatis akan mengubah posisi elemen di sebelahnya
- Untuk membuat agar elemen di sebelahnya tidak terkena efek dari `float`, maka kita bisa mengaktifkan `clear` di elemen tersebut, sehingga ia akan ditampilkan di bawah elemen yang memiliki properti `float`

---

# Contoh Kasus: Membuat Layout dengan Float

- Kita bisa menggunakan `float` untuk membuat layout
- Elemen yang diposisikan di paling kiri, bisa diberikan `float: left`
- Elemen selanjutnya bisa diberikan properti serupa
- Elemen yang tidak ingin diletakkan di sebelahnya, bisa diberikan `clear: left`

---

# Logika CSS: Position

- Properti yang mengatur posisi dari sebuah elemen, tanpa menggunakan `margin` ataupun `float`, tapi diatur koordinatnya di halaman
- CSS memiliki 2 tipe `position`, relative dan absolute
- Relative, artinya posisi elemen tersebut akan dihitung dengan mengacu pada posisi seharusnya, apabila properti `position` tidak diubah
- Absolute, artinya posisi elemen tersebut dihitung relatif terhadap elemen kontainernya dan dianggap tidak mengikuti alur elemen di dokumen

---

# Font

- CSS bisa digunakan untuk mengatur font yang digunakan, serta properti yang berkaitan dengannya
- Beberapa hal yang bisa diatur dengan CSS:
    + `font-family`: mengatur jenis/nama font
    + `font-style`: mengatur tipe font: normal atau italic
    + `font-size`: mengatur ukuran font. bila menggunakan em, 1 em = 16 px
    + `font-weight`: mengatur apakah font bold atau normal

---

# Contoh Styling Font dengan CSS

```
p {
    font-family: "Georgia", Serif;
    font-weight: 700;
    font-size: 1.5em;
}
```

- Kita bisa mendefinisikan font yang digunakan dengan memanggil nama font (`"Georgia"`), atau tipenya (`Serif`)
- `font-weight` juga bisa didefinisikan dengan angka atau tipe, seperti: `bold`

---

# Menggunakan Font dari Google Fonts

- Google memiliki layanan penyedia font gratis dan legal yang bisa kita gunakan langsung di project kita
- Kita bisa langsung memilih dan memanggil font tersebut di file CSS kita

---

# Menggunakan Font dari Google Fonts

```
<link href='https://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
<style type="text/css">
p {
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 1.5em;
}
</style>
```

- Ketika kita hanya mengimpor font dengan `font-weight` tertentu, hanya tipe tersebut yang bisa digunakan
- Karena di contoh hanya ada style 300, 400 dan 700, maka hanya ketiga tipe font tersebut yang bisa digunakan

---

# Selector Khusus

---

# Transitions

---

# Responsive Design dengan PureCSS

---

# Flexbox Model

---

# Praktek

---

# Referensi Desain Halaman About

---

# Referensi Desain Halaman Contact

---