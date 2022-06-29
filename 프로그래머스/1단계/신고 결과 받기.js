function solution(id_list, report, k) {
  let reportIdObj = {};
  let answer = new Array(id_list.length).fill(0);

  for (let id of id_list) {
    reportIdObj[id] = [];
  }

  for (let r of report) {
    let reportId = r.split(" ")[0];
    let stopId = r.split(" ")[1];

    if (!reportIdObj[stopId].includes(reportId))
      reportIdObj[stopId].push(reportId);
  }

  for (let [key, value] of Object.entries(reportIdObj)) {
    if (value.length >= k) {
      value.map((id) => {
        answer[id_list.indexOf(id)] += 1;
      });
    }
  }

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
