//alert("JavaScript works!");

//Christopher Stalls
//SDI 1405
//Code for Project 2

//Starting Variables
var carOn = false;
var dayDriven = 0;
var followRules = "Make sure to follow the road rules!";

//prompt for who started the car
var defaultDriver = prompt('Who started the car?', 'Chris');

//procedure for car start
function whosDriving (defaultDriver)
{
	if (defaultDriver == 'Chris')
		{
			console.log('Chris is driving to work today.');
		}
		else
		{
			console.log('Someone else is driving to work today.');
		}
}

//call whosdriving function
whosDriving(defaultDriver);
