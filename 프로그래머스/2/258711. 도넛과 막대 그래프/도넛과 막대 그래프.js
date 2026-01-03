function solution(edges) {
    // 1. 각 정점의 화살표 개수
    const incoming = {};
    const outgoing = {};
    
    // 모든 간선 확인
    for (const [from, to] of edges) {
        if (!outgoing[from]) {
            outgoing[from] = 0;
        }
        outgoing[from]++;
        
        if (!incoming[to]) {
            incoming[to] = 0;
        }
        incoming[to]++;
        
        // 정점 존재 표시
        if (!incoming[from]) incoming[from] = 0;
        if (!outgoing[to]) outgoing[to] = 0;
    }
    
    // 2. 모든 정점 번호 모으기
    const allNum = new Set([
        ...Object.keys(incoming),
        ...Object.keys(outgoing)
    ]);
    
    // 3. 생성된 정점 찾기 & 그래프 개수 세기
    let createdNum = 0;
    let totalGraphCount = 0;
    let stickCount = 0;
    let eightCount = 0;
    
    for (const vertex of allNum) {
        const v = Number(vertex);
        
        const inCount = incoming[v] || 0;
        const outCount = outgoing[v] || 0;
        
        // 생성된 정점
        if (inCount === 0 && outCount >= 2) {
            createdNum = v;
            totalGraphCount = outCount;
            continue;
        }
        
        // 막대 그래프의 끝 정점
        if (outCount === 0) {
            stickCount++;
            continue;
        }
        
        // 나가는 2개 AND 들어오는 2개 이상
        if (outCount === 2 && inCount >= 2) {
            eightCount++;
        }
    }
    
    // 도넛 그래프 개수 계산
    const donutCount = totalGraphCount - stickCount - eightCount;
    
    return [createdNum, donutCount, stickCount, eightCount];
}