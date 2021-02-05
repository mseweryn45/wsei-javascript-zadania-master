//zadanie 1


const car = {
    color: "blue",
    marka: "audi",
    VIN: "2ssad232ds2ds"
}

console.log(car.color);
console.log(car.marka);
console.log(car.VIN);

//zadanie 2

const car = {
    color: "blue",
    marka: "audi",
    VIN: "84816519841",
    changeName: function(newName){
        this.marka = newName;
        console.log("new name in object:", car.marka);
    }
}


car.changeName("Polonez");

//zadanie 3

let obj = {

    sumNumbers: function (tab) {
        this.sum = tab.reduce((a, b) => a + b);
        console.log(this.sum);
    }
}
obj.sumNumbers([2, 5, 3]);

//zadanie 4

const newCar = {
    name: "Opel",
    engine: "2.0CDTI",
    age: 12,
  };
  
  for (let key in newCar) {
    console.log(`${key}:`, newCar[key]);
  }

  //zadanie 5

  let car = {
    name: 'BMW',
    age: 12,
    horsePower: 350,
    engine: {
        is: true,
        count:5
    }
}

for(let property in car.engine){
    console.log(`${property}: ${car.engine[property]}`)
}

  //zadanie 6

  const obj = {

}

obj.what = "i'm object"
obj.hello = () => {
    console.log("Hello");
}
console.log(obj.what);
obj.hello;


