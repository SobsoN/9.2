const femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = prompt('podaj imie');
if (allNames.indexOf(newName)==-1) {
	allNames.push(newName);
}
console.log(allNames);