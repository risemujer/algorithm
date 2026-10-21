import java.util.*;

class Solution {
    public int solution(int[][] maps) {
        // 행, 열 개수 변수
        int r = maps.length;
        int c = maps[0].length;
        
        // dx, dy 선언
        int[] dx = {-1, 1, 0, 0}; // 상,하
        int[] dy = {0, 0, -1, 1}; // 좌, 우
        
        // Queue 선언 : nx, ny 위치 (앞으로 탐색할 좌표)
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{0, 0});
        
        // 거리 저장용 배열 선언 (각 좌표까지 얼마 걸렸는지)
        int[][] distance = new int[r][c];
        distance[0][0] = 1;

        // Queue가 빌 때까지 반복
        while (!queue.isEmpty()){
            // 현재 좌표
            int[] cur = queue.poll();
            // 현재 행
            int x = cur[0];
            int y = cur[1];
            
            // 상하좌우 4방향 확인
            for(int d=0; d<4; d++){
                int nx = x + dx[d];
                int ny = y + dy[d];
                // nx, ny가 배열 밖이면 continue
                if(nx < 0 || nx >= r || ny < 0 || ny >= c ) continue;
                // maps[nx][ny]가 0이면 continue
                if(maps[nx][ny] == 0) continue;
                // 이미 방문했으면 continue
                if(distance[nx][ny] != 0) continue;
                // 그렇지않으면 distance +1, queue에 nx,ny 넣기
                distance[nx][ny] = distance[x][y] + 1;
                queue.offer(new int[]{nx, ny});
            }
        }
        
        // 0이 아니면 해당 거리, 0이면 -1 리턴
        if (distance[r-1][c-1] == 0) {
            return -1;
        }
        
        return distance[r-1][c-1];

    }
}