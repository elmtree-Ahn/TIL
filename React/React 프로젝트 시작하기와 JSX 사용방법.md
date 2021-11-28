### ✨ 리액트 프로젝트 시작하기

바벨? 웹팩? 일일이 설치 안합니다. 마법의 명령어 하나로 리액트 프로젝트를 만들 수 있어요

⬇️  이거 하나면 끝납니다.

`npx create-react-app 만들고싶은폴더이름`

create-react-app은 라이브러리에요. 

이걸 쓸려면 node.js를 다운받아야 해요. node.js 안에는 라이브러리들을 쉽게 설치할 수 있는 npm이 함께 설치되어요. 그러면 위의 명령어를 사용할 수 있죠!

### ✨ 만들고 있는 페이지 확인하기

⬇️ 터미널에 입력하세요!

`npm start`

기존 라이브서버처럼 작성한 코드를 바로바로 볼 수 있어요:)

만약, 안열리면 브라우저에 local 주소를 입력하면 됩니다.

[http://localhost:3000](http://localhost:3000/)

### ✨ 구조 파악

puplic > index.html 

이게 메인 페이지에요! 여기 안에 root ID를 가지는 div 태그에 App.js에서 작성한 코드가 보여집니다.

```jsx
<div id="root"></div>
```

src > App.js

여기에 원하는 코드를 짭니다. 그런데 App.js가 바로 index.html에 들어가는건 아니에요. index.js를 통해서 index.html로 들어갑니다.

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          리액트 시작해보자!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

src > index.js

이 녀석이 App.js와 index.html을 연결해줍니다.

여기는 JS 정통 문법을 사용해요. 그 친숙한 getElementById

```jsx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

정리하면 이런 그림

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc13055a-7d0e-480f-84de-772ad8197186/Untitled.png)

### ✨ JSX 문법

**[class대신 className을 쓰세요!]**

기본 JS class는 예약어에요. 혼동을 피하기 위해 html의 class를 className으로 사용합니다. 

html처럼 보이지만 엄연히 JSX는 JS라는거 잊지마세요!

```jsx
// HTML
<div class="App">      
</div>

// JSX
<div className="App">
</div>
```

[데이터바인딩이 편해요!]

html에서 데이터를 넣어주기 위해서는 어떻게 할까요?

```jsx
// 1 먼저 사용할 데이터를 변수로 만들죠
let data = '사용 할 데이터';

//2 innerHTML로 집어 넣어요.
document.getElementById.innerHTML = data;
```

그러면 리액트에서는 어떻게 할까요?

```jsx
function App() {
	// 1 사용할 데이터를 변수로 만들어요.
  let data = "사용 할 데이터";

  return (
    <div className="App">
		 // 2 원하는 곳에 {} 안에 변수를 넣어요 끝!
     **<h4>{ data }</h4>**
    </div>
  );
}
```

`{ 변수명 }` 와, 이거 진짜 쉽다... 😁

[CSS 스타일링은 이렇게 하세요!]

1. import 하면 되지롱~
    
    `import './App.css';`
    
    외부 CSS파일을 import 해오는 방법이 있어요.
    
2. inline에서 css는 객체야!
    
    그래서 뭐? 여기서도 { }를 사용해야 해요.
    
    그리고 속성명도 camelCase로 사용해야 해요!! `font-size` → `fontSize`
    
    ```jsx
    HTML
    <h1 style="font-size: 20px">글자 키우기</h1>
    
    JSX
    <h1 style={ { fontSize: '20px' } }>글자 키우기</h1>
    ```
    

### ✨ state 쓰세요 변수 쓰지 마세요!

state를 사용하기 위해서는 먼저 useState를 불러와야해요!

`import { useState } from 'react';`

useSate() 함수를 선언하면 요소가 2개인 배열이 반환됩니다. [a, b]

이걸 비구조할당으로 이렇게 받으면 되죠!

```jsx
let [title, setTitle] = useState('리액트 시작하기')

<h3>{ title }</h3>
// '리액트 시작하기' 가 출력됩니다!
```

<aside>
💡 state는 변수 대신 쓰는 데이터 저장 공간이에요! 
useState()를 이용해서 만들어요.

</aside>

❔ 그런데 질문. 변수 쓰면 되지 뭣하러 state를 쓸까요?

웹이 APP처러 동작하게 만들고 싶어서 사용해요.

❗ state가 변경되면 HTML이 자동으로 재렌더링이 됩니다!! 

그냥 변수로 넣으면 사용자가 새로고침을 눌러야만 해요. 

새로고침 없이 부드러운 사이트를 만들기 위해 사용해요!

### state 깊은 복사(deep copy)

state를 직접 변경은 안돼요.

그래서 복사 한 뒤 변경을 해야 해요.

이렇게 하면 될까요?

```jsx
let [title, setTitle] = useState(['111', '222', '333'])

function plusA () {
	let newArray = title;
	newArray[0] = '111A';
	setTitle( newArray );
}
```

안돼요! newArray가 title을 얕게 복사했어요. 이건 복사가 아니라 값 공유에요;;

그러니 깊게 복사를 해야 해요!

```jsx
let [title, setTitle] = useState(['111', '222', '333'])

function plusA () {
	let newArray = [...title];
	newArray[0] = '111A';
	setTitle( newArray );
}
```

...을 통해 독립적인 값을 가진 복사를 해요.

오브젝트의 경우는 {...오브젝트명} 으로 하면 됩니다. 

1. 기존 state 카피본을 만들어요
    
    깊은 복사를 해야 해요!
    
2. 카피본에 수정사항을 반영해요.
3. 카피본을 변경함수()에 넣어요!

### ✨ 지저분한 HTML 이제 안녕! 컴포넌트 등장이오~

[어떻게 만들지?]

먼저 기존에 jsx를 작성하던 `function App()` 바깥에 새로운 함수를 만들어요~

```jsx
function Test() {
	return (
		<div className="test">
			<h2>새 컴포넌트를 만들어봤어요</h2>
		</div>
	)
}
```

복잡한 html을 하나의 함수 안에 넣은거에요. 사용할 때는  `function App()` 안에다가 함수명을 태그로 넣어주면 됩니다. 이렇게요!

```jsx
function App() {
	return (

		<Test />

	)
}
```

참 쉽죠? 😋

**Component 만드는 법.**

1. 함수 만들고 이름을 지어요
2. 축약을 원하는 HTML을 넣어요
3. 원하는 곳에 <함수명 /> 으로 넣어요.

**Component 만들 때 유의사항**

1. 첫글자는 대문자로 
2. return 안에 있는건 태그 하나로 묶어야 해요! (같은 등급에 여러개 태그를 두면 안돼요.
    
    ```jsx
    // 나쁜 예
    function Bad() {
    	return (
    		<div></div>
    		<div></div>
    		<h1></h1>
    	)
    }
    
    // 좋은 예
    function Bad() {
    	return (
    		<>
    			<div></div>
    			<div></div>
    			<h1></h1>
    		</>
    	)
    }
    
    // <></>도 되고 그냥 <div로 묶어도 상관 없어요^^
    // <></>를 fragments 문법이라 불러요
    ```
    

**component의 장점**

- 관리가 편해져요.
- 근데 또 많이 만들면;; 복잡해지죠.

**component 언제 만들면 좋을까?**

- 반복적으로 출현하는 거!
    
    (재사용 해야 할 것들)
    
- 자주 변경되는 HTML UI들
    
    (성능의 이점)
    
- 다른 페이지 만들 때도 사용
    
    (이건 뭔소린지 모르겠다..)
    

**component의 단점**

- state 쓸 때 복잡해요.
    
    state는 컴포넌트별로 달라서 그래요. 이럴 경우 pops를 써야해요. 
    

 

### ✨ props를 사용해보자!

props는 컴포넌트간에 데이터를 주고 받기 위해 사용해요.

주로 부모가 자식에게 전달합니다. 그렇다면 거두절미하고 어떻게 전달할까요~??

1. <자식컴포넌트 작명={state명} />
2. 자식컴포넌트에서 props 파라미터 입력 후 사용