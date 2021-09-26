---
emoji: ✒️
title: Vee-validation + Yup 조합 사용하기
date: "2021-09-26 00:00:00"
author: 찐코딩
tags: vue3
categories: vue3
---


폼 유효성 검사를 일일히 작성하기에는 복잡하기 때문에 라이브러리를 이용하는 편입니다. 기존 프로젝트에서는 angularjs를 이용했기 때문에, angularjs의 validation을 이용하였습니다. 하지만 vue애선 달리 제공하는 validation이 없기 때문에, 인기가 있는 vee-validate 라이브러리에 관심을 갖게 되었습니다.

**Vee-validate는** **Yup**과의 조합도 좋습니다. 리액트에서도 **Formik + Yup** 조합으로 많이 씁니다. 우리는 Vue니까 Formik가 아닌 Vee-validate를 사용해봅시다.

## V**ee-validate +** **Yup**

게다가 이 두개의 조합을 vee-validate 공식 사이트에서 추천하는 것으로 보여, 이 둘을 조합해서 사용하겠습니다. Vee validate 홈페이지에서 [Best Practices](https://vee-validate.logaretm.com/v4/tutorials/best-practices)를 Yup을 사용해서 보여주고 있네요.

공식사이트에선 Yup 라이브러리에서 string, object를 가져와서 유효성을 체크하고 있습니다.
Vee-validate 단독으로도 유효성 검사를 수행할수 있으나, length가 얼마나 되는지, strig인지 아닌지 등에 대한 유효성 체크 로직을 작성해주어야 하는데 반해, yup을 이용하면 간편하게 작성할수 있습니다.

예를들어 이메일 유효성 체크를 한다고 합시다. 그러면 Vee-validate에서 다음과 같이 작성해야 합니다.

```jsx
const validations = {
      email: value => {
        if (!value) return 'This field is required'

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regex.test(String(value).toLowerCase())) {
          return 'Please enter a valid email address'
        }

        return true
      },
	...
}
```
하지만 Yup을 이용하면 간단합니다.
```jsx
const validationSchema = object({
			...
      email: string().email(),
			...
)}
```

대부분 우리가 사용하는 유효성에 대한 함수를 yup에서 제공하고 있습니다. 따라서, 두 라이브러리 조합이 꽤 좋은 선택으로 보이기 때문에 두 조합을 추천합니다. 다음에는 vee-validation에 대해 더 자세히 소개해보도록하겠습니다.
