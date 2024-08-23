function solution(s){
    var answer = true;
    
    let upper = s.toUpperCase()
    console.log("upper >", upper)
    
    let p_count = upper.split("P").length - 1;
    let y_count = upper.split("Y").length - 1;
    
    return p_count === y_count 
}