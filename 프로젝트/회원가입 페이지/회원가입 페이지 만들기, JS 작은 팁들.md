vanilla로 프로젝트 진행을 위해서는 DOM에 대한 이해가 필요해요.

DOM(문서 객체 모델)

HTML을 객체로 표현한게 DOM이에요.

왜 그랬을까.. HTML을 프로그래밍 적으로 제어하기 위해서에요.

HTML은 정적인 문서고 DOM은 동적으로 수정할 수 있어요.

DOM은 HTML의 프로그래밍 인터페이스에요!

이런 DOM은 누가 언제 어디서 만드나요??

브라우저가 화면에 페이지를 랜더링 하기전에 만들어요.

어떻게요? HTML 문서를 파싱해서 만듭니다!

웹페이지는 랜더링 트리를 바탕으로 그려져요.

랜더링 트리는 두 개의 요소로 구성되요.

1. DOM
2. CSSOM

DOM트리는 어떻게 만들어질까요?

DOM트리는 HTML을 파싱해서 만들어요.

HTML을 하나하나 파싱해서 노드를 만들고, 노드로 DOM tree가 만들어져요.

즉., HTML과 DOM은 동일하지 않아요!

[Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8e21fd91-300a-4939-a1b7-6a693121bf58/Untitled.png)

DOM 어떻게 접근해야할까요?

JS에서는 Document 로 DOM에 접근해요.

JS는 브라우저 뿐만 아니라 Node에서도 작동해요.

하지만 window, document는 브라우저에만 존재하는 전역객체에요.

(Node에는 없겠죠?) 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aebf6f1d-7d77-43c8-85f2-6857b0efa4ca/Untitled.png)

window는 크롬으로 따지면 하나의 페이지에요.

페이지는 제어하기 위한 객체죠.

document는 문서 즉 DOM을 다루는 객체에요.

만약,  url을 제어해야한다면? window를 사용해야해요. 

window와 document를 MDN에 검색하면 정말 많은 내용들이 있어요.

필요할 때 찾아보시면 됩니다~!

window는 최상단에 있어서 `window.` 으로 접근할 필요 없어요.

우리가 자주 사용하는 `console.log()` 역시, 사실은 `window.console.log()` 랍니다.

### 📌 TIP

**$뭐야?**

```jsx
const $id = document.getElementById('id')
console.log($id)
```

변수에 $뭐야..? 

$는 DOM을 조작한 변수를 표현하는 아무 의미없는 표현이에요.

다만, 코드를 리뷰하는 동료들이 혹은, 제가 $를 보며 DOM을 받아온 변수가 라고 인식만 하는 용도이죠. 일종의 관습인데, 보기가 편해 자주 사용할 예정입니다. 

**요구사항 정리하기**

```jsx
1. autofocus
페이지가 로드 된 시점에 ID 입력 창에 Focus가 되어 있어야 합니다.
```

이렇게 요구사항을 받았을 때는, 요구사항을 분석할 필요가 있습니다.

```jsx
// 1. autofocus
// 대상 : ID 입력 input
// 이벤트 : 페이지가 로드 되었을 때,
// 핸들러 : Focus()
```

바로 이렇게 말이죠!

요구사항을 미리 분석해두면 코드 작성시 딴길로 새지 않아요!!

또한 채점자가 보기에도 한결 편할겁니다.

**유효성 검사**

유효성 검사는 정규식을 많이 사용해요.

[RegExr: Learn, Build, & Test RegEx](https://regexr.com/)

이 사이트에서 여러가지 정규식을 테스트해볼 수 있어요!

**resetCSS처럼, resetHTML**

HTML태그에는 기본 스타일이 있죠. 그래서 resetCSS로 초기화를 해요.

마찬가지로 기본 속성이 있어요. 특히나 form안에서 submit 같은 경우는 바로 서버로 통신을 하는 속성이 있죠. 이럴 경우 서버 통신을 초기화(?) 기본 속성을 사용하지 않을 때는, 핸들러에 이런 함수를 실행하면 됩니다.

`e.preventDefault()`

**modal 만들지 말고 `dialog`를 사용하자!**

HTML 시멘틱 태그에는 dialog태그가 있어요.

이건 모달을 위해 만들어진 태그나 다름없습니다!

모달을 열고 닫는 함수가 내장되어 있어 사용이 더욱 편리하죠.

[: 대화 상자 요소 - HTML: Hypertext Markup Language | MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog)

`dialog.showModal()`

`dialog.close()`

**HTML을 DOM으로 받기**

html은 documentElement로 받을 수 있어요!

```jsx
const $html = document.documentElement
```

**window.getComputedStyle()**

`[El.style](http://El.style)` 이런식으로 스타일에 접근하면,

inline스타일로 작성된 스타일만 확인이 가능해요.

따라서 외부 css에서도 적용된 스타일을 확인하려면

`window.getComputedStyle(el)`로 접근을 해야해요!

[Window.getComputedStyle() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

응용해서, html에 적용된 폰트사이즈가 궁금하다면? 이렇게 할 수 있겠죠?

```jsx
window.getComputedStyle(document.documentElement).fontSize
```