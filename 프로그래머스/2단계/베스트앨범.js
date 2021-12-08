// 1. genres 별로 hash map에 넣기 (고유번호 : 재생횟수)
// 2. genres
// 3. 재생횟수 큰거부터 2곡 반환

function solution(genres, plays) {
  const genresList = genres.reduce((acc, cur, idx) => {
    if (!acc[cur]) {
      acc[cur] = {
        total: 0,
        list: [],
      };
    }

    acc[cur].total += plays[idx];
    acc[cur].list.push([idx, plays[idx]]);
    return acc;
  }, {});

  const sortGenresList = Object.values(genresList).sort((a,b) => b.total - a.total);

  const answer = sortGenresList.reduce((acc,gen) => {
    gen.list.sort((a,b) => b[1] - a[1]);
    console.log(gen)
    acc.push(gen.list[0][0]);

    if (gen.list.length > 1){
        acc.push(gen.list[1][0]);
    }
    return acc;
  },[]);
  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
