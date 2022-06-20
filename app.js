
///Exercise 1:If/Else Statements : Respond with ALERTS
favNum = 25;
let userGuess = Number(prompt("Enter a number 1-50"));

if (userGuess < favNum) {
    alert("Your guess is too low.");
} else if  (userGuess > favNum) {
    alert("Your number is too high.")
} else {
    alert("Congratulations!!!")
}



//Exercise 2: Switch Statement : Respond with Console.Log
favPet = "";
let userInput2 = prompt("What kind of pet do you have?");

switch( userInput2 ) {
    case "dog": 
        console.log("Dogs give you hugs and kisses.");
        break;
    case "cat": 
        console.log("I hope your cat doesn't knock things off the counter.");
        break;
    case "bird": 
        console.log("I hope your bird sings to you.");
        break;
    case "turtle": 
        console.log("I hope your turtle is fast.");
        break;
    case "snake": 
        console.log("Are you crazy?");
        break;
   default:  console.log("You should get a dog!");

}
