### this가 존재하는 이유

```tsx
let myDiner = {
	name: "김치찌개",
	menu: function(){
		console.log("오늘 저녁은" + myDiner.name);
	}
}

myDiner.name();
```

위와 같은 객체가 있을 경우,

munu함수 자체를 다른 객체에서 사용하고 싶은 경우

사용이 상당히~ 불편합니다. 

myDiner 변수가 yourDiner로 바뀌면, 

menu dksdp myDiner도 yourDiner로 바꿔줘야만 하죠.

함수 재사용이 매우 불편합니다.

어떻게 하면 재사용 가능하게 코드를 작성 할 수 있을까요?

```tsx
// 여기서 this를 설정합니다.
function menuGlobal(){
	console.log("오늘 저녁은" + this.name);
}

let myDiner = {
	name: "김치찌개",
	menu: menuGlobal
}

myDiner.menu(); // "오늘 저녁은 김치찌개"
```

다른 변수도 사용해볼까요?

```tsx
let yourDiner = {
	name: "삼겹살",
	menu: menuGlobal
}

yourDiner.menu(); // "오늘 저녁은 삼겹살"
```

> this를 사용하면 함수를 다른 객체에서도 재사용할 수 있습니다.
> 

### this를 제어해보자!

일반적으로 this의 값은 자동으로 할당되지만, 

상황에 따라 제어할 수 있어야 합니다.

### call()

> call 메소드는 this의 값을 바꿀 수도 있고,
함수를 실행할 때 사용할 인수도 전달할 수 있습니다.
> 

```tsx
function menuGlobal(item){
	console.log("오늘 저녁은" + item + this.name)
}

let myDiner = {
	name: "김치찌개"
}

let yourDiner = {
	name: "삼겹살"
}

menuGlobal.call(myDiner, "묵은지") // "오늘 저녁은 묵은지된장찌개"

menuGlobal.call(yourDiner, "오징어") // "오늘 저녁은 오징어삼겹살"
```

### apply()

> apply 메서드는 함수를 실행할 때 인수를 배열로 묶어 한번에 전달합니다.
> 

```tsx
function menuGlobal(item1, item2){
	[item1, item2].forEach(function(el) {
		console.log("오늘 저녁은" + el + this.name)
	}, this);
}

let myDiner = {
	name: "김치찌개"
}

let yourDiner = {
	name: "삼겹살"
}

menuGlobal.apply(myDiner, ["묵은지", "삼겹살"]);
// "오늘 저녁은 묵은지김치찌개"
// "오늘 저녁은 삼겹살김치찌개"
```

### call()과) apply()의 차이

> call은 함수를 실행 할 때 전달할 인수를 하나 하나 전달한다면
apply는 전달할 인수를 배열로 묶어 한번에 전달합니다.
그래서 인수를 두개만 사용합니다.
인수를 배열로 보낸다는 점 빼고는 call과 apply는 동일한 기능을 수행합니다.
> 

### bind()

> bind 메서드는 ES5에서 추가되었습니다.
this 값을 어디서 사용하든 호출 객체가 바뀌지 않게 고정시켜버립니다.
> 

```tsx
function menuGlobal(item){
	console.log("오늘 저녁은" + item + this.name)
}

let myDiner = {
	name: "김치찌개"
}

let yourDiner = {
	name: "삼겹살"
}

let menuGlobalForMe = menuGlobal.bind(myDiner);
let menuGlobalForYou = menuGlobal.bind(yourDiner);

console.log(menuGlobalForMe("묵은지"))
// "오늘 저녁은 묵은지김치찌개"

console.log(menuGlobalForYou("오징어"))
// "오늘 저녁은 오징어삼겹살"

myDiner.menuMine = menuGlobalForYou;
myDiner.menuMine("대패");
// "오늘 저녁은 대패삼겹살"
```

### 화살표 함수화 This

> 화살표 함수의 this는 일반적인 this처럼 함수를 호출한 객체를 할당하지 않고,
바로 상위 스코프의 this를 할당합니다.
> 

```tsx
function menuGlobal(item1, item2){
	[item1, item2].forEach(function(el) {
		console.log("오늘 저녁은" + el + this.name)
	}, this);
}

// 위, 아래 함수는 동일한 함수입니다.

function menuGlobal(item1, item2){
	[item1, item2].forEach((el) => {
		console.log("오늘 저녁은" + el + this.name)
	});
}

let myDiner = {
	name: "김치찌개"
}

let yourDiner = {
	name: "삼겹살"
}

menuGlobal.apply(myDiner, ["묵은지", "삼겹살"]);
// "오늘 저녁은 묵은지김치찌개"
// "오늘 저녁은 삼겹살김치찌개"
```

### 정리해 봅시다.

- this는 함수를 호출하는 객체를 의미합니다.
- call과 apply는 this에 할당되는 객체를 지정할 수 있습니다.
- Bind 메서드는 this에 할당되는 객체가 고정된 새로운 함수를 생성합니다.
- 화살표 함수에서 this는 상위 스코프의 객체를 할당받습니다.