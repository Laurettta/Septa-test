        //    Assignment

// 1. what are the difference between var, let, and const?

// (a) var declarations are globally scoped or function scoped.They are only accessible within the function in which they are defined.

// (b) let are block scoped. They are only visible within the block (enclosed by curly braces) in which they are defined, such as within an if statement block.
// Use let when you need a variable that can change its value

// (c) const are block scoped. Variables declared with const are constants, meaning their value cannot be changed once its assigned
// const is also hoisted but are not initialized.


// 2. Javascript Data types

// Boolean: Boolean value is one that can either be TRUE or FALSE. Booleans are often used in conditional testing. if you need to know "yes" or "no" about something,
// then you would want to use the boolean function.

// Undefined: Undefined is when a variable is declared and not initialized or not assigned with any value. By default, the variable was stored with an Undefined value.

// null: null is a special value that represent an empty or unknown value. For instance, let number = null; 
// The code above suggests that the number variable is empty at the moment and may have a value later.

// Symbols: Symbols are immutable (cannot be changed) and are unique, which means that no two Symbols will ever be equal,
// even if they have the same description. Also, it's often used as a property key in objects.

// Objects: An Objects data type is a method for encoding key value pairs. Objects are created using curly braces '{}' and can contain zero or more key-value pairs. 


//  Assignment
// Multiplication and subtraction

function multiply(a,b){
        console.log(a + " x " + b + " = " + (a*b))
}
      
multiply(2, 3)
multiply(4, 8)


function sub(a,b){
        console.log(a + " - " + b +  " = " + (a-b))
}

sub(7, 3)
sub(8, 4)


function add(a,b) {
        console.log(a + " + " + b + " = " + (a+b))
}

add(3, 5)
add(5, 9)