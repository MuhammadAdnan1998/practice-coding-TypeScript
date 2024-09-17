// Question 45:
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, model, options) {
    if (options === void 0) { options = {}; }
    var car = __assign({ manufacturer: manufacturer, model: model }, options);
    return car;
}
//Partial<Car> is a TypeScript utility type that makes all properties of the Car type optional.
//This means you can provide some, all, or none of the properties when calling the function.
// Call the function with required and optional information
var myCar = createCar("Toyota", "Camry", {
    color: "Blue",
    year: 2022,
    features: ["GPS", "Leather Seats"],
});
// Print the created car object
console.log(myCar);
