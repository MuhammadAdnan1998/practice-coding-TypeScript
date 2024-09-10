// Question 12:
// Greetings: Start with the array you used in Exercise 11, but instead 
// of just printing each person’s name, print a message to them. The text of
// each message should be the same, but each message should be personalized 
// with the person’s name.
// Store names of friends in an array
var names = ["Hamzah", "Samama", "Ehtisham", "Shahzaib", "Ali Gohar"];
// Print a personalized greeting message for each person
for (var i = 0; i < names.length; i++) {
    console.log("Hello, ".concat(names[i], "! Hope you are doing well."));
}
// Output:
//     Hello, Hamzah! Hope you are doing well.
//     Hello, Samama! Hope you are doing well.
//     Hello, Ehtisham! Hope you are doing well.
//     Hello, Shahzaib! Hope you are doing well.
//     Hello, Ali Gohar! Hope you are doing well.
