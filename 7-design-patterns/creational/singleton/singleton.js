class Singleton {
  constructor() {
    const { instance } = this.constructor;
    if (instance) {
      return instance;
    }

    this.constructor.instance = this;
  }

  print() {
    console.log('Printing....');
  }
}

const s1 = new Singleton();
const s2 = new Singleton();

console.log('Are s1 and s2 same? ' + (s1 === s2));
