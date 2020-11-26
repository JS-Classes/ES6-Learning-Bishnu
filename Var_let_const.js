// Redeclaration allowed
var x = 56;
// 1000 lines of code
var x = "sdfs";

// Var is function scoped or global
function add()
{
    var xx = "sdfsf";    
}

// Var can be hoisted
console.log(age);
var age = 67;

// Redeclaration no allowed but can mutate
let y = 45;
y = "sdfs";

// No mutation allowed
const z = true;
//z = false;

// Block scoped: let and const
function add1()
{
    var xx = "sdfsf";
    
    if(xx == "")
    {
        let x = 234.6;        
    }
}
