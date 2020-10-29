---
layout: post
title: React와 Higher-Order Components
subtitle: Higher-Order Components에 대해
gh-badge: [star, fork, follow]
tags: [higher-order-components, react]
comments: true
---

### Higher-Order Components의 뜻은?

고차 컴포넌트 (HOC, higher-order component)는 컴포넌트 로직을 재사용하기 위한 기술입니다. 제 표현으로는 컴포넌트를 감싸서 새로운 컴포넌트를 만들어내고, 기능을 덧붙인다고 볼 수 있겠네요.
<br />

```
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

위처럼 higherOrderComponent에 인자로 WrappedComponent를 넣어서 새로운 컴포넌트를 만듭니다. 그 새로운 컴포넌트가 EnhancedComponent인거죠!
<br />

### CouterCompnent들 만들어보기 (고차함수 없을 떄)

두가지 Counter 컴포넌트들을 만들어 보면서 나중에 이를 고차함수로 바꿔보는 작업을 하겠습니다. 두가지 매우 유사한 컴포넌트를 아래와 같이 만듭니다.
<br />
먼저 Click 했을 때 카운트가 증가하는 아주 단수한 컴포넌트를 만들어봅니다.

```
import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return <button onClick={this.incrementCount}>Clicked {count} times</button>;
  }
}
export default ClickCounter;

```

다음으로 Hover 했을 때 카운트가 증가하는 함수를 만들어봅시다.

```
import React, { Component } from 'react';

class HoverCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>;
  }
}
export default HoverCounter;

```

자, 클릭과 호버만 다르지 아주 유사한 컴포넌트 두개가 만들어졌습니다. 같은 기능을 가진 것들을 묶는것이 프로그래밍의 기본이라고 배웠습니다만, 여기서 같은 기능을 빼내서 Higher-Order-Components로 만들어 봅시다.

### Higher-Order-Component 만들어보기

앞선 두개의 컴포넌트의 공통적인 특징, count라는 state와 이벤트 발생시 숫자가 1이 증가하는 기능을 가진 increment함수를 포함한 컴포넌트를 만들었습니다.
<br />
withCounter라는 함수의 인자로 컴포넌트가 들어옵니다. 결국 이 컴포넌트는 인자가 되어 WithCounter라는 새로운 함수로 반환됩니다.
새로 반환되는 컴포넌트에는 state와 increment라는 함수가 포함되죠.

```
import React from 'react';

const withCounter = WrappedComponent => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 };
      });
      console.log(this.state.count);
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

```

<br/><br/>
withCounter가 함수라는 것에서 알 수 있듯, 우리는 앞으로 withCounter의 인자로 ClickCounter와 HoverCounter를 넘겨주러 가봅시다.

```
import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}
export default withCounter(ClickCounter);

```

```
import React, { Component } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}>Clicked {count} times</h2>;
  }
}
export default withCounter(HoverCounter);

```

이렇게 withCounter로 두 컴포넌트를 넘겨주게 되면 props가 넘어가게 됩니다. 이를 this.props로 연결해주면 전과 같은 기능이 완성되는 겁니다.

이처럼, 고차 컴포넌트 (HOC, higher-order component)는 컴포넌트 로직을 재사용하기 위한 React의 기술이고 오늘은 여기까지입니다~!
