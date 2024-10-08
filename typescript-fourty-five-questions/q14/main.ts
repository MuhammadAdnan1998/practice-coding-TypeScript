
// Question 14:
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people 
// you’d like to invite to dinner. Then use your list to print a message to 
// each person, inviting them to dinner.

// Store the names of people you want to invite in an array
const guestList: string[] = ["Hamzah", "Samama", "Bilal"];

// Print a message inviting each person to dinner
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
}

// Output:
//     Dear Hamzah, you are cordially invited to dinner. We would be honored to have your presence.
//     Dear Samama, you are cordially invited to dinner. We would be honored to have your presence.
//     Dear Bilal, you are cordially invited to dinner. We would be honored to have your presence.