
// Question 3:
// Name Cases: Store a person’s name in a variable, and then print that 
// person’s name in lowercase, uppercase, and titlecase.

let name_1:string = 'Muhammad Adnan'; 
console.log(name_1.toLowerCase()); // Output: muhammad adnan
console.log(name_1.toUpperCase()); // Output: MUHAMMAD ADNAN	
let title_CaseName: string = name_1.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
console.log(title_CaseName); //Output: Muhammad Adnan