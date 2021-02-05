//Zadanie 1
const list = document.getElementsByClassName("list");
console.log(list);

//zadanie 2

function getElementsByTag(tag){
    return document.querySelectorAll(tag);
}

const elements = getElementsByTag("li");
console.log(elements)

//zadanie 3

const secondList = document.getElementById("list");
console.log(secondList);

//zadanie 4
// Napisz funkcje która będzie wypisywać w konsoli elementy przekazane w parametrze. Do funkcji przekaż następujące elementy:
const show = (elements) => {
    console.log(elements);
  };

// wszystkie elementy li na stronie
show(document.getElementsByTagName("li"));
// wszystkie elementy ul na stronie
show(document.getElementsByTagName("ul"));
// wszystkie spany na stronie
show(document.getElementsByTagName("span"));
// wszystkie spany znajdujące się w elemencie div z klasą list
show(document.getElementsByTagName("div.list span"));
// wszystkie spany znajdujące się w elemencie div który posiada id="spans"
show(document.getElementsByTagName("div#spans span"));