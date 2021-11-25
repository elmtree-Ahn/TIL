### input radio | checkbox 커스텀 하기!

원리는 간단하다.

1. label로 input 과 다른 요소들을 하나에 묶는다
    
    (그래야 다른 버튼을 눌러도 input이 check 된다!)
    
2. input을 감춘다.
3. 체크 전 후의 icon을 만든다.
4. 체크 전은 display, 체크 후는 none으로 감춘다.
5. :checked 가상 클래스로 icon 을 반전시킨다!

예시) 체크되면 icon을 안보이게

```css
input:checked ~ .icon {
  display: none;
}
```

코드는 아래와 같다.

component

```jsx
<NoCheckST>
  <label className="checkBox">
    <input type="checkbox" name="select"/>
    <div className="icon"></div>
    <div className="check">
      <img src={checkImg} alt="" />
    </div>
    <div className="text">없어요</div>
  </label>
</NoCheckST>
```

style

```css
const NoCheckST = styled.div`
margin-top: 1.25rem;
margin-left: 0.125rem;

label {
  display: flex;
  align-items: center;
}

input {
  display: none;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: white;
}

input:checked ~ .icon {
  display: none;
}

.check {
  display: none;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: white;
}

input:checked ~ .check {
  display: flex;
} 

`
```