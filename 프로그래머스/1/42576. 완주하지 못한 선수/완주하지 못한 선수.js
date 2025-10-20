function solution(participant, completion) {
    let participantMap = {}
    
    participant.map(p => {
        if (participantMap[p]) participantMap[p] += 1
        else participantMap[p] = 1
    })
    
    completion.map(c => participantMap[c] -= 1)
    
    return Object.entries(participantMap).filter(([key,value]) => value == 1)[0][0]
}