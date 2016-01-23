//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
	if (name === "Tyler") {
		return true;
	}
	else {
		return false;
	}
}

// to check: isTyler("Tyler");
// to check: isTyler("Alex");

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName() {
	var userName = prompt("What is your name?");
	return userName;
}

// to check: getName();



//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome() {
	alert("Welcome, " + getName());
}


//Next problem




//What is the difference between arguments and parameters?

parameters are given to a function declaration (like a placeholder for future things to pass in),
while arguments are passed in when the function is called/invoked


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


falsy values: NaN, undefined, 0, "", null, false
how to check: use an if statement and set the parameter with a falsy --> it should not run

// example: 
function checkIfFalsy(value) {
	if (!value) {
		return "falsy";
	}
}

// example 2:

if (NaN) {
	console.log("Hi");
}

//won't display anything

// will return "falsy" if the value is a valsy value



//Next Problem



//Create a function called myName that returns your name

function myName() {
	return "Alex";
}

// to check: myName();
  


//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
	return function() {
		return newMyName;
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
