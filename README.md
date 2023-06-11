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
Code: beepBoop(24);
Expected output: [0, 'beep!', 'boop!', 3, 4, 5, 6, 7, 8, 9, 'beep!', 'beep!', 'beep!', 'beep!', 'beep!', 'beep!', 'beep!', 'beep!', 'beep!', 'beep!', 'boop!', 'boop!', 'boop!', 'boop!', 'boop!']

Test: "it should return an array of numbers 0 to the user's inputteed number with number 3 replaced with the text 'won't you be my neighbor'";
Code: beepBoop(35)
Expected output:[0, 'beep!', 'boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'beep!', 'beep!', 'beep!', 'beep!', 'beep!', 'beep!', 'beep!', 'beep!', 'beep!', 'beep!', 'boop!', 'boop!', 'boop!', 'boop!', 'boop!', 'boop!', 'boop!', 'boop!', 'boop!', 'boop!', "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"]
