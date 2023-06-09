

function beepBoop(userInput) {
    let newArray = [];
    for (i = 0; i <= userInput; i++) {
        newArray.push(i);
    }
    console.log('counting up works');
    newArray.forEach(function (element) {
        // const oneLocation = newArray.indexOf(1);
        newArray[1] = "beep!"
    })
    return newArray;
    }

//     newArray.forEach(function (element) {
//         if (newArray.includes(element)) {
//             const oneLocation = newArray.indexOf(element);
//             newArray[oneLocation] = "beep";
//         }
//     })
// }

// function replace(userInput)
// if (newArray(userInput).includes(1)) {
//     const one = newArray.indexOf(element);
//     let newNum = element.replace(newArray[one], "beep");

// }