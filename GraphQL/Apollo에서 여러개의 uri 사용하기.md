### Apollo에서 여러개의 uri 사용하기

[https://www.jamalx31.com/tech-posts/using-apollo-with-multiple-graphql-endpoints](https://www.jamalx31.com/tech-posts/using-apollo-with-multiple-graphql-endpoints)

GraphQL은 RestAPI와 달리 여러개의 엔드포인트를 사용하는 것이 간단하지 않습니다.

RestAPI는 fetch나 axios를 사용해 여러개의 엔드포인트를 불러올 수 있지만 gql은 그렇지 않죠.

그렇다면 여러개의 엔드포인트를 사용해야 할 때 어떻게 해야할까요?

3단계로 나눠 진행해 볼 수 있습니다.

1. 각 엔드포인트에 대한 HttpLink 생성
2. Apollo 클라이언트 구성
3. 쿼리 또는 뮤테이션을 호출할 때 clinetName을 Apollo에 전달

코드로 알아볼까요?

1. 각 엔드포인트에 대한 HttpLink 생성

```tsx
import { ApolloLink } from "apollo-link";

const myLink = new HttpLink({
  uri: '/graphql',
  // other link options...
});

const thirdPartyLink = new HttpLink({
  uri: 'website/graphql',
  // other link options...
});
```

1. Apollo 클라이언트 구성

```tsx
import { ApolloClient } from 'apollo-client';

const client = new ApolloClient({
  link: ApolloLink.split(
    operation => operation.getContext().clientName === "third-party",
		// "third-party" 문자열은 원하는 무엇이든 될 수 있습니다.
    // 우리는 그것을 조금 사용할 것입니다    
		thirdPartyLink, // <= clientName이 "third-party"인 경우 apollo가 이에 전송합니다.
    myLink // <= 그렇지 않으면 이 주소로 보냅니다. 
  )
  // 다른 옵션들
});
```

1. 쿼리 또는 뮤테이션을 호출할 때 clinetName을 Apollo에 전달

```tsx
useQuery(QUERY, { variables, context: { clientName: 'third-party' } })

// useQuery is a React hook, it may look different for you if you are using something else
```