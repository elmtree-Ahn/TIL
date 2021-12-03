### props의 Defualt 값 유지하기

컴포넌트의 데이터를 모두 props로 두니, 부모 컴포넌트에서 데이터를 뿌려주지 않으면 텍스트는 보이지도 않고 이미지도 허옇게만 나온다. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9aaab5c3-7f3a-49d2-9538-75a74ebd8ac3/Untitled.png)

그래도 기본적으로 어떤 내용이 들어가는 지 모양 정도는 알 수 있으면 좋을련만! 즉 디폴트 값이 있으면 좋을텐데 라는 생각이 들었다. 다행히 리액트는 props의 디폴트 값을 설정할 수 있다. 

선언 방식은 다음과 같다. 아 선언 위치는 컴포넌트 바깥에서 선언해야 한다!

```jsx
컴포넌트명.defaultProps = {
	name: '기본 이름',
	desc: '기본 설명'
}
```

실제 사용 예를 봐볼까요?

```jsx
export default function EvnetItem(props) {
  return (
    <>
      <li className="eventItem">
        <a href="javascript:void(0)" className="imgBox">
          <img src={props.imgUrl} alt="" />
        </a>
        <div className="infoBox">
          <a href="javascript:void(0)" className="itemName">
            {props.name}
          </a>
          <div className="itemDesc">
              {props.desc}
          </div>
        </div>
      </li>
    </>
  )
}

EvnetItem.defaultProps = {
  name: '이름을 입력하세요',
  desc: '설명을 쓰세요.'
}
```

최하단에 `defualtProps` 값을 입력해두었다.

그러면 화면는 어떻게 비춰질까?

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/63f6ef13-3919-4c5b-8b94-e864b28c47d3/Untitled.png)

정상적으로 디폴트 데이터가 잘 출력 된다 😎 

이 기능은 자주 이용하게 될 것 같다!