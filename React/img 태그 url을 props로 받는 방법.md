### 🔸 img url을 props로 받는 방법

부모 컴포넌트에서 props롤 잘 던졌다.

```jsx
<Item imgUrl="https://img-cf.kurly.com/shop/data/goods/1598838893688l0.jpg"  />
```

그리고 잘 받았다? 아니 못받았다.

```jsx
<img src="url({props.imgUrl})" alt="" />
```

" ", ' ', 빽틱까지, {}는 결국 문자열이 되어버린다. 와 이런 난관에 처하다니... props는 jsx 태그 속성값으로 받을 수 없는건가? 뭐지? 어떻게 되는 거지? 한참을 검색해도 답은 안나오고 속은 타들어가고 결국 질문했다. 

잠시 후 밀크의 우문현답

### **밀크/이지훈 - Education Manager2021년 9월 17일 오후 5:382021년 9월 17일 오후 5:38**

<img src={props.imgUrl} /> 이렇게 해보시면 되실겁니다!!

아.. 그냥 받아버리면 되는구나.. 그냥 해버리면 되는구나... 

된다. 너무 잘 된다... 이건 죽어도 안 잃어버릴 것 같다; 이제 다시 고!!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/73dcc6aa-3153-4649-9c76-2709abaacc5b/Untitled.png)