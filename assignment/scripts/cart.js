console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


console.log('--- A. basket global variable and addItem function ---');
//  Create a global variable named `basket` and set it to an empty array.
const basket = [];

// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added
//***COMMENTS */
//  created a function named addItem passing through parameter item (string)
//  any item passing through the function will be added to the global variable, basket with push() method
//  **push() method to add item to the end of array
//  and if the parameter item (string) is added successfully to end of basket's array 
//  then we want the return to be true (boolean) 
function addItem(item) {
basket.push(item); 
return true;
}
console.log('Is apple added to basket?', addItem('apple')); 
console.log('Is cherry added to basket?', addItem('cherry')); 
console.log('Is mango added to basket?', addItem('mango')); 
console.log('Is kiwi added to basket?', addItem('kiwi')); 
console.log('Is pear added to basket?', addItem('pear')); 
console.log('Items in basket:',basket);


console.log('--- B. listItem function ---');
// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
//***COMMENTS */
//  created a function named listItems
//  inside function added a for loop to loop through each of the items in the basket
//  if the item is equal to type/value in the basket's index 
//  then return back to us what that item is 
function listItems(item) {
for (let i = 0; i < basket.length; i++) {
    if (item === basket[i] ){
        return item; 
    }
}
}
console.log('single item:', listItems('apple'));
console.log('single item:', listItems('cherry'));
console.log('single item:', listItems('mango'));
console.log('single item:', listItems('kiwi'));
console.log('single item:', listItems('pear'));
console.log('single item:', listItems('grape')); //undefine because we have not add this item to basket yet - for test purposes only


console.log('--- C. empty function ---');
// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
//***COMMENTS */
// created a function called empty 
// inside block scope reset the basket by assigning a new length of 0 - this resets the array or empty it
// to check if the array is truly empty out use a conditional statement comparing the new length to 0 
// is the new length type/value equal to 0? 
// if that is true then return true (boolean); 
function empty(){
    basket.length = 0; //resets the array
    if (basket.length === 0) {
        return true;
    }
}
console.log('Is basket empty?', empty()); //should be true, as we empty out the array by assigning the length to 0 


// ************************************************************* //
// -------------------- STRETCH GOALS ------------------------- //
// ************************************************************* //

console.log('--- 1. STRETCH GOAL: maxItems global variable ---');
// 1. Add a global `const` named `maxItems` and set it to 5.
const maxItems = 5; 

console.log('--- 2. STRETCH GOAL: isFull() function ---');
//2. Create a function called isFull(). It should:
// - return `false` if the basket contains *less* than max number of items
// - return `true` otherwise (equal or more than maxItems

console.log('--- 3. STRETCH GOAL: update addItem function ---');
// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`

console.log('--- 4. STRETCH GOAL: removeItem function ---');
// __________Using Array built-in functions!__________  //
// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf] to find the index of the first matching item in the basket.
//   - Use [Array.splice] to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found