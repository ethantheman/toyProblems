// Implement a method to perform basic string compression using the counts of
// repeated characters. For example, the string 'aabcccccaaa' would become a2b1c5a3.
// If the 'compressed' string would not become smaller than the original string,
// your method should return the original string. You can assume the string has only
// uppercase and lowercase letters (a-z).

let compress = s => {
	let candidate = s[0],
		temp = s[0],
		count = 1,
		result = "";
	for (var i = 1; i < s.length; i++) {
		if (i === s.length - 1) {
			// make sure to include the last run of letters stored in candidate/count
			if (s[i] === candidate) {
				count++;
				result += candidate + count.toString();
			} else {
				result += candidate + count.toString() + s[i] + 1; // last letter in string is alone
			}
		} else if (s[i] === candidate) {
			// continue adding to temp
			count++;
			temp = candidate + count.toString();
		} else {
			// store temp in result and reset candidate/count.
			result += temp;
			count = 1;
			candidate = s[i];
			temp = candidate + count.toString();
		}
	}

	return result.length < s.length && result !== "" ? result : s;
};

console.log(compress("aabcccccaaa") === "a2b1c5a3");
