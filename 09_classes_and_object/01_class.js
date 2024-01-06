

/*
The constructor method is a special method:

It has to have the exact name "constructor"
It is executed automatically when a new object is created
It is used to initialize object properties.
If you do not define a constructor method, JavaScript will add an empty constructor method.

*/

class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating.`)
    }

    walking(){
        console.log(`${this.name} is walking.`)
    }
}

class Engineering extends Person{

    constructor(name, age, field, company){
        super(name, age)
        this.field = field;
        this.company = company;
    }

    working(){
        console.log('working')
    }

    // method overriding.
    eat(){
        console.log('not eating')
    }
}

let person = new Person('anil', 23)
person.eat()
console.log()

let engineer = new Engineering( 'annil', 23, 'civil', 'tech');
engineer.working()
engineer.eat()