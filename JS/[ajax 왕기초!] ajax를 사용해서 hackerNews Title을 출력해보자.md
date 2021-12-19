### [ajax 왕기초!] ajax를 사용해서 hackerNews Title을 출력해보자

ajax를 통해서 데이터를 불러올게요.

해커뉴스에서 제공하는 api를 통해 데이터를 불러옵니다.

### ajax 사용을 위해 *XMLHttpRequest을 생성합니다.*

```tsx
const ajax = **new** *XMLHttpRequest*();
```

### 데이터를 열어볼게요.

```tsx
// 파라미터는 다음과 같아요.
// 메소드, URL, async(동기, 비동기 여부) : false는 동기로 가져온다는 의미
ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false);
```

### 데이터를 열었으면 가져와야겠죠?

```tsx
ajax.send();
```

### 데이터 응답 여부 확인해봅니다.

```tsx
// ajax.response안에 데이터가 담겨 있어요. 
console.log(ajax.response);
```

> 우리가 할 일은 들어온 데이터를 처리해 출력결과를 만들기에요.
여기까지 가져오기는 성공했어요. 이제 출력을 해봐야 해요.
> 

현재 respose 에는 데이터가 문자열 형태로 출력되요.

이런 형식은 JS에서 활용하기 무척 어려워요. 그래서 활용하기 쉬운 객체형식으로 데이터를 변환해 볼게요. (JSON이라서 가능합니다.) 

### JSON을 객체형태로 변환하기

```tsx
const newsFeed = JSON.parse(ajax.response);
```

```tsx
<body>
  <noscript>
    Hello world
  </noscript>
  <div id="root">

  </div>
  <script src="app.js"></script>
</body>
```

### 그러면 root div태그에 문자열을 넣어봅시다.

```tsx
document.getElementById('root').innerHTML =`<ul>
<li>${newsFeed[0].title}</li>
<li>${newsFeed[1].title}</li>
<li>${newsFeed[2].title}</li>
</ul>`
```

이건 하드코딩이에요. 옳지 않죠! 

효율적으로 for문을 사용해 반복해봅시다.

### 이러면 될까? 아뇨, 오버라이팅 됩니다.

```tsx
for (let i = 0; i < 10; i++) {
	document.getElementById('root').innerHTML =`<ul>
	<li>${newsFeed[i].title}</li>
	</ul>`
}
```

li태그가 하나만 사용되기에 분명 10번은 반복되었지만 계속 오버라이팅이 되어 마지막 데이터만 출력이 됩니다.

### 제대로 해봅시다.

```tsx
// ul 태그를 하나 만들어요.
const ul = document.createElement('ul');

for (let i = 0; i < 10; i++) {
	const li = document.createElement('li');
	li.innerHTML = newsFeed[i].title
	ul.appendChild(li)
}

// root 아래 ul을 넣었어요.
document.getElementById('root').appendChild(ul)
```

정상적으로 잘 출력됩니다. 그럼 전체 코드를 모아볼까요?

```tsx
const ajax = new XMLHttpRequest();

// 데이터를 열기
// 메소드, URL, async(동기, 비동기 여부) : false는 동기로 가져온다는 의미
ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false);

// 데이터 가져오기
ajax.send();

// response의 데이터를 객체형식으로 변환하기 (JSON이기에 가능해요!)
const newsFeed = JSON.parse(ajax.response);

// ul 태그를 하나 만들어요.
const ul = document.createElement('ul');

for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.innerHTML = newsFeed[i].title
  ul.appendChild(li)
}

// root 아래 ul을 넣었어요.
document.getElementById('root').appendChild(ul)
```