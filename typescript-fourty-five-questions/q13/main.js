// Question 13:
// Your Own Array: Think of your favorite mode of transportation, such as a 
// motorcycle or a car, and make a list that stores several examples. Use 
// your list to print a series of statements about these items, such as 
// “I would like to own a Honda motorcycle.”
// Store examples of modes of transportation in an array
var transportation = ["motorcycle", "car", "bicycle", "scooter", "boat"];
// Print statements about each item in the array
for (var i = 0; i < transportation.length; i++) {
    console.log("I would like to own a ".concat(transportation[i], "."));
}
// Output:
//     I would like to own a motorcycle.
//     I would like to own a car.
//     I would like to own a bicycle.
//     I would like to own a scooter.
//     I would like to own a boat.
