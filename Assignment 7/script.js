/**Authur: Kyle Reed
Assignment 7
July 29, 2021 
*/

/*----------------------------------[PART A]---------------------------------------*/

function toCelsius(farehnheit_) {   //function that converts to celsius
    return (5/9) * (farehnheit_-32);
  }

let tempC = 78; //temp in celsius

let tempF = toCelsius(tempC);   //tempF will call toCelsius and contain the return value

console.log(`${tempC}°C is ${tempF}°F`);    //output value in farehnheit units

/*----------------------------------[PART B]---------------------------------------*/

const massLucas = 95;   //Lucas mass
const heightLucas = 1.88; //Lucas height
const massJohn = 92;    //John mass
const heightJohn = 1.76;    //John height

const BMILucas = massLucas/(heightLucas**2);    //Lucas BMI
const BMIJohn = massJohn/(heightJohn**2);   //John BMI

const LucasBiggerBMI = BMILucas > BMIJohn;  //boolean value to see who has larger BMI

if(LucasBiggerBMI){//Output who has larger BMI and their respective values
    console.log(`Lucas' BMI(${BMILucas}) is higher than John's${BMIJohn})!`);
}else{
    console.log(`John's' BMI(${BMIJohn}) is higher than Lucas'${BMILucas})!`);
}

/*----------------------------------[PART C(with bonus)]---------------------------------------*/

const knicksScore = 327 / 3; //average knicks score
const netsScore = 310 / 3;  //average nets score

if(knicksScore > netsScore && knicksScore >= 100){//compare scores
    console.log(`The Knicks are the winners with ${knicksScore} compared to the Nets ${netsScore}!`);//Knicks win
}else if (netsScore > knicksScore && netsScore >= 100){//if Knicks score not > Nets
    console.log(`The Nets are the winners with ${netsScore} compared to the Nets${knicksScore}!`);//Nets win
}else if(knicksScore = netsScore && knicksScore >= 100){//there can only be a tie total of points between the two teams
    console.log(`The Knicks and the Nets are TIED with ${knicksScore}`);//output tie game
}else{//BASE CASE: output if none of the above cases are met. Final is no team wins
    console.log("This is a BIG dissapintment to the fans, ending in neither team winning...");
}