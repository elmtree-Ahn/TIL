### API를 연결해보자

1. axios를 설치한다.
    
    `npm install axios` 
    
2. useEffect를 사용하여 API를 호출한다.
    - 이 때  try와 catch를 사용해 에러를 잡는다.
    
    ```jsx
    useEffect(async () => {
        try {
          const url = `https://api.odcloud.kr/api/15047799/v1/uddi:16ef90b7-b713-46f6-b467-9f0b49e31e23_201903060920?page=1&perPage=10&serviceKey=vBUxcrx13lr5T7u8Ao2Ynr%2F%2Fisw1kIbkT%2BYX%2B%2FzZpcJOihkBunzvGXDCu4%2B3%2BIpzL8eD%2FKbLYZt8ZZJ4zaMYow%3D%3D`;
    
          const res = await axios({
            method: 'get',
            url: url,
          })
          console.log(res.data);
        }
        
        catch (error) {
          console.log(error);
        }
    
      }, [])
    ```
    

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d6e581c7-4c52-4b8a-8fab-89c04f9984ec/Untitled.png)

콘솔에 정상적으로 데이터가 출력된다.

<aside>
💡 여기서 잠깐 async와 await가 뭐지?

</aside>

[자바스크립트 async와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/)

머리가 좀 돌아갈 때 다시 읽어보자!