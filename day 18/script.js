// console.log("day 19 opp")

// let bricks1={
//     name:"abc",
//     color:'red',
//     qty:10
// }
// let bricks2={
//     name:"abc",
//     color:'orange',
//     qty:20
// }
// let bricks3={
//     name:"abc",
//     color:'yellow',
//     qty:10
// // }
// class and Object 
// class->blueprint
// object->instance -crated from class

class BricksFactory{
    constructor(name,qty,color){
        this.name=name
        this.qty=qty
        this.color=color

        console.log({name:this.name,qty:this.qty,color:this.color})
    }

    //methods
    getQuantity(){
        return this.qty
    }
    setQuantity(value){
        return this.qty=value
    }
}
let b1=new BricksFactory("abc",7,'red')
let b2=new BricksFactory("abdsc",10,'blue')
let b3=new BricksFactory("abdfdsc",27,'orange')

b1.getQuantity()

class Animal{
    eat(){
        console.log("eating....")
    }
}
// let a1=new Animal()
class Dog extends Animal{
    constructor(age){
        super()
        this.age=age

    }
}
let d1=new Dog("tommy",13)