// Zadanie 1

// Rodzica elementu id="buz"
console.log(document.getElementById("buz").parentNode)
// Brata elementu id="baz"
console.log(document.getElementById("baz").previousElementSibling)
// Dzieci elementu id="foo"
console.log(document.getElementById("foo").children)
// rodzica elementu id"foo"
console.log(document.getElementById("foo").parentNode)
// pierwsze dziecko elementu id="foo"
console.log(document.getElementById("foo").firstElementChild)
// środkowe dziecko elementu id="foo"
var elem = document.getElementById("foo").children
console.log(elem[Math.floor(elem.length/2)]);

//zadanie 2

function listen(id){
    document.getElementById(id).addEventListener("click", (e) => {
        
        console.log(e.target.querySelector('div').innerText);
        
    })
}

listen("ex2");

//Zadanie 3

const addEventOnButtons = () => {
    const buttons = document.getElementById("ex3").getElementsByTagName("button");
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        changeParentColor(this.parentElement);
        const span = this.parentElement.getElementsByTagName("span")[0];
  
        span.style.display =
          span.style.display === "inline-block" ? "none" : "inline-block";
      });
    }
  };
  
  addEventOnButtons();
  
  // Zadanie 4
  const changeParentColor = (parent) => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  
    parent.style.backgroundColor = randomColor;
  };

//Zadanie 5

const lightElements = () => {
    const parent = document.getElementById("ex5");
    const colouredDivs = parent.getElementsByTagName("div");
  
    for (let i = 0; i < colouredDivs.length; i++) {
      colouredDivs[i].addEventListener("mouseenter", function () {
        const currentColor = this.style.backgroundColor;
        const liElements = parent.getElementsByTagName("li");
        //   lightFirstElement(currentColor, liElements);
        //   lightLastElement(currentColor, liElements);
        //   lightLastElement(currentColor, liElements);
        //   lightEvenElements(currentColor, liElements);
        lightContainer(currentColor, liElements);
      });
    }
  };

  // 1. Tylko pierwszy element listy
const lightFirstElement = (currentColor, elements) => {
    elements[0].style.backgroundColor = currentColor;
  };
  // 2. tylko ostatni element listy
  const lightLastElement = (currentColor, elements) => {
    elements[elements.length - 1].style.backgroundColor = currentColor;
  };
  // 3. Parzyste elementy listy
  const lightEvenElements = (currentColor, elements) => {
    for (let i = 0; i < elements.length; i += 2) {
      elements[i].style.backgroundColor = currentColor;
    }
  };
  // 4. Wszystkie elementy listy
  const lightAllElements = (currentColor, elements) => {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = currentColor;
    }
  };
  // 5. Żaden z elementów - tylko cała lista
  const lightContainer = (currentColor, elements) => {
    elements[0].parentElement.style.backgroundColor = currentColor;
  };
  lightElements();
  
  //zadanie 6

  var elem = document.getElementById('ex6')
    var firstElem = elem.firstElementChild.firstElementChild.firstElementChild;
    var secondElem = elem.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
    var thirdElem = elem.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
    console.log(firstElem, secondElem, thirdElem);
