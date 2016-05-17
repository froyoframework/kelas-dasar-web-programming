# Kursus Coding Froyo Framework
## Week 4: JavaScript

---

# Overview JavaScript

- Bahasa pemrograman client-side, satu-satunya bahasa yang dimengerti browser
- HTML dan CSS tidak disebut bahasa pemrograman, karena tidak memiliki kemampuan mengolah logika, berbeda dengan JS
- Penulisan JS di dalam HTML, mirip dengan CSS
  + bisa dibuat eksternal
  + bisa ditulis di dalam file HTML

---

# Overview JavaScript

- Perkembangannya pesat sekali beberapa tahun belakangan
- Ada beragam library yang keluar setiap hari
- Penggunaannya tidak terbatas hanya untuk website, bisa juga untuk membuat animasi, game, pemrograman robot/hardware, pemrograman server, dsb
- Dengan mempelajari JavaScript, akan terbuka juga arah untuk pemrograman yang lain

---

# JavaScript dan jQuery

- Beberapa mungkin pernah mendengar jQuery
- Library JavaScript yang memungkinkan penulisan JavaScript dengan lebih singkat, berguna ketika kita ingin membuat sesuatu lebih cepat
- Karena kelas ini mengajarkan dasar pemrograman, kita tidak akan menyentuh jQuery, hanya fokus pada JavaScript dasar (tanpa library)

---

# Menggunakan JavaScript

- Dengan Console
- Menulis langsung di dalam file HTML
- Menulis file baru dan direferensikan di dalam HTML

---

# Hello World JS

- Menampilkan pesan "Hello World"
- Hasilnya bisa dilihat di dalam Console

```
console.log("Hello, World!");
```

- 1 baris perintah disebut pernyataan dan ditutup dengan titik koma (;)
- Dalam program tadi, kita memanggil fungsi `console.log()` bawaan JS dan menampilkan kalimat ("Hello, World")
- Karena "Hello, World" berupa kalimat, maka ia perlu diletakkan di dalam tanda kutip

---

# Menggunakan JavaScript: Console

- Tempat untuk mencoba-coba kode JavaScript.
- Kita akan menulis langsung di dalam console dan melihat hasilnya secara instan
- Console bisa ditampilkan sebagaimana melakukan inspect di dalam Chrome

---

# Menggunakan JavaScript: di dalam file HTML

- Script bisa ditaro di <head> atau di ujung <body>

```
<head>
  <script type="text/javascript">
    console.log("Hello, World");
  </script>
</head>
```

---

# Menggunakan JavaScript: di luar file HTML

- misal file JS disimpan sebagai `scriptSaya.js`

```
//scriptSaya.js
console.log("Hello, World");

<!-- latihanJS.HTML -->
<head>
  <script type="text/javascript" src="scriptSaya.js"></script>
</head>

```

---

# Operasi Aritmatika

```
1 + 2 // penjumlahan
2 - 2 // pengurangan
3 * 10 // perkalian
9 / 3 // pembagian
12 % 3 // sisa hasil bagi (modulus)
((12 - 3) / (3 + 5)) * 5 // kombinasi
```

---

# Variabel

- Variabel adalah tempat untuk menyimpan data sementara di memori komputer
- Sesuai namanya, isi variabel ini bisa berubah-ubah
- Yang kita panggil adalah nama tempatnya, bukan isinya

--

## Deklarasi dan Penggunaan Variabel

- Kita punya variabel a, kita panggil namanya, lalu isinya yang digunakan dalam operasi
- Ketika kita ubah isinya, maka otomatis hasil dari variabel `result` akan berubah juga jika perhitungan kita ulang

```
var a = 2;
var b = 7;
var result = (a + b) - a;

console.log(result);
```

--

## Penamaan Variabel

- Variabel bisa dinamakan bebas, aturannya hanya:
  + tidak dimulai dengan angka
  + tidak menggunakan tanda baca selain _ (underscore)
- Berikan nama variabel sejelas mungkin, sehingga kalau dibaca orang lain, sudah cukup jelas

---

# Comparison Operator

- Operasi ini membandingkan 2 data
- Hasilnya hanya 2 jenis logika kebenaran: true atau false

