## Hook Flow 이해하기

훅의 호출 타이밍을 확인해볼거에요!

hook flow ⇒ hook들의 호출 타이밍

useState ⇒ setState시 prev이 주입된다.

*prev 직전 state의 값!

순서

1. App render
2. App useState
3. App render end
4. App useEffect

여기서 useEffect를 통해 child 가 실행되면?

1. App render
2. App render end
3. child render
4. child useState
5. chiled render end
6. App useEffect

부모가 다 그려지고,

자식이 다 그려지고 useEffect까지 다 이루어진 뒤!

부모의 useEffect가 이루어진다.

### 정리

useEffect ⇒ render 끝나고, useState끝나고, 심지어 child의 render, useEffect까지 끝난 뒤 실행된다.