module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.total()}
o) 平均值 = ${sequence.ave().toFixed(2)}`);
};

class Sequence {
  constructor(input) {
	this.input = input;
	this.input = this.input.sort();
  }

  minimum() {
	return this.input[0]
  }
  maximum() {
	  return this.input[this.input.length - 1];
  }
  total() {
	  return this.input.length;
  }
  ave() {
	  var s = 0;
	  for(var key of this.input) {
		 s = s + key; 
	  }
	  return s / this.input.length;
  }
}
