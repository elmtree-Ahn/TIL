## JS와 JSX 섞어 쓰기

```jsx
const Number = ({ number }) => {
      return <>{number % 2 === 0 ? <h1>{number}</h1> : <h5>{number}</h5>}</>;
    };

    const element = (
      <>
        <Number number={1} />
        <Number number={2} />
        <Number number={3} />
      </>
    );
```

이미 JS와 JSX를 섞어 사용하고 있어요!

HTML에서도 이미 쓰고 있어요!

## 중간복습 1

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/83ea87c0-e476-44d2-8eca-1349a1187fba/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a3f781cf-99c4-4dfa-9560-a6549fec336f/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/85df90be-4c4d-4ec0-b102-0ca427e1db5c/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1acdacdd-55b9-49ea-baac-2369c8f8f9d2/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5910f72f-b810-4ec1-9639-4e41ae767b00/Untitled.png)

### 곁들임

프론트엔드 개발의 장점은?

눈에 보입니다.

눈으로 바로 확인할 수 있습니다.

google / MDN / console

### 리액트의 리랜더링 알아보기

리액트의 장점은 리랜더링에 있다!

바닐라 JS ⇒ 변경으로 인해 Element를 다시 그림

React ⇒ 변경된 부분만 다시 그림

리액트는 계속 변경되는 엘리먼트를 그릴 때, 

새로운 엘리먼트를 생성하는 것이 아니라, 변경된 부분만을 새로 그린다.

<aside>
❔ 뭐가 좋을까?

</aside>

여러개의 엘리먼트를 사용할 때, 

전체의 요소를 새로 그리면 배치에도 문제가 생길 수 있어요.

그러나 리액트는? 변경된 부분만 변경되니 최적화 부분에서 탁월하죠.

### 예시

1. Vanilla로 랜덤의 숫자를 지닌 버튼을 생성할 때

```jsx
const rootElement = document.getElementById("root");
const random = () => {
  const number = Math.floor(Math.random() * (10 - 1) + 1);
  const element = `
  <button>${number}</button>
`;
  rootElement.innerHTML = element;
};
setInterval(random, 1000);
```

버튼을 Tab키를 통해 포커스를 하면 새로운 버튼이 생길 때 포커싱이 해제되요.

즉, 완전히 새로운 버튼이 만들어진다는 의미죠.

1. React로 랜덤의 숫자를 지닌 버튼을 생성할 때

```jsx
const rootElement = document.getElementById("root");
    const random = () => {
      const number = Math.floor(Math.random() * (10 - 1) + 1);
      const element = <button>{number}</button>;
      ReactDOM.render(element, rootElement);
    };
    // setInterval(random, 1000);
```

버튼을 tab으로 포커싱 하면 새로운 버튼이 생겨도 포커싱이 유지되어요.

즉, 버튼은 그대로고 그 안에 변경된 값만 바뀐다는 의미죠! 오 신기하다 ㅋㅋ

### 정리

바닐라JS ⇒ 변경으로 인해 Element를 다시 그립니다. (비효율적)

React ⇒ 변경된 부분만 다시 그립니다.  (효율적)

그런데 개발은 Trade off다. 좋은게 있으면, 안 좋은 것도 있는 법.. 그건 다음 시간에!

### 리액트의 랜더링

React 엘리먼트는 불변객체(immutable)이다. [https://ko.reactjs.org/docs/rendering-elements.html](https://ko.reactjs.org/docs/rendering-elements.html)

불변객체? `변하지 않는 객체`!

우리는 그저, `ReactDOM.render(element, rootElement);` 로 전달만 해요.

요청만 해요.

변경 판단과 반영은 리액트가 알아서 합니다.

흠,, 어떤 기준으로 하는 것일까?

### 비교 알고리즘

- 엘리먼트의 타입이 다른 경우 :
    - 이전 트리를 버리고 새로운 트리를 구축합니다.
- DOM 엘리먼트의 타입이 같은 경우 :
    - 속성(props)을 확인해 동일 내용은 유지하고 변경 내용은 갱신해요.

### 정리

리액트의 앨리먼트 → 불변 객체

변경 사항 반영 → 리액트에게 일임

리액트의 비교  → 재조정(Reconcillation) 비교 알고리즘

Virtual Dom → 비교시 활용

## 이벤트 핸들러 써보기

### 바닐라JS

함수를 사용하기 : `addEventListener`

인라인 방식 : `on{event}` `onclick` `onhover` 등등

### 리액트JS

인라인 방식 :    `onClick`  `onHover` 등등

```jsx
const rootElement = document.getElementById("root");
const element = <button onClick={() => alert("clicked")}>click me</button>;

ReactDOM.render(element, rootElement);
```