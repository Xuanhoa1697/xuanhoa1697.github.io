let closure = (function(){
    let count = 0

    function up(){
        count++
        
    }
    function down(){
        count--
    }

    function get(){
        return count
    }

    return{
        up,
        down,
        get
        
    }
})()



console.log(closure.up());
console.log(closure.down());
console.log(closure.get())

////=====================================================//


let capitalize = (str) => str.trim().split(" ").map((text) => text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase()).join(" ")


console.log(capitalize(`xuan hoa`));