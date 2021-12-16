### node.js & npm

모던 앱 개발에서 가장 중요한 소프트웨어라고 한다면 Node.js를 꼽지 않을 수 없습니다. 

node.js도 도구에요. 한 번 다뤄보는게 제일 좋습니다 .

Node.js는 라이얼 달이라는 헤커가 만들었어요.

구글에서 JS를 빠르게 진행하는 V8엔진을 만들었는데,

라이언 달이 V8 있으면 어디서나 구동가능한거 아닐까? 라는 발상에서

데스크탑에서도 구동 가능한 프로그램을 만들었어요. 이게 바로 Node.js 입니다. 

현대 웹 프론트엔드 환경에서 매우 중요한 역할을 해요. 일단 해볼까요?

```tsx
console.log("Hello")
```

에디터에 index.js 파일을 만들고 위와 같이 코드를 작성했어요.

JS는 실행시키려면 브라우저가 필요한데, Node를 사용해서

브라우저 없이 실행 시켜 볼게요.

터미널에서 node 명령어를 통해 실행을 시킵니다.

`node index.js`

그러면 터미널에 Hello 가 실행됩니다. 

<aside>
🔥 브라우저가 아닌 운영체제에서 JS를 실행시켰어요!!!

</aside>

이번엔 npm을 사용해서 실행된 프로그램을 바꿔볼게요.

html, css도 없이 Hello를 어떻게 꾸밀 수 있을까요? 

누군가는 했을 텐데요? npm 에 들어가서 원하는 소프트웨어를 검색해서 찾으면 됩니다.

Colors 라는 소프트웨어가 있어요. 이걸 사용하면 글자가 알록달록 해져요.

터미널에 `npm install colors` 를 입력하면 설치가 됩니다.

설치된 프로그램은 현재  디렉토리에 노드 모듈에 저장됩니다. 

사용 방법은 Usage를 사용하면 됩니다.

이제 이렇게 코드를 작성해볼까요?

```tsx
var colors = require('colors');

console.log("Hello".rainbow);
```

터미널에 `node index.js` 실행을 하면?

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/83e62c77-4850-43bf-9d4f-4e03e8bb6777/Untitled.png)

이렇게 알록 달록하게 표현할 수 있습니다. 

<aside>
🔥 npm을 사용해 프로그램을 쉽게 사용할 수 있어요.

</aside>

Node.js로 인해 npm 환경이 구축되었어요. 

덕분에 많은 개발자들이 npm에 오픈 소스를 올렸고 

우리들은 편하게 프로그램을 현재 프로젝트에 손쉽게 적용할 수 있게 되었어요.