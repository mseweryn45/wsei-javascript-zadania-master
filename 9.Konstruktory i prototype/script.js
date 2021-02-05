//zadanie 1

function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
    
    this.changeAge = age => this.age = age;
    this.changeCity = city => this.city = city;
}

const user1 = new Person('Mateusz', 'Kapusta', 25, 'Poland', 'Cracov', 'Polish')
const user2 = new Person('Mateusz2', 'Kapusta2', 252, 'Poland2', 'Cracov2', 'Polish')

user1.changeAge(100000)
console.log(user1)
console.log(user2)

//#### Zadanie 2

//Stwórz konstruktor kalkulatora z czterema podstawowymi działaniami. Konstruktor powinien posiadać pamięć operacji oraz metody do odpowiednich działań. Dopisz również metodę wypisującą zawartość pamięci oraz czyszczącą zawartość pamięci kalkulatora. Stwóz na podstawie konstruktora minimum dwa niezależne kalkulatory.

function Calculator() {
  this.cache = 0;
}

Calculator.prototype.makeAction = function (action, number) {
  switch (action) {
    case "+":
      this.adding(number);
      break;
    case "-":
      this.subtraction(number);
      break;
    case "/":
      this.division(number);
      break;
    case "*":
      this.multiplication(number);
      break;
  }
};

Calculator.prototype.adding = function (number) {
  this.cache += number;
};

Calculator.prototype.subtraction = function (number) {
  this.cache -= number;
};

Calculator.prototype.multiplication = function (number) {
  this.cache *= number;
};

Calculator.prototype.division = function (number) {
  this.cache /= number;
};

Calculator.prototype.clear = function () {
  this.cache = 0;
};

Calculator.prototype.show = function () {
  console.log("Wynik: ", this.cache);
};

const calcOne = new Calculator();
const calcTwo = new Calculator();

console.log("Kalkulator 1: ");
calcOne.makeAction("+", 22);
calcOne.makeAction("+", 33);
calcOne.show();
calcOne.makeAction("/", 2);
calcOne.show();
calcOne.makeAction("*", 10);
calcOne.show();
calcOne.makeAction("-", 75);
calcOne.show();

calcTwo.makeAction("+", 66);
calcTwo.makeAction("+", 44);
calcTwo.show();
calcTwo.makeAction("/", 10);
calcTwo.show();
calcTwo.makeAction("*", 30);
calcTwo.show();
calcTwo.makeAction("-", 94);
calcTwo.show();

// #### Zadanie 3( gra )


let gameOne;
let gameTwo;

function Game() {}

Game.prototype.number = 0;
Game.prototype.gameInterval = null;

Game.prototype.start = function (anotherGame) {
  Game.prototype.gameInterval = setInterval(() => {
    Game.prototype.gameNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Wylosowany numer: ", Game.prototype.gameNumber);
    anotherGame.check();
  }, 1000);
};

Game.prototype.check = function () {
  if (Game.prototype.gameNumber > 5) {
    console.log("Koniec");
    clearInterval(Game.prototype.gameInterval);
  }
};

gameOne = new Game();
gameTwo = new Game();

gameOne.start(gameTwo);