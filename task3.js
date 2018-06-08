var time = Number(process.argv[2]) + Number(process.argv[3]);
var h = Math.floor(time / 3600);
var m = Math.floor((time - h * 3600) / 60);
var s = ((time - (h * 3600)) - (m * 60));
var sec1 = sec2 = sec3 = " ";
var result = "";

if ((h % 100 <= 20 && h % 100 > 5) || (h % 10 >= 5 && h % 10 <= 9) || (h % 10 == 0)) {
  sec1 = " часов ";
} else if (h % 10 >= 2 && h % 10 <= 4) {
  sec1 = " часа ";
} else {
  sec1 = " час ";
}

if (m % 10 == 1 && m != 11) {
  sec2 = " минута ";
} else if (m < 5 && m > 1 || m % 10 > 1 && m % 10 < 5) {
  sec2 = " минуты ";
} else {
  sec2 = " минут ";
}

if (s % 10 == 1 && s != 11) {
  sec3 = " секунда";
} else if (s < 5 && s > 1 || s % 10 > 1 && s % 10 < 5) {
  sec3 = " секунды";
} else {
  sec3 = " секунд";
}

switch(h > 0) {
  case true:
  result += h + sec1;
  break;
}

switch (m > 0) {
  case true:
  result += m + sec2;
  break;
}

switch(s > 0) {
  case true:
  result += s + sec3;
  break;
}
if (time == 0) {
  result = "0 секунд";
}
console.log(result);