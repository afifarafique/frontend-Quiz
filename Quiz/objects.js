//Write a function to check if a given object is empty.
const objection=[];
const afifa=[{class:9}]
function isEmptyObject(obj) {
    if (obj === null || typeof obj !== 'object') {
        return false;
    }

    return Object.keys(obj).length === 0;
}
console.log(isEmptyObject(objection));
console.log(isEmptyObject(afifa));

//Create an object with property name, age, and occupation, and write a function to print each property and its value.
const Bybo = {
    name: 'Afifa',
    age: 18,
    occupation: 'Student'
};

 
function print_object(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}
print_object(Bybo);


//Write a function to clone an object.
//using same above object named bybo
function clone(obj) {
    return { ...obj };
}
const new_clone = clone (Bybo);
console.log(new_clone);  
console.log(new_clone=== Bybo);  

//Write a function to merge two objects.
function merge(object1, object2) {
    return Object.assign({}, object1, object2);
}
 
const object1 = { name: 'afifa', age: 18 };
const object2 = { occupation: 'student', location: 'PAK' };

const mergedObject = merge (object1, object2);
console.log(mergedObject);

//Write a function that takes an object and returns an array of its keys.
function get_ObjectKeys(obj) {
    return Object.keys(obj);
}

const Afify = {
    name: 'Afifa',
    age: 18,
    occupation: 'Student'
};

const Array_keys = get_ObjectKeys(Afify);
console.log(Array_keys);  

// Write a function that takes an object and returns an array of its values.
function getObjectValues(obj) {
    return Object.values(obj);
}
const array_values = getObjectValues(Afify);  //using old object Afify
console.log(array_values);

//Write a function that takes an object and returns an array of key-value pairs.
//using same array afify
function getentries(obj) {
    return Object.entries(obj);
}
const value_pairs = getentries(Afify);
console.log(value_pairs); 

//Write a function to deeply merge two nested objects.

function deepmerge(obj1, obj2) {
    function isObject(value) {
        return value && typeof value === 'object' && !Array.isArray(value);
    }
    const result = { ...obj1 };
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (isObject(result[key]) && isObject(obj2[key])) {
                result[key] = deepmerge(result[key], obj2[key]);
            } else {
                result[key] = obj2[key];
            }
        }
    }
    return result;
}
    //creating object to deeply merge
    const ob1 = {
        name: 'Afifa',
        details: {
            age: 18,
            address: {
                city: 'rawalpindi',
                zip: 'abc12'
            }
        },
        hobbies: ['reading','coloring']
    };
    
    const ob2 = {
        details: {
            age: 18,  
            address: {
                state: 'Pakistan'  
            }
        },
        hobbies: ['Coding','Drawing','cooking'],  
        profession: 'Student'  
    };
   
const merged_object = deepmerge(ob1, ob2);
console.log("The deeply nested objects result as: ",merged_object);

// Write a function to update the properties of an object using another object.
function update (target, updates) {
    for (const key in updates) {
        if (updates.hasOwnProperty(key)) {
            target[key] = updates[key];
        }
    }
    return target;
}
// creating objects to test
const original_obj  = {
    name: 'Afifa',
    age: 18,
    occupation: 'Student'
};

const update_obj  = {
    age: 19,  
    location: 'Islamabad'  
};

const updated_object = update (original_obj , update_obj );
console.log("the original object is : ",original_obj);
console.log("The updated object is  :", updated_object);

//Write a function that takes an array of objects and returns an object where the keys are the values of a specified property from each object, 
//and the values are arrays of the remaining properties.
function mixed_objects(objects, keyProperty) {
    const result = {};

    objects.forEach(obj => {
        const key = obj[keyProperty];
        const { [keyProperty]: _, ...rest } = obj; // Extract the keyProperty and keep the rest

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(rest);
    });

    return result;
}
//creating object
const Student_data = [
    { id: 1, name: 'Afifa', age: 18 },
    { id: 2, name: 'Api', age: 20 },
    { id: 3, name: 'Mama', age: 48 }
];
const groupedData = mixed_objects(Student_data, 'id');
console.log("The grouped objects are ",groupedData);
