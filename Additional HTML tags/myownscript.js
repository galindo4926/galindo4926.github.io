/* notes for ME!

 */

function season()
{
    var degrees = Number(document.conditional.degrees.value);
    if (degrees >= 81)
    {
        return "Summer";
        return "img/beach.jpg";
    }
    else if (degrees >= 64)
    {
        return "Spring";
    }
    else if (degrees >= 43)
    {
       return "Autumn";
    }
    else if (degrees >= 12)
    {
        return "Winter";
    }
    else if (degrees >= -1)
    {
        return "SUBZERO";
    }

}

function CalorieCounter()
{
    var actions = text(document.calories.actions.value);
    if (actions === "running a mile")
    {
        return "you burned 10 calories";
    }
    else if (actions === "bike riding to the park")
    {
        return "you burned 25 calories";
    }

}

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
    else if (score >= 70)
    {
        return 'C';
    }
    else if (score >= 60)
    {
        return 'D';
    }
    else if (score >= 50)
    {
        return 'F';
    }
    else if (score >= 0)
    {
        return 'NO CREDIT';
    }
}