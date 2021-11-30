### 모달창 보였다가 안보였다가

JSX에서 if문은 사용이 안됩니다. 그래더 삼항연산자를 사용해야 해요. 

```jsx
// 삼항연산자
1 < 3 
	? console.log('yes')
  : console.log('No')
```

이 삼항연산자와 state를 활용해 modal이 true면 보여주고 false면 안보이게 하면 되겠죠?

```jsx
// state 기본값은 안보이게 false
let [modal, setModal] = useState(false);

// 삼항연산자
{
  modal === true
  ? <Modal />
  : null
}
```

버튼을 하나 만들어 onClick으로 `setModal(true)`을 하면 모달이 짜잔~ 하고 보여져요. 

모달을 닫을 때는 닫기 버튼을 하나 만들고 onClick으로 `setModal(false)`를 하면 되겠죠?

**만약 한 버튼으로 열고 닫고를 한다면?**

내가 짠 코드

```jsx
function modalOnOff() {
    let btn = modal;
    btn === true
    ? setModal(false)
    : setModal(true)
  }

<div>
	<button onClick={ modalOnOff }>모달</button>

    {
      modal === true
      ? <Modal />
      : null
    }

</div>
```

슨생님이 짠 코드

```jsx
function App (){

  let [modal, modal변경] = useState(false);
  return (
    <div>

      <button onClick={ ()=>{ modal변경(!modal) } }> 열고닫는버튼 </button>
      { 
         modal === true 
         ? <Modal />
         : null
      }
    </div>
  )
}
```

크.. 깔끔하다.  ! 하나로 정리해버렸네