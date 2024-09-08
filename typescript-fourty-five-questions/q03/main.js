// Question 3:
// Name Cases: Store a person’s name in a variable, and then print that 
// person’s name in lowercase, uppercase, and titlecase.
var name_1 = 'Muhammad Adnan';
console.log(name_1.toLowerCase()); // Output: muhammad adnan
console.log(name_1.toUpperCase()); // Output: MUHAMMAD ADNAN	
var title_CaseName = name_1.toLowerCase().replace(/\b\w/g, function (letter) { return letter.toUpperCase(); });
console.log(title_CaseName); //Output: Muhammad Adnan
