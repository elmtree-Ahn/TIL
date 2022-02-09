docker-compose는 docker를 설치할 때 기본적으로 설치된다.

그렇지만 때로 특정 버전의 compose를 사용해야 하기에,

삭제와 재설치 방법을 알아야 한다.

- 삭제하기
    
    `rm -f /usr/local/bin/docker-compose`
    
- 특정버전 재설치
    
    ```jsx
    curl -L "https://github.com/docker/compose/releases/download/1.29.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && chmod +x /usr/local/bin/docker-compose
    ```
    

이렇게 파일을 있는 그대로 받는 방법이 있고

`pip` (파이썬의 npm 같은 녀석)를 사용해 설치할 수 도 있다.

- 삭제하기
    
    `pip uninstall docker-compose`
    
- 특정버전 재설치
    
    `pip install docker-compose==1.29.2`