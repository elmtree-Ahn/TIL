### ๐ธ ๋ฐ์ดํฐ๋ฅผ ๋ฟ๋ฆด ๋ 4๊ฐ์ง๋ง ๊ธฐ์ตํ์ธ์.

1. ๋ฐ์ดํฐ ํ์ผ์ ์ ์ฅํ๊ณ  ๋ถ๋ฌ์์.

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

์ด๋ฐ ๋ฐ์ดํฐ ํ์ผ์ด ์๋ค๊ณ  ๊ฐ์ ํด๋ณผ๊น์?

์ฌ์ฉ์ ์ํ๋ ํด๋์์ import๋ก ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ฌ๊ฒ์. 

1. State์ ์ ์ฅ์ ํด์.

```jsx
// ๋จผ์  ๋ฐ์ดํฐ๋ฅผ ๋ถ๋ฌ์์ด์.
import Data from './data.js';

function App() {
	// state์ ์ ์ฅ๋ ํ์ง์ ํํซ
  let [shoes, setShoes] = useState(Data);

  return (
	)
}
```

1. ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค์ด์!

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

// ์ ๋ ์ด๋ ๊ฒ ์์ ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค์๊ณ ์! 
// props ๊ฐ๋ ์์๋ก ๋ฃ์์ด์.
// ํ๋ ์ฝ๋ฉ์ด ์๋ props๋ก ๋ฐ์์ผ ๋ฐ์ดํฐ๊ฐ ๋ฐ๋๋๊ฑฐ ์ด์  ์ต์ํ์ฃ ?
```

1. mapํจ์๋ก ๋ฐ๋ณตํ๊ณ  props๋ฅผ ๋ด๋ณด๋ด์.

```jsx
{
	shoes.map((a, i) => {
		return <Item shoes={shoes[i]} number={i} key={i}/>
	})
            
}
```

์ด๋ ๊ฒ ๋๋ฉด, shoes(Data)์ ๊ฐฏ์ ๋งํผ HTML์ด ๋ฐ๋ณต๋๊ณ  ๊ทธ ์์ ๋ฐ์ดํฐ๋ค๋ ๋ณ๊ฒฝ์ด ๋์.

<aside>
๐ก ๊ทผ๋ฐ ์ ์ด๋ ๊ฒ ํด์ผ ํ ๊น์?

</aside>

์ํ ๋ฐ์ดํฐ๊ฐ 3๊ฐ๋ฉด ์ด๋ ๊ฒ ํด๋ ์๊ด์ ์์ด์.

```jsx
<Item shoes={shoes[0]} number={0} key={0}/>
<Item shoes={shoes[1]} number={1} key={1}/>
<Item shoes={shoes[2]} number={2} key={2}/>
```

๊ทธ๋ฐ๋ฐ ๊ฐ์๊ธฐ ๋ฐ์ดํฐ๊ฐ 4๊ฐ๊ฐ ๋๋ค๋ฉด? ๊ทน๋จ์ ์ผ๋ก ๋ฐ์ดํฐ๊ฐ 100๊ฐ๋ผ๋ฉด? ๋์งํด์ง์ฃ  ๐พ

๊ทธ๋์ ๋ฐ๋ณต๋ฌธ์ธ map์ ์ฌ์ฉํ๋๊ฒ ๋ฐ์ดํฐ์ ์ ์ฐํ๊ฒ ๋์ฒํ  ์ ์์ด ์์ฃผ ์ฌ์ฉํ๊ฒ ๋์ด์! ์ ๊ธฐ์ตํ๊ณ  ์์ฃผ ์์๋ค :)