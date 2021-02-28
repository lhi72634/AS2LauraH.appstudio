//Variables to hold input Data

let firstName = prompt("Enter your first name")
let userState = prompt("Enter your state with two capitalized letters")
let temperature = Number(prompt("Enter the number of temperature in Fahrenheit"))

//Array to hold all messages

let message = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

//else/if statements
    
if (userState == "NE" && temperature < 32)
    console.log(`${message[0]}`)

else if (userState == "NE" && temperature >= 32 && temperature <= 50)
    console.log(`${message[1]}`)

else if (userState == "FL" && temperature >= 32 && temperature < 50)
    console.log(`${message[2]}`)

else if (userState == "FL" && temperature >= 50 && temperature <= 70)
    console.log(`${message[3]}`)
