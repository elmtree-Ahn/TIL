### ๐คญ Component ๋ ์ด๋์ ์ฐ๋๊ตฌ๋!!

๋ง์ผ์ปฌ๋ฆฌ ์ฌ๋ผ์ด๋ ์์ ๋ค์ด๊ฐ๋ itemํ๋๋ฅผ ํํํ๊ธฐ ์ํด์๋ ์๋์ ์ฝ๋๋ฅผ ์๋ ฅํด์ผํ๋ค. ๋ค์ ๋งํ์ง๋ง ์ด๊ฒ 1๊ฐ์ ์์ดํ์ ํํํ๊ธฐ ์ํ ์ฝ๋๋ค. ๋๋ต ์ธ์ด๋ณด๋ 20์ค ์ ๋ ๋๋ค. 

```jsx
<div>
      <li className="item">
        <a href="javascript:void(0)" className="imgBox">
          <img src="https://img-cf.kurly.com/shop/data/goods/156194450428l0.jpg" alt="" />
        </a>
        <div className="infoBox">
          <a href="javascript:void(0)" className="itemName">
            [๋จํฅํธ๋] ์ฐ๋ฆฌ๋ฐ ๋๋ ์ (๋๋)
          </a>
          <div className="salePrice">
            <div className="sale">
              1%
            </div>
            <div className="price">
              5,300์
            </div>
          </div>
          <div className="marketPrice">
            5,400์
          </div>
        </div>
      </li>
    </div>
```

๋ง์ผ์ปฌ๋ฆฌ๋ ํ๋์ ์ฌ๋ผ์ด๋์ ์ต์ 6๊ฐ์ ์์ดํ์ด ๋ค์ด๊ฐ๋ค. ๊ทธ๋ง์ ํ๋์ ์ฝ๋์ ์์ฝ๋๋ฅผ 6๋ฒ ์๋ ฅํด์ผํ๋ค. ๊ทธ๋ฌ๋ฉด ์ฝ๋๋ ๋ช์ค? 120์ค!!

๊ฑฐ๊ธฐ์ ์์ดํ๋ณ๋ก img url ์์น๋ฅผ ์ฐพ์์ ๋ฐ๊ฟ์ค์ผ ํ๊ณ , ์ํ๋ช, ์ธ์ผ๋ฅ , ๊ฐ๊ฒฉ, ์ธ์ผ์  ๊ฐ๊ฒฉ์ ๋ฐ๊ฟ์ผ ํ๋ค. ์์ฒญ ๊ท์ฐฎ๊ฒ ์ง? ์ค์ ๋ก 1์ฃผ์ฐจ ๊ณผ์  ๋ ์๋นํ ๊ท์ฐฎ์๋ค.

์ด๋ด๋ ์ปดํฌ๋ํธ๋ฅผ ์ฐ์!

์์ ์ฝ๋๋ฅผ Item์ด๋ผ๋ ์ด๋ฆ์ ์ปดํฌ๋ํธ๋ก ๋ฌถ์ด ๋ฒ๋ ธ๋ค. 

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
            [๋จํฅํธ๋] ์ฐ๋ฆฌ๋ฐ ๋๋ ์ (๋๋)
          </a>
          <div className="salePrice">
            <div className="sale">
              1%
            </div>
            <div className="price">
              5,300์
            </div>
          </div>
          <div className="marketPrice">
            5,400์
          </div>
        </div>
      </li>
    </div>
  )
}
```

๊ทธ๋ฆฌ๊ณ  ์์ดํ 6๊ฐ๋ฅผ ์์ฑํ๊ณ  ์ถ๋ค๋ฉด? ์์ ์ฝ๋๋ฅผ ๋๊ฐ์ด 6๋ฒ ๋ณต์ฌํ๋ ๋ฌด์ํ ํ๋์ด ์๋ ์ด๋ ๊ฒ ์ฐ๋ฉด ๋๋ค๋ ๋ง์!!

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

๋๋ด์ค๋ค... ์ ๊ทธ๋ฐ๋ฐ ์ด๋ฏธ์ง๋ ๋ด์ฉ๋ค์ ์ด๋ป๊ฒ ๋ฐ๊พธ๋๊ณ ?

์ด๋ด ๋ props๋ฅผ ์ฐ๋๊ฑฐ๋ค!

```jsx
<Item img="" name="test" slae="" price="" marketPrice=""/>
```

Test๋ฅผ ํด๋ณด๋ ์์ฃผ ์ ์๋๋๋ค ํํ. name์ props๋ฅผ test๋ก ๋ด๋ ค๋ณด๋๋๋ฐ ์์ฃผ ์ ๋ฐ๋๋ค ๐

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f1c28269-36eb-4e34-a902-3ab3108eacc3/Untitled.png)

๋ญ๊ฐ ์์ผ๋ก ์๋๊ฐ ์์ฒญ ๋นจ๋ผ์ง ๊ฒ ๊ฐ๋ค ๐