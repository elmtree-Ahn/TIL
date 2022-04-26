[참고] [https://kmhan.tistory.com/315](https://kmhan.tistory.com/315)

id와 pw를 입력하고 나면 자연스럽게 enter 키를 치게 된다.

그런데? enter키를 쳐도 로그인 버튼이 클릭이 안된다. 

당연한 일이다. enter 이벤트를 넣지 않았으니까!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9320908-28ee-41d3-a942-9941d62dbb27/Untitled.png)

이런 이슈를 맞이할 때 마다, 내가 사용하는 서비스들이 UX를 얼마나 신경썼는지를 새삼 느끼게 된다. 그러면 이제 enter키 이벤트를 넣어보자.

이벤트는 생각보다 간단하다. 대부분 input에 무언가를 입력한 뒤 엔터를 누르기에 엔터 이벤트는 input에게 걸어준다. 위의 예제를 보면 비밀번호를 입력하는 input에 걸어주어야 한다.

(아이디 입력하고 Enter치는 사람은 없으니까!)

작업 순서는 아래와 같다.

1. Enter를 클릭했을 때 사용할 함수를 만든다.
2. 엔터키 이벤트를 만든다.
3. input에 2번 함수를 걸어준다
4. 버튼에 1번 함수를 걸어준다.
5. 끝!

```jsx
// 1번
const onClick = () => {
	console.log("Enter")
}

// 2번
const onKeyPress = (event) => {
    if (event.key == 'Enter') {
          onClick()
    }
}

return (
	// 3번
	<input onKeyPress={onKeyPress} />
	// 4번
	<button onClick={onClick}>로그인</button>

)
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c77775a-28ad-49b8-aba2-0e0d5021f82a/Untitled.png)

결과는 대 성공!

그렇다면 이제 onClick 함수에 로그인 함수를 넣으면 문제 해결입니다!