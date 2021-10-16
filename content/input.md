---
emoji: ✒️
title: input에서 a11y 고려하기
date: "2021-10-16 00:00:00"
author: 찐코딩
tags: a11y
categories: a11y
---



## type을 써야하는 이유

input을 만들때 type을 고려하는 것이 중요합니다. 하지만, 종종 우리는 type="text"로만 input을 만들고, 그 이외의 type들에 대해서는 생각하지 않는 경향이 있습니다.

하지만 text, 그리고 email, password 말고도 다양한 타입들이 있습니다.

우리가 타입을 특정해서 사용할 때 좋은 점은 더 좋은 autocompletion을 사용할수 있다는 점입니다. 또, 스크린리더에게 더 좋은 해석을 할수 있게 하며, 결과적으로 유저에게 정보를 잘 이해시킬수 있습니다.

예를 들어, tel이라는 타입을 쓰는 경우 유저에게 유용합니다. 모바일 환경의 유저에게 [+*#] 버튼이 달린 numeric keyboard를 이용하게 할수 있는 듯이 말이죠.

## input type 종류

- button
- checkbox
- email
- file
- hidden
- image
- month
- number
- password
- radio
- range
- reset
- search
- submit
- tel
- text
- time
- url
- week
- color
- date
- datetime-local

이렇듯 input 엘레멘트의 종류에는 여러가지 있습니다. 그러므로, input을 쓰기전에 타입을 고려해서 작성해 보시는 건 어떨까요?

## placeholder에만 의존하지 말기

input에 예전에 유행하던 것중에 하나가 placeholder로 input이 어떤것인지 표현하는 것입니다. 이것은 아직도 가끔 보이기도 하는데 참 안좋은 패턴입니다.

placeholder는 예시와 같은 intended한 값을 표현할 때 써야하는데, 라벨을 대신해버리는 것입니다. 유저가 필드를 입력할때 이 값은 지워지므로, 사용자는 이것이 무엇에 관한 것이였는지 기억해야만합니다. 또, 어떤 유저는 이 값이 이미 채워진 값이라고도 생각할수 있습니다.

### Firefox 개발자 도구 이용하기

Firefox의 접근성 탭을 이용하면, 더 쉽게 웹에 어떻게 접근성이 적용되어있는지 보기 쉽습니다. Firefox의 개발자 도구를 활용해보는 것도 좋을거라고 생각합니다.

