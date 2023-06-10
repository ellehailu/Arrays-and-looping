Describe beepBoop()

Test: "it should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected output: [0,1,2,3,4,5]

Test: "it should return an array of numbers 0 to the user's inputted number with the number 1 replaced with the text 'beep'"
Code: beepBoop(7);
Expected output: [0,'beep', 2,3,4,5,6,7]

Test: "it should return an array of numbers 0 to the user's inputted number with number 2 replaced with the text 'boop'"
Code: beepBoop(5);
Expected output: [0,'beep', 'boop', 3, 4, 5]

Test: "it should return an array of numbers 0 to the user's inputteed number with number 3 replaced with the text 'won't you be my neighbor'";
Code: beepBoop(5)
Expected output: [0,'beep', 'boop', 'won't you be my neighbor', 4, 5]

Test: "it should return an array of numbers 0 the user's inputted number with all numbers that start with 1 replaced with "beep!"
Code: beepBoop(14);
Expected output: [0, 'beep!', 2, 3, 4, 5, 6, 7, 8, 9, 'beep!', 'beep!', 'beep!', 'beep!', 'beep!']

Test: "it should return an array of numbers 0 the user's inputted number with all numbers that start with 2 replaced with "boop!"
Code: beepBoop(14);
Expected output: [0, 'beep!', 'boop!', 3, 4, 5, 6, 7, 8, 9, 'beep!', 'beep!', 'beep!', 'beep!', 'beep!']

Instructions

//Identify if the user input includes 1

//Logic

// 1. create an array of the user's input
// 2. Sort through the array to identify if the user's inputted number includes 1, 2, or 3

// Create conditions for replacement for each number
// 1 = "Beep!"
// 2 = "Boop!"
// 3 = "Won't you be my neightbor?"

//return a list of numbers starting at zero and ending at the user's inputed number

//reset form for the user so the user can run through the form multiple times
