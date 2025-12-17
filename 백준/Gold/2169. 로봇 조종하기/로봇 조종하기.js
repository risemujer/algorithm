const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const grid = [];
for (let i = 1; i <= N; i++) {
    grid.push(input[i].split(' ').map(Number));
}

// dp[i][j] = (i, j) 위치까지 도달할 수 있는 최대 가치
const dp = Array.from({ length: N }, () => Array(M).fill(-Infinity));

// 첫 번째 칸 초기화
dp[0][0] = grid[0][0];

// 첫 번째 행 초기화 (오른쪽으로만 이동 가능)
for (let j = 1; j < M; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
}

// 각 행별로 처리
for (let i = 1; i < N; i++) {
    // 왼쪽에서 오른쪽으로 가는 경우의 최댓값
    const left = Array(M).fill(-Infinity);
    // 오른쪽에서 왼쪽으로 가는 경우의 최댓값
    const right = Array(M).fill(-Infinity);
    
    // 왼쪽에서 오른쪽으로 이동
    left[0] = dp[i - 1][0] + grid[i][0];
    for (let j = 1; j < M; j++) {
        left[j] = Math.max(
            dp[i - 1][j] + grid[i][j],  // 위에서 내려오는 경우
            left[j - 1] + grid[i][j]     // 왼쪽에서 오는 경우
        );
    }
    
    // 오른쪽에서 왼쪽으로 이동
    right[M - 1] = dp[i - 1][M - 1] + grid[i][M - 1];
    for (let j = M - 2; j >= 0; j--) {
        right[j] = Math.max(
            dp[i - 1][j] + grid[i][j],   // 위에서 내려오는 경우
            right[j + 1] + grid[i][j]    // 오른쪽에서 오는 경우
        );
    }
    
    // 현재 행의 각 위치에서 최댓값 선택
    for (let j = 0; j < M; j++) {
        dp[i][j] = Math.max(left[j], right[j]);
    }
}

console.log(dp[N - 1][M - 1]);