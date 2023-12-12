
var names = ["John", "Jane", "Jerry", "Mary", "Bob", "Jack"];

function sayHelloOrGoodbye(name) {
    if (name.charAt(0).toLowerCase() === 'j') {
        console.log("Goodbye " + name);
    } else {
        console.log("Hello " + name);
    }
}

for (var i = 0; i < names.length; i++) {
    sayHelloOrGoodbye(names[i]);
}
