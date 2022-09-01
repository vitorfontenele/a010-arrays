//Arrays
const arrNum = [64, 25, 81, 100, 16];
const arrStr = ["batata", "cebola", "cenoura"];
const arrMult = [3.14, 9.81, "alface", "tomate", true, true, false];

//Criando cópias
const arrNumCopia = [...arrNum];
const arrStrCopia = [...arrStr];
const arrMultCopia = [...arrMult];

//a)
arrNumCopia.push(144);
console.log(arrNum);
console.log(arrNumCopia);
console.log("----------------");

//b)
arrStrCopia.pop();
console.log(arrStr);
console.log(arrStrCopia);
console.log("----------------");

//c)
arrMultCopia.splice(1, 1);
console.log(arrMult);
console.log(arrMultCopia);

