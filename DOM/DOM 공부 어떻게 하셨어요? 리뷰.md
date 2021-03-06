## DOM은 다들 어떤식으로 공부하셨나요?

글에서 다루는 내용

```xml
1. DOM이란 무엇인가? (MDN을 중심으로...)
2. DOM이 생겨난 이유
3. DOM을 대하는 마음가짐
4. 그밖에 DOM에서 꼭 알아야 하는 것
5. DOM API를 써야 하는 이유
6. DOM을 어떤식으로 공부하셨나요?
```

### DOM(Document Object Model)

문서 객체 모델!

### DOM이 생겨난 이유

**태초에 웹은 문서를 공유하기 위해 만들어졌다.**

웹은 문서 공유를 위해 만들어졌고, 

문서를 만들기 위해 HTML이라는 마크업 언어를 만들어 문서를 작성했씁니다.

이후 서버에서 프로그래밍을 통해 HTML을 제작할 수 있는 PHP같은 서버 언어가 등장했고, 이로서 컨텐츠가 포함된 HTML을 동적으로 생성할 수 있게 되었습니다. 

이 개념을 브라우저가 새로고침 하지 않고,

서버의 개입 없이, 브라우저 내에서 동적으로 HTML을 변경하고자 JS가 탄생했습니다!

만들어진 순서

1. 브라우저
2. 서버언어
3. 자바스크립트

### HTML은 문자열이다

HTML은 문자열로 이루어졌습니다.

그렇기에 사람이 다루기는 편하지만 컴퓨터가 알아듣기 좋은 언어는 아닙니다. 컴퓨터가 HTML을 분석하고, 정리해서 화면에 그릴 수 있는 구조를 만들어야 합니다.

`리소스가 많이 듭니다..`

화면에 그릴 수 있는 구조를 이미 만들어두고,

매번 변경이 되면? 다시 모든 구조를 만드는 방식은 비효율적입니다. 

그래서 최초 HTML 구조를 만들었다면,

다음 변경 때 새로운 구조를 만드는 것이 아닌!

이미 만들어진 구조에서 직접 일부 수정을 하는 방식이

보다 효율적입니다.

### 그래서 DOM이 필요해요!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d4b40963-bcd8-446a-811a-657ffa3db1c6/Untitled.png)

HTML을 동적으로 보다 효율적으로 변경하기 위해서,

`HTML문서`를 자바스크립트가 이해할 수 있는

`객체(Object)`의 형태로 모델(Model)링하여

자바스크립트가 조작할 수 있도록 만든 

⭐️interface가 바로 `DOM`입니다!

브라우저에는 이미 HTML을 파싱하고 화면으로 표현할 수 있는 구조를 가지고 있었습니다. 그 후에 JS가 만들어 졌교.

웹이 커지면서 JS를 통해 HTML을 조작할 수 있는 API가 필요했습니다. 그래서 DOM을 정의하였습니다. 

그래서 엄밀히 말하면,

 DOM은 API 중에서 공통 인터페이스 부분만을 의미합니다.

> API (web or XML page) = DOM + JS
> 

아, 물론 실전에서 이런 내용은 하나도 안 중요해요.

DOM = API라고 이해해도 무방합니다. 

### DOM을 대하는 마음가짐

DOM에 대한 이론은 복잡하지만 DOM의 본질은 다음과 같습니다. 

<aside>
💬 "여기 h1 엘리먼트 옆에 class에 title 좀 넣어 주세요.”

</aside>

이 명령을 수행하기 위해서는 우리가 원하는 행동을 

정확하게 알려줘야 합니다. 

```jsx
// 여기 h1 엘리먼트 옆에 (X)
// => 전체 'h1' tag로 된 엘리먼트 중 [0]번째를 가져와주세요! (O)
const h1 = document.getElementsByTagName('h1')[0];

// class에 title 좀 넣어 주세요! (X)
// => 해당 엘리먼트의 classList에 'title'을 add해주세요! (O)
h1.classList.add('title')
```

⭐️ **DOM을 공부하는 첫번째 방법은,**

변경하고자 하는 HTML을 떠올리고, 

달라질 점은 어떤식으로 알려줘야 할지 컴퓨터가 알아듣는 말(API)을 찾는 것입니다.

⭐️ **DOM공부가 힘든 이유는,** 

우리가 타이핑으로 단순히 쓰고 지우면 될 행동을

컴퓨터에게 각각의 다 다른 방법(API)으로 알려줘야 하기 때문입니다.

### DOM은 어떻게 생겼을까?

DOM은 일단 HTML을 표현하고 조작하는데 목적이 있기 때문에

HTML 구조를 그래도 닮았습니다.

[HTML의 구조]

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b530fe5a-7b1e-4593-85cb-334f53933a72/Untitled.png)

HTML에는 Tag를 가지를 Element와 Text로 나뉘로 엘리먼트는 여러개의 Attribute를 가집니다.

DOM에서는 이러한 각각의 요소를 Node라고 부르며,

HTML과 마찬가지로 Element Node, Attribute Node, Text Node라고 부릅니다. 

### DOM Tree

HTML의 앨리먼트는 동일한 앨리먼트를 포함할 수 있는 구조가 됩니다.

이러한 구조를 Tree라 부르기에 HTML이 여러개의 Element와 Node로 구성되어 있는 것을 DOM Tree 라고 부릅니다. 

### DOM API

HTML을 조작하기 위해서는 대략 다음과 같은 단계를 거칩니다.

```jsx
DOM 기초
1. 내가 수정을 하고자 하는 DOM을 선택하거나 생성
2. 해당하는 요소에서 원하는 항목에 접근
3. 해당 요소를 원하는 값으로 변경
4. 선택된 노드 삭제
5. 새로운 노드 추가
```

```jsx
DOM 고급
1. 내가 필요한 조건에 맞는 하위 요소들을 선택적으로 가져오기
2. 알고있는 엘리먼트를 기준으로 상대적인 위치에 있는 항목에 접근 하기
3. 여러 항목을 하나로 묶어서(=DocumentFragment) 배치 변경하기
```

DOM API는 실전 경험이 중요합니다. 

최근 바닐라를 많이 안쓰니, 기회가 적지만 작은 작업들을 한 번 바닐라로 만들어 보기를 권해봅니다.

### DOM에서 꼭 알아야 할 것

1. DOM은 HTML 뿐만 아니라 이미 그려진 화면적 요소에도 접근할 수 있다!
    
    DOM은 HTML이 아닙니다.
    
    이미 화면에 그려져 반영된 요소에도 접근이 가능해요.
    
    HTML과 달리 이미 그려진 요소에 대한 속성을 조회할수 있어요.
    
    > Element.getBoundingClientRect
    [https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
    > 
    
2. DOM에는 Event도 포함됩니다.
    
    DOM에는 사용자의 클릭, 터치 등의 이벤트 요소도 포함합니다. 이벤트 핸들러를 등록하고 취소하거나 이벤트 캡쳐 버블링에 대한 부분도 알아두면 좋습니다.
    
    > [https://ko.javascript.info/bubbling-and-capturing](https://ko.javascript.info/bubbling-and-capturing)
    [https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Events](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Events)
    >