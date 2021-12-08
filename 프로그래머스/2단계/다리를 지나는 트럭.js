function solution(bridge_length, weight, truck_weights) {
  let bridge = [];
  let flag = true;
  let sum = 0;
  let answer = 0;

  //
  for (let i = 0; i < bridge_length; i++) {
    bridge.push(0);
  }

  while (flag) {
    // shift 한 값 기억
    let shiftVal = bridge.shift();

    // shift했으니까 weight를 재기위한 sum에서 빼준다.
    sum -= shiftVal;

    if (sum + truck_weights[0] > weight) {
      bridge.push(0);
    } else {
      sum += truck_weights[0];
      bridge.push(truck_weights[0]);
      truck_weights.shift();
    }
    answer++;

    if (truck_weights.length == 0) {
      for (let i = 0; i < bridge_length; i++) {
        answer++;
      }
      flag = false;
    }
  }

  return answer;
}

console.log(solution(100, 100, [10]));
