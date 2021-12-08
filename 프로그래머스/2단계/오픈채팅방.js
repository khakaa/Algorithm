function solution(record) {
  let contents = record.map(r => r.split(" "));
  let NickName = {};
  let answer = [];

  for (let i in record){
    if (contents[i].length === 3){
        NickName[contents[i][1]] = contents[i][2]; 
    }
  }

  for (let i in record){
    if (contents[i][0] == 'Enter'){
      answer.push(NickName[contents[i][1]] + "님이 들어왔습니다.");
    }
    else if(contents[i][0] == 'Leave'){
      answer.push(NickName[contents[i][1]] + "님이 나갔습니다.");
    }
  }
  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
