- **쌩 HTML만 사용하는 경우 빠른 설치법은**
    
    ```tsx
    <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-storage.js"></script>
    
    <script>
    var firebaseConfig = {
      apiKey: "AIzaSyD4Jbqd9RgZd_AHeLNX-n",
      authDomain: "test-78694.firebaseapp.com",
      projectId: "test-78694",
      등 파이어베이스 콘솔에 있던 SDK 설정내용 ~~
    };
    firebase.initializeApp(firebaseConfig);
    </script>
    ```
    
    맨 위의 파일이 원래 Firebase 설치파일이고 나머지 3개는 각각 authentication, firestore DB, 사진 storage를 사용하고싶을 때 넣으시면 됩니다.
    
    그리고 마지막 <script>태그는 firebase 홈피에서 프로젝트 만들면 자동으로 만들어주는 코든데 거기있던거 복붙하시면 됩니다.
    
    근데 복붙하실 때
    
    import { initializeApp } from "firebase/app"; 이건 필요없고 (9버전에서만 필요)
    
    const app = initializeApp(firebaseConfig); 이거 대신
    
    firebase.initializeApp(firebaseConfig); 저처럼 이렇게 쓰시길 바랍니다.
    
    설치 끝
    
- **내가 리액트나 뷰를 사용하는 경우 설치법은**
    
    ```tsx
    npm install firebase@8.6.5
    ```
    
    프로젝트경로에서 터미널을 오픈하신 후 입력하면 끝입니다.
    
    그리고 index.js 파일에
    
    ```tsx
    import firebase from "firebase/app";
    import "firebase/firestore";
    
    var firebaseConfig = {
      apiKey: "AIzaSyD4Jbqd9RgZd_AHeLNX-n",
      authDomain: "test-78694.firebaseapp.com",
      projectId: "test-78694",
      등 파이어베이스 콘솔에 있던 SDK 설정내용 ~~
    };
    
    firebase.initializeApp(firebaseConfig);
    export const db = firebase.firestore();
    ```
    
    아무데나 입력합니다.
    

프로젝트에서 위의 방법으로 설치 후,

Firebase console 에서 프로젝트를 생성합니다.

[로그인 - Google 계정](https://console.firebase.google.com/u/0/?hl=ko&pli=1)

1. 프로젝트 만들기
    1. 이름정하기
    2. 애널리틱스 선택하기 (자유)
2. 설정하기
    
    Authentication(인증), Firestore(DB), Storage(이미지 업로드용) 시작하기 
    
    DB위치는 asia-northeast3(서울) 선택
    
3. 터미널에 firebase tool 설치
    
    npm install -g firebase-tools@9.12.1
    
    맥북 권한 오류시 이렇게 입력 sudo npm install -g firebase-tools@9.12.1
    
4. firebase 명령어 입력
    
    firebase login (구글 로그인)
    
    firebase init (시작하기)
    
5. index.html 정리하기
    
    복잡한거 싫으니 깔끔하게 정리하기
    
    ```tsx
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
    
      <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-firestore.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-storage.js"></script>
      
    </body>
    </html>
    ```
    
6. SDK 설치하기
    
    톱니바퀴 클릭
    
    내 앱 → 웹 아이콘 클릭
    
    sdk 코드 index.html에 집어 넣기
    
    ```tsx
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
    
      <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-firestore.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-storage.js"></script>
      
    	<script>
        const firebaseConfig = {
          apiKey: "",
          authDomain: "",
          projectId: "",
          storageBucket: "",
          messagingSenderId: "",
          appId: ""
        };
    
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
      </script>
    
      
    </body>
    </html>
    ```
    

[주의]

▼ 복붙할 때 이런 코드가 있다면

const app = initializeApp(firebaseConfig);

▼ 이걸로 바꾸기

firebase.initializeApp(firebaseConfig)

1. 프로젝트 시작하기
    
    firebase serve