let str = "Здесь могла быть любой другой текст";
console.log(str)
// string.endsWidth

console.log(str.endsWith("текст",))

// string.includes

console.log(str.includes("Здесь"))
console.log(str.includes("Здесь",1))

// string.replace

let replacedStr = str.replace("любой другой", "ваш")
console.log(replacedStr)

// string.toLowerCase

let str4lower = "STRING";

console.log(str4lower.toLowerCase())

// string.toUpperCase

let str4upper = "string";

console.log(str4upper.toUpperCase())
