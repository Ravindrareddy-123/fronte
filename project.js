function outerFunction(){
        let counter = 0;
        function innerFunction(){
            counter=+1
        }
        return innerFunction
    }
    let increment  = outerFunction()
    
    
  console.log(increment);
  console.log(increment);
  console.log(increment);

//class1
  class Bike {
    constructor(brand,model){
           this.brand = brand;
          this.model = model;
    }
    motorStart() {
        console.log(`${this.brand} ${this.model} is motor starting`);
    }
}
    const myBike = new Bike("pulsar", "ns200");
 myBike.motorStart();


 //class2
 class Animal {
    constructor(animal1,animal2){
         this.animal1 = animal1
         this.animal2 =animal2
    }
    fightingAnimals(){
        console.log(`${this.animal1}, ${this.animal2} ,both are fighting`);

    }

 }
 const forestAnimal = new Animal("lion","tiger");
 forestAnimal.fightingAnimals();

  //call,apply,bind
var student1 = {studentName:"Ravindra", gamil:"rrrr@gamil.com"};
var student2 = {studentName:"Mahesh", gamil:"mmm@gmail.com"};

function attendance(s1,s2){
    console.log(s1+this.studentName + this.gamil + s2)
}
attendance.call(student1 ,"are you present?", "yes si,");
attendance.apply(student2,["are you present?", "yes sir"]);
let namaste = attendance.bind(student1,"are you present?", "yes sir")
attendance()


//call,apply,bind
var teacher1 = {teacher2Name:"Ankit", gamil:"aaa@gamil.com"};
var teacher2 = {teacher2:"Sudheer", gamil:"sss@gmail.com"};

function classes(t1,t2){
    console.log(t1+this.studentName + this.gamil + t2)
}
classes.call(teacher1,"are you present?", "yes si,");
classes.apply(teacher2,["are you present?", "yes sir"]);
let course = classes.bind(teacher1,"are you present?", "yes sir")
classes()

 

    let ravi ={
        dance: "yes i can dance",

    }
    let mahesh={
        singing: "yes i can sing",
      __proto__:ravi

    }
    console.log(mahesh.dance)
    console.log(mahesh.singing)


    let animal ={
         run:"yes i can run",
    }
    let monkey={
        jumping:"yes it jumps",
      __proto__:animal

    }
    console.log(monkey.run)
    console.log(monkey.jumping)


    
    














  
  
