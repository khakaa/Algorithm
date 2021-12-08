function solution(board, moves) {
    let answer = 0;
    let temp = 0;
    let stack = [];

    for (let i = 0; i < moves.length; i++){
        for (let j = 0; j < board.length; j++){
            if (board[j][moves[i]-1] !== 0){
                if (temp === board[j][moves[i]-1]){
                    answer += 2;
                    if (stack.length > 0){
                        stack.pop();
                        temp = stack[stack.length - 1];
                    } else {
                        temp = 0;
                    }
                } else {
                    stack.push(board[j][moves[i]-1]);
                    temp = board[j][moves[i]-1];
                }
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }

    return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
