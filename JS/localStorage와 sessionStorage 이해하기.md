[자바스크립트 기초-localStorage와 sessionStorage 이해하기](https://www.youtube.com/watch?v=nmLwQyWzkXU)

LocalStorage와 SessionStorage 생김새는 유사하나 사용하는 방식은 달라요.

### LocalStorage

스토리지 값을 삭제 전까지는 브라우저에 남아 있어요

PC브라우저에 남아요. 테블릿이면? 테블릿 브라우저에 남아ㅛ.

스토리지 저장을 했다고 다른 기기에서도 연동된다고 생각하면 안됩니다!

사용 예 : 로그인 정보, 계속해야 하는 정보

### SessionStorage

브라우저 창을 닫는 순간 사라집니다. (탭도 마찬가지입니다.)

사용 예 : 조회조건 등 단발성 정보

<aside>
💡 스토리지는 최대 5MB까지 저장 가능해요!

</aside>

### 사용방법

```jsx
// 세팅하는 코드
<script>
	if(typeof(Sotrage) !== "undefined") {
		// LocalStorage
		localStorage.setItem("name", "Luffy"); // 키, 벨류 를 파라미터라 받아요.
		// SessionStorage
		sessionStorage.setItem("age", "32");
	}
</script>
```

```jsx
// 출력하는 코드
<script>
	console.log(localStorage.getItem("name"));
	console.log(sessionStorage.getItem("age"));
</script>
```

### 벨류로 배열, 객체를 받고 싶다면?

```jsx
// 세팅하는 코드
<script>
	if(typeof(Sotrage) !== "undefined") {
		// 문자열로 변환 후 JSON 형태로 저장해요.
		let arr = ["a", "b"]
		localStorage.setItem("arr", JSON.stringify(arr)); 
	}
</script>
```

기존 하던 방식으로 출력하면?

```jsx
// 출력하는 코드
<script>
	console.log(localStorage.getItem("arr"));
</script>
```

["a", "b"] 가 정상적으로 출력된 것 처럼 보이나 실상은 문자열이다!

그러면 배열로 받을 수 있는 방법은 없을까? 

JSON형식으로 문자열로 변환했으니 반대로 또 변환을 해주면 된다.

아래 코드 처럼 출력을 해보면 배열 형태로 콘솔 출력이 가능하다.

```jsx
// 출력하는 코드
<script>
	console.log(localStorage.getItem("arr"));
	// 위 코드를 아래로 바꿔보세요!
	console.log(JSON.parse(localStorage.getItem("arr")));
</script>
```

![출력결과. 위에는 문자열, 아래는 배열](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de7a9c14-e038-4d17-9ba3-0221599ff0c9/Untitled.png)

출력결과. 위에는 문자열, 아래는 배열