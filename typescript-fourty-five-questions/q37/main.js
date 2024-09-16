// Question 38:
// Large Shirts: Modify the make_shirt() function so that shirts are
// large by default with a message that reads I love TypeScript. Make a
// large shirt and a medium shirt with the default message, and a shirt of
// any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You've ordered a ".concat(size, " shirt with the message: \"").concat(message, "\""));
}
// Creating shirts with default values
make_shirt(); // Large shirt with the default message
make_shirt("Medium"); // Medium shirt with the default message
// Creating a custom shirt
make_shirt("Small", "TypeScript Rocks!"); // Small shirt with a custom message
