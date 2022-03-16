https://github.com/elmtree-Ahn/prettyTodoList-vanilla

### 기본세팅

폰트 : [https://fonts.google.com/specimen/Poppins?query=poppins&preview.text=testit, wedd had left the ground.&preview.size=24&preview.text_type=custom](https://fonts.google.com/specimen/Poppins?query=poppins&preview.text=testit,%20wedd%20had%20left%20the%20ground.&preview.size=24&preview.text_type=custom)

아이콘 : 폰트어썸 [https://fontawesome.com/](https://fontawesome.com/)

## 배운 꿀팁들

### 유니코드 사용하기

`::select`에서 `contetn` 값으로 `“\25BC”`를 주었다.

```jsx
.select::before {
    content: "\25BC";
}
```

[▼ - 블랙 다운 포인팅 삼각형: U+25BC](https://unicode-table.com/kr/25BC/)

찾아보니 유니코드였던 것!!ㅎ

때로 이렇게 간단한 아이콘은 font awsome에서 찾기 보다는 유니코드로 해결하는 것도 좋은 팁이다!

### classList.toggle

이건 정말 신세계였다!! 

지금까지 열고 닫고 등을 구현 할 때 .add .remove를 사용했는데, 

.toggle을 사용하면 한큐에 해결이 된다.

**`toggle**( String [, force] )`

하나의 인수만 있을 때: 클래스 값을 토글링한다. 즉, 클래스가 존재한다면 제거하고 `false`를 반환하며, 존재하지 않으면 클래스를 추가하고 `true`를 반환한다.

두번째 인수가 있을 때: 두번째 인수가 `true`로 평가되면 지정한 클래스 값을 추가하고 `false`로 평가되면 제거한다.

프로젝트에서 체크 하면 completed가 추가되어 변경이 되고,

다시 누르면 complted가 삭제되어 원래 모습으로 돌아와야 하는데

```jsx
todo.classList.toggle('completed');
```

이걸로 한 번에 해결!

### 어떤게 더 좋은 방식일까?

```jsx
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
// create Li
const newTodo = document.createElement("li");
newTodo.innerText = $todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
// Check button
const completedButton = document.createElement('button');
completedButton.innerHTML = `<i class="fas fa-check"></i>`
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
// Trash button
const trashButton = document.createElement('button');
trashButton.innerHTML = `<i class="fas fa-trash"></i>`
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
```

대략 이런식으로 돔을 만들면, 한 눈에 파악하기도 힘들고 복잡해 보인다.

그래서 대략 아래처럼 리터럴하게 작성하는게 훨씬 좋지않을까 생각을 한다.

```jsx
const todoDiv = document.createElement("div");
todoDiv.innerHTML = `
<li>
	${event.target.value}
</li>
<button>
	complete
</button>
`
```

그런데, 들어가는 버튼의 기능을 구현하려 하니, 리터럴보다는 맨 위의 방법처럼 사용하는게 더욱 직관적이고 편했다.

관점에 따라서, 리터럴은 DOM의 구조를 파악하는데 유리하고

일일이 HTML을 만드는 건 그 안에 여러 기능이 들어갈 경우 유리하다.

코딩에는 진짜 답이 없는 것 같다. 결국에는 어떤 관점, 어떤 용도인지가 중요하다.