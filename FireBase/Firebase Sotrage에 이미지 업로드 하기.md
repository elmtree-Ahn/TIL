### Firebase Storage에 이미지 업로드 하기

1. 이미지를 올릴 input 태그를 만듭니다.
    
    ```jsx
    <input type="file" id="image">
    ```
    

> 이미지는 DB가 아닌 Storage에 넣습니다. 
Storage에 올린 후 url을 가져와 DB에 저장하는 방식입니다.
> 

1. Sotrage에 이미지 업로드 하는 방법
    
    ```jsx
    const storage = firebase.storage();
    
    // 업로드할 파일 찾는 코드
    var file = document.querySelector('#image').files[0];
    
    //스토리지 업로드 코드
    var storageRef = storage.ref();
    var 저장할경로 = storageRef.child('image/' + file.name);
    var 업로드작업 = 저장할경로.put(file);  // <--- file은 위에서 만든 변수입니다.
    ```
    
    a. child() 여기 안에 어떤 경로로, 어떤 파일명으로 저장할지 결정해주시면 되고
    
    ps. 파일명은 유저아이디 + 시간 + 등등 다이나믹하게 정합니다.
    
    b. 그 경로에다가 .put() 붙이고 그 안에 파일 넣으시면 업로드 작업이 수행됩니다.
    

> 누르면 에러가 뜰 텐데, 마찬가지로 규칙 때문에 그렇습니다.
true로 바꾸면 누구나 업로드가 가능합니다.
ps. 기본 값은 로그인 한 사람만 가능하다는 코드입니다.
> 

스토리지 저장 역시 click이벤트 때 일어나야 하기에 정리하면 다음과 같습니다. 

```jsx

      
  const db = firebase.firestore();
  const storage = firebase.storage();

  $('#send').click(function(){
    // 스토리지
    const file = document.querySelector('#image').files[0];
    const storageRef = storage.ref();
    const 저장할경로 = storageRef.child('image/' + file.name);
    const 업로드작업 = 저장할경로.put(file);
    
    let 저장할거 = {
      제목: $('#title').val(),
      내용: $('#content').val(),
      가격: parseInt($('#price').val(), 10),
      날짜: new Date(),
    }
    db.collection('product').add(저장할거).then((result)=>{
      console.log(result)
      window.location.href = '/index.html'
    }).catch((error)=>{
      console.log(error)
    })
  })
 
```

1. 이미지 url을 DB에 저장하는 방법
    
    이미지 업로드 성공/실패 시 코드도 확인해야겠죠'?
    
    ```jsx
    업로드작업.on( 'state_changed', 
        // 변화시 동작하는 함수 (로딩바 같은거)
        null, 
        //에러시 동작하는 함수
        (error) => {
          console.error('실패사유는', error);
        }, 
        // 성공시 동작하는 함수
        () => {
          업로드작업.snapshot.ref.getDownloadURL().then((url) => {
            console.log('업로드된 경로는', url);
          });
        }
    );
    ```
    
    지금 이미지의 url은 위에 노란색 url에 담겨 있어요. 이 변수를 사용하려면? DB에 데이터를 올리는 코드를 이 함수 안으로 불러와야 겠죠?
    
    그게 순서상에도 맞습니다.
    
    (1) 스토리지에 이미지 저장
    
    (2) 저장된 이미지의 url DB저장
    
    연결하면 이렇게 됩니다.
    
    ```jsx
    const db = firebase.firestore();
          const storage = firebase.storage();
    
          $('#send').click(function(){
            // 스토리지
            const file = document.querySelector('#image').files[0];
            const storageRef = storage.ref();
            const 저장할경로 = storageRef.child('image/' + file.name);
            const 업로드작업 = 저장할경로.put(file);
    
            업로드작업.on( 'state_changed', 
              // 변화시 동작하는 함수 (로딩바 같은거)
              null, 
              //에러시 동작하는 함수
              (error) => {
                console.error('실패사유는', error);
              }, 
              // 성공시 동작하는 함수
              () => {
                업로드작업.snapshot.ref.getDownloadURL().then((url) => {
                  console.log('업로드된 경로는', url);
                  
                  let 저장할거 = {
                    제목: $('#title').val(),
                    내용: $('#content').val(),
                    가격: parseInt($('#price').val(), 10),
                    날짜: new Date(),
                    이미지: url
                  }
                  db.collection('product').add(저장할거).then((result)=>{
                    console.log(result)
                    window.location.href = '/index.html'
                  }).catch((error)=>{
                    console.log(error)
                  })
                });
              }
            );
          })
    ```
    
    이미지를 받는 div는 이렇게 하면 되겠죠? 아! 참고로 빽틱에 감싸져 있습니다.
    
    ```jsx
    <div class="thumbnail" style="background-image: url('${doc.data().이미지}')"></div>
    ```