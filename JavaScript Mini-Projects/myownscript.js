/* notes for ME!

 */

function season()
{
    var degrees = Number(document.getElementById('weather').src="img/summer.gif");
    if (degrees >= 95)
    {
        return "Summer"; 
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