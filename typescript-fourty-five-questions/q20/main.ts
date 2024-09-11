
// Question 20:
// Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries, 
// cities, languages, or anything else you’d like. Write a program that 
// creates a list containing these items.


// Array of Famous Mountains:
const mountains = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Makalu",
    "Annapurna"
];

// Array of Famous Rivers:
const rivers = [
    "Nile",
    "Amazon",
    "Yangtze",
    "Mississippi",
    "Ganges"
];

// Array of country.
const countries = [
    "United States",
    "China",
    "India",
    "Russia",
    "Brazil"
];

// Array of Cities.
const cities = [
    "New York",
    "Tokyo",
    "London",
    "Paris",
    "Beijing"
];

// Array of Languages.
const languages = [
    "English",
    "Spanish",
    "Mandarin",
    "Hindi",
    "Arabic"
];

// Print Lists
// List of Famous Mountains.
console.log("List of Famous Mountains:");
for (let i = 0; i < mountains.length; i++) {
    console.log(`${i + 1}. ${mountains[i]}`);
}

// List of Famous Rivers:
console.log("\nList of Famous Rivers:");
for (let i = 0; i < rivers.length; i++) {
    console.log(`${i + 1}. ${rivers[i]}`);
}

// List of Countries.
console.log("\nList of Countries:");
for (let i = 0; i < countries.length; i++) {
    console.log(`${i + 1}. ${countries[i]}`);
}

// List of Cities.
console.log("\nList of Cities:");
for (let i = 0; i < cities.length; i++) {
    console.log(`${i + 1}. ${cities[i]}`);
}

// List of Languages.
console.log("\nList of Languages:");
for (let i = 0; i < languages.length; i++) {
    console.log(`${i + 1}. ${languages[i]}`);
}