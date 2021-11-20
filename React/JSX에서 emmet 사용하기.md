# JSX에서 emmet 사용하기
JSX에서 emmet이 안 되어 매우 불편하다. </br>
예를 들면 .hello 라고 입력을 하면

```html
<div class="hello"></div>
```
이렇게 예쁘게 잘 나와야 하는데, JSX에서는 emmet이 먹질 않으니 </br>
그냥 .hello 라고만 나온다.</br></br>
잘 아시다 시피 JSX에서는 태그의 class를 className으로 작성한다.</br>
그러다 보니 작성할 내용이 더 길다!</br></br>
생산성을 높이고, html에서 사용하던 emmet의 익숙함을 살리기 위해서는 </br>
JSX에서도 사용이 가능해야 한다. 
</br></br>
### VSCODE의 설정을 이용하기
1. 파일 > 기본 설정 > 설정 에 들어간다.
</br>단축키는 다음과 같다.
- Window 이용자 : ***Ctrl + ,***
- Mac 이용자 : ***Command + ,***
</br></br>
2. 작업영역(WorkSpace setting)에 들어간다. (두 번째 탭에 들어간다고 생각해라.)</br></br>
3. Include Languages > setting.json 편집 클릭한다.</br></br>
4. 아래 코드를 복사한다.
```JSON
{
   "emmet.includeLanguages": {
   "javascript": "javascriptreact"
   }
}
```

</br></br></br>
> 크.. 속이 다 시원하다!