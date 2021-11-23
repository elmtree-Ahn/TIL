### Styled-component에서 PC에 저장된 img 사용하기

이미지를 사용하기 위한 방법은 크게 두 가지가 있다.

`<img>` 태그를 사용하거나 css에서  `background-image`를 사용하는 방법이다.

그런데, 왠걸? 아무리 노력을 해도 이미지가 불러와지지 않느다. 나는 img 태그를 사용했는데, 혹시 src가 문제일까 싶어 디렉토리 자동완성 익스텐션을 설치해봤지만 역시나 엑박이 뜬다.

```html
<img src="../../img/Vector164.svg" alt="" />
```

Path Intellisense (디렉토리 자동완성 익스텐션)

결국 택에게 문의를 했고, 생각 못한 방법으로 해결이 되었다.

2단계로 정리한다.

1. 사용하기 원하는 img를 import 한다.
2. import한 내용을 src에 { }로 바인딩 한다.

예시를 보자

```jsx
import ArrowIMG from "../../img/Vector164.svg";

<img src={ArrowIMG} alt="뒤로" />
```

바로 해결이다!

> 리액트에서 이미지를 불러올때는 src에 하드코딩하는 것이 아니라 import 해서 데이터 바인딩을 하자!!
>