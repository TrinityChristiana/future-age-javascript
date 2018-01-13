//Trinity Terry
// January 13th, 2018
//Exercise description: You'll be creating variables in JavaScript and using them to determine what age you'll be in some future year.

//Programmer's birth year and month
var birthYr = 1999, birthMoNum = 8;

//Randomly chooses year in the future
var futureYr = (Math.floor(Math.random() * 100)+(new Date()).getFullYear()), futureMoNum = (Math.floor(Math.random() * 12)+1);
//Select a random month between 1 and 12 for logic

//Calculates the oldest age during chosen year
var futureAge = futureYr - birthYr;

//Defines and figures out name of the chosen month number
var monthNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //Month numbers
var month = ["January", "Feburary", "March", "April", "May", "June", "July" ,"August", "September", "October", "November", "December"]; //Month Names

for(i = 0; i < month.length; i++){
    if (futureMoNum === monthNum[i]){
        futureMonth = month[i];
    };
};

// Displays possible ages in chosen year
console.log(`I will be either ${futureAge - 1} or ${futureAge} in the year ${futureYr}`);

//Displays what age is acording to entered birth year, birth month, future year, and future month. 
    if(birthMoNum > futureMoNum){
        console.log(`I will be ${futureAge - 1} in the year ${futureYr} during the month of ${futureMonth}`);
    } else if (birthMoNum < futureMoNum){
        console.log(`I will be ${futureAge} in the year of ${futureYr} on month ${futureMonth}`);
    } else if (futureMoNum === birthMoNum) {
        console.log(`I will be turning ${futureAge} in the year ${futureYr} during ${futureMonth}, your birth month.`)
    }

  //EG: If my birthday is in April 1990, and it is June 2020, I am 30 years old. If it is March 2020, I am 29 years   old.