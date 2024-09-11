
// Question 19:
// Dinner Guests: Working with one of the programs from Exercises 14 through 
// 18, print a message indicating the number of people you are inviting to 
// dinner.

// Original guest list
const guestList: string[] = ["Hamzah", "Samama", "Bilal", "Zeeshan", "Shahzaib", "Ehtisham", "Ali Gohar"];

// Print the number of guests
console.log(`Number of guests invited: ${guestList.length}`);

// Print the guests' names
for (let i = 0; i < guestList.length; i++) {
    console.log(`Guest ${i + 1}: ${guestList[i]}`);
}

// Output:
    // Number of guests invited: 7
    // Guest 1: Hamzah
    // Guest 2: Samama
    // Guest 3: Bilal
    // Guest 4: Zeeshan
    // Guest 5: Shahzaib
    // Guest 6: Ehtisham
    // Guest 7: Ali Gohar