// Question 41:
// Magicians: Make a array of magician’s names.
//  Pass the array to a function called show_magicians(), which prints 
// the name of each magician in the array.
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician names
var magicianNames = ["Magician1", "Magician2", "Magician3", "Magician4"];
// Call the function to show the magicians
show_magicians(magicianNames);
