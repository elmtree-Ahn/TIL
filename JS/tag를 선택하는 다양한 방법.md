## 태그 선택하기

### id로 태그 선택하기

`document.getElementById('sample');`

존재하지 않는 id를 검색 시 `null`로 출력 되요.

### class로 태그 선택하기

`document.getElementsByClassName('class');`

`HTMLCollection`은 유사배열이에요. 그래도 인덱스나 lengh는 사용 가능해요.

여러개 선택히 깊이와 상관없이 위에서 아래로 출력되요.

존재하지 않는 class를 검색하면 빈 `HTMLCollection`이 출력됩니다.

> 유사 배열(Array-Like Object)이란?
> 

1. 숫자 형태의 indexing이 가능하다.

2. length 프로퍼티가 있다.

3. 배열의 기본 메소드를 사용할 수 없다.

4. Array.isArray(유사배열)은 false다.

`Array` 객체의 `isArray` 메소드는 파라미터로 전달한 값이 배열인지 아닌지를 평가해서 그 결과를 불린 형태의 값으로 리턴해주는 메소드입니다. 유사 배열은 배열과 비슷하지만 배열은 아니기 때문에 결괏값이 `false` 입니다.

### 태그 이름으로 태그 선택하기

`const btns = document.getElementsByTagName('button');`

HTML의 모든 button 태그를 선택할 수 있어요.

`*` 값을 전달하면 모든 태그를 선택할 수도 있어요. (잘 사용은 안해요.)

`const allTags = document.getElementsByTagName('*');`

### ⭐ CSS 선택자로 태그 선택하기 (권장)

`document.querySelector('.class');`  클래스 선택시

`document.querySelector('#id');`  아이디 선택시

여러개의 태그를 선택할 때는 뒤에 All을 붙입니다. 

`document.querySelectorAll('.class');` 

이 경우 HTMLCollection이 아닌 NodeList라는 유사배열이 출력됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/670f8c68-f883-4dec-a34c-558bc01e7063/Untitled.png)

[태그 선택 정리](https://www.notion.so/78bc1804dbba4fc59be125e559243725)