/*
========= Reverse a Array =========
 - Prompt
   Create a Function to reverse the array:

 - Approach
    Input: Array
    Output: Array with reversed value
 */

const arrayReverse = (arr: Array<any>): Array<any> => {
    let i: number = 0,
        j: number = arr.length - 1;

    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++, j--;
    }

    return arr;
};
