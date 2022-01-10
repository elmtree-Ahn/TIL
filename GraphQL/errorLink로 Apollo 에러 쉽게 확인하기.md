Apollo 사용 할 때 한 가지 답답한 점이 있다.

바로 에러를 바로 확인하지 못한다. 

빨간줄 에러가 나는데, 명확한 이유를 알려면 크롬 개발자 도구에 들어가 네트워크에서 확인을 해야 한다. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fecd91cd-1a21-43a3-be77-ec9d9bbd3a59/Untitled.png)

매번 에러를 이렇게 확인하는건 번거롭다.

콘솔창에서 바로 확인할 수 있는 방법이 있어 소개하고자 한다.

바로  `'apollo-link-error’` 를 사용하면 된다.

먼저 패키지 사용을 위해 설치를 해보자!

```tsx
npm i 'apollo-link-error'
```

나는 apolloClient라는 파일을 만들어 

여기에 endPoint를 저장했는데,

먼저 이런식으로 onError를 설정하자.

```tsx
import { onError } from 'apollo-link-error'

// 에러 자세히 보기
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        console.log(`graphQLErrors`, graphQLErrors);
    }
    if (networkError) {
        console.log(`networkError`, networkError);
    }
});
```

이후 아폴로 클라이언트를 구성할 때

이런식으로 구성하면 에러를 확인할 수 있다.

```tsx
// Apollo 클라이언트 구성
const client = new ApolloClient({
    link: ApolloLink.from([errorLink,httpLink]),
    cache: new InMemoryCache(),
});
```

이러면 에러 발생시 콘솔에서 즉각적으로 확인이 가능하다!

디버깅 열심히 해보자!!