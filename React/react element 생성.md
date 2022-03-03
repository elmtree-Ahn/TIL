## DOM 다루기 Element 생성하기

### Document Object Model

문서를 논리 트리로 표현해요.

돔은, 브라우저가 이해하는 엘리먼트의 원형이라고 이해하면 되요!

### 순수 자바스크립트

특정 라이브러리나 프레임 워크를 사용하지 않는 그 자체의 자바스크립.

### HTML로 Hello, world

```jsx
<!DOCTYPE html>
<html lang="en">
  <body>
    <h1>Hello, world</h1>
  </body>
</html>
```

### JS로 Hello, world

```jsx
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
  </body>
  <script>
    const rootElement = document.getElementById("root");
    const h1 = document.createElement("h1");
    h1.innerText = "Hello, world";
    rootElement.appendChild(h1);
  </script>
</html>
```

### CDN

Content Deilivery Network

: 웹에서 사용되는 다양한 컨텐츠(리소스)를 저장하여 제공하는 시스템

`tailwind.css 사용할 때 써봤지?`

### React로 Hello, world

```jsx
<!DOCTYPE html>
<html lang="en">
  <body>
    <!-- react cdn -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <div id="root"></div>
  </body>
  <script>
    const rootElement = document.getElementById("root");
    const element = React.createElement("h1", { children: "Hello, world!" });
    ReactDOM.render(element, rootElement);
  </script>
</html>
```

## JSX과 Babel , JSX 다루기

### JSX

```jsx
// 앞에는 JS 같고 뒤에는 HTML 같네???
const element = <h1>Hello, world!</h1>
```

문자도 HTML도 아닌 JavaScript의 확장 문법

<aside>
🤠 JSX를 HTM에 적용시키려면 Babel이라는 녀석이 필요해요

</aside>

### Bable

바벨은 대표적인 JS Complier에요!

컴파일러란 무엇일까요?

언어 해석기에요. 

특정 언어를 다른 프로그램밍 언어로 옮기는 (변환하는) 프로그램입니다.

Bable CDN

[https://unpkg.com/@babel/standalone/babel.min.js](https://unpkg.com/@babel/standalone/babel.min.js)

1. 바벨을 CDN으로 불러와요.
    
    ```jsx
    <script src="[https://unpkg.com/@babel/standalone/babel.min.js](https://unpkg.com/@babel/standalone/babel.min.js)"></script> 
    ```
    
2. 사용중인 script를 컴파일링 할 수 있도록 타입을 지정해줘요.
    
    ```jsx
    <script type="text/babel">
    	// 작업중인 스크립트
    </script>
    ```
    
3. jsx 문법을 사용해봐요 (바벨 덕분에 사용이 가능합니다!)
    
    ```jsx
    const element = <h1 className="title">Hello Wrold!</h1>;
    ```
    

전체 모습

```jsx
<!DOCTYPE html>
<html lang="en">
  <body>
    <!-- react cdn -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"
    ></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
    ></script>
    <!-- bable cdn -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <div id="root"></div>
  </body>
  <script type="text/babel">
    const rootElement = document.getElementById("root");
    const element = <h1 className="title">Hello Wrold!</h1>;
    ReactDOM.render(element, rootElement);
  </script>
</html>
```

### Spread 연산자 다루기

객체에 요소들을 담은 뒤 spread 문법으로 태그에 바로 넣을 수도 있어요.

```jsx
const props = { 
	className: "title", 
	children: "Hello, World" 
};

const element = <h1 {...props}></h1>;
```

### 정리하기

JSX ⇒ React.createElement 표현식

Bable ⇒ JavaScript Compoiler

JSX 다루기 ⇒ spread 연산자

## 멀티 Element 생성하기

### React.Fragment

`<>` `</>`

부모로써 감싸주는 노출되지 않는 빈태그에요.

```jsx
<script type="text/babel">
  const rootEl = document.getElementById("root");
  const result = (
    <>
      <h1>Hi</h1>
      <h3>I'm</h3>
      <h5>Elmtree!!</h5>
    </>
  );

  ReactDOM.render(result, rootEl);
</script>
```

### Element 찍어내기

```jsx
const rootEl = document.getElementById("root");
// Paint 컴포넌트를 만든 셈
const Paint = ({ title, description, }) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{description}</h3>
      {children}
    </>
  );
};

const element = (
  <>
    <Paint title="Good" description="good" />
    <Paint title="Bad" description="bad" />
    <Paint title="Nice" description="nice" />
  </>
);

ReactDOM.render(element, rootEl);
```

### 정리하기

Function → 재사용 가능한 Element

Coustom Element → Upper case (컴포넌트는 대문자로 시작해야해요!)

children 제한 → 없음 (children은 무제한으로 사용 가능해요!)

```jsx
const Paint = ({ title, description, children }) => {
      return (
        <>
          <h1>{title}</h1>
          <h3>{description}</h3>
          {children}
        </>
      );
    };

    const Good = () => {
      return <h3>Goood~~!!</h3>;
    };

    const element = (
      <>
        <Paint title="Good" description="good">
          <Good />
          <Good />
          <Good />
        </Paint>
      </>
    );
```