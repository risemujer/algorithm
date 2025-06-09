function solution(num_list) {
    // 짝수와 홀수의 개수를 넣어 줄 변수 선언
    let even = 0;
    let odd = 0;
    
    for(let num of num_list) {
        if (num % 2 === 0) {
            even++;
        }else {
            odd++;
        }
    }
    
    return [even, odd];
    
    
}