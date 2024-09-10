// Question 15:
// Changing Guest List: You just heard that one of your guests can’t make 
// the dinner, so you need to send out a new set of invitations. You’ll have 
// to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Original guest list
var guestList = ["Hamzah", "Samama", "Bilal"];
// Print the guest who can't make it
var guestWhoCantMakeIt = guestList[0]; // Assuming the first person can't make it
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Replace the guest who can't make it with a new person
var newGuest = "Ehtisham";
guestList[0] = newGuest;
// Print a second set of invitation messages for the updated guest list
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordially invited to dinner. We would be honored to have your presence."));
}
// Output:
//     Hamzah can't make it to the dinner.
//     Dear Ehtisham, you are cordially invited to dinner. We would be honored to have your presence.
//     Dear Samama, you are cordially invited to dinner. We would be honored to have your presence.
//     Dear Bilal, you are cordially invited to dinner. We would be honored to have your presence.
