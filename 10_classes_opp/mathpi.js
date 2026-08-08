const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

// Object property descriptor shows:
// writable, enumerable, configurable

console.log(Math.PI);

// Math.PI = 5
// console.log(Math.PI)
// Math.PI is read-only, so its value cannot normally be changed


const jaid = {
    name: 'jaid mulla',
    age: '21',
    isAvailable: true,

    callJaid: function () {
        console.log("Jaid is not available")
    }
}

console.log(Object.getOwnPropertyDescriptor(jaid, "name"))
// getOwnPropertyDescriptor(): Gets property details


Object.defineProperties(jaid, {
    name: {
        writable: false,
        enumerable: true
    }
})
// defineProperties(): Changes property descriptors


console.log(Object.getOwnPropertyDescriptor(jaid, "name"));


for (let [key, value] of Object.entries(jaid)) {
    // Object.entries(): Returns key-value pairs

    if (typeof value !== 'function') {
        // typeof: Checks the data type
        // Skip properties whose value is a function

        console.log(`${key} : ${value}`);
    }
}

