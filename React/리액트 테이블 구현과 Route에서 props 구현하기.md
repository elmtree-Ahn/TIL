- [리액트 테이블로 테이블 구현하기!]
    
    [React Table로 테이블 UI 구현하기](https://www.daleseo.com/react-table/)
    
    리액트로 테이블 구현하는 것은 생각보다 간단했다.
    
    표를 처음 사용하다보니, 막연한 두려움이 있었다.(엑셀에에서 데인 까닭이라..)
    
    그러나 생각 이상으로 간단했고, 이참에 테이블에 대해 깊은 이해가 생겨 얼마나 뿌듯한지! 
    
    블로그에 나온 예시이지만 코드 예시가 정말 심플해서 불러온다!
    
    ```jsx
    function Table({ columns, data }) {
      return (
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(({ name, email, phone }) => (
              <tr key={name + email + phone}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    ```
    
    저게 뭔가 싶지만, 생각보다 간단하다.
    
    `thead` : 표의 제목
    
    `tbody`: 표의 내용
    
    그외에도 테이블 정렬에 대해서도 알아봤다. css 두가지 속성이면 정렬도 어렵지 않았다. 
    
    ```css
    text-align: center;
    vertical-align : middle;
    ```
    
    흔하게 사용되지만, 가끔 멈칙하게 만드는 녀석들.
    
    아! flex로는 이상하게 적용이 안되었다. 그런데 확실히 저 두개면 충분하니 이 부분이 더 효율적이다. flex를 썼다면 최소 코드가 4줄 이니까
    
- Route에서 props 사용하기
    
    [React Router로 렌더링하는 컴포넌트에 prop 전달하기](https://sustainable-dev.tistory.com/117)
    
    라우터를 사용하다보면 대부분 이런 코드를 사용하게 된다.
    
    ```jsx
    <Switch>
    	<Route path="/similarProduct" component={CheckSimilarProductPage} key="similarProduct" exact/>
    </Switch>
    ```
    
    여기서 data라는 pops를 사용한다고 가정해보자.
    
    ```jsx
    	<Route path="/similarProduct" component={CheckSimilarProductPage} key="similarProduct" data={data} exact/>
    ```
    
    저렇게 하면 될까? 절대 안된다ㅎㅎ 단순하게 생각해보자!
    
    우리는 지금 CheckSimilarProductPage 컴포넌트에 프롭스를 내리고 싶은 것 아닌가?
    
    그렇다면 이런 방식으로 해결할 수 있다.
    
    ```jsx
    	<Route path="/similarProduct" component={() => <CheckSimilarProductPage data={data}/>} key="similarProduct" exact/>
    ```
    
    되긴 된다! 그런데, 권장사항은 아니다. 그래서 베스트는 이렇게 하면 된다!
    
    ```jsx
    <Route path="/similarProduct" 
      render={() => <CheckSimilarProductPage data={data}/>} 
    	key="similarProduct" exact/>
    ```