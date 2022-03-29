### 왜 GraphQL이 뭘까? 그리고 왜 써야 할까?

[REST API를 버리고 Graph QL를 선택한 이유? (Why GraphQL is the future)](https://www.youtube.com/watch?v=1imQ1_aOQvU)

1. REST API는 시간이 많이 걸리고 양도 많다.
    
    url 정의 view 등, 반면 Graph ql은 훨씬 심플하다.
    
    그리고 훨씨 빠르고 코드도 가독성이 좋다. 
    
2. Fetch, Json, Props 필요 없이 Apollo 하나면 된다!
    
    query만 잘 써주면 된다. 그래서 더 명확하다.
    
    리액트와 호환성이 좋다. 
    

1. 리덕스를 완벽하게 대체할 수 있다.
    
    상태관리가 용이하다. 데이터를 로컬로 관리할 수 있다.
    
    즉, 리덕스를 사용할 필요가 없다. 
    
    dispatch, action들을 쓸 필요가 없다.
    

REST API와 GraphQL의 차이점.

REST API

URL로 가서 JSON을 받아온다.

GraphQL

query를 보내거나 mutaion을 보내야 한다. 

[[병맛코딩만화] GraphQL이 뭔가요?](https://www.youtube.com/watch?v=EkWI6Ru8lFQ)

1. 원하는 컬럼만을 요청할 수 있다.

REST API의 장점

메소드와 URI를 조합하여  예측 가능하고 일정한 정보와 작업을 요청할 수 있다. 버튼이 명확한 자판기처럼!

REST API의 불편한점

필요치 않는 정보들도 모두 확인해야 한다. 

GraphQL

uri에 제한되지 않고 원하는 정보들을 커스텀하여 요청 가능하다.  다른 depth의 정보들을 한 번에 확인가능하다. 

 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc838fb3-0170-4199-b523-1ec570a62af7/Untitled.png)