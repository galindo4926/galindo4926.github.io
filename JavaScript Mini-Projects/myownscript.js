/* notes for ME!

 */

function degrees()
var degrees =



/*
MINI Project 3
TASK: Write a function named 'assignGrade' that:
    -Takes 1 argument, a numeric score
-Return a grade for the score, either A, B, C, D, or F+
-Call that function for a few different scores and log the result.
    HTML:
() Form HTML
() Input field
() Button
() Result field
JavaScript:
    () See 'HelloWorld' code, but the with numbers
*/
function assignGrade()
{
    //capture a score from HTML
    var score = Number(document.project3.num1.value);
    if (score >= 90) //that's an A
    {
        return 'A';
    }
    else if (score >= 80)
    {
        return 'B';
    }  //FINISH IT!!! MORTAL KOMBAT!