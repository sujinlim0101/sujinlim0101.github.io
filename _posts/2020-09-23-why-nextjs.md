---
layout: post
title: 왜 next.js를 쓰는가?
subtitle: why do we use next js?
gh-badge: [star, fork, follow]
tags: [next.js]
comments: true
---

## 왜 next.js를 쓰는가?

next js를 쓰는 이유는 서버사이드 랜더링를 통한 검색엔진 최적화가 가장 큽니다.
<br>
먼저 서버사이드 렌더링에 대해 알아보자. 이를 위해서는 클라이언트 사이드 렌더링(CSR)과 서버사이드 렌더링(SSR)의 비교가 필요할 것입니다.<br>

### CSR(Client Side Rendering) 의미

{: .box-note}
**서버사이드 렌더링:** SPA에서 처음에 하나의 빈 페이지만 서버측에 제공하고, 뷰에 대해서는 JavaScript를 사용하여 브라우저에서 웹 사이트를 완전히 렌더링 하는 방식이다.

### SSR(Server Side Rendering) 의미

{: .box-note}
**SSR:** 서버 측 렌더링 (SSR)은 웹 페이지를 브라우저에서 렌더링하는 대신 서버에 표시하는 애플리케이션의 기능입니다.

즉 서버 측에서 렌더링 할 경우, 새로운 웹 페이지를 보고 싶을 때마다 새로운 페이지 요청이 필요합니다. 비유하자면 이것은 먹고 싶은 것이 있을 때마다 마켓에 들르는 것과 유사합니다.
반면, 클라이언트 측의 렌더링의 경우, 마켓을 한번만 방문하지만 필요한 것을 꼼꼼히 구매합니다. 그런 후 필요한 것이 있을 때 냉장고를 뒤져 찾아 먹게 되는 형식입니다.

이 두경우를 비교하여 봅시다.
먼저, 클라이언트 측의 경우 아까 비유했듯 꼼꼼히 페이지에 필요한 것을 가져오기 때문에 초기 페이지 로드가 느립니다.
html파일과 js 파일이 필요하기 떄문에 서버를 왕복 두번을 합니다. 그러나, 그 이후 페이지에 대한 로드는 빠릅니다.
다음으로 서버 측 렌더링의 경우, 초기 페이지 하나만 가져오면 되기 떄문에 초기 페이지 로드가 느리지 않습니다. 하지만, 다른 페이지로 이동하는 경우 http요청을 매번 하게 됩니다.

client side의 html코드를 보자면 다음과 같습니다:

```
<html>
  <head>
    <script src="client-side-framework.js"></script>
    <script src="app.js"></script>
  </head>
  <body>
    <div class="container"></div>
  </body>
</html>
```

여기서 script tag안의 app.js는 자바스크립트의 모든 html페이지들을 문자열로 가지고 있습니다.

```
var pages = {
  '/': '<html> ... </html>',
  '/foo': '<html> ... </html>',
  '/bar': '<html> ... </html>',
};
```

페이지가 로드되면 pages안의 url('/')페이지에서, 해당 되는 html 문자열들을 가져와서 <div class="container"> </div>에 넣습니다. 그리고, 링크를 클릭하면 해당 이벤트는 프론트엔드 프레임 워크기 가로채서 컨테이너에 새 문자열('/foo')를 삽입하고, rendering 하게 됩니다. 이 때 http요청은 다시 한번 일어나지 않습니다.

즉, 클라이언트 사이드 렌더링의 경우, 초기 로드는 조금 느리지만, 이후 페이지에서는 비교적 빠르다고 볼수 있습니다. 이러한 장점에도 서버사이드 렌더링을 리액트에서 적극적으로 쓰는 이유가 뭘까요?
가장 큰 이유는 검색엔진 최적화 떄문이라고 봅니다.

앞서, 클라이언트 사이드 html에서 봤듯, html의 코드에 정보가 얼마 담겨있지 않기 떄문에 웹 크롤러가 정보를 수집하는데 어려움을 겪습니다. 구글의 크롤러는 똑똑해 졌기 떄문에 가능하긴 합니다. 구글의 Crawler 2.0에서 <script> 태그를 볼 때 웹 브라우저처럼 실제로 요청을하고 코드를 실행하고 DOM을 조작하는 방식으로 html의 내용을 파악하여 검색엔진에 걸릴 수 있도록 해줍니다.

하지만 이를 지원하지 않는 웹 검색 사이트가 다수이기 떄문에 next js를 통한 서버사이드 렌더링이 필요하게 되었습니다.

참고 )
본글은 jongmin92.github.io를 참고하여 포스팅하였습니다.
그외 참고 사이트입니다.

https://dtaxi.tistory.com/1090
https://velopert.com/3293
https://ojayyezzir.tistory.com/12
https://velog.io/@imacoolgirlyo/%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%9C%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-SPA-React
https://jongmin92.github.io/2017/06/06/JavaScript/client-side-rendering-vs-server-side-rendering/
