//*  1. İki tam ədəd arasında ən böyük tam rəqəmi göstərən JavaScript proqramı yazın.

let eded1 = parseInt(prompt("Birinci ədədi daxil edin:"));
let eded2 = parseInt(prompt("İkinci ədədi daxil edin:"));

console.log("Ən böyük ədəd: " + Math.max(eded1, eded2));

//*  4. Beş ədədin ən böyüyünü tapmaq üçün JavaScript şərti bir
//*  bəyanat yazın. Nəticələri göstərmək üçün bir xəbərdarlıq qutusu göstərin.

a = -18;
b = 55;
c = -87;
d = 7;
f = 0;
if (a > b && a > c && a > d && a > f) {
  console.log(a);
} else if (b > a && b > c && b > d && b > f) {
  console.log(b);
} else if (c > a && c > b && c > d && c > f) {
  console.log(c);
} else if (d > a && d > c && d > b && d > f) {
  console.log(d);
} else {
  console.log(f);
}

//*  0-dan 15-ə qədər olan döngə üçün JavaScript yazın. Hər iterasiya üçün cari nömrənin tək və ya
//*       bərabər olub olmadığını yoxlayır və ekranda bir mesaj göstərir.

for (var x = 0; x <= 15; x++) {
  if (x === 0) {
    console.log(x + " 0 a beraberdir");
  } else if (x % 2 === 0) {
    console.log(x + "cut");
  } else {
    console.log(x + "tek");
  }
}
