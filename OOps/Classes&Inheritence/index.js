class Myclass {
  #var1 = "hey";
  #var2 = "hello"
  constructor(val1,val2){
    this.a = val1;
    this.b = val2;
    // this.#var1 = "hey I am private var1"
    // this.#var2 = "hey I am private var2"
   }
  print(){
    console.log("Printing.....")
  }
  setter(v1, v2){
    this.#var1 = v1;
    this.#var2 = v2;
  }
   getter(){
    console.log("Private var1 is " + this.#var1);
    console.log("Private var2 is " + this.#var2);
  }
  get dataVar1(){
    return this.#var1;
  }
  get dataVar2(){
    return this.#var2;
  }
  set setVar1(v1){
    this.#var1 = v1;
  }
  set setVar2(v2){
    this.#var2 = v2;
  }
};

const obj1 = new Myclass(20,"Praash");
console.log(obj1);
obj1.print();

// console.log(obj1.var1);
// console.log(obj1.var2);
obj1.setter("My name is P1 ", "My name is P2");
obj1.getter();
obj1.setVar1 = "I am coder";
obj1.setVar2 = "I love coding";
console.log("Var1 " + obj1.dataVar1)
console.log("Var2 " + obj1.dataVar2)

