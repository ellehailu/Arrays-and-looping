# _Mr. Roboger's Neighborhood_

#### By _**Elle Hailu**_

#### _A web application that takes a number from the user and returns a list of values from o to the user's inputted number with substitutions._

## Technologies Used

- _JavaScript_
- _CSS_
- _HTML_

## Description

_This web application takes a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions:_

- For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
- For numbers that contain a 2, all digits are replaced with "Boop!"
- For numbers that contain a 1, all digits are replaced with "Beep!"

## Setup/Installation Requirements

- _Clone this repository to your desktop_
- _Navigate to the top level of the directory_
- _Open the index.html file in your browser_

## Known Bugs

- _No known bugs in this current version._

## Tests

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

## License

_MIT_ [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) _2023_ _Elle Hailu_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
