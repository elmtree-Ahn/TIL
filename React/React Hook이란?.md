
# Hooks란?

리액트 v16.8에 새로 도입된 기능으로 함수형 컴포넌트에서도 상태관리를 할 수 있도록 돕습니다.

리액트에 내장된 Hooks를 사용할 수 있으며 커스텀 Hooks를 만들 수 도 있습니다. 

### useState

✨ 가장 기본적인 Hooks 중요한 데이터는 변수 말고 State로 쓰세요!

> 숫자 카운터를 구현해보자!
> 

```jsx
export default function Counter() {
  const [value, setValue] = useState(0);
	// 기본 값은 0으로 설정 되었다.
  // 이 기본 값을 value로 사용 한다.
  // setValue는 상태를 설정하는 함수다.

  
  return(
    <div>
      <p>현재 카우터 값은 <b>{ value }</b>입니다.</p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>

    </div>
  )
}
```

👏 결과물

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/63169d5b-420b-44ca-87a9-b94e405c3004/Untitled.png)

> 여러개의 useState를 사용해보자
> 

input 에 입력하는 값이 출력되는 프로그램을 짜보자.

```jsx
export default function Info() {

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [age, SetAge] = useState();

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickName = e => {
    setNickname(e.target.value);
  }

  const onChangeAge = e => {
    SetAge(e.target.value)
  }

  return(
    <div>
      <h1>input 값 출력하기 </h1>
      <div className="inputList">
        <input value={name} onChange={onChangeName}type="text" />
        <input value={nickname} onChange={onChangeNickName} type="text" />
        <input value={age} onChange={onChangeAge} type="text" />
      </div>
      <div className="resultList">
        <div className="name">
          이름 : {name}
        </div>
        <div className="nickName">
          닉네임 : {nickname}
        </div>
        <div className="age">
          나이 : {age}
        </div>
      </div>
    </div>
  )
}
```

👏 결과물

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04b094f1-a435-4a78-ae29-5a1e68858a78/Untitled.png)

### useEffect

✨ 랜더링될 때마다  특정 작업을 수행하도록 설정하는 Hook입니다.

<aside>
💡 아직은 무슨 소린지 잘 모르겠다!!!
훗 어리석은 과거의 나, 지금의 나는 이해를 했지 😎

</aside>

우선, 기본 구조를 파악해보자

> 밀크의 useEffect 구조 설명
> 

```jsx
useEffect(() => {
	// 화면 들어 올 때	

	return () => {
	// 화면 나갈 때
	}

}, [//상태 변화 있을 때 ])
```

> 아까 만든 Info에 useEffect를 적용해보자!
> 

```jsx
export default function InfoPlus() {

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [age, SetAge] = useState();

	// 추가부분
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({name, nickname, age});
  });
	// 추가부분

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickName = e => {
    setNickname(e.target.value);
  }

  const onChangeAge = e => {
    SetAge(e.target.value)
  }

  return(
    <div>
      <h1>input 값 출력하기 업그레이드 </h1>
      <div className="inputList">
        <input value={name} onChange={onChangeName}type="text" />
        <input value={nickname} onChange={onChangeNickName} type="text" />
        <input value={age} onChange={onChangeAge} type="text" />
      </div>
      <div className="resultList">
        <div className="name">
          이름 : {name}
        </div>
        <div className="nickName">
          닉네임 : {nickname}
        </div>
        <div className="age">
          나이 : {age}
        </div>
      </div>
    </div>
  )
}
```

👏 결과물

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c219707-8b96-41e4-9d1e-1865b69756c5/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a5d51c58-94ce-47ba-be4a-845c709baf83/Untitled.png)

<aside>
💡 아.. 무언가 변화가 생길 때 마다 계속해서 설정한 프로그램을 실행하는 거구나!

</aside>

지금 짠 코드는 세션 수업때 진행한 `"화면 들어 올 때"` 로군!

> 마운트될 때만 실행하기 (첫 랜더링 할 떄)
> 

```jsx
	// 변경부분
  useEffect(() => {
    console.log('마운트 될 때만 실행 됩니다!');
  }, []);
	// 변경부분

```

업데이트 될 때마다 실행되는 것이 아니라 페이지에 들어갈 때 혹은 처음으로 실행되었을 때만 useEffect에 설정한 함수가 실행되려면 두 번째 파라미터 값으로 배열 `[ ]` 을 넣으면 됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4ba55d41-e571-46ba-ad27-07e4443152a4/Untitled.png)

<aside>
💡 상품 데이터 같은건 처음에 한 번만 불러오면 되니까 이런 식으로 불러오면 되겠군!

</aside>

> 특정 값이 업데이트 될 때만 실행하기
> 

```jsx
	// 변경부분
 useEffect(() => {
    console.log(name);
  }, [name]);
	// 변경부분

```

배열 속에 검사하고 싶은 값을 넣으면 해당 값이 변화할때만 함수가 실행됩니다. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/09c3fa53-5dca-417c-a58b-9094553c03d0/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ee5daa62-2826-4ddc-a7e4-4746f2924404/Untitled.png)

배열 `[ ]` 안에 `name` 값을 넣어서 name이 입력될 때만 콘솔로그가 찍힙니다. 

<aside>
💡 회원가입 시 아이디 혹은 비밀번호 입력할 때 이걸 사용하면 되겠다! [발리데이션]

</aside>