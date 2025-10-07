function firstNonRepeatedChar(str) {
	let freq = [];
	for(let char of str){
		freq[char]++;
	}
	for(let char of str){
		if(char === 1){
			return char;
		}
	}
	return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
