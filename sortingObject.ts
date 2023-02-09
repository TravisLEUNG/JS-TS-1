/*
========= Sorting Objects =========
 - Prompt
   Given an array of objects, sort the objects by population size. Return the entire object.

 - Approach
   Input: An array of objects
   Output: An array of objects, sorted by population

 - Plan
    JavaScript has a built-in array method called sort() that we can use for this particular exercise.
    What’s interesting about this particular method is that in JavaScript, if you don’t use a callback compare function to sort the array of objects, the default sort method is used to sort by characters rather than number. For example:
 */

const sortingObject = (arr: Array<{ population: any }>): Array<Object> => {
    return arr.sort((a, b) => (a.population > b.population ? 1 : -1));
};
