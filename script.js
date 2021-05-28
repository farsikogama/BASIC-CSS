var bintang = ''

// pengulangan dalam baris
for (i = 1; i <= 5; i++) {
  bintang += '*'
}

console.log(bintang)

// pengulangan jumlah baris
var bintang2 = ''
for (i = 1; i <= 5; i++) {
  for (j = 0; j <= 10; j++) {
    bintang2 += '*'
  }
  bintang2 += '\n'
}

console.log(bintang2)

// pengulangan setengah segitiga
var bintang3 = ''
for (i = 0; i <= 5; i++) {
  for (j = 0; j <= i; j++) {
    bintang3 += '*'
  }
  bintang3 += '\n'
}

console.log(bintang3)

// pengulangan segitiga sama kaki vertikal
var bintang4 = ''
for (i = 0; i <= 5; i++) {
  for (j = 0; j <= i; j++) {
    bintang4 += '*'
  }
  bintang4 += '\n'
}
for (i = 5; i >= 0; i--) {
  for (j = 0; j <= i; j++) {
    bintang4 += '*'
  }
  bintang4 += '\n'
}

console.log(bintang4)

// pengulangan segitiga sama kaki horizontal
var bintang5 = ''
for (i = 0; i <= 5; i++) {
  for (j = 5; j >= i; j--) {
    bintang5 += '_'
  }
  for (j = 0; j <= i; j++) {
    bintang5 += '*'
  }
  for (j = 1; j <= i; j++) {
    bintang5 += '*'
  }
  bintang5 += '\n'
}

console.log(bintang5)
