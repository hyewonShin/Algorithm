function solution(x, n) {
    var answer = [];
    let item = []
    
    for(let i=1; i<n+1; i++){
        answer.push(x * i)
    }
    
    return answer;
}