// Queston 43:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
// with a copy of the array of magicians’ names. Because the original array will be unchanged, 
// return the new array and store it in a separate array. Call show_magicians() with each array to 
// show that you have one array of the original names and one array with the Great added to each
//  magician’s name.
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician names
var magicianNames = ["Magician1", "Magician2", "Magician3", "Magician4"];
// Call make_great with a copy of the original array and store the new array
var greatMagicianNames = make_great(__spreadArray([], magicianNames, true)); // making shallow copy using spread operator
// Call show_magicians to display the original list
show_magicians(magicianNames);
// Call show_magicians again to display the new list with "the Great" added
show_magicians(greatMagicianNames);
