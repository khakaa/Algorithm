function solution(array, commands) {
    let answer = []
    commands.map(([i,j,k]) => {
        const newSortedArray = array.slice(i-1,j).sort((a,b) => a-b)
        answer.push(newSortedArray[k-1])
    })
    return answer;
}