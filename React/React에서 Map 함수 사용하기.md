### 🔸 데이터를 뿌릴 때 4가지만 기억하세요.

1. 데이터 파일을 저장하고 불러와요.

```jsx
let data = [
  {
    id : 0,
    title : "White and Black",
    content : "Born in France",
    price : 120000
  },

  {
    id : 1,
    title : "Red Knit",
    content : "Born in Seoul",
    price : 110000
  },

  {
    id : 2,
    title : "Grey Yordan",
    content : "Born in the States",
    price : 130000
  }
] 

export default data;
```

이런 데이터 파일이 있다고 가정해볼까요?

사용을 원하는 폴더에서 import로 데이터를 받아올게요. 

1. State에 저장을 해요.

```jsx
// 먼저 데이터를 불러왔어요.
import Data from './data.js';

function App() {
	// state에 저장도 했지요 하핫
  let [shoes, setShoes] = useState(Data);

  return (
	)
}
```

1. 컴포넌트를 만들어요!

```jsx
export default function Item(props) {
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.number + 1) + ".jpg"} width="100%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & {props.shoes.price}</p>
    </div>
  )
}

// 저는 이렇게 작은 컴포넌트를 만들었고요! 
// props 값도 임의로 넣었어요.
// 하드 코딩이 아닌 props로 받아야 데이터가 바뀌는거 이제 익숙하죠?
```

1. map함수로 반복하고 props를 내보내요.

```jsx
{
	shoes.map((a, i) => {
		return <Item shoes={shoes[i]} number={i} key={i}/>
	})
            
}
```

이렇게 되면, shoes(Data)의 갯수 만큼 HTML이 반복되고 그 안의 데이터들도 변경이 되요.

<aside>
💡 근데 왜 이렇게 해야 할까요?

</aside>

상품 데이터가 3개면 이렇게 해도 상관은 없어요.

```jsx
<Item shoes={shoes[0]} number={0} key={0}/>
<Item shoes={shoes[1]} number={1} key={1}/>
<Item shoes={shoes[2]} number={2} key={2}/>
```

그런데 갑자기 데이터가 4개가 된다면? 극단적으로 데이터가 100개라면? 끔직해지죠 👾

그래서 반복문인 map을 사용하는게 데이터에 유연하게 대처할 수 있어 자주 사용하게 되어요! 잘 기억하고 자주 씁시다 :)