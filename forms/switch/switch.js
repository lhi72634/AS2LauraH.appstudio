//Variables to hold input Data

let firstName = prompt("Enter your first name")
let userState = prompt("Enter your state with two capitalized letters")
let temperature = Number(prompt("Enter the number of temperature in Fahrenheit"))

//Laura Higueras
//Array to hold all messages

let message = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

 
//Outputs with switch dependending on the users input

switch (true) {
 case (state == "NE" && temperature < 32):
    console.log(`${firstName}, ${messages[0]}`)
    break;
 case (state == "NE" && temperature > 32 && temperature < 50):
    console.log(`${firstName}, ${messages[1]}`)
    break;
 case (state == "FL" && temperature > 32 && temperature < 50):
    console.log(`${firstName}, ${messages[2]}`)
    break;
 case(state=="FL" && temperature>50 && temperature<70 ):
    console.log(`${firstName}, ${messages[3]}`)
    break;
}