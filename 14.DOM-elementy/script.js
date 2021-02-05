//zadanie 1
function  getElements(param){
    let tags = [];
     for(let i = 0; i < param.length; i++){
         tags.push(param[i].tagName);
     }
     console.log(tags)
 }
 
 const elems = document.getElementsByClassName("more-divs");
 
 getElements(elems);
 

 //zadanie 2 

 const shortList=document.querySelector('ul.short-list');

 function zad2(element){
     console.log(element.innerHTML);
     console.log(element.outerHTML);
     console.log(element.className);
     console.log(element.classList );
     console.log( element.dataset);
 }
 
 zad2(shortList)

 //zadanie 3

 function mathematic(){
    let element = document.getElementById('datasetCheck');
    console.log(element.dataset)
    let num1 = Number(element.dataset.numberone);
    let num2 = Number(element.dataset.numbertwo);
    let num3 = Number(element.dataset.numberThree);
    console.log(num1+num2+num3);
    console.log(num1-num2-num3);
}

mathematic();

// Zadanie 4
document.getElementById("spanText").innerHTML ="new text";



//Zadanie 5
document.getElementById("spanText").className ="newclass";

//Zadanie 6

const div = document.getElementById("classes");
const classes = div.classList;

function showClasses(classesToShow){
    
    var str = "";
    
    classesToShow.forEach(className => {
        console.log(className);
        str += `+${className}`;
    });
    
    str = str.substring(1);
    
    console.log(str);
}

showClasses(classes);

div.classList = "";

console.log("Usunięto wszystkie klasy")

//zadanie 7

const func5 = (els) => {
	for (let el of [...els]) if (!el.getAttribute('data-text')) el.setAttribute('data-text', 'text');
};
func5(document.querySelectorAll('#longList>li'));

//zadanie 8 

function makeObject(string)
{   
    let obj = {
        newClass: string
    };

    return obj;
}

function readAndAssign(obj)
{
    let div = document.getElementById("myDiv");
    let newClass = obj.newClass;
    div.classList.add(newClass);
}

let myObj = makeObject("string_z_parametru");
readAndAssign(myObj);

//zadanie 9 



const div = document.getElementById('numbers');

const addClass = () => {
  let params = Math.floor(Math.random() * 10);
    
  if(params % 2 == 0) div.className = "even";
    else div.className = "odd";
};

addClass();


//zadanie 10

var rows = 1;

for (let i =1; i<=rows; i++){
    console.log()
}


//zadanie 11 


const func5 = (els) => {
	for (let el of [...els]) {
      el.setAttribute('data-old', el.innerHTML);
      el.innerHTML = Math.floor(Math.random() * 11);
    } 
};
func5(document.querySelectorAll('#longList>li'));