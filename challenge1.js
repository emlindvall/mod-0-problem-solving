
// 1. Given an array of strings, return only the strings that have exactly 4 characters.
//  - I need to create an array of strings that, when printed to the console, only shows the
//    strings that contain exactly 4 characters.
//  - I'll define variable wordsList as an array of strings made up of words both 4 characters
//    in length and otherwise. Then I'll use a string method to create a new variable array, 
//    which will contain only the strings with exactly 4 characters. Then I'll print that to the
//    console.
//  - I'll use string method words.filter(word => word.length === 4)

var wordList = ["nope", "yes", "sure", "no way", "absolutely"];
var wordsFourChar = wordList.filter(word => word.length === 4);

console.log(wordsFourChar)

// 2. Start with an array of strings with a mix of uppercase and lowercase letters. Print every 
//    word in all lowercase letters.
//  - I need to create an array of strings with mixed case, then transform them all to lower
//    case and print to the console. 
//  - I'll define variable wordsMixed as an array of strings with mixed case. Then I'll create
//    a for loop that transforms each string to lower case and prints it to the console.
//  - I'll use string method wordsMixed.toUpperCase


var wordsMixed = ["Is", "tHis", "SimPliFYING", "thingS", "TOO", "mUCh?"];

for (var i = 0; i < wordsMixed.length; i++) {
    var wordsLower = (wordsMixed[i].toLowerCase());
    console.log(wordsLower);
}

// 3. Start with an array of travel destinations. Print every travel destination in alphabetical
// order embedded in a sentence using string interpolation. For example, if the destination 
// is "New York City", print something like "The next place I want to visit is New York City!" 
//  - I need to create an array of strings that are travel destinations, and then interpolate
//    each of them into a sentance. 
//  - I'll define variable destinationsList as strings that are place names. Then I'll create a
//    for loop that alphabetizes the strings before interpolating them one at a time into a 
//    a sentance that prints to the console.
//  - I'll use string method destinationsList.sort()

var destinationsList = ["Tblisi", "Bishkek", "Samarkand"];
var destinationsOrdered = destinationsList.sort();

for (var i = 0; i < destinationsList.length; i++)   {
    console.log(`If I won the lottery, I'd buy a ticket to ${destinationsOrdered[i]}!`);
}


// OTHER PRACTICE PLEASE IGNORE!
// 4. Write a method or function that accepts an array of 10 integers (between 0 and 9) and 
//  returns a string of those numbers in the form of a phone number. For example, if you 
//  were given [5, 5, 5, 1, 2, 3, 4, 5, 6, 7], the method or function will return 
//  555-123-4567.

// var numberList = [8, 1, 5, 9, 7, 9, 6, 6, 6, 4]

// for (var i = 0; i < numberList; i++)    {
//     var = numberPhone 
//     if numberList[i] <= 2   {
//         console.log (`${}`)
//     }
//     else if numberList[i] <= 5
//     else 

// }

