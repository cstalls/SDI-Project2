//alert("JavaScript works!");

//Christopher Stalls
//SDI 1405
//Code for Project 2

//Starting Variables
var carOn = false;
var dayDriven = 1;
var followRules = "Make sure to follow the road rules!";

//prompt for who started the car
var defaultDriver = prompt('Who started the car?', 'Chris');

//call whosdriving function
whosDriving(defaultDriver);

//procedure for car start
function whosDriving (defaultDriver)
{
	if (defaultDriver == 'Chris' && defaultDriver != 'null')
		{
			console.log('Chris is driving to work today.');
		}
		else
		{
			console.log('Someone else is driving to work today.');
		}
}

//confirm car start
var carOn = confirm('Is the car started?');

//Boolean function confirm car on and driver age
function carStarted (carOn)
{
	do
	{
		var driverAge = parseInt(prompt('Input driver age.', '18'));
		
		if (driverAge >= 18)
		{
			console.log('Driver is allowed to drive.');
			carOn == false;
		}
		else
		{
			console.log('Driver is not allowed to drive.');
		}
	}
	while ((carOn == true) && (driverAge < 18))
	return carOn;
}

//call carStarted function
carStarted(carOn);

function daysDriven (dayDriven)
{
	for(dayDriven = 1; dayDriven <= 7; dayDriven ++)
	{
		console.log('This is the amount of days driven: ' + dayDriven);
	}
	return dayDriven;
}

//call day driven
daysDriven(dayDriven);

function congratulations(followRules)
{
	console.log('Congratulations you can drive to work all week! ' + followRules);
	return 0;
}

//call congratulations function
congratulations(followRules);

//return variables from functions
console.log(carOn);
console.log(dayDriven);
console.log(congratulations());