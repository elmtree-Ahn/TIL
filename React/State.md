### 째깍 거리는 시계를 만들어보자.

```jsx
import React, { useEffect, useState } from 'react';

const StateFunctionalComponent = () => {
    
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const interval = setInterval(()=> tick(), 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <h1>Clock</h1>
            <h2>It it {date.toLocaleString()}</h2>
        </div>
    );
};

export default StateFunctionalComponent;
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/200b6993-4f75-42f0-b1d6-82f1490edcb6/Untitled.png)

시계가 잘 돌아간다. 간단한 코드인데 좀 면밀히 살펴봐보자!

```jsx
import React, { useEffect, useState } from 'react';

const StateFunctionalComponent = () => {
    
    const [date, setDate] = useState(new Date());
		// useState로 초기화 하기

    const tick = () => {
        setDate(new Date());
    }
		// setDate로 변경하기

    useEffect(() => {
        const interval = setInterval(()=> tick(), 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])
		// 빈배열을 주어 마운트 될 때만 실행하기!

    return (
        <div>
            <h1>Clock</h1>
            <h2>It it {date.toLocaleString()}</h2>
        </div>
    );
};

export default StateFunctionalComponent;
```

### State 정리

컴포턴트 내의 상태 → 자신의 출력값을 변경

Class component → State LifeCycle

Functional component → Hook으로 관리

유의 사항 → state를 직접 수정해서는 안된다.