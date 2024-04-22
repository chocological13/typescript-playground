export{};

var length: number = 5;
var width: number = 3;

var radius: number = 5;

var a: number = 80;
var b: number = 65;

var date1: Date = new Date("2024-03-19");
var date2: Date = new Date("2024-03-21");

var name: string = "John Doe";


// Area of rectangle
function areaRect(): number {
    let area: number = length * width;

    return area;
}
console.log("Exercise 1");
console.log("Area of rectangle is: " + areaRect());
console.log("");

// Circle
function diameter(): number {
    var diameter = radius * 2;
    return diameter;
}

function circumference(): number {
    var circumference = 2 * Math.PI * radius;
    return circumference;
}

function circleArea(): number {
    var circleArea = Math.PI * Math.pow(radius, 2);
    return circleArea;
}
console.log("Exercise 2");
console.log("Diameter: " + diameter() + ", Circumference: " + circumference() + ", Area: " + circleArea());
console.log("");

// Triangle
function triangleArea(): number {
    var triangleArea = (a * b) / 2;
    return triangleArea;
}
console.log("Exercise 3");
console.log("Area of triangle: " + triangleArea());
console.log("");


// Diff days
function diffDay(date1: Date, date2: Date): number {
    const oneDay = 24 * 60 * 60 * 1000 // a day in millisecond
    var diffDay = date2.valueOf() - date1.valueOf();
    return diffDay/oneDay;
}
console.log("Exercise 4");
console.log("Difference in days is: " + diffDay(date1, date2));
console.log("");

// initials
function initials(name: string): string {
    var names = name.split(" ");
    var initials = "";

    for (var name of names) { 
        initials += name.substring(0, 1).toUpperCase();   
    }

    return initials;
}
console.log("Exercise 5");
console.log("Initials: " + initials(name))


