// Business logic

function beepBoop(userInput) {
    let newArray = [];
    for (let i = 0; i <= userInput; i++) {
        newArray.push(i);
    }
        console.log('counting up works');
        newArray.forEach(function(element) {
            if (newArray[element].toString().includes('3')) {
                newArray[element] = "Won't you be my neighbor?";
            }
            else if (newArray[element].toString().includes('2')) {
                newArray[element] = "Boop!";
            }
            else if (newArray[element].toString().includes('1')) {
                newArray[element] = "Beep!";
            }
        })
    return newArray;
    
    }

    //UI logic 
function handleForm(event) {
    event.preventDefault();
    const userInput = document.getElementById("numberInput").value;
    const updatedNums = beepBoop(userInput);
    let result = document.createElement("p")
    result.innerText = updatedNums;
    document.body.append(result);
    document.getElementById("number-form").reset();
}
    window.addEventListener("load", function () {
        const form = document.getElementById("number-form");
        form.addEventListener("submit", handleForm);
    });

