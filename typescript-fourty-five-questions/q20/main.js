// Question 20:
// Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries, 
// cities, languages, or anything else you’d like. Write a program that 
// creates a list containing these items.
// Array of Famous Mountains:
var mountains = [
    "Mount Everest",
    "K2",
    "Kangchenjunga",
    "Makalu",
    "Annapurna"
];
// Array of Famous Rivers:
var rivers = [
    "Nile",
    "Amazon",
    "Yangtze",
    "Mississippi",
    "Ganges"
];
// Array of country.
var countries = [
    "United States",
    "China",
    "India",
    "Russia",
    "Brazil"
];
// Array of Cities.
var cities = [
    "New York",
    "Tokyo",
    "London",
    "Paris",
    "Beijing"
];
// Array of Languages.
var languages = [
    "English",
    "Spanish",
    "Mandarin",
    "Hindi",
    "Arabic"
];
// Print Lists
// List of Famous Mountains.
console.log("List of Famous Mountains:");
for (var i = 0; i < mountains.length; i++) {
    console.log("".concat(i + 1, ". ").concat(mountains[i]));
}
// List of Famous Rivers:
console.log("\nList of Famous Rivers:");
for (var i = 0; i < rivers.length; i++) {
    console.log("".concat(i + 1, ". ").concat(rivers[i]));
}
// List of Countries.
console.log("\nList of Countries:");
for (var i = 0; i < countries.length; i++) {
    console.log("".concat(i + 1, ". ").concat(countries[i]));
}
// List of Cities.
console.log("\nList of Cities:");
for (var i = 0; i < cities.length; i++) {
    console.log("".concat(i + 1, ". ").concat(cities[i]));
}
// List of Languages.
console.log("\nList of Languages:");
for (var i = 0; i < languages.length; i++) {
    console.log("".concat(i + 1, ". ").concat(languages[i]));
}
