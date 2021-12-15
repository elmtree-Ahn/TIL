### Styled-Components를 이용한 React 컴포넌트 스타일링 정리

일반 CSS의 다섯가지 문제점중 2번이 공감된다.

1. state 값에 따라 스타일을 바인딩 해야 하는 경우
2. props가 많아지고 그에 따른 조건부 스타일링도 많아질 때
3. 거의 같은 형태의 스타일링을 가지고 있으나 일부분만 변경하여 새로운 컴포넌트를 만들어야 할 때
4. 같은 스타일을 가지고 있는 다른 선택자의 경우
5. 색상 값과 같은 반복되는 키워드가 존재할 때

1. props가 많아지고 그에 따른 조건부 스타일링도 많아질 때,
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b6a4cf2a-bd9a-42ee-9dd0-3e0873344330/Untitled.png)
    
    메인 페이지의 MD의 추천이 고민스럽긴 했다. 그래도 처음 이 화면을 마주할 때와 달리 지금은 어떻게 해야할지 어느정도 방법이 보인다. 하지만 스타일드 컴포넌트를 사용하면 확실히 더 편하겠다는 생각이 든다.
    
    예를들면 로직은 이런식?
    
    ```jsx
    { 
    	click
    	? <Basic> 전자제품 </Basic>
      : <Clicked> 전자제품 </Clicked> 
    }
    ```
    
    그러면 가운데 들어가는 전자제품 부분도, 더미로 묶는 편이 더 나으려나? 그래서 map으로 뿌려주면 되지 않을까 싶지만, 일단 보류!
    

<aside>
😎 SASS는 다뤄본적이 없는데 스터디 계획에 넣어야겠다!

</aside>

### 사용을 해보자

- 라이브러리 설치

`npm install styled-components`

- 기본적인 사용방식

```jsx
import styled from 'styled-components';

const Namestyle = styled.div`
	color: red;
	font-size: 20px;
`;

<Namestyle>테스트</Namestyle>
```

- 추천하는 익스텐션

`vscode-styled-components`를 설치하면 styled 안에서 자동완성기능을 사용할 수 있어요.

- 조건부 스타일링

```jsx
const Button = styled.button`
  color: white;
  min-width: 120px;

  /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
  background-color: ${props => props.color || "blue"};

  /* & 문자를 사용하여 Sass 처럼 자기 자신 선택이 가능합니다. */
  &:hover {
    background-color: white;
    color: black;
  }
  & + button {
    margin-left: 1rem;
  }
`;

const App = () => {
  return (
    <Container>
      <Button color="red">버튼2</Button>
    </Container>
  );
};
```

- 전역 스타일링

```jsx
const GlobalStyle = createGlobalStyle`
      body {
        margin: 50px;
        padding: 50px;
        background-color: black;

				// 전역 font-family 설정
				@import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
        font-family: "Noto Sans KR", sans-serif !important;
      }
    `;
```

### 일단 써보자!

> 어디에 사용해볼까?
> 

일단, 회원가입 페이지에 사용해 봐야겠다.

이전에 해놓은 css를 스타일드 컴포넌트로 넘기는건 비효율적이고 무엇보다 생산성이 안나온다. 새로운 페이지를 적용시키는 편이 더 좋겠다는 생각이 든다!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a3e7b8d-88c3-436b-9c90-f597a10268d0/Untitled.png)

크게 세 분류로 작성할 수 있을 것 같다.

1. 카테고리 : 아이디 비빌번호 등
2. 입력 창
3. 버튼

뭐 일단 해볼까?

<aside>
🚀 어제 리덕스를 공부하며 느낀 건데, 공부도 좋지만 일단 해보는게 좋겠다. 하면 할수록 더 어려워지니까...ㅋㅋ

</aside>

## 🤔 회원가입 페이지의 어려움

회원가입 페이지에서 스타일드 컴포넌트 사용하기는 어려운 일이 아니었다. 그러나 진짜 어려운건, 저 카테고리별로 기능이 모두 제각각이라는 점! 맘 편하게 컨트롤 c 컨트롤 v 했다가 처음부터 다시 수정중이다. 

예를 들면, 아이디 인풋 창을 클릭하면 모든 숨겨진 내용들이 들어난다. 일일이 설정을 해줘야 하는 불편함이 있다.