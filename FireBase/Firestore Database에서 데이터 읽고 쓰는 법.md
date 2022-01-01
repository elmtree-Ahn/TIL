### Firestore Database에서 데이터 읽고 쓰는 법

1. 데이터 만들기
    
    우리는 Firestore Database에 데이터를 저장할 겁니다.
    
    그런데, firestore는 NOSQL 입니다. SQL은 관계형 데이터베이스로 쉽게 말하면 엑셀같이 표형식으로 데이터를 저장합니다. SQL이라는 언어를 배워야 저장 출력이 가능해요.
    
    그런데 우리가 배우는 NO SQL은 표가 아닌 객체 형식으로 저장합니다.
    
    콜렉션(폴더) 안에 도큐먼트(파일)을 만들고 도큐먼트에 데이터를 객체형식으로 입력합니다.
    
    👇👇👇 이렇게 말이죠
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/46f1e2cf-e8ac-413a-91ff-a58a330157bf/Untitled.png)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5285041b-a0d3-424e-8de2-5307623e8fdf/Untitled.png)
    
    키: 값 형식으로 쉽게 자료를 저장합니다. 
    
    실제 사용예시는 이렇습니다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9c675ad0-9340-41bc-9bcc-f278dceec3c8/Untitled.png)
    
    추가로 실제 사용을 위해서는 위 이미지 두번째 메뉴인 규칙에서
    
    **false 값을 true**로 바꿔줘야 어디서나 데이터를 읽고 수정이 가능합니다. 안 그러면 에러나요!
    
2. 데이터 꺼내기
    
    데이터는 파이어베이스 설치 스크립트 바로 아래쪽에 다음의 코드를 입력함으로 데이터를 얻어 올 수 있습니다. 
    
    ```jsx
    <script>
      const db = firebase.firestore();
                     // product? 콜렉션 이름
      db.collection('product').get().then((결과)=>{
        결과.forEach((doc)=>{
          console.log(doc.data())
        })
      })
     // 결과 doc은 임의로 작명한겁니다.
    </script>
    ```
    
    결과 값도 잘 출력됩니다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb1c5bc4-1c41-400b-a297-a66ecc845956/Untitled.png)
    
    이런식으로 데이터를 동적으로 불러올 수도 있겠죠?
    
    ```jsx
    <script>
      const db = firebase.firestore();
      db.collection('product').get().then((결과)=>{
        결과.forEach((doc)=>{
          console.log(doc)
          var 템플릿 = `<div>상품임</div>`;
          $('.container').append(템플릿)
        })
      })
    
    </script>
    ```
    
3. 데이터 정보 저장하기
    
    ```jsx
    // case1 : doc 네임을 지정 가능
    const db = firebase.firestore();
    db.collection('product').doc('상품3').set({ 제목 : '변기' })
    
    // case2 : doc 네임이 자동 지정 (선호)
    const db = firebase.firestore();
    db.collection('product').add({ 제목 : '변기' })
    ```
    
    input을 사용해 데이터를 이런식으로 넣을 수 있어요.
    
    ( 아 근데... 나 JS 진짜 약하네 ㅠㅠㅠ JQuery를 Vanilla로 바꾸질 못하고 있어ㅠㅠ)
    
    ```jsx
    <div class="container mt-3">
      <input type="text" class="form-control mt-2" id="title" placeholder="title">
      <textarea id="content" class="form-control mt-2">content</textarea>
      <input type="text" class="form-control mt-2" id="price" placeholder="price">
      <input type="file" class="form-control mt-2" id="image">
      <button class="btn btn-danger mt-3" id="send">upload</button>
    </div>
    
    <script>
      const db = firebase.firestore();
      $('#send').click(function(){
        let 저장할거 = {
          제목: $('#title').val(),
          내용: $('#content').val(),
          가격: $('#price').val(),
          날짜: new Data(),
        }
        db.collection('product').add(저장할거)
      })
    
    </script>
    
    ```
    
    조금 더 보완하면 DB 저장 성공/실패 시 코드를 추가합니다.
    
    ```jsx
    <div class="container mt-3">
      <input type="text" class="form-control mt-2" id="title" placeholder="title">
      <textarea id="content" class="form-control mt-2">content</textarea>
      <input type="text" class="form-control mt-2" id="price" placeholder="price">
      <input type="file" class="form-control mt-2" id="image">
      <button class="btn btn-danger mt-3" id="send">upload</button>
    </div>
    
    <script>
      const db = firebase.firestore();
      $('#send').click(function(){
        let 저장할거 = {
          제목: $('#title').val(),
          내용: $('#content').val(),
          가격: $('#price').val(),
          날짜: new Data(),
        }
        db.collection('product').add(저장할거).then((result)=>{
    			// 성공시 메인 주소로 이동하는 코드
    	    window.location.href = '/index.html'
    	  }).catch((error)=>{
    	    console.log(error)
    	  })
      });
    
    </script>
    ```