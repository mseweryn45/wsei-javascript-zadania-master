//Zadanie 1

const person = {
    name: "Michał",
    surname: "Seweryn",
    age: 1,
    country: "Poland",
    city: "Kraków",
  };
  
  const secondPerson = {
    name: "Seweyn",
    surname: "Michal",
    age: 12,
    country: "Poland",
    city: "Kraków",
  };
  
  //this odwołuje się do obiektu dla którego est wywołany.
  function showInfo() {
    console.log(
      `Personal info: ${this.name} ${this.surname} ${this.age} ${this.country} ${this.city}`
    );
  }
  
  function changeAge() {
    this.age++;
  }
  
  person.showInfo = showInfo;
  secondPerson.showInfo = showInfo;
  person.changeAge = changeAge;
  secondPerson.changeAge = changeAge;
  
  person.showInfo();
  secondPerson.showInfo();
  
  person.changeAge();
  person.changeAge();
  console.log("person.age: ", person.age);
  
  secondPerson.changeAge();
  secondPerson.changeAge();
  
  console.log("person.age: ", secondPerson.age);
  
  // #### Zadanie 2
  
  person.favouriteMeal = [];
  secondPerson.favouriteMeal = [];
  
  function showMeal() {
    console.log("Ulubione posiłki: ", this.favouriteMeal.join(", "));
  }
  
  function addMeal(meal) {
    this.favouriteMeal.push(meal);
  }
  
  person.showMeal = showMeal;
  person.addMeal = addMeal;
  secondPerson.showMeal = showMeal;
  secondPerson.addMeal = addMeal;
  
  person.addMeal("naleśnik");
  person.addMeal("pierogi");
  person.addMeal("placek");
  person.showMeal();
  
  secondPerson.addMeal("naleśnik 2");
  secondPerson.addMeal("pierogi 2");
  secondPerson.addMeal("placek 2");
  secondPerson.showMeal();

//Zadanie 3


    function Calculator(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;

        this.sum = function(){
            let sum;
            sum = this.number1 + this.number2;
            console.log(sum);
        }

        this.sub = function(){
            let sub;
            sub = this.number1 - this.number2;
            console.log(sub);
        }

        this.mul = function(){
            let mul;
            mul = this.number1 * this.number2;
            console.log("multiplication: ", mul);
        }

        this.div = function(){
            if(this.number2 === 0){
                console.log("Nie można dzielić przez 0")
            }else{
                console.log("division: ", this.number1 / this.number2);
            }
        }


    }

    const cal1 = new Calculator(5,0);

    
    cal1.sum();
    cal1.sub();
    cal1.mul();
    cal1.div();


    //Zadanie 4

    function Ladder (){
        this.steps = 0;
        
        this.up = function(){
            this.steps++;
        }
        
        this.down = function(){
            if(this.steps > 0){
                this.steps--;
            }else {
                console.log('Jesteś na ziemi');
            }
            
        }
        this.showLevel = function(){
            console.log(this.steps);
        }
    }
    
    const ladder = new Ladder();
    ladder.up();
    ladder.up();
    ladder.up();
    ladder.up();
    ladder.up();
    ladder.down();
    ladder.showLevel();
    
