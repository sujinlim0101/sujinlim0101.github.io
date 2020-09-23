---
layout: post
title: 왜 next js를 쓰는가?
subtitle: why do we use next js?
gh-badge: [star, fork, follow]
tags: [next.js]
comments: true
---

## 왜 next.js를 쓰는가?

next js를 쓰는 이유는 서버사이드 랜더링과 검색엔진 최적화 2가지가 가장 크다.
<br>
먼저 서버사이드 렌더링에 대해 알아보자. 이를 위해서는 클라이언트 사이드 렌더링(CSR)과 서버사이드 렌더링(SSR)의 비교가 필요할 것이다.<br>
서버사이드 렌더링? 클라이언트 사이드 렌더링?<br>

### CSR(Client Side Rendering) 의미

{: .box-note}
**CSR:** JavaScript를 사용하여 브라우저에서 웹 사이트를 완전히 렌더링 할 수 있는 기능이다.

### SSR(Server Side Rendering) 의미

{: .box-note}
**SSR:** 서버 측 렌더링 (SSR)은 웹 페이지를 브라우저에서 렌더링하는 대신 서버에 표시하는 애플리케이션의 기능입니다.

<br>
즉 서버 측에서 렌더링 할 경우, 새로운 웹 페이지를 보고 싶을 때마다 새로운 페이지 요청이 필요합니다. 비유하자면 이것은 먹고 싶은 것이 있을 때마다 마켓에 들르는 것과 유사합니다. 
<br>
반면, 클라이언트 측의 렌더링의 경우, 마켓을 한번만 방문하지만 필요한 것을 꼼꼼히 구매합니다. 그런 후 필요한 것이 있을 때 냉장고를 뒤져 찾아 먹게 되는 형식입니다.

참고 )

https://dtaxi.tistory.com/1090
https://velopert.com/3293
https://ojayyezzir.tistory.com/12
https://velog.io/@imacoolgirlyo/%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%9C%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-SPA-React
https://jongmin92.github.io/2017/06/06/JavaScript/client-side-rendering-vs-server-side-rendering/
