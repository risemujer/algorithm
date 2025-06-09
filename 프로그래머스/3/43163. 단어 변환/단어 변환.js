function solution(begin, target, words) {
    // 1) 변환 불가능한 경우 바로 0 리턴
    if(!words.includes(target)) {
        return 0;
    }
    
    // 2) 한 글자만 다른지 검사하는 함수
    function isOneWordDiff(a, b) {
        let diff = 0;
        for(let i = 0; i < a.length ; i++) {
            // 글자 다르면 diff 카운트
            if(a[i] !== b[i]) diff++;
            // 두 글자 이상 다르면 false
            if(diff > 1) return false;
        }
        // diff=1이면 true
        return diff === 1;
    }
    
    // 3) BFS 자료구조
    const queue = []; // [word, step]
    const visited = new Set();
    
    // 0단계로 begin 단어를 넣고 방문처리
    queue.push([begin, 0]);
    visited.add(begin); 
    
    // 4) BFS : step별로 '한 글자 차이' 연결 따라 탐색
    while(queue.length > 0) {
        const [current, step] = queue.shift();
        for(let word of words) {
            // 방문하지 않았고 한 글자만 다를 때
            if(!visited.has(word) && isOneWordDiff(current, word)) {
                if(word === target) {
                    // word = target이면 step + 1 이 최소 단계
                    return step + 1;
                }
                  // target이 아니면 다음 단계 queue에 추가
            queue.push([word, step + 1]);
            visited.add(word);
            }
          
        }
    }
    
    // 5) 끝까지 못 찾으면 0 리턴
    return 0;
    
}