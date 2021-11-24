### map 왜 안되지?

더미로 만든 데이터를 뿌리는 작업을 하고 있다. 

```jsx
const data = {
  question: "다음 음식 먹는 주기를 알려주세요.",
  title: "잡곡밥/현미밥",
  select: ["거의 안 먹음", "1주에 1번 미만", "1주에 1번", "1주에 2~4번", "1하루에 1번", "하루에 2번 이상"]
  }
```

이렇게 더미를 만들고, select의 벨류값을 출력하기 위해 map으로 돌렸다.

```jsx

data.select.map( i => {
	return <TestSubExample text={data.select[i]} key={i}/>
```

그런데.. 음? 왜 안되지?

이것저것 눌러보다가 파라미터 값으로 하나를 더 추가하니까 잘 작동인 된다. 왜 그런걸까??

```jsx

data.select.map( (i,a) => {
	return <TestSubExample text={data.select[a]} key={a}/>
```

우선 map 함수는 3개의 파라미터를 받는데 각 파라미터는 (요소값, 인덱스, this)이다.

즉, 나는 지금 요소값만 받은 상태! 여기서 인덱스를 추가해줘야 map이 작동되는 셈이다. 

예를 들어보자. 

```jsx
const arr = [1, 2, 3]
  arr.map((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return item;
  });
```

배열 [1,2,3]을 map으로 돌리되 세 개의 파라미터를 모두 넣었고 요소값, 인덱스, this로 콘솔을 찍었다. 결과값은 어떻게 될까?

요소값: 1, 인덱스: 0, this: [1,2,3]

요소값: 2, 인덱스: 1, this: [1,2,3]

요소값: 3, 인덱스: 2, this: [1,2,3]

오.. 이런 결과값이 나올거라 상상도 못했다.기억하자! 0부터 시작하는 index를 돌릴 때는 파라미터를 2개 넣자!