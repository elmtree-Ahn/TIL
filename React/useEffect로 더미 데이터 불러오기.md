### useEffect로 더미불러오기

<aside>
💡 더미데이터를 useEffect에서 불러 올수 있도록 바꿔보시기 바랍니다^^

</aside>

밀크의 가르침을 받들어(?) useEffect로 데이터를 불러왔다. 거기에 서버와의 통신을 위해  setTiemout함수도 사용을 했다. 불러오는데 시간이 필요하니 어느 정도 텀을 두는게 사용자가 보기에 좋을 성 싶다.

```jsx
useEffect(() => {
    const goodsList = setTimeout(() => {
      setData([
				// 코드 편의상 오브젝트를 하나만 적었지만 실제로는 20개 정도 된다. 
        {
          id : 0,
          url : "https://img-cf.kurly.com/shop/data/goods/1632445842263l0.jpg",
          title : "[아임웰] 굿밸런스 라이트밀 솥밥 2종",
          sale : 5,
          price : "2,600",
          marketPrice : '3,000',
          coment : "따끈하게 즐기는 담백한 한 끼",
          kurlyOnly : false
        },
    ])
  }, 2000) //2초의 딜레이를 두었다. 

  return() => {
    clearTimeout(goodsList)    
  }
  }, [])
```

이렇게 하니 사실 문제가 발생했다!

신상품 컴포넌트와 베스트 컴포넌트를 구분하여 사용 중인데, 양쪽에 이런 데이터를 넣자니 코드가 비효율적으로 보였다.

그래서 신상품, 베스트 컴포넌트를 하나로 통합하고 나머지 차이점들은 props로 내리는 식으로 변경을 했다. 그러다 보니 보여지는 이미지들이 모두 동일하다는 거!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/45c62251-b30c-4ede-ad84-b8ea58e4af01/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/42d26bb9-c34b-4494-afbe-4069682e4f4f/Untitled.png)

> **같은 데이터이지만 페이지마다 보여지는 모습을 다르게 하려면?**
> 

그러면 보여지는 이미지들의 순서를 어떻게 바꿀 수 있을까? 

신상품은 아무래도 등록순으로 데이터가 보여지는 듯하고 베스트는 말 그대로 조회수 혹은 판매량으로 보여지는 것 같은데, 이 부분은 백앤드의 영역일까?

그래서 다시 마켓컬리를 살펴봤는데,, 아니 이럴수가?

신상품과 베스트 페이지의 상품 총 건수가 다르다!!

신상품은 305건

베스트는 283건

# 🤔 흠.....?

그러면 두 개의 가설을 세울 수 있다.

1. 두 페이지의 데이터가 애당초 다르다.
- 다만 이럴 경우 데이터 관리가 복잡할 것 같다.

1. 실제 데이터는 더 많고 쿼리문으로 땡겨오는게 다른가?
- 사실 이건 내가 말하면서도 잘 이해가 안되는데,
- 하나의 데이터가 있고 조건에 맞게 땡겨오는 느낌.. 이랄까?

<aside>
💡 물어봐야겠다 ㅋㅋㅋ

</aside>