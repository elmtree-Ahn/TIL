[Apollo Client GraphQL & React.js 함께 사용하기(한국어)](https://velog.io/@bangina/Apollo-client-GraphQL-React.js-%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B2%83)

[[GraphQL/React] Apollo Hooks로 React 앱 개발하기](https://www.daleseo.com/graphql-react-apollo-hooks-example/)

### 1. ApolloProvider

apollo 훅스를 사용하기 위해서는 먼저 ApolloProvider로 감싸야 해요.

```tsx
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <MyRootComponent />
  </ApolloProvider>,
  document.getElementById('root'),
);
```

client는 ApolloClient의 인스턴스 입니다.

### 2. useQeury

useQeury에 gql 쿼리 문자열을 전달하여 호출합니다. 데이터를 가져오는 방법 입니다. 

컴포넌트가 렌더링 되면 UI랜터링에 사용하는 {load, error, data} 속성이 포함된 Apollo Client 객체를 반환합니다. 

```tsx
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const USERS_QUERY = gql`
  {
    users{
       id
       name
       status
    }
  }
`
function Users() {
  const { loading, error, data } = useQuery(USERS_QUERY);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
		// 여기부터 컴포넌트 영역이네!
    {data.users.map(user=> <User key={user.id} info={user} />)}
  );
}
```

### 3. Mutation

mutation은 사용자가 서버로 수행할 수 있는 작업으로 구성되어 있습니다.

REST의 PUT, POST, DELETE 요청과 유사하게 객체를 만들고 수정합니다. 

뮤테이션 요청은 쿼리 요청과 동일한 엔드 포인트로 전송됩니다.

```tsx
const USER_MUTATION = gql`
  mutation UserMutation($name: String!, $status: String!) {
    user(name: $name, status: $status) {
      id
      createdAt
      name
      status
    }
  }
`
```

useMutation 혹은 컴포넌트 렌더링 시 자동 실행되지 않습니다.

다만, mutate 함수가 들어있는 튜플을 반환합니다.

아래 예시는 사용자가 form을 제출할 때 UserMutaition을 호출합니다. 

```tsx
import React, { useState } from 'react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
const USER_MUTATION = gql`
  mutation UserMutation($name: String!, $status: String!) {
    user(name: $name, status: $status) {
      id
      createdAt
      name
      status
    }
  }
`
const CreateUser = () =>{
  const [UserMutation, { data }] = useMutation(USER_MUTATION);
  const [state, setState] = useState({
        name: '',
        status: ''
  });
    return (
       <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={state.name}
            onChange={e => setState({...state, name: e.target.value }) }
            type="text"
            placeholder="User Name"
          />
          <input
            className="mb2"
            value={state.status}
            onChange={e => setState({...state, status: e.target.value }) }
            type="text"
            placeholder="Status"
          />
        </div>
       <button onClick={e => {
          e.preventDefault();
          UserMutation({ variables: { name: state.name, status: state.status } });
        }}>Submit</button>}
      </div>
     );
}
export default CreateLink
```