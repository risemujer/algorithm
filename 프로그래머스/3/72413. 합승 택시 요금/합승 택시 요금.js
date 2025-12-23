function solution(n, s, a, b, fares) {
    // 1. [목적지, 비용] 그래프 만들기
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [c, d, f] of fares) {
        graph[c].push([d, f]);
        graph[d].push([c, f]);
    }
    
    // 2. 다익스트라 알고리즘 -> 시작점에서 모든 지점까지 최단거리 계산
    function dijkstra(start) {
        const dist = Array(n + 1).fill(Infinity);
        const pq = [[0, start]];
        dist[start] = 0;
        
        while (pq.length > 0) {
            pq.sort((a,b) => a[0] - b[0]);
            const [cost, node] = pq.shift();
            
            if (cost > dist[node]) continue;
            
            for (const [next, fare] of graph[node]) {
                const newCost = cost + fare;
                if (newCost < dist[next]) {
                    dist[next] = newCost;
                    pq.push([newCost, next]);
                }
            }
        }
        
        return dist;
    }
    
    // 3. 각 지점에서 다익스트라 실행
    const distFromS = dijkstra(s);
    const distFromA = dijkstra(a);
    const distFromB = dijkstra(b);
    
    // 4. 모든 합승 지점 k에 대해 최소 비용 계산
    let answer = Infinity;
    for (let k = 1; k <= n; k++) {
        const cost = distFromS[k] + distFromA[k] + distFromB[k];
        answer = Math.min(answer, cost);
    }
    
    
    
    return answer;
}