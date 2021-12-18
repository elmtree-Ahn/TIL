### CSS의 사이즈를 정리하는 유닛

[프론트엔드 필수 반응형 CSS 단위 총정리 (EM과 REM) | Responsive CSS Units](https://www.youtube.com/watch?v=7Z3t1OWOpHo)

사이즈는 절대적인 값과 상대적인 값 두 개로 크게 구분 지을 수 있어요.

웹에서 절대적인 값은 대부분 px를 사용합니다!

px의 문제점은?

고정된 값이다 보니 컨테이너 사이즈가 변경해도 컨텐츠가 변하지 않아요! 그래서 고정된 px보다는 %로 표현을 하는게 반응형을 만들기 좋아요!

상대적인 값 역시 다양하지만 주로 사용하는 건 정해져 있어요.

- em : relative to parent element
    
    현재 선택된 폰트와 상관없이 고정된 사이즈를 갖고 있어요. 
    
    브라우저의 기본 폰트는 16px이에요. 
    
    그래서 .parent를 8em으로 설정하면? 16 * 8 = 128px의 크기를 갖죠.
    
    그런게 .child에 0.5em을 주면 어떻게 될까요? 부모 요소인 128 * 0.5 = 64px인 거죠! 그래서 상대적 값을 가지게 되어요.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a062dd50-420f-4d71-8af2-0277a1ab5a70/Untitled.png)
    
- rem : relative to root element
    
    rem은 em과 비슷하지만 기준을 root 값에 두어요.
    
    .parent를 8rem으로 둘 경우 기본 값인 16px * 8이 되어 128px이 되죠. .child에 0.5rem을 주면 어떻게 될까요?
    
    rem은 부모가 아닌 root값에 기준을 두기에 16px * 0.5가 되어 8px이 됩니다. 
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32be8f20-99f3-4b12-85f8-7b11189b3079/Untitled.png)
    

<aside>
💡 나는 rem이 더 편할 것 같다! em은 부모요소에 따라 어떻게 변하게 될지 계속 염두를 해야하지만 rem은 기준점이 동일하니까!

</aside>

> 다양한 단위, 언제 뭘 쓰지?
> 
1. box  자체의 사이즈를 결정 할 때
    
    % V* flex-box
    
2. 요소의 사이즈에 따라 폰트가 달라져야 한다면?
    
    루트 사이즈에 따라 달라질 필요가 있다면? rem
    
    부모 사이즈에 따라 달라질 피료가 있다면? em