console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

console.log('--- A. basket global variable ---');
//  Create a global variable named `basket` and set it to an empty array.
const basket = [];
console.log('Items in basket:', basket); // console log to see if array is empty and it is

console.log(
  '--- B. function addItem() - SEE STRETCH GOAL FOR UPDATED function--');
// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`.
//   - return `true` indicating the item was added
//***COMMENTS:
//      declared a function named addItem passing through parameter item (string)
//      any item passing through the function will be added to the global variable, basket with push() method
//      **push() method to add item to the end of array
//      and if the parameter item (string) is added successfully to end of basket's array
//      then we want the return to be true (boolean)

//_____original code: see question 3 in stretch goal for *updated* addItem()_____
// function addItem(item) {
//   basket.push(item);
//   return true;
// }
// console.log('Is apple added to basket?', addItem('apple'));
// console.log('Is cherry added to basket?', addItem('cherry'));
// console.log('Is mango added to basket?', addItem('mango'));
// console.log('Is kiwi added to basket?', addItem('kiwi'));
// console.log('Is pear added to basket?', addItem('pear'));
// console.log('Items in basket:', basket); // current list of items in basket

console.log('--- C. function listItem()  ---');
// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
//***COMMENTS:
//      declared a function named listItems
//      inside function added a for loop to loop through each of the items in the basket
//      console.log each single item that is in the basket
//      invoked the function listItem() to see the console log
function listItems() {
  
  for (let i = 0; i < basket.length; i++) {
    console.log('single item:', basket[i]);
  }
}
listItems(); // this will not display because I commented out the original code (addItem()) above for stretched goal below - see question #3 stretch goal

console.log('--- D. function empty() ---');
// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
//***COMMENTS:
//      declared a function called empty
//      inside block scope reset the basket by assigning a new length of 0 - this resets the array or empty it
//      to check if the array is truly empty out use a conditional statement comparing the new length to 0
//      is the new length type/value equal to 0? if that is true then return true (boolean);
//      otherwise it will return false (boolean)
//      **note: Array indexes start counting at 0 – we cannot use indexes to check if an array is occupied.
//          Therefore, you must check the array length.
function empty() {
  basket.length = 0; //resets the array; 0 items in basket
  //  basket.length = 2; //sample: shows that there are 2 items in the basket -- this will return false (boolean)
  if (basket.length === 0) { // this step - downward is not needed - but I added just for test purposes
    return true;
  } else {
    return false;
  }
}
console.log('Is basket empty?', empty()); //should be true, as we empty out the array by assigning the length to 0; otherwise false
console.log('Numbers of items in basket:', basket.length); // 0

// ************************************************************* //
// -------------------- STRETCH GOALS ------------------------- //
// ************************************************************* //

console.log('--- 1. STRETCH GOAL: maxItems global variable ---');
// 1. Add a global `const` named `maxItems` and set it to 5.
const maxItems = 5;
console.log('The maximum number of items in basket:', maxItems); // 5

console.log('--- 2. STRETCH GOAL: function isFull() ---');
//2. Create a function called isFull(). It should:
// - return `false` if the basket contains *less* than max number of items
// - return `true` otherwise (equal or more than maxItems)
//***COMMENTS:
//      declared a function named isFull
//      we are testing to see if the number of items inside basket is less than maxItems
//      if yes return false (boolean) otherwise return true (boolean)
function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}
console.log('numbers of items in basket:', basket.length); // currently 'empty' = 0
console.log('Is basket full?', isFull()); // should be false

console.log('--- 3. STRETCH GOAL: Update the required `addItem` function ---');
// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`
//***COMMENTS:
//      created function name addItem passing item (string) in parameter
//      when the updated addItem() is invoked we will check if isFull() is equal to false - there's room in the basket
//      if yes than add the new item in the basket with push() method and return true (boolean) - indicating item added to basket
//      otherwise, return false as there's no room - basket is full
function addItem(item) {
  if (isFull() == false) {
    basket.push(item);
    return true;
  } else {
    return false;
  }
}
console.log('Is basket full?', isFull()); // false
console.log('Is ginger added to basket?', addItem('ginger')); // true
console.log('Is chive added to basket?', addItem('chive')); //true
console.log('Is onion added to basket?', addItem('onion')); // true
console.log('Is mint added to basket?', addItem('mint')); // true
console.log('Is rosemary added to basket?', addItem('rosemary')); // true
console.log('Is tumeric added to basket?', addItem('tumeric')); // false - only 5 items max!
console.log('Is cinnamon added to basket?', addItem('cinnamon')); // false - only 5 items max!
console.log('List of items in basket:', basket); // should be ['ginger', 'chive', 'onion', 'mint', 'rosemary']

console.log('--- 4. STRETCH GOAL: function removeItem() ---');
// __________Using Array built-in functions!__________  //
// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf] to find the index of the first matching item in the basket.
//   - Use [Array.splice] to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found

//***COMMENTS */
// created a function called removedItem passing through item (string) parameter
//  in the block scope declared a new variable indexItem and assign it to take the indexOf item that is passing through from basket
//  then we test it through conditional statement if the return value of item is greater than -1;
//  if it is then in return we want to execute the splice method in the basket based on the return value of indexItem
//  however if the indexItem value returned -1 (NOT FOUND) then return null
//  Array.indexOf ==> method returns the first index of a value
//                    method will return -1 IF the value is NOT found
//                    method starts at a specified index and searches from left to right
// Array.splice ==>  method can ADD and/or REMOVE an array element
//                   this method overwrites the original array

function removeItem(item) {
  const indexItem = basket.indexOf(item);

  if (indexItem > -1) {
    return basket.splice(indexItem, 1);
  } else {
    return null;
  }
}
console.log('Before - list of items:', basket); //list before item are removed
console.log('Item removed:', removeItem('ginger')); // remove ginger from array
console.log('Item removed:', removeItem('onion')); // remove onion from array
console.log('Item removed:', removeItem('jello')); // null - because this item is not in the basket to begin with
console.log('Item removed:', removeItem('chocolate')); // null - because this item is not in the basket to begin with
console.log('Item removed:', removeItem('cookie')); // null - because this item is not in the basket to begin with
console.log('After - list of items:', basket); // list after removeItem() invoked
