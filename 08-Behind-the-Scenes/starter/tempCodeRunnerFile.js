const x = 'from global';
first();

function first() { 
    const y = 'from first!';
    second();

    function second() {
        const z = 'from second';
        third();
    }
}

function third() { 
    const q = 'form third';
    console.log(x, y, z, q);
    // ReferenceError
    // y and z can not be found in third() function scope!
}