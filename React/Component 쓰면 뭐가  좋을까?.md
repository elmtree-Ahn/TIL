### 🤭 Component 너 이래서 쓰는구나!!

마켓컬리 슬라이드 속에 들어가는 item하나를 표현하기 위해서는 아래의 코드를 입력해야한다. 다시 말하지만 이게 1개의 아이템을 표현하기 위한 코드다. 대략 세어보니 20줄 정도 된다. 

```jsx
<div>
      <li className="item">
        <a href="javascript:void(0)" className="imgBox">
          <img src="https://img-cf.kurly.com/shop/data/goods/156194450428l0.jpg" alt="" />
        </a>
        <div className="infoBox">
          <a href="javascript:void(0)" className="itemName">
            [남향푸드] 우리밀 또띠아 (냉동)
          </a>
          <div className="salePrice">
            <div className="sale">
              1%
            </div>
            <div className="price">
              5,300원
            </div>
          </div>
          <div className="marketPrice">
            5,400원
          </div>
        </div>
      </li>
    </div>
```

마켓컬리는 하나의 슬라이드에 최소 6개의 아이템이 들어간다. 그말은 하나의 코드에 위코드를 6번 입력해야한다. 그러면 코드는 몇줄? 120줄!!

거기서 아이템별로 img url 위치를 찾아서 바꿔줘야 하고, 상품명, 세일률, 가격, 세일전 가격을 바꿔야 한다. 엄청 귀찮겠지? 실제로 1주차 과제 때 상당히 귀찮았다.

이럴떄 컴포넌트를 쓰자!

위의 코드를 Item이라는 이름의 컴포넌트로 묶어 버렸다. 

```jsx
export default function Item(props) {
  return(
    <div>
      <li className="item">
        <a href="javascript:void(0)" className="imgBox">
          <img src="https://img-cf.kurly.com/shop/data/goods/156194450428l0.jpg" alt="" />
        </a>
        <div className="infoBox">
          <a href="javascript:void(0)" className="itemName">
            [남향푸드] 우리밀 또띠아 (냉동)
          </a>
          <div className="salePrice">
            <div className="sale">
              1%
            </div>
            <div className="price">
              5,300원
            </div>
          </div>
          <div className="marketPrice">
            5,400원
          </div>
        </div>
      </li>
    </div>
  )
}
```

그리고 아이템 6개를 작성하고 싶다면? 위에 코드를 똑같이 6번 복사하는 무식한 행동이 아닌 이렇게 쓰면 된다는 말씀!!

```jsx
<Slider {...settings} className="itemList">        
  <Item />
  <Item />
  <Item />
  <Item />
  <Item />
  <Item />
</Slider>
```

끝내준다... 아 그런데 이미지랑 내용들은 어떻게 바꾸냐고?

이럴 때 props를 쓰는거다!

```jsx
<Item img="" name="test" slae="" price="" marketPrice=""/>
```

Test를 해보니 아주 잘 작동된다 후훗. name에 props를 test로 내려보냈는데 아주 잘 받는다 😎

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f1c28269-36eb-4e34-a902-3ab3108eacc3/Untitled.png)

뭔가 앞으로 속도가 엄청 빨라질 것 같다 🚀