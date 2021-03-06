console.log("The future says:", future());

function future(){
    return "You'll never have a flying car"
}

/*
The preceding code works, even though the function is defined below 
the code that uses it. Function declarations are not part of the 
regular top-to-bottom flow of control. They are conceptually moved to 
the top of their scope and can be used by all the code in that scope. 
This is sometimes useful because it offers the freedom to order code 
in a way that seems meaningful, without worrying about having to 
define all functions before they are used.
*/