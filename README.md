# _{Application Name}_

#### By _**Elle Hailu**_

#### _{Brief description of application}_

## Technologies Used

- _JavaScript_
- _CSS_
- _HTML_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

- _This is a great place_
- _to list setup instructions_
- _in a simple_
- _easy-to-understand_
- _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

- _Any known issues_
- _should go here_

## License

_MIT_ [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) _2023_ _Elle Hailu_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

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
