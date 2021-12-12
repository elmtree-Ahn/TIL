### 로딩바를 가져왔다

setTimeout 을 사용하니 2초의 딜레이 시간이 있다. 이 때 로딩바를 보여주면 좋겠다 싶어 코드펜에서 예쁜 로딩바를 하나 찾았다! 

[Single Element CSS-Only Absolute Center Overlay Spinner](https://codepen.io/MattIn4D/pen/LiKFC)

그대로 가져왔고 삼항연산자를 사용하여 data의 개수가 0보다 크면 본래의 화면을 보여주고 그렇지 않으면 로딩바를 보여주게 했다! 

*밀크의 코드가 도움이 많이 되었다!

```jsx
{
	data.length > 0
	? <html> 원래 내용 </html>
	: <div> 로딩 중 </div>
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9646d16c-d8c5-4f3b-ab3e-0d8bef522623/Untitled.png)