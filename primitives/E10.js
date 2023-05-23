// Explain the difference between the double and the triple equals' operator.

const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted
//equality comparison using the equality operator hence the program will convert the second operand to match the first
// and then do the comparison. (compare with type coercion)

yearsCompleted === firstYearCompleted
//compare without type conversion using the strict equality operator
