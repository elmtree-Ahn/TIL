### 리덕스를 왜 쓰나요?

1. props를 쓰기 싫어서 씁니다.
    
    props 없이도 모든 컴포넌트에서 state를 가져다 쓰기 위해 사용해요.
    
    깊은 하위컴포넌트에게 데이터 전달해주기 힘드니까 이렇게 사용합니다!
    

1. 데이터 관리가 편해요.
    
    데이터 수정이 편리해요. 그리고 state에 버그가 날  경우 모든 컴포넌트를 다 확인해야 하는데, 리덕스를 사용하면 리듀서만 확인하면 되니 유지보수 및 디버깅 시간을 매우 감소시켜줍니다!
    

<aside>
💡 리덕스는 대형 프로젝트의 상태 관리를 위해 사용해요!

</aside>

사실 지금 하는 프로젝트에서 리덕스를 사용하는 건 배보다 배꼽이 더 큰 꼴이에요. 마땅히 쓸 곳도 없고요 ㅋㅋ 하지만 대형 프로젝트에서 로그인 정보, 로그인 상태, 쿠키 등을 관리하기 위해서는 반드시 필요합니다!!

### 리덕스 일단 설치 부터 해보자

> 설치하기
> 

`npm install redux react-redux`

### 리덕스 사용1 "데이터 가져오기"

> 세팅하기1   어디서나 데이터 갖다쓰기
> 

[index.js]

우선 Provider 컴포넌트를 import 해옵니다. 

`import { Provider } from 'react-redux';` 

그 후 <Provider>로 <App>을 감쌀게요.

```html
<Provider>
	<App />
</Provider>
```

Provider로 감싸진 모든 컴포넌트들은 props 없이도 state 공유가 가능해요! App이 최상위 컴포넌트이니 그 속에 속한 모든 컴포넌트들도 적용이 됩니다. 

- **그러면 state는 어디에다 만들까요?**

index.js 상단에 createStore()로 store를 만들고 이 안에 state를 저장하면 됩니다. 

creacteStore() 안에는 함수를 만들 수 있습니다. 

return 안에 담긴 노란색 데이터가 state의 초기값인 셈이에요. 

```jsx
// 이렇게 작성하면 자동으로 createStore가 import 됩니다.
let store = createStore(() => {
	return [
		{ age : 32,
			name : 'Luffy',
			job : 'FE Dev'
		}
	]
});
```

- 만든 store를 전송해볼까요?

App을 감싼 Provider에 props 를 사용하듯 store를 내려 보내요.

```html
<Provider store={ store }>
	<App />
</Provider>
```

- 이제 사용해볼까요?

먼저 저는 편의상 ReduxTest.js 파일을 만들어 동명의 컴포넌트를 만들고 App.js에 붙여 넣었어요. 이렇게요. 

```html
import ReduxTest from './component/reduxTest';

function App() {
  return (
    <div className="App">
      <ReduxTest />
    </div>
  );
}
```

그러면 이제 ReduxTest에서 store에 있는 값을 데이터바인딩 해볼까요?

그런데.. 어떻게 불러와야하지? { sotre.name } ? 이거 아니겠죠. 그래서 마지막 세팅이 필요해요. store를 받아올 컴포넌트 하단에 이렇게 세팅을 합니다.

```jsx

// getSotre는 제가 임의로 작명한거에요.
// 이 함수의 역할은 stroe의 데이터를 가져와 props로 변환해주는 함수에요.
function getStore(state) {
  return {
		// sotre 안에 있는 name이라는 state를 이름 이라는 props롤 등록한거에요.
    이름 : state[0].name, 
		//이렇게 하면 store안에 모든 데이터를 state라는 이름의 props로 받을 수 있어요. 
		state : sate
  }

}

// connect는 자동으로 Import 됩니다
export default connect(getStore)(ReduxTest)
```

그러면 사용을 해볼까요?

주의할 점은, store의 데이터를 state라는 이름의 props로 만들었으니 { props.state } ← 이런 식으로 데이터 바인딩을 해야 해요.

```jsx
import { connect } from 'react-redux'
									// props 넣는거 잊지마세요!
function ReduxTest(props) {
  return (
    <>
      <div className="test">
        <h1>{props.state[0].name}</h1>
        <h2>{props.state[0].job}</h2>
      </div>
    </>
  )
}

function getStore(state) {
  return {
    state: state
  }

}

export default connect(getStore)(ReduxTest)
```

출력값은요?

예쁘게 잘 나왔습니다 :)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cdcf9f89-09cc-49de-9ca5-a54f45655382/Untitled.png)

> 정리
> 

**셋팅**

1. index.js에 <Provider>를 import 해오신 다음

2. state 값공유를 원하는 컴포넌트를 감싸면 됩니다.

3. createStore를 import 해오신 다음 사용법에 의해 state를 만들어 let store라는 변수에 저장합니다.

