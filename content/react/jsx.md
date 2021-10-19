---
emoji: ✒️
title: JSX와 HTML 차이점
date: "2021-10-19 22:00:00"
author: 찐코딩
tags: react
categories: react
---

## 이전 불편했던 코드 스타일

```
funcion App() {
  return React.createElement('div', {}, 'hello world!')
}
```
createElement로 엘레멘트를 만들어줬는데 불편했다.
HTML처럼 만들어진게 JSX이다.

## 차이점

- class 대신 className을 사용해야한다.
- onclick → onClick
- HTML은 마크업 언어이고, JSX는 자바스크립트 코드이다. 바벨이 자바스크립트와 HTML으로 변환한다.
- 안에 변수나 함수, 비즈니스 로직을 쓰고싶다면 괄호를 작성해서 쓰면된다.
- 형제 노드를 쓸수없다.
- 한가지 태그로 꼭 감싸줘야한다. 그래서 React.Fragment를 사용하곤 한다. 아님 <></>
- 안에 자바스크립트 코드가 가능하다.
