//zadanie 1 

let newElement = document.createElement("div");
newElement.innerText = "nowy element";
document.body.appendChild(newElement);

//zadanie 2

const list = document.createElement("ul");
list.setAttribute("id", "list");
const owoce = [
    "mango",
  "ananas",
  "kiwi",
  "banan",
  "truskawka",
  "mandarynka"
]
document.body.appendChild(list);
owoce.forEach(element => {
    const li = document.createElement("li");
    li.innerText = element;
    list.appendChild(li);
});

//zadanie 3

const btn = document.createElement("button")
document.body.appendChild(btn);
btn.innerHTML = "Remove"
btn.addEventListener("click", function(){
    const elementsToRemove = document.getElementById("list").children;
    for (let i = 0; i < elementsToRemove.length; i++){
        elementsToRemove[i].remove();
        console.log(`Usunięto: ${elementsToRemove[i].innerText}`)
    } 
    
})

//zadanie 4

const btn2 = document.createElement("button");
btn2.innerHTML = "Remove";
document.body.appendChild(btn2);

btn2.addEventListener("click", function(e){
    this.remove();
})

//zadanie 5

const random = Math.floor(Math.random() * 11);
for (let i = 1; i < random; i++){
    const newDiv = document.createElement("div");
    newDiv.innerText = `To jest div numer ${i}`;
    document.body.appendChild(newDiv);
}

//zadanie 6 


const div1 = document.createElement("div");
div1.innerText = "to jest div";
const span1 = document.createElement("span");
span1.innerText = "to jest span";
const div2 = document.createElement("div");
const div3 = document.createElement("div");
div3.innerText = "to jest div";
const span2 = document.createElement("span");
span2.innerText = "to jest span";

document.body.appendChild(div1);
document.body.appendChild(span1);
document.body.appendChild(div2);
div2.appendChild(div3);
document.body.appendChild(span2);

//zadanie 7
const list = document.createElement("ul");
const list2 = document.createElement("ul");
list.setAttribute("id", "list");
list2.setAttribute("id", "list2");
const owoce = [
    "mango",
  "ananas",
  "kiwi",
  "banan",
  "truskawka",
  "mandarynka"
]
document.body.appendChild(list);
document.body.appendChild(list2);
owoce.forEach(element => {
    const li = document.createElement("li");
    li.innerText = element;
    list.appendChild(li);
});
const btn = document.createElement("button");
const btn2 = document.createElement("button");
btn.innerText = "kliknij mnie";
btn2.innerText = "kliknij mnie";
list.appendChild(btn);
list2.appendChild(btn2);

btn.addEventListener("click", function(){
    const items = document.querySelectorAll(`#list > li`);
    const lastItem = items[items.length - 1];
    list2.appendChild(lastItem);
  checkElements(list);
  checkElements(list2);
} )
btn2.addEventListener("click", function(){
    const items = document.querySelectorAll(`#list2 > li`);
    const lastItem = items[items.length - 1];
    list.appendChild(lastItem);
  checkElements(list);
  checkElements(list2);
} )

function checkElements(element){
  const elements = element.querySelectorAll(`li`);
  const button = element.querySelector("button");
  if(elements.length < 1){
    button.disabled = true;
  }else{
    button.disabled = false;
  }
}
checkElements(list);
checkElements(list2);
array.forEach(element => {
    
});

//zadanie 8
const br = document.createElement("br");
document.body.append(br);

const descritption = document.createElement("div");
descritption.innerText =
  "Dodaj elementy do strony: (rodzaj; tekst; kolor; ilość)";
document.body.append(descritption);

const input = document.createElement("input");
input.setAttribute("type", "text");
document.body.append(input);

const newButton = document.createElement("button");
newButton.innerText = "Dodaj do strony";
newButton.addEventListener("click", function () {
  const inputValue = input.value;
  const values = inputValue.split(";");

  if (values.length !== 4) {
    throw new Error("Nieprawidłowa ilość atrybutów");
  }

  const count = parseInt(values[3]);

  if (isNaN(count)) {
    throw new Error("Trzeci atrybut musi być liczbą");
  }

  for (let i = 0; i < count; i++) {
    let newElement = null;

    try {
      newElement = document.createElement(values[0]);
      newElement.style.color = values[2];
      newElement.innerText = values[1];
    } catch (err) {
      console.log(err);
    }

    if (newElement) {
      document.body.appendChild(newElement);
    }
  }
});
document.body.append(newButton);

