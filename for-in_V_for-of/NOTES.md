# Usage of `for...in` and `for...of`

The two loops in JavaScript, `for...in` and `for...of`, are used for iterating over collections but they have significant differences:

1. **Iteration Over**: 
`for...in` is used to iterate over the enumerable properties of an object. It returns the keys (property names) of the object. On the other hand, `for...of` is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It returns the values of the iterable objects.

2. **Order**: 
`for...in` does not guarantee any specific order of properties. However, `for...of` iterates over elements in the order they were inserted into the collection.

3. **Usage with Arrays**: 
When used with arrays, `for...in` will return indices as keys, while `for...of` will return the actual array elements.

4. **Prototypical Properties**: 
`for...in` loop also iterates over the properties inherited from an object's prototype chain, which can lead to unexpected results if not handled properly. `for...of` does not iterate over these inherited properties.

Here's a quick example to illustrate these differences:

```javascript
let obj = {a: 1, b: 2, c: 3};
let arr = ['a', 'b', 'c'];

// for...in with object
for (let key in obj) {
    console.log(key); // logs 'a', 'b', 'c'
}

// for...of with array
for (let value of arr) {
    console.log(value); // logs 'a', 'b', 'c'
}
```




# Exercises to understand differences between `for...in` and `for...of`:


1. **Exercise 1**: Create an object with properties representing a person's name, age, and occupation. Use a `for...in` loop to print out all the property names (keys) and their corresponding values.

2. **Exercise 2**: Create an array of numbers. Use a `for...of` loop to calculate the sum of all the numbers in the array.

3. **Exercise 3**: Create an array of strings. Use a `for...of` loop to concatenate all the strings into a single string.

4. **Exercise 4**: Create an object with properties representing a book's title, author, and number of pages. Use a `for...in` loop to print out the property names (keys) only.

5. **Exercise 5**: Create an array of objects, where each object represents a student with properties for name and grade. Use a `for...of` loop to calculate the average grade of all students.

6. **Exercise 6**: Create an object with properties representing a car's make, model, and year. Use a `for...in` loop to create a new object that has the same properties but all values converted to uppercase.

7. **Exercise 7**: Create an array of numbers. Use a `for...of` loop to create a new array that contains only the even numbers from the original array.

8. **Exercise 8**: Create an object with properties representing a person's first name, last name, and age. Use a `for...in` loop to print out a sentence for each property like "Person's first name is John".

9. **Exercise 9**: Create an array of strings. Use a `for...of` loop to print out each string in uppercase.

10. **Exercise 10**: Create an object with properties representing a product's name, price, and quantity. Use a `for...in` loop to calculate the total value of the product (price * quantity).



# CREDITS
- **GitHub Copilot Chat** - for all the content related to `for...in` Vs `for...of`