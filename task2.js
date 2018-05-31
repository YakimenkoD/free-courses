/* Task 2 */
var w = String(process.argv[2]);
var k = Number(process.argv[3]);


function caesar(word, shift) {
	var result = "";
	for (var i = 0; i < word.length; i++) {
		var c = word.charCodeAt(i);
		if      (65 <= c && c <=  90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);
		else if (97 <= c && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97);
	}
	return result;
}

process.stdout.write((caesar(w, k)).toString());
/* Put your code here */