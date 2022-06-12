function solution(line) {
  let answer = [];

  let qwerty = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [0, 3],
    5: [0, 4],
    6: [0, 5],
    7: [0, 6],
    8: [0, 7],
    9: [0, 8],
    0: [0, 9],
    Q: [0, 0],
    W: [0, 1],
    E: [0, 2],
    R: [0, 3],
    T: [0, 4],
    Y: [0, 5],
    U: [0, 6],
    I: [0, 7],
    O: [0, 8],
    P: [0, 9],
    left: ["1", "2", "3", "4", "5", "Q", "W", "E", "R", "T"],
    right: ["6", "7", "8", "9", "0", "Y", "U", "I", "O", "P"],
  };

  let lmanhattanDistance = 0;
  let lhorizonDistance = 0;
  let rmanhattanDistance = 0;
  let rhorizonDistance = 0;

  let leftP = "Q";
  let rightP = "P";

  for (let i = 0; i < line.length; i++) {
    lmanhattanDistance =
      Math.abs(qwerty[line[i]][0] - qwerty[leftP][0]) +
      Math.abs(qwerty[line[i]][1] - qwerty[leftP][1]);

    rmanhattanDistance =
      Math.abs(qwerty[line[i]][0] - qwerty[rightP][0]) +
      Math.abs(qwerty[line[i]][1] - qwerty[rightP][1]);

    if (lmanhattanDistance !== rmanhattanDistance) {
      answer.push(lmanhattanDistance > rmanhattanDistance ? 1 : 0);

      if (lmanhattanDistance > rmanhattanDistance) rightP = line[i];
      else leftP = line[i];
    } else {
      lhorizonDistance = Math.abs(qwerty[line[i]][0] - qwerty[leftP][0]);
      rhorizonDistance = Math.abs(qwerty[line[i]][0] - qwerty[rightP][0]);

      if (lhorizonDistance === rhorizonDistance) {
        answer.push(qwerty["right"].includes(line[i]) ? 1 : 0);

        if (qwerty["right"].includes(line[i])) rightP = line[i];
        else leftP = line[i];
      } else {
        answer.push(lhorizonDistance > rhorizonDistance ? 1 : 0);

        if (lhorizonDistance > rhorizonDistance) rightP = line[i];
        else leftP = line[i];
      }
    }
  }

  return answer;
}