//zadanie 9

const formField = [
    "Imie",
  "Nazwisko",
  "Wiek",
  "Ilość dzieci"
]
formField.forEach(element => {
    const div = document.createElement("div");
    const inputLabel = document.createElement("label");
    const inputField = document.createElement("input");
    inputLabel.innerText = element + ":";
    // inputField.setAttribute("class", element);
    document.body.appendChild(div);
    div.appendChild(inputLabel);
    div.appendChild(inputField);
});

const btn = document.createElement("button");
btn.innerText = "Więcej";
document.body.appendChild(btn);

btn.addEventListener("click", function(){
  const inputs = document.querySelectorAll("input");
  
  if(!window.functionIsSet){
    const table = document.createElement("table");
    const row = document.createElement("tr");
  
      formField.forEach(element => {
        const col = document.createElement("th");
        col.innerText = element;
        row.appendChild(col);
        });
    
    document.body.appendChild(table);
    table.appendChild(row);
  }
  window.functionIsSet = true;
  
  
  function createRow(){
    const table = document.querySelector("table")
    const row = document.createElement("tr");
        inputs.forEach(element => {
          const col = document.createElement("th");
          let textInInput = element.value;
          col.innerText = textInInput;
          element.value = "";
          row.appendChild(col);
        })
    table.appendChild(row);
    
    const btn2 = document.createElement("button");
    btn2.innerText = "Usuń";
    row.appendChild(btn2);
    btn2.addEventListener("click", function(){
      row.remove();
      const buttons = document.querySelectorAll("button").length;
      if(buttons <= 1){
        const table = document.querySelector("table");
        table.remove();
        window.functionIsSet = false;
      }
    })
  }
  createRow()
  
  
})

window.functionIsSet = false;

//zadanie 10

//change:
//col.innerText = FirstLetter(el); 
function FirstLetter(el){
  
    textInInput = el.charAt(0).toUpperCase() + el.slice(1);
    return textInInput;
  }

//zadanie 11
function checkString(myString){
  if(/\d/.test(myString)){
    let numbersMult = 1;
    let numbersAdd = 0;
    for(let i = 0; i < myString.length; i++){
      var nElement = myString.charAt(i)
      if(/\d/.test(nElement)){
        numbersMult *= parseInt(nElement);
        numbersAdd += parseInt(nElement);
      }
    }
    console.log(`Suma: ${numbersAdd}`)
    for(let i = 0; i < numbersMult; i++){
      const div = document.createElement("div");
      div.innerText = myString;
      document.body.appendChild(div);
    }   
    
    
  }else{
    console.log("string nie ma liczb")
  }
}

checkString("212sadsad112da21")

//zadanie 12 
const exampleMethod = {
  fullProperty: "",
  findAndReplace: function () {
    const stringToReplace = "Ala";
    const index = this.fullProperty.indexOf(stringToReplace);
    if (index !== -1) {
      this.fullProperty = this.fullProperty.replace(
        stringToReplace,
        "Ola"
      );
      console.log("spring po zmianie: " + this.fullProperty);
    } else {
      const div = document.createElement("div");
      div.innerText = "Słowo Ala nie występuje w tekście.";
      document.body.appendChild(div);
    }
  },
};

const addPropertyToObject = (string) => {
  exampleMethod.fullProperty = string;
};

addPropertyToObject("to Ala ma kota");
exampleMethod.findAndReplace();
addPropertyToObject("to Ola ma kota");
exampleMethod.findAndReplace();

//zadanie 13

const array = [
  "a",
  "ab",
  "abc",
  "abcd",
  "abc",
  "ab",
];

const returnArrayWithStringLength = (stringArray) => {
  return stringArray.map((string) => string.length);
};

const returnSumOfStringsLength = (stringLengthArray) => {
  return stringLengthArray.reduce((sumUp, item) => sumUp + item);
};

const returnAverageOfStringsLength = (stringLengthArray) => {
  return (
    stringLengthArray.reduce((sumUp, item) => sumUp + item) /
    stringLengthArray.length
  );
};

const newArray = returnArrayWithStringLength(array);
const sum = returnSumOfStringsLength(newArray);
const average = returnAverageOfStringsLength(newArray);
console.log("Tablica: ", newArray);
console.log("Suma: ", sum);
console.log("Średnia: ",average);

