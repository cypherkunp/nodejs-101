class CEO {
  get name() {
    return CEO._name;
  }
  set name(value) {
    CEO._name = value;
  }

  get age() {
    return CEO._age;
  }
  set age(value) {
    CEO._age = value;
  }

  toString() {
    return `CEO's name is ${this.name}` + `and his age is ${this.age}`;
  }
}

CEO._age = undefined;
CEO._name = undefined;

let ceo = new CEO();
ceo.name = 'Adam Smith';
ceo.age = 55;

let ceo2 = new CEO();
ceo2.name = 'John Gold';
ceo2.age = 66;

console.log(ceo.toString());
console.log(ceo2.toString());
