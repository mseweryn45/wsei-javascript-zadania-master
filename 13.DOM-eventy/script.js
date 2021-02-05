// Zadanie 1

//Kliknięcie w przycisk o id="test-event"
var btn1 = document.getElementById("test-event");
    btn1.addEventListener("click", function (event){
                console.log(event.target);
            })
//Ruch myszką na ekranie
window.addEventListener("mousemove",function (event){console.log(event)});
//Najechanie myszką na przycisk o id="test-event"
btn1.addEventListener("mouseenter",function (event){console.log(event)});
//naciśnięcie klawisza na klawiaturze
window.addEventListener("keydown",function (event){console.log(event)});
//scrollowanie strony w dół i w górę
window.addEventListener("scroll",function (event){console.log(event)});
//zmianę tekstu w input id="input-test"
document.getElementById("input-test").addEventListener("change", function (event){console.log(event)})

//Zadanie 2
var btn2 = document.getElementById("ex2");
btn2.addEventListener("click", function (){
document.getElementById("span-ex2").innerHTML = btn2.attributes["data-text"].nodeValue;
})

//v2
function span() {
    const buttonEx2 =  document.getElementById('ex2');
    buttonEx2.addEventListener('click',enterText => {
        let dataText = enterText.target.dataset.text;
        let belowElement = enterText.target.nextElementSibling;
        belowElement.innerText = dataText
    })
                                            
}
span();

//Zadanie 3 

function changeColor(event){
    if(event.type === "mouseleave"){
        event.target.style.backgroundColor= "red"
        return;
    }else{
        event.target.style.backgroundColor = "blue";
    }
}
document.getElementById("ex3").addEventListener("mouseenter",changeColor);
document.getElementById("ex3").addEventListener("mouseleave",changeColor);
//v2
const square = document.getElementById('ex3');

square.addEventListener('mouseover', function(){
    square.style.backgroundColor = "BLUE";
})

square.addEventListener('mouseout', function(){
    square.style.backgroundColor = "RED";
})

//Zadanie 4

const input = document.querySelector('#input-test');
const alert = document.createElement('div');
alert.textContent = "You can't write a number";

const validate = (e) => {
    if (e.target.value.match(/\d/g)){
        input.parentElement.appendChild(alert);
    } else{
        alert.remove();   
    }
};

input.addEventListener('input', validate);

//zadanie 5


let counter =  0;

function counterFunction(){
    if(counter >=10){
        document.getElementById("ex5-button").removeEventListener("click", counterFunction);
    }else {
        counter++;
        this.nextElementSibling.innerHTML = counter;
    }
}
document.getElementById("ex5-button").addEventListener("click", counterFunction);

//zadanie 6 
window.addEventListener("scroll", function () {
    if(window.scrollY > 200){
        document.body.style.backgroundColor = "red";
    }else {
        document.body.style.backgroundColor = "white";
    }
}) 

//zadanie 7 
function calculator() {
    const buttons = document.querySelectorAll(
      "#calculator > div:nth-child(4) > button"
    );
    const input = document.querySelector("#calculator > input:first-child");
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        if (i + 1 === 10) {
          input.value += 0;
        } else {
          input.value += i + 1;
        }
      });
    }
    const specialButtons = document.querySelectorAll(
      "#calculator > div:nth-child(5) > button"
    );
  
    for (let i = 0; i < specialButtons.length; i++) {
      specialButtons[i].addEventListener("click", function () {
        if (specialButtons[i].textContent.includes("+")) {
          input.value += "+";
        } else if (specialButtons[i].textContent.includes("-")) {
          input.value += "-";
        } else if (specialButtons[i].textContent.includes("*")) {
          input.value += "*";
        } else {
          input.value += "/";
        }
      });
    }
    const regexp = /-?\d+[+-/*]{1}-?\d+/g;
    let result = 0;
    input.addEventListener("blur", function () {
      if (regexp.test(input.value)) {
        if (input.value.includes("+")) {
          result = split("+", input);
        } else if (input.value.includes("/")) {
          result = split("/", input);
        } else if (input.value.includes("*")) {
          result = split("*", input);
        } else if (input.value.includes("-")) {
          result = split("-", input);
        }
        input.value = result;
      } else {
        console.log("Invalid statement.");
      }
    });
  }
  
  function split(operator, input) {
    let splitInputValue = [];
    let count = 0;
    if (operator === "-") {
      count = 0;
      for (let i = 0; i < input.value.length; i++) {
        if (input.value.charAt(i) === "-") count++;
      }
  
      if (count > 1) {
        splitInputValue = input.value.split(operator).slice(count - 1);
      } else {
        splitInputValue = input.value.split(operator);
      }
    } else {
      splitInputValue = input.value.split(operator);
    }
    let result = 0;
    if (input.value.includes("+")) {
      result = Number(splitInputValue[0]) + Number(splitInputValue[1]);
    } else if (input.value.includes("/")) {
      if (splitInputValue[1] === 0) {
        console.log("You can not divide by zero.");
        return;
      }
      result = splitInputValue[0] / splitInputValue[1];
    } else if (input.value.includes("*")) {
      result = splitInputValue[0] * splitInputValue[1];
    } else if (input.value.includes("-")) {
      if (count === 2) {
        splitInputValue[0] = -Math.abs(splitInputValue[0]);
      }
      result = splitInputValue[0] - splitInputValue[1];
    }
    return result;
  }
  calculator();
  