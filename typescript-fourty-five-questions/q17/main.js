// Question 17:
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Original guest list
var guestList = ["Hamzah", "Samama", "Bilal", "Zeeshan", "Shahzaib", "Ehtisham", "Ali Gohar"];
// Print a message saying you can only invite two people
console.log("Due to limited space, you can invite only two people for dinner.");
// Loop through the guest list and remove excess guests
while (guestList.length > 2) {
    var removedGuest = guestList.pop(); // Remove the last person from the list
    console.log("Sorry, ".concat(removedGuest, "! You can't be invited to dinner."));
}
// Print invitation messages to the remaining guests
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence."));
}
// Remove the last two names from the list to make it empty
guestList.pop();
guestList.pop();
// Print to confirm that the list is empty
console.log("The guest list is now empty:", guestList);
// Output:
//     Due to limited space, you can invite only two people for dinner.
//     Sorry, Ali Gohar! You can't be invited to dinner.
//     Sorry, Ehtisham! You can't be invited to dinner.
//     Sorry, Shahzaib! You can't be invited to dinner.
//     Sorry, Zeeshan! You can't be invited to dinner.
//     Sorry, Bilal! You can't be invited to dinner.
//     Dear Hamzah, you are cordially invited to dinner. We would be honored to have your presence.
//     Dear Samama, you are cordially invited to dinner. We would be honored to have your presence.
//     The guest list is now empty: []
