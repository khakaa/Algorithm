class Stack {
  constructor() {
    this.data = []; // 값을 저장할 배열
    this.top = 0; // 최상위 요소의 인덱스
  }

  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  length() {
    return this.top;
  }

  peek() {
    return this.data[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }

  pop() {
    let popVal = this.data[this.top - 1];
    this.data = this.data.slice(0, this.top - 1);
    this.top = this.top - 1;
    return popVal;
  }

  print() {
    let top = this.top - 1;

    while (top >= 0) {
      console.log(this.data[top]);
      top--;
    }
  }
}
