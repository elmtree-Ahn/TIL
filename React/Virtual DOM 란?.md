### ✨ DOM이란 무엇인가?

> “DOM은 HTML, XML document와 상호작용하고 표현하는 API이다. DOM은 browser에서 로드되며, Node(이하 노드) 트리(각 노드는 document의 부분을 나타낸다)로 표현하는 document 모델이다. (ex. element, 문자열, 혹은 코멘트)” - MDN
> 

여기서 알 수 있는 건 HTML ≠ DOM 이라는 사실! 

HTML은 IDE에서 내가 작성하고 이를 기반으로 DOM이 생성된다. 유사하지만 ===는 아니다.

노드 트리는 무엇일까?

![[https://en.wikipedia.org/wiki/Document_Object_Model](https://en.wikipedia.org/wiki/Document_Object_Model)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/605d407d-876a-461a-9930-6c5177070a1c/Untitled.png)

[https://en.wikipedia.org/wiki/Document_Object_Model](https://en.wikipedia.org/wiki/Document_Object_Model)

document를 시작으로 아래로 뻗어져 나가는 HTML의 태그들이 노드이며 이 노드들이 모여 나무처럼 부모자식 관계로 이루어진 상태를 노드 트리라고 한다.

### ✨ DOM과 HTML을 구분해보자.

`HTML`은 내가 작성한 문자다. 그리고 이 무자가 브라우저에 의해 해석되어 실제 문서를 나타내는 노드 트리가 `DOM`이다! 그리고 이 `DOM`은 `JS`로 해당 문서에서 노드를 추가, 삭제, 변경, 이벤트 철, 수정 등을 가능하게 하는 API를 제공한다.

<aside>
💡 음, 결국 내가 JS로 건드는건 HTML 그 자체가 아니라 HTML로 생성된 DOM이란 말씀!

</aside>

### ✨ 브라우저 동작 원리

![[https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/35329a41-bb88-4a96-99bc-6c97cea0f56b/Untitled.png)

[https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/](https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)

DOM은 어떻게 브라우저에서 동작 될까?

1. 브라우저가 HTML을 받는다. 이를 파싱(변화)하고 노드들로 이루어진 DOM트리를 만든다.
2. 외부 CSS파일과 각 노드들의 inline 스타일을 파싱하여 스타일을 입힌 Render트리를 만든다.
3. Render 트리가 만들어지면 노드들이 화면에 놓여져야 할 위치가 주어진다.
4. 해당 과정을 계속 반복한다. (오타바꾸면 1번부터 다시~, css 색깔 바꿔도 1번부터 다시~)
    
    → 요즘 웹 사이트는 페이지가 1~2개도 아니고 수 백, 수 천개의 페이지이다.
    
    → 오타 하나 잡는다고 모든 페이지를 처음부터 렌더링 하는건 너무나 `비효율적`이다.
    

<aside>
💡 그래서 Virtual Dom이 나왔다!

</aside>

### ✨ Virtual Dom (가상 돔)

가상 DOM은 수정사항이 여러 가지가 있어도 `한 번만` 렌더링을 일으킨다.

![[https://elmprogramming.com/virtual-dom.html](https://elmprogramming.com/virtual-dom.html)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5dff3aea-8e12-4b6e-9671-83c4ed5fd9f6/Untitled.png)

[https://elmprogramming.com/virtual-dom.html](https://elmprogramming.com/virtual-dom.html)

가상 DOM은 DOM이 생성되기 전, 이전 상태와 비교하여 `달라진 부분`만 DOM에게 전달하여 딱 한 번만 렌더링을 한다. `아직 뭔소린지는 잘 모르겠다...`

### ✨ Virtual DOM과 DOM의 차이점

![[https://coding-medic.com/2020/11/10/the-virtual-dom/](https://coding-medic.com/2020/11/10/the-virtual-dom/)](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fa2df06b-434d-4c5a-9fac-00ddb3003fe9/Untitled.png)

[https://coding-medic.com/2020/11/10/the-virtual-dom/](https://coding-medic.com/2020/11/10/the-virtual-dom/)

위 그림에서 빨간 부분에 수정이 생기면 가상 DOM은 알아서 수정 부분을 탐지하고 최종 결과물을 DOM에게 전달한다. 거기서 끝이다.

하지만 일반 DOM은 그냥 전부 다 렌더링을 한다. 모든 동그라미 빨간색으로 변한다. 빨간색으로 변한다는 건 리플로우와 리페인트가 모두 발생한다는 의미한다..

### ✨ Reflow & Repaint

> 리플로우 : 문서의 일부 또는 전체를 다시 렌더링할 목적으로 요소의 위치 형상을 다시 계산하는 것
리페인트 : 요소에 CSS를 적요하기위해 다시 계산하는 것
> 

리플로우와 리페인트가 계속 일어나면 당연히 `UX를 침해`하고 `서버에도 부담`을 주겠지?

DOM은 변경될 때 마다(심지어 .하나만 찍어도) HTML을 파싱해서 DOM을 생성하고 CSS를 파싱해서 CSSOM을 생성한다. `(CSSOM은 css의 DOM이라 이해하면 된다)`

그러나 Virtual DOM은 변화된 부분만을 리플로우 하고 리페인트하니 얼마나 대단한가!!

### ✨ Virtual DOM은 빠를까?

DOM과 비교할 때 절대적으로 빠른건 아니다. 단지, 변경 사항을 최소하 한다.(리플로우와 리페인트가 적게 일어난다.) 물론 첫 로딩 시 모든 데이터를 불러와야 해서 시간이 걸리지만,

그 고비만 넘기면 사용자에게는 더 원할한 서비스를 제공할 수 있다!!

### ✨ 참고

- [https://www.howdy-mj.me/dom/what-is-dom/](https://www.howdy-mj.me/dom/what-is-dom/)
- [https://velog.io/@kim-jaemin420/reactVitual-Dom이란-What-is-Virtual-Dom](https://velog.io/@kim-jaemin420/reactVitual-Dom%EC%9D%B4%EB%9E%80-What-is-Virtual-Dom)
- [https://noogoonaa.tistory.com/53](https://noogoonaa.tistory.com/53)

[React and the Virtual DOM](https://youtu.be/BYbgopx44vo)