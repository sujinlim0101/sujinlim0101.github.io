---
layout: post
title: template-literal?
subtitle: template-literal?
gh-badge: [star, fork, follow]
tags: [next.js]
comments: true
---

### template-literal의 뜻은?

템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴입니다. template이란 영어 뜻은 '말 그래로'인데, 말 그대로 표현하는 방식을 의미한다고 표현할 수 있겠네요.
<br>
템플릿 리터럴은 이중 따옴표 나 작은 따옴표 대신 백틱(` `)을 이용합니다. 벡틱 안에서 표현식을 넣어, 유용하게 사용랗 수 있습니다.  
예를 들어, 플레이스 홀더를 이용하여 표현식을 넣을 수 있는데, 이는 $와 중괄호( $ {expression} ) 로 표기할 수 있습니다.

### multi-line string에서 활용

일반적으로 multi-line을 표현하려면 다음과 같이 써야한다.

```
console.log("string text line 1\n"+
"string text line 2");
// "string text line 1
// string text line 2"
```

하지만 벡틱을 이용하면 다음과 같이 쉽게 쓸수 있다. 하지만 만약 들여쓰기나 스페이스가 벡틱 앞에 있게 되면 그것까지 표현되므로 주의해야한다.

```
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### Expression interpolation

표현식(expression)을 일반 문자열(normal strings)에 삽입한다면 string과 식 간의 '+'를 사용하지 않고 쉽게 표현 할 수 있다.
<br />
예를 들어보자.

```
var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
```

### tagged template 에서의 황용

태그를 사용하면 템플릿 리터럴을 함수로 이옹할 수 있습니다. 태그 함수의 첫 번째 인수는 문자열 값의 배열을 포함합니다. 나머지 인수는 표현식과 관련됩니다. 결국 함수는 조작 된 문자열을 반환 할 수 있습니다
아래 예제를 들어 설명해보겠습니다. myTag라는 함수가 있고, 이를 벡틱을 이용하여 호출하겠습니다.
<br />
var output = myTag`that ${ person } is a ${ age }`; 이런식으로요.
<br />
그럼 인자로 들어가게 되는 값들은 어떻게 되는 걸까요?
그건, 벡틱 안에 있는 문자열들을 모두 모아서 배열로 반환하고, 이는 string 배열이 됩니다.
또 나머지 표현식들은 각각 personExp, ageExp에 들어가게 됩니다.
그래서 personExp는 그대로 Mike로 출력되고, ageExp의 값에 따라 ageStr의 값이 결장되게 됩니다.
이로써 결과가 that Mike is a youngster가 되는 것이죠.]

```
var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {

  var str0 = strings[0]; // "that "
  var str1 = strings[1]; // " is a "

  // 사실 이 예제의 string에서 표현식이 두 개 삽입되었으므로
  // ${age} 뒤에는 ''인 string이 존재하여
  // 기술적으로 strings 배열의 크기는 3이 됩니다.
  // 하지만 빈 string이므로 무시하겠습니다.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // 심지어 이 함수내에서도 template literal을 반환할 수 있습니다.
  return str0 + personExp + str1 + ageStr;

}

var output = myTag`that ${ person } is a ${ age }`;

console.log(output);
// that Mike is a youngster
```