4. <Provider store={store}> 이렇게 store를 등록하면

**이제 Provider로 감싼 컴포넌트는 전부 store안에 있던 값을 props없이 공유 가능합니다.**

**store안에 있던 state 사용**

원하는 컴포넌트 파일 가셔서

1. 하단에 function state를props화() 를 하나 만들어주고 state를 props로 등록합니다.

2. 그리고 또 하단에 export default connect(state를props화)(Cart);

이렇게 사용하시면 이제 아까 만들어둔 state가 props로 등록이 된 것입니다.

**props.state이름** 이렇게 저장된 state를 자유롭게 사용할 수 있습니다.

### 리덕스 사용 2  "수정하기"

> 세팅하기 2   어디서나 수정하기
> 

리덕스로 데이터를 어디서나 수정하기 위해서는 또 세팅이 필요합니다. 

<aside>
💡 리덕스 처음 사용할 때 은근 까다롭넹;

</aside>

store를 선언했던 index.js 로 다시 돌아와 봅시다!

state 데이터 수정을 위해서 `reducer`라는 함수를 만들어야 해요.

# ⭐ 이게 store를 만드는 정석적인 방법이니 이 부분을 잘 기억하세요!!

```jsx
// 이렇게 작성하면 자동으로 createStore가 import 됩니다.
let store = createStore(() => {
	return [
		{ age : 32,
			name : 'Luffy',
			job : 'FE Dev'
		}
	]
});
```

이렇게 바로 store를 선언했었죠?

여기에 reducer 함수를 만들고, return 값은 외부 변수로 빼서 아래와 같이 기본 세팅을 진행합니다.  아참 지금 모든 코딩은 index.js에서 하고 있어요.

```jsx
let defualtState = [
		{ age : 32,	name : 'Luffy',	job : 'FE Dev'},
    { age : 27, name : 'Ahn', job : 'FE Dev'}
	]

function reducer(state = defualtState, 액션) {

	return state

} 

let store = createStore(reducer);
```

reducer에는 데이터를 수정하는 방법을 담을거에요. 

근데 한가지 신기한거 있죠. 파라미터 값에 =(등호)가 있어요. 이건 `defualt parameter`라는 문법으로 파라미터에 디폴트 값을 넣어주는 거에요.  그래서 우리는 `defualtState`를 초기 값으로 넣었어요.

<aside>
💡 기억할 점은 reducer는 어떠한 일이 있어도 state를 뱉어야 해요.

</aside>

그러면 이렇게 생각할 수 있겠죠? 

수정된게 있다? 수정된 state를 뱉어

수정된게 없다? 초기값 state를 뱉어

이렇게요 😁

```jsx
function reducer(state = defualtState, 액션) {
  if (수정 조건) {
    return 수정된 state
  } else {
    return state
  }
}
```

우리는 버튼을 누르면 나이가 +1 이 되는 기능을 구현해 볼게요. 그러면 이런식으로 코드를 짤 수 있어요.

```jsx
function reducer(state = defualtState, 액션) {
  if (액션.type === '나이증가') {

    let copy = [...state];
    copy[0].age++;
    return copy
    
  } else {
    return state
  }
}
```

그러면 reduxTest.js로 이동해서 리듀서를 사용해볼까요?

```jsx
<>
  <div className="test">
    <h1>{props.state[0].name}</h1>
    <h2>{props.state[0].job}</h2>
    <h3>나이 {props.state[0].age}</h3>
    <button onClick={()=>{ 
			props.dispatch({ type : '나이증가'}) 
		}}>+</button>
  </div>
</>
```

잘 이해되나요? button에서 onClick 이벤트를 실행하는데,

props.dispatch() 라는 함수를 호출합니다. 그리고 

type 명을 불러오는 거죠. 

그럼 버튼을 눌러볼까요? 잘 작동이 됩니다.

![전](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e48c447a-f64b-4b2d-945d-9a2917a18646/Untitled.png)

전

![후](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/239ff272-2ea0-4629-9fd5-bfa7254dc5d7/Untitled.png)

후

그러면 나이 감소는 어떻게 하면 될까요? 간단하죠.

먼저 reducer에서  else if로  새로운 조건을 만들어요. 물론 switch문도 가능합니다.

```jsx
else if (액션.type === '나이감소') {

    let copy = [...state];
    copy[0].age--;
    return copy
```

그 후에 사용하고자 하는 컴포넌트에서 다시 dispatch를 사용해서 액션을 실행시키면 됩니다. 

```jsx
<button onClick={()=>{props.dispatch({ type : "나이감소"})}}>-</button>
```

나이를 늘리고 줄이는 기능이 구현되었습니다. 정말 나이를 줄이고 싶네요.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/47d75956-4ef7-4f14-983e-edd2f1fc15c6/Untitled.png)