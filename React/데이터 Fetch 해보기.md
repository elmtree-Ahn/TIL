## 데이터 Fetch 해보기

> API call
> 

Fetch ?

네트워크 통신과 관련되었어요.

서버가 데이터를 주고, 프론트는 전달된 데이터를 그리게 됩니다. 

테스트를 진행할 Api : 

```jsx
[https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json](https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json)
```

```jsx
const rootElement = document.getElementById("root");

const App = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson.data);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
        alert(error);
      });
  }, []);

  if (error != null) {
    return <p>There is some Error!</p>;
  }

  if (data == null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p>People</p>

      {data &&
        data.people.map((person) => {
          return (
            <div>
              <span>name : {person.name}, </span>
              <span>age : {person.age}</span>
            </div>
          );
        })}
    </>
  );
};

ReactDOM.render(<App />, rootElement);
```

### 정리

Fetch api : 네트워크 통신을 위한 도구,

pormise 문법으로 상황별 핸들링이 가능해요!

`로딩 / 데이터 / 에러`