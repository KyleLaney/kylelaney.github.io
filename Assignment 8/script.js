// Authur: Kyle Reed
// Assignment 7
// July 30, 2021 

/*----------------------------------[PART A]---------------------------------------*/

let bill = 275; //testing bill value
let tip = 0.0;  //tip declared at $0.0 for now

switch(bill){// switch statement to calculate the tip 
    case(bill > 30.00 && bill < 300.00):    // case 1 is met, print value 
        tip = (0.15 * bill);    // tip is .15%
        console.log(`The bill is ${bill}, your tip is ${tip} and your total is ` + bill + tip);
            break;

    case(bill <= 30.00 || bill >= 300.00):  // case 2 is met, print value 
        tip = (0.20 * bill);    // tip is .20%
        console.log(`The bill is ${bill}, your tip is ${tip} and your total is ` + bill + tip);
            break;

}//end switch block


/*----------------------------------[PART B]---------------------------------------*/

tempC = 55;     //temp in celsius

 function celsiusToFahrenheit(tempC){   // receives temp in celsius and returns temp in fahrenheit
    return ((9/5)*(tempC)) + 32;
}//end celsiusToFahrenheit

tempF = celsiusToFahrenheit(tempC); //tempF calls and receives converted value from celsius
console.log(`${tempC}°C is ${tempF}°F`);//prints value

function fahrenheitToCelsius(tempF){    // receives temp in Fahrenheit and returns temp in celsius
    return (5/9) * (tempF-32);
}//end fahrenheitToCelsius

tempF2 = 87;    //temp in fahrenheit
tempC = fahrenheitToCelsius(tempF2);    //tempC calls and receives converted value from Fahrenheit
console.log(`${tempF2}°F is ${tempC}°C`); //prints value


/*----------------------------------[PART C]---------------------------------------*/

let teamKnicks = 168;   //Knicks total points of three games
let teamNets = 138;     //Nets total points of three games

calcAverage = (teamKnicks, teamNets) => {// calculates average score of two teams
    let avgKnicks = 168 / 3;    //Kicks average score
    let avgNets = 138 / 3;      //Nets average score
  }//end calcAverage
  

 function checkWinner(avgKnicks, avgNets){  //takes two values and prints the winner
     if(avgKnicks >= avgNets * 2)           //if winning value is 2x losing value
     console.log(`Knicks win!(${avgKnicks} vs. ${avgNets}}`);   //Knicks win

    else if (avgNets >= avgKnicks * 2) {//else, Nets win given they receive twice value of Knicks
        console.log(`Nets win!(${avgNets} vs. ${avgKnicks}}`);
    } 
 }//end checkWinner


 /*----------------------------------[PART D]---------------------------------------*/
 
 function calcTip(billVal){
    switch(billVal){// switch statement to calculate the tip 
        case(billVal > 30.00 && billVal < 300.00):    // case 1 is met, print value 
            return (0.15 * billVal);    // tip is .15%
    
        case(billVal <= 30.00 || billVal >= 300.00):  // case 2 is met, print value 
            return (0.20 * billVal);    // tip is .20%
    
    }//end switch block
 }
 let bills = new Array(125, 555, 44); //array of bills
 let tips = new Array(3);             //array containing three empty spaces

 tips[0] = calcTip(bills[0]);
 tips[1] = calcTip(bills[1]);
 tips[2] = calcTip(bills[2]);
 console.log(tips);

 let total = new Array(3);          //array to hold three total values

 total[0] = tips[0] + bills[0]; // each indices will have the sum of bill + tips...con'd
 total[1] = tips[1] + bills[1];
 total[2] = tips[2] + bills[2];
 console.log(total);        //print each indices in "total"