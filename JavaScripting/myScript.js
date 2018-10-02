//Create code comment
/*
Or I can
Do multi-line comments\
Like this
 */

//create MY first algorithm (method... or function)
//
                    //These 3 words are synonymous'
function addNumbers(pl,p2)  //addNumbers is the name of the function
{                             //p1 and p2 are parameters or in other words
                                    //they are the data, that 'addNumbers' expects to receive
    return p1+p2;

}

function multiplyNums(p1,p2)
{
    return p1+p2;
}

function mathOps(num1,num2)
{
    //create a local variable aka only visible to the mathOps function
    var sum = addNumbers(num1,num2);
    var product = multiplyNums(num1,num2);
    return sum + product;
}