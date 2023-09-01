let s = "I am Praash";
console.log(s.indexOf("P"));
console.log(s.lastIndexOf("a"));
console.log(s.charAt(4));
console.log(s.endsWith("am"))
console.log(s.endsWith("I am Praash"))
console.log(s.includes("am"))
console.log(s.substring(0,4))
console.log(s.substr(0,4))
console.log(s.slice(0,4));
// Note-> The substring() method swaps its two arguments if indexStart is greater than indexEnd , meaning that a string is still returned. The slice() method returns an empty string if this is the case.

console.log(s.split("a"));
console.log(s.replace("Praash", "Prashant"))
console.log(s.length)