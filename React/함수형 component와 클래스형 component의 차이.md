### ✨ 아주 간단한 차이점

리액트에서 컴포넌트를 선언하는 방식은 두 가지다.

1. 클래스형 컴포넌트
2. 함수형 컴포넌트

<aside>
💡 리액트에서 "컴포넌트"는 앱을 이루는 최소한의 단위이다.

</aside>

이 둘의 간단한 차이점 부터 살펴보자.

1. 클래스형 컴포넌트
    - state 기능 및 라이프사이클 기능을 사용할 수 있다.
    - 임의 메서드를 정의할 수 있다.
    - render함수 가 꼭 있어야한다.
    - render함수 내에서 보여주어야 할 JSX를 반환해야한다.
2. 함수형 컴포넌트 
    - 클래스형 컴포넌트 보다 선언하기가 `훨씬` 편하다.
    - 클래스형 컴포넌트보다 메모리자원을 `덜` 사용한다.
    - 프로젝트 완성 후 빌드하여 배포할때 클래스형 컴포넌트보다 결과물의 파일크기가 `작다`.
    - state와 라이프사이클 API의 사용이 불가능하다.
        
        그러나.. (리액트 16.8v. 업데이트 이후 `Hooks` 기능 도입으로 사용가능해짐)
        
    - `리액트 Hooks`을 사용 할 수 있다.

흠, 지금은 뭐가 장점이고 뭐가 좋은건지 잘 모르겠다. 조금 자세히 살펴보자!

### ✨ 함수형이 여튼 좋다는데 클래스형을 왜 배워야 할까?

물론, 현재는 대부분 함수형 컴포넌트를 사용한다. 

다만, 이전에 클래스형 컴포넌트를 사용했던 기업들이 많기에 유지보수 및 이전 자료들을 이해하기 위해서는 개념은 알고 있어야 한다.

### ✨ 선언 방식의 차이

- 함수형 컨포넌트
    
    ```jsx
    import React from 'react';
    import './App.css';
    
    function App() {
      const name = 'react';
      return <div className = "react">{name}</div>
    }
    
    export default App;
    ```
    

- 클래스형 컴포넌트
    
    ```jsx
    import React, {Component} from 'react';
    
    class App extends Component {  
      return() {
        const name = 'react';
        return <div className="react">{name}</div>
      }
    }
    
    export default App;
    
    // class 키워드가 필요하다! 
    // Component로 상속을 받는다!
    // return 메소드를 반드시 사용해야 한다!
    ```
    

단순 비교를 하면 클래스형 컴포넌트의 경우 반드시 사용해야 하는 키워드, 메소드 등이 함수형보다 많다. 

확실히 함수형 컴포넌트가 편해졌다!

### ✨ state 사용차이

<aside>
💡 state? 컴포넌트 내부에서 바뀔 수 있는 값

</aside>

[클래스형 컴포넌트]

- constructor 안에서 this.state 초기 값 설정이 가능하다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ec123b40-8010-48cb-8be1-f1560b0b34c1/Untitled.png)
    

- constructor 없이 바로 state 초기값을 설정할 수 있다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/98098f57-563a-4239-aea7-737676338571/Untitled.png)
    

- 클래스형 컴퓨넌트의 state는 객체 형식이다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eea1bfd6-d057-4552-821a-b68878f8b59f/Untitled.png)
    

- this.setState 함수로 state의 값을 변경할 수 있다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/db49a617-400a-44e7-bb18-1b8982fd2d26/Untitled.png)
    

> 솔직히 뭔소린지 모르겠다. 그런데 한가지 분명한건 복잡해 보인다!
> 

[함수형 컴포넌트]

- 함수형 컴포넌트에서는 `useState` 함수로 state를 사용한다.
- useState 함수를 호출하면 배열이 반환되는데 첫 번째 원소는 현재 상태다.
- 두 번째 원소는 상태를 바꾸어 주는 함수다. `네이밍은 첫 번째 원소에 set을 붙인다.`

```jsx
// 밀크가 이론수업중 사용했던 예시
const [count, setCount] = useState('');
```

> 확실히 간단해 보인다!!
> 

### ✨ props 사용 차이

props란?

- 컴포넌트간의 데이터를 주고 받을때 사용 (사실상 거의 단방향)
- 컴포넌트 자체 props를 수정해서는 안된다!
- 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야한다.
- 수정 되는 것은 state다!!

[클래스형 컴포넌트의 props]

- this.props를 불러온다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/afc1a78e-2016-4052-96ca-bc25f799599d/Untitled.png)
    
- 부모 객체의 키 값, 자식 props 활용한다.

<aside>
💡 총 2개의 단계를 거쳐야 한다.
얼핏 봐도 class, render 등 사용해야만 하는 것들이 많다! 으~ 복잡해보여

</aside>

[함수형 컴포넌트의 props]

- props를 불러올 필요 없이 바로 호출 할 수 있다!! 크... 짧은거 좋아!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22696d0e-503c-4c79-9a50-8c92ce775319/Untitled.png)

### ✨ 이벤트 핸들링

[클래스형 컴포넌트의 이벤트 핸들링]

- 함수 선언시 에로우 화살로 바로 선언이 가능 (이건 좋아보인다)
- 요소에서 적용하기 위해서는 this를 붙여야 한다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/170afcb9-6c09-4a7c-8289-b2e15c1b04a9/Untitled.png)
    

[함수형 컴포넌트에서의 이벤트 핸들링]

- const 키워드 + 함수 형태로 선언한다.
- this를 사용하지 않아도 된다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/38938d07-8516-4ac4-8632-693b9d4c8f4b/Untitled.png)
    

우선, 여기까지만 이해해보자! 

지금은 볼 수록 더 헷갈린다 😵‍💫

한 주간 함수형 컴포넌트로 연습을 하고 이후에 좀 더 자세히 살펴봐야 겠다!

### ✨ 참고

- [https://velog.io/@sdc337dc/0.클래스형-컴포넌트](https://velog.io/@sdc337dc/0.%ED%81%B4%EB%9E%98%EC%8A%A4%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)
- [https://codechasseur.tistory.com/98](https://codechasseur.tistory.com/98)
- [https://velog.io/@solmii/React의-함수형-컴포넌트-feat.Hooks](https://velog.io/@solmii/React%EC%9D%98-%ED%95%A8%EC%88%98%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-feat.Hooks) [다시보기]
- [https://swdevelopment.tistory.com/256](https://swdevelopment.tistory.com/256)