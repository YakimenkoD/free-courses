var n = Number(process.argv[2]);
var e = Number(process.argv[3]);
var result = 0
for (var c = 1; c <= n; c++) {
  result += Math.pow(c, e)
};
console.log(result);