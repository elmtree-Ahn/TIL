## Form 다루기

### 기본적인 Form

label

input

HTML의 기본적이 form 형식을 살펴볼까요?

```jsx
const rootElement = document.getElementById("root");
const App = () => {
  
  return (
    <>
			<form onSubmit={handleSubmit}>
        <label htmlFor="fname">프레임을 입력하세요.</label>
        <br />
        <input id="fname" defaultValue="Ahn" />
        <br />
        <label htmlFor="lname">이름을 입력하세요.</label>
        <br />
        <input id="lname" defaultValue="Yoo" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
ReactDOM.render(<App />, rootElement);
```

자, 보통 이런식으로 작성하겠죠?

> submit을 눌었을 때 input에 담긴 두 개의 값을 alert에 띄어볼게요!
> 

1. `value`는 `defaultValue`로, `for`는 `htmlFor`로 치환해줍니다.
2. `form` 태그에 `onSubmit` action을 줍니다.
3. `event.preventDefault()`로 기존 `submit`의 기능을 비활성화 시켜줍니다.
4. `consolel.dir()` 로 객체의 값들을 확인해봅시다.
5. 이름으로 input을 선택할 수 있어요!

```jsx
const rootElement = document.getElementById("root");
const App = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event.target);
    alert(
      `fName : ${event.target.elements.fname.value}, lName : ${event.target.elements.lname.value}`
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">프레임을 입력하세요.</label>
        <br />
        <input id="fname" name="fname" defaultValue="Ahn" />
        <br />
        <label htmlFor="lname">이름을 입력하세요.</label>
        <br />
        <input id="lname" name="lname" defaultValue="Yoo" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
ReactDOM.render(<App />, rootElement);
```

### 정리

onSubmit ⇒ event.preventDefault()

event.target.elements ⇒ onsole.dir(element)

### 전화번호 벨리데이션 만들기

1. 전화번호만 입력해야 해요.
2. submit은 input에 010이 들어가야 활성화 됩니다.

```jsx
const rootElement = document.getElementById("root");
const App = () => {
  const [message, setMessage] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(phoneNumber);
  };

  const handleChange = (event) => {
    if (event.target.value.startsWith(0)) {
      setMessage("Phone Number is valid");
      setPhoneNumber(event.target.value);
    } else if (event.target.value.length === 0) {
      setPhoneNumber("");
      setMessage("");
    } else {
      // setPhoneNumber("");
      setMessage("Phone Number should starts with 0");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">phone number : </label>
        <br />
        <input
          id="phone"
          name="phone"
          onChange={handleChange}
          value={phoneNumber}
        />
        <p>{message}</p>
        <br />
        <button
          type="submit"
          disabled={
            !phoneNumber.length > 0 || message !== "Phone Number is valid"
          }
        >
          Submit
        </button>
      </form>
    </>
  );
};

ReactDOM.render(<App />, rootElement);
```

### 정리

벨리데이션은  onChnage에서 하는게 편해요!

controlled → input의 vaule를 리액트에서 직접 관리해요.

## Error 다루기

> catch Error
> 

```jsx
// JS의 기본적인 try, catch문
try {
	... 
} catch (error) {
	...
}
```

error를 다루기 위해, 늘 에러가 발생하는 child라는 컴포넌트를  하나 만들어 볼게요.

1. Child에서 `throw new Error()` 로 임의의 에러를 생성해요.

```jsx
const rootElement = document.getElementById("root");
    const Child = () => {
      throw new Error("test Error");
      return <p>Child</p>;
    };

    const App = () => {
      return (
        <>
          <p>App</p>
          <Child />
        </>
      );
    };

    ReactDOM.render(<App />, rootElement);
```

흠, 고민이 생깁니다.

Child에서 에러가 발생해도, App은 출력이 되어야 할텐데,

자식 때문에 온집아니 패가망신하니 이거 큰일이죠?

이럴 때 `ErrorBoundary`를 생성해야해요.

```jsx
// ErrorBoundary는 클래스 컴포넌트로 만들어요.
class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;
		
		// 에러가 발생하면 아래 값을 넣기
    if (error) {
      return <p>Ther is some Error... </p>;
    }

		// 에러 없으면 원래 값을 ㄴ허기
    return this.props.children;
  }
}
```

그 다음 에러가 날 녀석을 `ErrorBoundary` 컴포넌트로 감싸줘요.

```jsx
const rootElement = document.getElementById("root");

    class ErrorBoundary extends React.Component {
      state = { error: null };
      static getDerivedStateFromError(error) {
        return { error };
      }
      render() {
        const { error } = this.state;
        if (error) {
          return <p>Ther is some Error... </p>;
        }

        return this.props.children;
      }
    }

    const Child = () => {
      throw new Error("test Error");
      return <p>Child</p>;
    };

    const App = () => {
      return (
        <>
          <p>App</p>
          <ErrorBoundary>
            <Child />
          </ErrorBoundary>
        </>
      );
    };

    ReactDOM.render(<App />, rootElement);
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fa64f483-2acd-4248-bae6-daa8a514acba/Untitled.png)

세상에! App은 정상적으로 그려졌고,

에러가 발생한 곳에는 우리가 지정한 문구가 정상적으로 출력되었다!!

### 심화

`ErrorBoundary` 에서 지금까지는 아래처럼 에러시 반환할 요소를 직접 입력했습니다.

```jsx
class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    if (error) {
      return <p>Ther is some Error... </p>;
    }

    return this.props.children;
  }
}
```

그런데, 여러 에러가 발생할 가능성이 있다고 할 때,

5개의 컴포넌트에 에러가 발생하면 모두 똑같은 메시지가 출력되면 곤란할 수 있겠죠?

그럴 때는 바운더리 컴포넌트 마다 fallback으로 에러로 반환할 문구를 입력할 수 있어요.

- ErrorBoundary 셋팅

```jsx
class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    if (error) {
			return this.props.fallback    
		}

    return this.props.children;
  }
}
```

```jsx
<ErrorBoundary fallback={<p>NewError!!</p>}>
  <Child />
</ErrorBoundary>
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9d7b726-e8a5-4be0-b678-360db246dc10/Untitled.png)

정상적으로 잘 출력되네요! fallback을 통해 다양한 대체 메세지를 넘길 수 있어요.

### 정리

리액트에서 에러가 발생하면,

Error Boundary를 생성하고, Catch Error해서 보여줍니다.

Fallback 을 사용해 Error가 났을 때 보여줄 컴포넌트를 전달합니다. 

## 중간복습

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f9dc5d3-0aff-415b-87f9-edbcd8d9b444/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a6d96601-f42b-427a-a9f5-289f4259b6ed/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e922f46-60b9-410b-8426-b77cb3ecbce9/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4cc47ff1-faa5-49fb-b88b-654365eee502/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/527da2c2-14db-47a6-bff0-0f0a48b83877/Untitled.png)

### 곁드림

따라치기만 하니 재미없다 vs 따라치기만 해도 버겁다

동영상 강의의 장점.

→ 스스로 조절할 수 있다!

재미가 없다면? → MDN , REACT 공식문서 보기

맛보기는 스르륵 맛만 보고 넘어가자. 나중에 다시 정리합니다!!

## Key와 리랜더링 알아보기

> What is key
> 

Key -Value

Key는 Value를 특정하는 이름이에요.

### TodoList를 만들면서 테스트해볼게요!