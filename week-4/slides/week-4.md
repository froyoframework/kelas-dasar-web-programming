# Week 4: JavaScript

---

# Overview JavaScript

---

# Console

Tempat untuk mencoba-coba kode JavaScript.

---

# Hello World JS

```
console.log("Hello, World!");
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

Variabel adalah tempat untuk menyimpan data sementara di memori komputer.

--

## Deklarasi dan Penggunaan Variabel

```
var a = 2;
var b = 7;
var result = (a + b) - a;

console.log(result);
```

---

# Comparison Operator

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

```
true && false // AND. always return false, unless both of operand are true
true || false // OR. alwyas return true, unless both of operand are false
!true // NOT. return the other.
```

---

# Kondisi

Memberikan pilihan untuk jalannya program.

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

Membuat alur program menjadi berulang.

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

Satu blok kode yang memiliki tugas tertentu.

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
      return "FizzBuzz";
    } else if(x % 3 === 0) {
      return "Fizz";
    } else if(x % 5 === 0) {
      return "Buzz";
    } else {
      return x;
    }
  }
}

// chaining function
console.log(fizzBuzz(5, 150));
```
