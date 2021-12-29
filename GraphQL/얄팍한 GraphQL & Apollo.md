
### 교재 사이트

[YouTube](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbUVHOS1wWkktMWhCa19RLTVsM3hoVjU2dFlzQXxBQ3Jtc0tuNU1ndFRpTG5KWklSckVMUElBNEswdXlSRWlFUVRkbFdLc2dHUWo2c1VFNmI0U00zUUhzZmVHdlJILVEzLTA0dkRCS2YwVTIxbnBaYTIyb09zRHpsTjItS09TblVHT01XbEZRS0pNR0dGM1hITWYwOA&q=https%3A%2F%2Fyalco.kr%2Flectures%2Fgraphql-apollo)

# **📕Section 1. GraphQL이 뭐고 왜 쓰나요?**

## **Lesson 2. GraphQL이 등장하기 전 - REST API란?**

### **REST API의 한계**

**Case 1. 각 팀의 매니저와 오피스 호수만 필요할 때 : Overfetching**

**Case 2. 특정 팀의 매니저와 팀원들 명단이 필요할 때 : Underfetching**

## **Lesson 3. GraphQL로 정보 주고받아보기**

RestAPI를 사용할 때, 테스트를 위해 PostMan을 사용하 듯,

GraphQL을 사용할 때는 Apollo를 사용합니다. 

## **GraphQL 사용해보기**

### **팀 정보 받아오기**

```tsx
query {
  teams {
    id
    manager
    office
    extension_number
    mascot
    cleaning_duty
    project
  }
}
```

### **팀의 필요한 정보만 받아오기**

```tsx
query {
  teams {
    manager
    office
  }
}
```

```tsx
query {
  team(id: 1) {
    manager
    office
  }
}
```

### **팀 정보와 해당 팀 멤버들의 정보들 받아오기**

```tsx
query {
  team(id: 1) {
    manager
    office
    members {
      first_name
      last_name
    }
  }
}
```

### **팀 목록과 역할 목록 받아오기**

```tsx
query {
  teams {
    manager
    office
    mascot
  }
  roles {
    id
    requirement
  }
}
```

### 새 팀 추가

```tsx
mutation {
  postTeam (input: {
    manager: "John Smith"
    office: "104B"
    extension_number: "#9982"
    mascot: "Dragon"
    cleaning_duty: "Monday"
    project: "Lordaeron"
  }) {
    manager
    office
    extension_number
    mascot
    cleaning_duty
    project
  }
}
```

### **특정 번호의 팀 정보 수정**

```tsx
mutation {
  editTeam(id: 2, input: {
    manager: "Maruchi Han"
    office: "105A"
    extension_number: "2315"
    mascot: "Direwolf"
    cleaning_duty: "Wednesday"
    project: "Haemosu"
  }) {
    id,
    manager,
    office,
    extension_number,
    mascot,
    cleaning_duty,
    project
  }
}
```

### **특정 번호의 팀 삭제**

```tsx
mutation {
  deleteTeam(id: 3) {
    id,
    manager,
    office,
    extension_number,
    mascot,
    cleaning_duty,
    project
  }
}
```