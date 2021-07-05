# freeCodeCamp's JavaScript Algorithms and Data Structures Projects

These are my solutions freeCodeCamp's JavaScript Algorithms and Data Structures project prompts. All solutions are written in plain JavaScript and have passed all of the corresponding unit tests.

## [Palindrome Checker](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker)

A palindrome is a word or sentence that is spelled the same way both forwards and backwards. The test cases for this project ignore punctuation, lettercasing, and spaces.

This function accepts strings with varying formats and returns a `true` value if the given string is a palindrome, and `false` when it isn't.

## [Roman Numeral Converter](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter)

Roman Numerals are a numeric writing system whose numbers are represented by combinations of letters from the Latin alphabet.

This function accepts integers and returns a string with the Roman Numeral counterpart.

## [Caesars Cipher](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher)

In a Caesar cipher (also known as a shift cipher), the true value of the letters are calculated by shifting the position of the letter by some set amount. This project implements a simple ROT13 cipher, where the values of the letters are shifted by 13 places. Thus, `A ↔ N`, `B ↔ O`, `C ↔ P`, and so on.

This function accepts uppercase ROT13 encoded strings and returns decoded strings. Non-alphabetic characters (i.e., spaces, punctuation) are passed on as well.

## [Telephone Number Validator](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator)

This function checks if the input is a valid US telephone number (the formatting is specified in the problem spec).

This function accepts strings with varying formats and returns `true` if the given string is a valid US phone number, and `false` when it isn't.

## [Cash Register](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register)

This function accepts three (3) arguments--the purchase price `price`, the payment `cash`, and the cash-in-drawer `cid` (an array describing the amount of money available per denomination). The denomination used is US Dollars.

When the cash-in-drawer is less than the change due or when the exact change can't be returned, the function returns `{status: "INSUFFICIENT_FUNDS", change: []}`.

When the cash-in-drawer has the exactly the right amount for the change due, the function returns `{status: "CLOSED", change: [...]}`.

Otherwise, the function returns `{status: "OPEN", change: [...]}`, with the change due in coins and bills (sorted in highest to lowest order) as the value of the `change` key.
