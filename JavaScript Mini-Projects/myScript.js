/*
NOTES NOTES NOTES NOTES NOTES

Comparison Operators are symbols/math that let us..
..COMPARE 2 or more variables or values

= symbol is an ASSIGNMENT operator, we use it to ASSIGN a value to a variable
    ex. var = 5; sets x equal to a value orf 5.

== symbol is a COMPARISON operator, we use it to COMPARE to values for equality.
    ex. x == y; will return TRUE or FALSE depending on whether x and y hold equal values.

if (x === y)(...) STRICT equal, meaning that both VALUE and DATA TYPE of x and y must be the same.
(dfo after wordMatch)
if (x === y)(...) STRICT equal, meaning that both VALUE and DATA TYPE of x and y must be the same

(do after strictEqual)
if (x === y) (...) LOOSE equal. Values must still be the same, DATA TYPE does not.
                    Javascript will attempt to convert the data type,but don't rely on it if possible

if (x != y) (...) LOOSE, not equal, and will return TRUE if VALUE is not equal OR if DATA TYPE is not equal

if (x != y) (...)Values are

x < y means x is less than y

*/

function wordMatch()
{
    var str1 = "apple";
    var str2 = "apple";

    //conditional statements, BOOLEAN statement
    if (str1 == str2) // if str1 IS EQUAL to str2... the code in {} will run
    {
        return "The two strings are equal"
    }
    else
    {
        return "the two strings are NOT equal"
    }

    return str1 == str2; //return 'true' or 'false' depending on the value of nstr1 and str2
}

function strictEqual()
{
    var x = 7;
    var y = "7";
    if (x === y) //LOOSE equal because only two equal signs used.
    {
        return "both x and y have the same VALUE";
    }

    if (x == y)
    {
        return "both x and y have the same VALUE and DATA TYPE";
    }


}

/*
MINI PROJECT 1
    TASK: Write a function named 'greaterNum' that does the following:
    () Takes 2 arguments (parameters), both which are NUMBERS (datatype?)
    () Return whichever number is the greater (higher value) number
    () Call that function 2 times with different number pairs, and log the output
        to make sure it works (expected output: "The greater number of 23 and 33 is 33")

    GAMEPLAN!!
    HTML:
    () Add 2 inputs to collect 2 numbers to compare
    () Place for output
    () Button to call a function to compare

    JavaScript:
    (*) function that has If-then to compare numbers

 */
function greaterNum(num1,num2)
{
    var num1 = Number(document.project1.input1.value);
    var num2 = Number(document.project1.input2.value);

    if (num1 > num2)
    {
        //before a RETURN, displwy of gif
        document.project1.getElementsByTagNameNS()
        return "The greater number of " + num1 + " and " + num2 + " is " + num1;
    }
    else if (num2 > num1)
    {
        return "The greater number of " + num1 + " and " + num2 + " is " + num1;
    }
    else if (num2 === num1)
    {
        return "The two numbers are equal!!";
    }
}

/*
MINI PROJECT 2
TASK: Write a function named 'HelloWorld' that:
    - Takes 1 argument, a language code (example: 'es' - spanish, 'de' - german,
    - Returns "Hello, World"  for the language indicated. It should default to return english.
    - Call that function for each of the supported languages and lgo th4e result to make sure it works.

HTML:
()  Paragraph location to display "Hello World" message
(*)  Place to type in the language code.
(*)  Give INPUT a NAME/ID
()  Button to call helloWorld
(*)  Use <form> for project2 work
()  Reset button?

JavaScript:
()  Create variable that PULLS info from form
()  Conditional Statement
*/
function helloWorld()
{
    var language = document.project2.lang.value;
    var language = language.toLowerCase();
//create logic that outputs "hello world" different depending on language selected
    if (language == 'ru') //case of russia
    {
        return "Privet Mir";
    }
    else if (language == 'pt')
    {
        return "Olá mundo!";
    }
    else if(language == 'en')
    {
        return "Hello world!";
    }
    else if(language == 'fr')
    {
        return "Bonjour le monde!";
    }
    else if (language == 'es')
    {
        return "Hola mundo";
    }
    else
    {
        return "HELLO MURICA.";
    }


}

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
}

/* MINI PROJECT 4:
Write a function named 'pluralize' that:
    - take 2 arguments, a noun and a number
    - return the number and pluralized form of the noun
        EX. INPUTS: number=3 noun=dog
        EX. OUTPUT: "3 dogs"
   - Test a few different nouns (it will NOT be perfect)
   - Account for a few special cases like: Sheep, mouse, goose, deer
 */
function pluralize()
{
    var quantity = Number(document.project4.num1.value);
    var noun = document.project4.word1.value;

    if (noun == 'mouse') {
        if (quantity > 1) {
            return quantity + " mice ";
        }
        else {
            return quantity + "mouse";
        }
    }
    else if (noun == 'deer')
    {
        return quantity + "deer";
    }
    else if (noun == 'cactus')
    {
        if (quantity > 1)
        return quantity + "cacti"
    }

    if (quantity > 1)
    {
        //tacK on an 's' tot the noun aka CONCATENATE
        return quantity + " " + noun + "s";
    }
    else
    {
        return quantity + " " + noun;
    }
}