---
emoji: ✒️
title: Chapter 11 - 그리디 문제, 모험가 길드
date: "2022-06-04 00:00:00"
author: 찐코딩
tags: algorithm
categories: algorithm
---

# 모험가 길드

한 마을에 모험가가 N명 있습니다. 모험가 길드에서는 N명의 모험가를 대상으로 '공포도'를 측정했는데,'공포도'가 높은 모험가는 쉽게 공포를 느껴 위험 상황에서 제대로 대처할 능력이 떨어집니다. 모험가 길드장인 동빈이는 모험가 그룹을 안전하게 구성하고자 공포도가 X인 모험가는 반드시 X명 이상으로구성한 모험가 그룹에 참여해야 여행을 떠날 수 있도록 규정했습니다. 동빈이는 최대 몇 개의 모험가 그룹을 만들 수 있는지 궁금합니다.

N명의 모험가에 대한 정보가 주어졌을 때, 여행을 떠날 수 있는 그룹 수의 최댓값을 구하는 프로그램을 작성하세요.

예를 들어, N = 5이고, 각 모험가의 공포도가 다음과 같다고 가정합시다.

2 3 1 2 2

이 경우 그룹 1에 공포도가 1,2,3인 모험가를 한 명씩 넣고, 그룹 2에 공포도가 2인 남은 두 명을 넣게 되면 총 2개의 그룹을 만들 수 있습니다. 또한 몇 명의 모험가는 마을에 그대로 남아 있어도 되기 때문에, 모든 모험가를 특정한 그룹에 넣을 필요는 없습니다.

### 생각

공포도가 높은 순서로 배치하고 그 배열 순서대로 한다면 가장 적은 그룹의 수를 만들 수 있다.
반대로 공포도가 낮은 순서대로 한다면 가장 많은 그룹의 수를 만들 수 있다.

### 풀이

1. 공포도가 낮은 순으로 정렬
2. 순회하면서 멤베의 공포도와 멤버수 비교
3. 공포도가 더 작거나 같으면 그룹 만들기 성공이라고 보고, 그룹수를 증가시켜 준다.

```jsx
function getLargestAdventureGroupNum(arr) {
	const sorted = arr.sort(function(a, b) {
	  return a - b;
	});

	let member = 0;
	let group = 0;

  for (let i = 0; i < sorted.length; i++) {
		let fear = sorted[i];
		member++;
		if (fear <= member) {
			group++
			member = 0;
		}
	}
	return group;
}

```