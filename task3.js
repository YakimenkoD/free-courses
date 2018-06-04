var a = Number(process.argv[2]);
var b = Number(process.argv[3]);

function time(a, b) {
  var result = a + b;
  var hours = 3600;
  var minute = 60;
  var sec1 = sec2 = sec3 = " ";
    h = Math.floor(result / 3600);
    m = Math.floor((result % 3600) / 60);
    s = (result % 3600) % 60;

    if (h % 10 == 1 && h != 11) {
      sec1 = "час";
    } else if (h < 5 && h > 1 || h % 10 > 1 && h % 10 < 5) {
      sec1 = "часа";
    } else {
      sec1 = "часов";
    }

    if (m % 10 == 1 && m != 11) {
      sec2 = "минута";
    } else if (m < 5 && m > 1 || m % 10 > 1 && m % 10 < 5) {
      sec2 = "минуты";
    } else {
      sec2 = "минут";
    }

    if (s % 10 == 1 && s != 11) {
      sec3 = "секунда";
    } else if (s < 5 && s > 1 || s % 10 > 1 && s % 10 < 5) {
      sec3 = "секунды"
    } else {
      sec3 = "секунд";
    }

    if (result < 3600) {
      if (result < 3600 && result > 60) {
        return m + " " + sec2 + " " + s + " " + sec3;
      }
      else if (result == 60) {
        return m + " " + sec2 + " " + s + " " + sec3;
      } else {
        return s + " " + sec3;
      }
    } else {
      return h + " " + sec1 + " " + m + " " + sec2 + " " + s + " " + sec3;
    }
}

process.stdout.write(time(a, b));