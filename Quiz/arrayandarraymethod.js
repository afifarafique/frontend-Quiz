//Write a function to find maximum element in an array

const Max =[100,200,400,50];
function maximum(arr) {
      return Math.max(...arr);
}
console.log(maximum(Max));

//write a function to reverse an array without using buit-in reverse method
const num = [1,2,3,4,5]
function reverse(num){
    const return_num=[];
    for(let i = num.length - 1; i >= 0; i--){
        return_num.push(num[i]);
    }
    return return_num;
}
console.log(reverse(num));

//Use the map method to create a new array that contains the square of each element in the original array.
const array=[2,4,5,6,7,8];
 
const new_array = array.map(function(element) {
    return element * element;
});
console.log(new_array);

//Write a function that uses the filter method to remove all even numbers from an array.
//using same array array=[2,4,5,6,7,8]

function remove_enum(array) {
    return array.filter(function(element) {
        return element % 2 !== 0;
    });
}

const odd_array = remove_enum(array);
console.log(odd_array);

//Use the reduce method to calculate the sum of all elements in an array.
//using same array array=[2,4,5,6,7,8]

const total = array.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;}, 0);

console.log(total);

//Write a function that uses map to extract the names of all users from an array of user objects (each user object contains name and age properties).
const user_object = [
    { name: 'afifa', age: 18 },
    { name: 'Api', age: 20 },
    { name: 'Mama', age: 48 },                             //object
    { name: 'Dad', age: 50 }
];

function get_names(userArray) {
    return userArray.map(function(user) {                      //function 
        return user.name;
    });
}
const user_names = get_names(user_object);
console.log("The names in object are ",user_names);

// Write a function that uses filter to get all the users older than 30 from an array of user objects.
//using object created above with name user_object
function olduser(userArray) {
    return userArray.filter(function(user) {
        return user.age > 30;
    });
}

const user_old = olduser(user_object);
console.log("The user who has age big than 30 are ",user_old);

//Use reduce to create an object that contains the counts of each unique element in an array.
const my_array=[1,2,3,1,1,2,3]
function uniq_element(arr) {
    return arr.reduce(function(accumulator, currentValue) {
        if (accumulator[currentValue]) {
            accumulator[currentValue]++;
        } else {
            accumulator[currentValue] = 1;
        }
        return accumulator;
    }, {});
}

const results = uniq_element(my_array);
console.log(results);

//Write a function to flatten a nested array using the reduce method.
const nested_array = [1, [2, 3], [4, [5, 6]], 7];

function flat_array(arr) {
    return arr.reduce(function(accumulator, currentValue) {
        if (Array.isArray(currentValue)) {
            return accumulator.concat(flat_array(currentValue));
        } else {
            return accumulator.concat(currentValue);
        }
    }, []);
}

const new_flatarray = flat_array(nested_array);
console.log(new_flatarray);

//Use filter and map together to get an array of names of users older than 30 from an array of user objects.
//using same array of objects 
//  const user_object = [
//     { name: 'afifa', age: 18 },
//     { name: 'Api', age: 20 },
//     { name: 'Mama', age: 48 },                             //object
//     { name: 'Dad', age: 50 }
// ];

function getNames(users) {
    return users
        .filter(function(user) {
            return user.age > 30;
        })
        .map(function(user) {
            return user.name;
        });
}

const name_older30= getNames(user_object);
console.log(name_older30);




