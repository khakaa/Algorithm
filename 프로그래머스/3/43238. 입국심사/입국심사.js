function solution(n, times) {
    let answer = 0;
    let start = 1;
    let end = times[times.length -1] * n; // 가장 오래걸리는 시간
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2); // 임의의 시간을 계산
        let people = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0) 
        // 임의의 시간 mid 동안 심사관 한 명당 심사할 수 있는 인원을 계산
        
        if (people < n) {
            start = mid + 1;
        } else {
            end = mid - 1;
            answer = mid
        }
    }
    return answer;
}