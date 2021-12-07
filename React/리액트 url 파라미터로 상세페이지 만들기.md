## 페이지 이동 할 때 데이터 넘기기 (상세페이지)

상세페이지를 만들려고 한다. 

A라는 상품을 누르면 A의 상세 페이지가 떠야 한다. 

그러면 두 가지를 생각해야 한다.

1. 이동 : 라우터 사용하기
2. 데이터 변경 : props와 state
    1. 기존 item 더미 데이터에 상세페이지에 들어갈 내용들도 추가를 해야겠다. 

동시에 한 가지 의문점이 든다.

1. 이동 된 상세페이지의 주소. 즉 `path` 값은 어떻게 해야 할까?

상세 페이지의 path를 어떻게 하냐. 이 부분이 핵심으로 보인다. 

### 해결방법 고안

이렇게 하면 좋겠다. product라는 페이지가 있고 그 뒤에 숫자를 넣으면 해당 인덱스에 맞는 상품의 상세페이지가 나오는 거다!

0번 인덱스 = `/product/0`

1번 인덱스 = `/product/1`

2번 인덱스 = `/product/2`

3번 인덱스 = `/product/3`

### 시작해보자

상품페이지의 path를 detail이라고 하고, 데이터는 item이라고 해보자.

```jsx
<Route path="/detail">
	<Detail itme={item}>
</Route>
```

위에 처럼 0번 인덱스에 0, 1번 인덱스에 1 이런식으로 하면 아래 처럼 표현해야 한다. 그런데 만약 100개라면? 아찔하다. 맵 함수를 사용해야 할까?

```jsx
<Route path="/detail/0">
	<Detail itme={item}>
</Route>

<Route path="/detail/1">
	<Detail itme={item}>
</Route>

<Route path="/detail/2">
	<Detail itme={item}>
</Route>

... 100개라면? 정신이 아득해진다.
```

이럴 때는 이렇게 해보자.

```jsx
<Route path="/detail/:id">
	<Detail itme={item}>
</Route>
```

`:id` 는 무엇인가? 아무문자나 받겠다는 라우터 URL 작명 방법이다. 

:id 자리에 어던 문자를 넣든지 `detatil` 페이지를 보여준다.

엄밀히 말하면 `:` 뒤에 아무 문자나 적어도 된다. 즉 `파라미터`다. 편의상 id로 적었을 뿐 의미는 없다. `:` 이 중요하다. 그렇기에 여러개 사용도 가능하다.

```jsx
// 이런 것도 되기는 된다.
/detail/:id/:hello/:goodbye
```

> 상세페이지의 주소(path)는 해결이 되었다!
> 

하지만, 데이터가 바뀌는 부분은 아직이다! Detail.js에서 item을 props로 받는 예시를 봐보자.

```jsx
<div className="title">
	{props.item[0].title}
</div>
```

현재는 0번째 인덱스의 title을 받아오고 있다.

내가 원하는 건 /detail/3 일 경우 저 숫자 3이 현재 0의 자리에 들어가는 거다.

```jsx
// /detail/n 일 경우

<div className="title">
	{props.item[이 자리에 n이 들어와야 한다.].title}
</div>
```

저 n을 변수로 받아올 수 있을까? 있다.

> useParams 를 사용하면 된다.
> 

먼저 사용을 위해서 import를 해온다.

```jsx
import { useParams } from 'react-router-dom';
```

그 후에 훅을 사용한다. 여기서 id는 위에서 사용했던 콜론 `:` 뒤에 오는 파라미터다. `:id` 라고 파라미터를 넘겼기에 `{ id }` 로 받아온거다.

```jsx
let { id } = useParams();
```

그리고 이렇게 적용하면 된다.

```jsx
<div className="title">
	{props.item[id].title}
</div>
```

### 내 프로젝트에 적용하려면?

위에 예시는 A와 B 2개의 컴포넌트를 사용하고 있다.

A의 역할

- 라우터 :id 로 상세페이지의 주소 만듬
- 파라미터 id를 내려줌
- 데이터를 props로 내려줌

B의 역할

- useParams로 id 파라미터를 받음
- 받은 porps를 사용함

### 문제가 발생했다.

3시간을 헤맸다 그리고 근접했다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62103565-b96d-457e-91f8-8bf1c318dcd8/Untitled.png)

제품 이미지를 클릭하면 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c94685e3-e37a-4d2a-a74b-a1328a470fba/Untitled.png)

상세페이지로 이동한다!

다른 제품들도 동일하게 작동한다!!

<aside>
💡 중요한 데이터는 App.js에 넣자!

</aside>

한 참을 헤맨 이유는 데이터를 자식요소에서 부모요소로 올릴 수 없었기 때문이다. 

A를 부모요소 B를 자식 요소라고 해보자.

A가 데이터를 갖고 B에게 전달한다. 이 때 <Route>의 Path url 파라미터도 동시에 전달할 수 있다. 

결과적으로 파라미터 값 (0, 1, 2, 3)에 맞는 데이터를 표현하면 끝이다.

간단하다.

하지만 내가 짠 구조는 이게 불가능했다.

A 조부모요소 , B 부모요소, C 자식요소라고 해보자.

내 구조는 B가 데이터를 갖고 있었다. 따라서 C에게 전달하는 것은 쉬웠다.

그런데, 라우터는 A에 구현을 했었다.

그러다보니 B요소가 갖고 있는 데이터를 A로 올리는게 쉽지 않았다. 당연한 결과다. 결국 A요소에 데이터를 다시 불러오자 구현이 되었다.

중요한 데이터는 최상단에 넣는게 좋을 것 같다. 

A컴포넌트 APP.js (메인)

라우터 만들기 해당 id 값은 Detail로 전달한다.

```jsx
<Route path="/detail/:id">
  <Detail data={data}/>
</Route>
```

B컴포넌트 NewGoods.js (아이템  리스트)

```jsx
data.map((a, i) => {
    return (
      <>
        <BasicItem url={data[i].url} title={data[i].title} sale={data[i].sale} price={data[i].price} marketPrice={data[i].marketPrice} coment={data[i].coment} kurlyOnly={data[i].kurlyOnly} adress={data[i].id} key={data[i].id} />
      </>
      )
    })

// adress 값을 주목하라. 
// /detail/n  n의 자리에 올 값으로 adress 값을 던졌다. 
```

C컴포넌트 BasicItem.js (아이템)

```jsx
let { id } = useParams()

<Link to={'/detail/' + props.adress} className="imgBox">
  <img src={props.url} alt="" />
</Link>

이미지를 클릭하면 /detail/n 으로 이동하게 했다. 
```

D컴포넌트 Detail.js (상세페이지)

```jsx
let { id } = useParams();
// A에서 던진 URL 파라미터를 받았다.

<>
  <p>{props.data[id].title}</p>
  <p>선택하신 제품의 상세페이지입니다. </p>
</> 
```