```
1 === 1; // true
1 !== 0; // true
2 < 2; // false
2 <= 2; // true
3 > 3; // false
3 >= 3; // true
```

---

# Logical Operator

- Operasi ini membandingkan 2 jenis logika kebenaran
- Angka di luar 0, selalu dianggap true

```
true && false // AND. always return false, unless both of operand are true
true || false // OR. alwyas return true, unless both of operand are false
!true // NOT. return the other.
```

---

# Kondisi

- Memberikan pilihan untuk jalannya program
- Kita bisa menggunakan operasi logika atau perbandingan untuk menentukan jalannya program

--

## Menggunakan If

```
var a = 3;
var b = 6;

if(a % 2) {
  console.log("genap");
} else {
  console.log("ganjil");
}
```

--

## Contoh Multiple If

```
var a = 5;

if(a < 4) {
  console.log("lebih besar"); 
} else if(a > 4 && a < 10) {
  console.log("di antara 4 dan 10"); 
} else {
  console.log("lebih kecil");
}
```

--

## Menggunakan Switch

```
var a = 10;
switch(a) {
  case 10:
    console.log("benar ini adalah 10");
    break;
  case 5:
    console.log("benar ini adalah 5");
    break;
  default:
    console.log("Selain 5 dan 10");
}
```

---

# Perulangan (Loop)

- Membuat alur program menjadi berulang
- Kita bisa mengulang sebuah pernyataan berkali-kali, tanpa perlu menulisnya berulang

--

## Menggunakan For

```
var initialData = 0;
var condition = 15;

for(var x = initialData; x < condition; x++) {
  console.log(x);
}
```

--

## Menggunakan While

```
var data = 0;
var value = 0;
while (data < 15) {
  data++;
  value += data;
}
```

---

# Kombinasikan Kondisi dan Perulangan

Membuat program FizzBuzz

--

## FizzBuzz

```
for(var i = 0; i < 100; i++) {
  if(i % 15 === 0) {
    console.log("FizzBuzz");
  } else if(i % 3 === 0) {
    console.log("Fizz");
  } else if(i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

---

# Function

- Satu blok kode yang memiliki tugas tertentu
- Saru blok ditandai dengan kurung kurawal {}
- Sebuah cara untuk membuat program menjadi modular (tersusun atas modul-modul lebih kecil)

--

## Deklarasi

```
function namaFungsi(parameter1, parameter2, dst) {
  // isi dari fungsi

  return; // sebuah fungsi bisa mengembalikan nilai bisa tidak
}
```

--

## Contoh Fungsi 1

```
// deklarasi
function kuadrat(x) {
  return x * x;
}

// cara panggil
kuadrat(5);
```

--

## Contoh Fungsi 2

```
function fizzBuzz(initial, condition) {
  for(var x = initial; x < condition; x++) {
    if(x % 15 === 0) {
      console.log("FizzBuzz");
    } else if(x % 3 === 0) {
      console.log("Fizz");
    } else if(x % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(x);
    }
  }
}

// chaining function
console.log(fizzBuzz(5, 150));
```

---

# Mengakses Isi HTML dengan JS

- Kita bisa mengakses isi sebuah elemen HTML dengan menggunakan JS
- Ini adalah dasar dari mengakses DOM (Document Object Model) menggunakan JS
- Contoh: mengakses isi dari `div` dengan `id="angka"`

```
// JS
// x bernilai 60
var x = document.getElementById("angka-satu").innerHTML;

<!-- HTML -->
<div id="angka">
  60
</div>
```

---

# Mengubah Isi HTML dengan JS

- Selanjutnya karena kita sudah bisa mengakses isi dari `div` tersebut, maka kita juga bisa mengubah isinya

```
var y = 70;
document.getElementById("angka-satu").innerHTML = y;

```

---

# Memanggil Fungsi JS dengan Button

- Apabila kita sudah menggunakan fungsi, maka fungsi tersebut bisa dipanggil menggunakan button di dalam HTML
- Dengan demikian, maka interaktivitas sederhana sudah terjadi di dalam web page kita

```
// JS
function addNumbers() {
  var result = x + y;
}

<!-- HTML -->
<button onclick="addNumbers()">Add Numbers</button>
```
