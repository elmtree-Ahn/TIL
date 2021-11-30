### JSX 속성에 데이터바인딩 하는법

이거 진짜 와... 이걸 이제야 알다니ㅠㅠ

리액트로 개발하면서 가장 난처할 때가 속성값에 데이터 바인딩을 할 때다. 어제도 엄청나게 애를 먹었다. 

<aside>
💡 따옴표 안에는 중괄호를 넣을 수 없다.

</aside>

이게 진리다.  그럼 어떻게 하란 말인가? 그냥 따옴표를 안넣으면 된다ㅋㅋㅋ 잉? 무슨 말이냐고? 예를 보자.

이런 코드가 있다. 저기서 노란색 3 자리에 데이터 바인딩을 하고 싶다.

```jsx
<img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
```

그런데 중괄호를 도무지 사용할 수가 없다. 안된다 절대 안된다. 그러면 방법이 없을까?

```jsx
<img src="https://codingapple1.github.io/shop/shoes{props.number}.jpg" width="100%" />
```

⭐⭐ 주목하시오!!! ⭐⭐

텍스트를 { } 안에 넣고 그 안에서 마음껏 쪼개고 붙이면 됩니다 

```jsx
<img src={ 'https://codingapple1.github.io/shop/shoes' + (props.number + 1) + '.jpg' } width="100%" />
```