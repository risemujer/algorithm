const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); // 도시 수
const M = Number(input[1]); // 여행 계획 도시 수

// 연결 도시 그래프 읽기
const graph = [];
for (let i = 0; i < N; i++) {
    graph.push(input[i + 2].split(' ').map(Number));
}

// 여행 계획 읽기
const plan = input[N + 2].split(' ').map(num => Number(num) - 1);

// 연결된 도시를 같은 그룹으로 묶기
// i번 도시의 부모
const parent = Array.from({ length: N }, (_, i) => i);

// x가 속한 그룹의 부모 찾기
function find(x) {
    if (parent[x] === x) {
        return x;
    }
    parent[x] = find(parent[x]);
    return parent[x];
}

// x와 y가 같은 루트이면 합치기
function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    
    if (rootX === rootY) return;
    
    parent[rootY] = rootX;
}

// 연결된 도시 같은 그룹으로 묶기
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] === 1) {
            union(i, j);
        }
    }
}

// 여행 계획 도시가 같은 그룹인지 확인
const firstGroup = find(plan[0]);

let isPossible = true;
for (let i = 1; i < M; i++) {
    if (find(plan[i]) !== firstGroup) {
        isPossible = false;
        break;
    }
}

console.log(isPossible ? 'YES' : 'NO');