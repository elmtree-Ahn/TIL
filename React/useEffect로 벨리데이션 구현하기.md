### 회원가입 페이지 만들기 (대체 몇일 째인거냐!!)

마켓컬리의 회원가입 페이지는 크게 두 가지 기능이 있다.

1. 인풋창을 클릭하면 코멘트가 드러난다.
2. 인풋창에 원할한 입력을 위한 벨리데이션이 있다.

코멘트가 드러나는 부분은 세 가지 규칙만 기억하면 된다.

1. 만든다.
2. 숨긴다
3. 조건이 맞으면 드러난다.

리액트의 경우 이를 아주 쉽게 표현할 수 있는 useState 훅이 존재한다.

먼저, 이렇게 state를 하나 만든다.

```jsx
let [coment, setComent] = useState(false);
```

그 다음에 클릭을 할 버튼에 onClick 을 추가하고, false값을 true로 바꾸게 한다. 원리는 간단하다.

coment의 값이 false 이면 감추고  true면 보이게 한다. 나머지 구현 코드는 아래와 같다.

```jsx
<input type="text" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" onClick={() => setComent(true)}/>
{
  coment === true
  ? (
  <div className="coment">
    <div className="txt">
      6자 이상의 영문 혹은 영문과 숫자를 조합
    </div>
    <div className="txt">
      아이디 중복확인
    </div>
  </div>
  )
  : null
}
```

분명 2주차 때 몇번 사용했던 기능인데, 요 몇일 안썼다고 다시 개발일지를 확인하고 왔다. 

<aside>
💡 꾸준히 하자 계속 하자 익숙해질 때까지 그냥 하자!

</aside>

이렇게 코멘트가 뜨는 부분은 구현했다.

> useEffect로 벨리데이션 구현하기
> 

이제 벨리데이션이다. 먼저, 밀크가 예시로 보여주었던 코드를 분석해보자.

```jsx
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { useState } from 'react';

function PageC() {

    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (password.length > 1 && password.length < 5) {
            setValidation('비밀번호는 5자리 이상이여야 합니다.');
        }
        else {
            setValidation('');
        }
    }, [password])

    const inputPassword = (e) => {
        setPassword(e.target.value);
    };

    const goPageA = () => {
        history.push('/');
    };

    return (
        <>
            <h1>페이지 C입니다.</h1>
            <input onChange={inputPassword} />
            <p style={{ color: 'red' }}>{validation}</p>
            <button onClick={goPageA}>페이지 A로 이동</button>
        </>
    );
}

export default PageC
```

우선 input창에 데이터를 입력하면 그 값이 바로 setPassword로 전달됩니다.

setPassword의 값이 1보다 크고 5보다 작으면 ( 1 <  ㅌ < 5 ) set Validation에 "비빌번호는 ..." 문구가 뜹니다. 그리고 5글자 이상이 되면 아무런 멘트도 나오지 않게 되죠.

이 때 useEffect에서 현재 상태 변화 확인을 위해 두번째 파라미터인 배열 안에 password를 넣어줍니다. 이 부분의 변화만 감지하겠다는 의미죠! 

> 흠, 그럼 내 프로젝트에 적용을 해볼까?
> 

# 나는 색깔도 바뀌어야 하는데 이를 어쩐담. 😅

그래서 나는 className 값을 한 번 추가해보려고!

1글자 이상이 되면 bad 클래스 네임을 추가해서

빨간색에, X모양을 뜨게 할거고

7글자 이상이 되면 good 클래스 네임을 추가해서

초록색에 동그라미 모양을 뜨게 해보려 한다. 

오! 생각보다 쉽게 구현되었다.  먼저 JS부분이다.

```jsx
	// 코멘트 보여줄까 말까
  const [coment, setComent] = useState(false);
	코멘트는 input창이 클릭되면 true로 바뀌면서 내용이 보여진다. 

  // 조건에 따라 값 바꾸기
  const [condition, setCondition] = useState('txt');
	아래 벨리데이션 조건에 따라 condition 값이 바뀐다.
	

  // 입력 값 스테이트
  const [data, setData] = useState('');

  // 벨리데이션
  useEffect(() => {
    if (data.length > 0 && data.length < 6 ){
      setCondition('bad')
    }
    else if (data.length >= 6) {
      setCondition('good')
    }
    
  })

  // 입력 값 변수로 받기
  const inputData = (e) => {
    setData(e.target.value);
  }
```

다음은 JSX 부분이다.

```jsx
<input type="text" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" onClick={() => setComent(true)} onChange={inputData}/>
  {
    coment === true
    ? (
    <div className="coment">
      <div className={condition}>
        6자 이상의 영문 혹은 영문과 숫자를 조합
      </div>
      <div className="txt">
        아이디 중복확인
      </div>
    </div>
    )
    : null
  }
```

바뀐건 별로 없다. 

onChange를 추가해 input에 입력되는 데이터를 변수로 받았다. 이 변수는 그냥 data라고 작명했고 data의 길이에 따라 컨디션이 바뀐다. 

노란색으로 칠한걸 보면 condition이 className으로 들어간게 보인다. 

condition의 기본 값은 txt 이고 이렇게 출력이 된다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6928d9d0-45d1-449b-8b41-e40dd2e63f86/Untitled.png)

자~ 이제 input 창에 글자를 하나 적어보자.

a라는 데이터를 넣어보자. 넣는 순간 어떤 변화가 생길까?

onChange 가 변화를 감지하고 입력된 내용을 data라는 변수로 받는다.

그런데 이 data의 길이가 0보다 크다. 그러면? if 문에 의해서 condition 값이 txt에서 bad로 바뀐다. 

그러면 이런 결과가 출력된다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a3af13e0-1a93-4429-9300-bb59c6e3d2d8/Untitled.png)

뿌듯하다. 

<aside>
💡 [참고] 편의상 글자 개수로만 벨리데이션을 구현했다.

</aside>

그러면 이제 6자 이상으로 데이터를 입력해보자.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5332218-5e47-4c63-92d1-56c74fe93e9a/Untitled.png)

원하는 대로 결과가 잘 출력되었다 😎