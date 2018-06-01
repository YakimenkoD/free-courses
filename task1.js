/* Task 1 */
var n = Number(process.argv[1]);
var e = Number(process.argv[2]);
var c = 1;
var sum = 0;
while (c <= n) {
  sum += Math.pow(c, e);
  c++;
};
process.stdout.write(sum.toString());
