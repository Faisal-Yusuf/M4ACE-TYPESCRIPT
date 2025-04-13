// ASSIGNMENT QUESTION: Create a generic function that accepts an array of any type 
// and returns the first element. Use appropriate TypeScript annotations.

// Syntax for writing a TYPESCRIPT GENERIC FUNCTION

function returnFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

// returns Type number
const numbers = [20, 40, 60];
const firstNumber = returnFirstElement(numbers);

// Type String
const strings = ['a', 'b', 'c'];
const firstString = returnFirstElement(strings);

// Type is boolean | string | number this is also refered to as UNION with the symbol '|'
const mixed = [true, 'Voldigoad', 69];
const firstMixed = returnFirstElement(mixed); 

  