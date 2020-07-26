class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  toString() {
    return `${this.id}: ${this.name}`;
  }
}

class PersonFactory {
  constructor() {
    this.id = 0;
  }
  createPerson(name) {
    const person = new Person(this.id, name);
    this.id++;
    return person;
  }
}

const pf = new PersonFactory();
const jack = pf.createPerson('Jack');
console.log(jack.toString());
const mack = pf.createPerson('Mack');
console.log(mack.toString());
const pack = pf.createPerson('Pack');
console.log(pack.toString());
