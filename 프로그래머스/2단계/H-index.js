function solution(citations){
    const arr = citations.sort((a,b) => b-a);

    let i = 0;
    while (i + 1 <= arr[i]) i++
    
    return i
}

console.log(solution([3,0,6,1,5]))