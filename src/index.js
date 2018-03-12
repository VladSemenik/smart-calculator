class SmartCalculator {
  constructor(initialValue) {
    // your implementation
      this.variable = ''+initialValue;
  }

  add(number) {
      this.variable += String('+'+number);
      return this;
  }
  
  subtract(number) {
    this.variable += String('-'+number);
      return this;
  }

  multiply(number) {
    this.variable += String('*'+number);
      return this;
  }

  devide(number) {
      this.variable += String('/'+number);
      return this;
  }

  pow(number) {
    this.variable += String('**'+number);
      return this;
  }
    valueOf(){
        return eval(this.variable);
    }
}

module.exports = SmartCalculator;
