---
emoji: ✒️
title:  Bootstrap에서 Sass 활용하기
date: "2021-10-19 00:00:00"
author: 찐코딩
tags: bootstrap
categories: css
---

대부분의 우리는 npm 패키지 매니저를 이용하므로 부트스트랩을 설치하면, node_modules 아래 bootstrap의 구조는 다음과 같습니다.


```
프로젝트/
├── scss
│   └── custom.scss
└── node_modules/
    └── bootstrap
        ├── js
        └── scss
```

npm 패키지 매니저를 이용하면, node_modules 아래 파일들을 수정하면 이 파일들은 언제든지 install 과정에서 덮어써질수 있습니다.
그렇기 때문에 부트스트랩을 직접 수정하지 않기보단 다른 방법을 사용하는 것이 바람직합니다. 따라서 이 글에서는 bootstrap을 일부만 포함하는 방법과 Sass variable을 오버라이드하여 사용하는 방법에 대해 소개하려고 합니다.

## 1. Bootstrap을 일부만 포함하기

부트스트랩 전체를 포함하지 않고 일부만 포함하는 방법을 알아봅시다.

### 전체 포함하는 경우

```jsx
// Option A: 모든 부트스트랩 파일 포함하기

// Include any default variable overrides here (though functions won't be available)

@import "../node_modules/bootstrap/scss/bootstrap";

// Then add additional custom code here
```

### 일부 포함

```jsx
// Option B: 일부 부트스트립 파일 포함하기

// 1. funcions를 먼저 import (colors, SVGs, calc, etc 에 대한 함수)
@import "../node_modules/bootstrap/scss/functions";

// 2. custom variable를 여기서 포함하기

// 3. 나머지 스타일 시트 포함
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/root";

// 4. 우리 프로젝트에 필요한 옵셔널한 css 포함
@import "../node_modules/bootstrap/scss/utilities";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "../node_modules/bootstrap/scss/helpers";

// 5. 옵셔널한 utilities API 포함
@import "../node_modules/bootstrap/scss/utilities/api";

// 6. 다른 css 파일 포함
```

위처럼 개별로 import 해주면 일부만 포함할수 있습니다.

## 2. Variable 활용하기

### Variable defaults

부트스트랩의 모든 Sass 변수는 !default 플래그가 포함되어 있어 부트스트랩 코드를 수정하지 않고도 Sass에서 변수의 기본값을 재정의할수 있습니다. 즉 부트스트랩에선 변수가 이미 할당된 경우 부트스트랩의 default 값이 할당되지 않습니다.

만약 우리가 bootstrap variables 중 heading line-height가 마음에 들지 않는다면 $headings-line-height를 미리 정의해주면 됩니다.
```jsx

@import "../node_modules/bootstrap/scss/functions";

// $headings-line-height 정의하기
$headings-line-height: 1.5;

// bootstrap $headings-line-height default값이 적용안됨
@import "../node_modules/bootstrap/scss/variables";
```
---
참고 문서

부트스트랩 5 Sass( [링크](https://getbootstrap.com/docs/5.0/customize/sass/) )

Sass 변수와 !default 플래그 ( [링크](https://designmeme.github.io/ko/blog/sass-variables-and-default-flag/) )
