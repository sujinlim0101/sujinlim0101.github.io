
### 문제
N×N크기의 땅이 있고, 땅은 1×1개의 칸으로 나누어져 있다. 각각의 땅에는 나라가 하나씩 존재하며, r행 c열에 있는 나라에는 A[r][c]명이 살고 있다. 인접한 나라 사이에는 국경선이 존재한다. 모든 나라는 1×1 크기이기 때문에, 모든 국경선은 정사각형 형태이다.

오늘부터 인구 이동이 시작되는 날이다.

인구 이동은 하루 동안 다음과 같이 진행되고, 더 이상 아래 방법에 의해 인구 이동이 없을 때까지 지속된다.

국경선을 공유하는 두 나라의 인구 차이가 L명 이상, R명 이하라면, 두 나라가 공유하는 국경선을 오늘 하루 동안 연다.
위의 조건에 의해 열어야하는 국경선이 모두 열렸다면, 인구 이동을 시작한다.
국경선이 열려있어 인접한 칸만을 이용해 이동할 수 있으면, 그 나라를 오늘 하루 동안은 연합이라고 한다.
연합을 이루고 있는 각 칸의 인구수는 (연합의 인구수) / (연합을 이루고 있는 칸의 개수)가 된다. 편의상 소수점은 버린다.
연합을 해체하고, 모든 국경선을 닫는다.
각 나라의 인구수가 주어졌을 때, 인구 이동이 며칠 동안 발생하는지 구하는 프로그램을 작성하시오.

### 입력
첫째 줄에 N, L, R이 주어진다. (1 ≤ N ≤ 50, 1 ≤ L ≤ R ≤ 100)

둘째 줄부터 N개의 줄에 각 나라의 인구수가 주어진다. r행 c열에 주어지는 정수는 A[r][c]의 값이다. (0 ≤ A[r][c] ≤ 100)

인구 이동이 발생하는 일수가 2,000번 보다 작거나 같은 입력만 주어진다.

### 출력
인구 이동이 며칠 동안 발생하는지 첫째 줄에 출력한다.



```
result(['2 20 50', '50 30', '20 40']);
result(['2 20 50', '50 30', '30 40']);
result(['4 10 50', '10 100 20 90', '80 100 60 70', '70 20 30 40', '50 20 100 10']);

function result(input) {
  const [n, l, r] = input.shift().split(' ').map(Number);
  const countries = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

  for (let i = 0; i < n; i++) {
    countries[i] = input.shift().split(' ').map(Number);
  }

  let answer = 0;
  
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  while (true) {
    let flag = false;
    const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
          let queue = [[i, j]];
          let visitedRecord = [[i, j]];
          let cnt = 1;
          let sumPopulation = countries[i][j];
          visited[i][j] = true;

          while (queue.length) {
            // queue에 있는 원소 꺼내줌
            const [x, y] = queue.shift();
            for (let k = 0; k < 4; k++) {
              // 인접한 노드 모두 돌기  
              const [nx, ny] = [x + dx[k], y + dy[k]];

              if (nx >= 0 && nx < n && ny >= 0 && ny < n) { // 배열을 벗어나지 않도록

                const diff = Math.abs(countries[x][y] - countries[nx][ny]); // 차이값
                if (diff >= l && diff <= r && !visited[nx][ny]) { // 차이값이 조건에 부합하는지 && 방문한적이 없는지
                  visited[nx][ny] = true;
                  // queue에 인접 노드 넣기    
                  queue.push([nx, ny]);
                  visitedRecord.push([nx, ny]);
                  cnt++;
                  sumPopulation += countries[nx][ny];
                  flag = true;
                }
              }
            }
          }
          // 인접 노드 다 돔.
          const changePopulation = Math.floor(sumPopulation / cnt);

          for (const [x, y] of visitedRecord) {
            countries[x][y] = changePopulation;
          }
        }
      }
    }
    // countries를 한바퀴 끝까지 돌았는데 flag 값이 false라면, 인구 이동이 더이상 발생하지 않았다는 뜻이므로 break해줌.
    if (!flag) {
      break;
    }
    // countries를 한차례돌며 확인하였고, 각 연합들의 인구이동은 동시에 일어나므로 answer을 1 더해준다.
    answer += 1;
  }
}

```