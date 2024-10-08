// Question 18:
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
// Original list of places to visit
var placesToVisit = ["Machu Picchu", "Tokyo", "Antarctica", "Banff", "Thailand"];
// Print original order
console.log("Original Order:", placesToVisit);
// Print alphabetical order without modifying the original list
var alphabeticalOrder = placesToVisit.slice().sort();
console.log("Alphabetical Order:", alphabeticalOrder);
// Print original order again
console.log("Original Order:", placesToVisit);
// Print reverse alphabetical order
var reverseAlphabeticalOrder = placesToVisit.slice().sort().reverse();
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
// Print original order again
console.log("Original Order:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order again to restore the original order
placesToVisit.reverse();
console.log("Restored Order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
