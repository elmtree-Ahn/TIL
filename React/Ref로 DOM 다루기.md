## Ref로 DOM 다루기

### useRef()

Ref → reference

> Input Element가 있고 화면이 뜨자마자  Infut Element에 focus를 주고 싶다면?
> 

바닐라였다면,

아이디나 클래스로 선택을 하고 해당 요소(`testEl`)에 .focus(); 메소드를 사용하여 할 수 있다.

```jsx
testEl.focus();
```

> 그런데 왜 Dom 조작 이라고 할까? Element 조작이라 하면 되지 않나?
> 

깊이 고민하지 마세요ㅎㅎ 

### Input 태그 바로 포커싱하기!

```jsx
// 바닐라였을 때 (리액트 환경에서)
const rootElement = document.getElementById("root");
const App = () => {
  React.useEffect(() => {
    document.getElementById("target").focus();
  }, []);

  return (
    <>
      <input id="target" />
    </>
  );
};
ReactDOM.render(<App />, rootElement);
```

리액트에서는 이 부분을 useRef 라는 훅으로 사용해요.

```jsx
// useRef를 사용하기
const rootElement = document.getElementById("root");
const App = () => {
	// useRef로 Ref를 정의해요,
	const inputRef = React.useRef();
	React.useEffect(() => {
	// Ref사용시 current를 거친 후 변경 값을 줍니다.
  inputRef.current.focus();
}, []);

  return (
    <>
			// 태그에 ref값을 부여해요.
      <input ref={inputRef} />
    </>
  );
};
ReactDOM.render(<App />, rootElement);
```

둘이 무슨 차이가 있을까?

예를 더 들어볼게요.

> 갈색 박스를 특정 시간이 지나면 핑크 박스로 바꾸는 작업을 해볼까요?
이를 Ref를 사용해 진행해볼게요.
> 

```jsx
const rootElement = document.getElementById("root");
const App = () => {

  const inputRef = React.useRef();
	// 새로운 ref를 생성하고
  const boxRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();

		// setTimeout으로 동작을 만들어요.
    setTimeout(() => {
			// 오. 이렇게 하는거군
      boxRef.current.style.backgroundColor = "pink";
    }, 1000);
  }, []);

  return (
    <>
      <input ref={inputRef} />
      <div
        ref={boxRef}
        style={{ height: 100, width: 100, backgroundColor: "brown" }}
      />
    </>
  );
};
ReactDOM.render(<App />, rootElement);
```

<aside>
🔥 왜, useRef를 사용할까?

</aside>

왜 리액트는 document.getElementById와 같은 돔 선택을 하지 않고

useRef라는 별도의 방법을 제공할까?

리액트가 스스로 관장하는 틀이 있어요.

Virtual Dom이라던지, 생성주기라던지,

이 틀안에서 documet 방식으로 태그를 선택하면

리액트가 렌더링 되는데 혼선 혹은 에러가 발생할 수 있어요!

Ref = referenct (공간, 사물함, 벨류를 찾는 키값)

어떤 값을 특정한 변수에 담는 거라 보면 돼요!

### Ref로 Dom 다루기

Vanilla JS → documetn.get~ | document.query~

React → useRef / ref