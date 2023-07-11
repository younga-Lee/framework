# 리액트 

## 0. typescript
### 예제
- 01. 블록스코프 (let, const)
- 02. 타입명시, 템플릿 리터럴
- 03. null병합연산자, 옵셔널 체이닝
    - null병합연산자 (??)
        - null 또는 undefined인 값을 다른 값으로 대체
        - a??b -> a가 null 혹은 undefined인경우 b값 반환
    - Optional chaining (.?) 
        - 해당 속성 또는 메서드가 존재하는지 여부를 확인하고, 존재하지 않으면 에러를 발생시키지 않고 *undefined*를 반환
        - 코드 가독성 향상, 예외처리에 유용
- 04. 전개구문, 전개 연산자, 배열 또는 객체 합성
- 05. 구조분해할당
    - `function 함수 (data: any)` data를 any는 웬만하면 쓰지 말것, 타입스크립트쓰는 이유가 없어짐(이럴거면 자바스크립트를 쓰자)
- 06. arrow fuction
    - 표현식
        ```
        const greet = (name) => {
        console.log(`Hello, ${name}!`);
        };

        greet("John"); // 출력: Hello, John!
        ```
- 07. default parameters
    - 표현식
        ```
        const randomNumber = (min: number = 0, max: number = 10): number => {
        return Math.round(Math.random() * (max - min)) + min;
        };
        ```
- 08. rest parameters 
    - 기본 매개변수, 나머지 기본 변수
- 09. iterable-iterator
- 10. generator함수

## 0. ECMAScript
### 예제
- 11. promise
    - 등장 배경 : callback지옥 해소하기 위해
    - 표현식
        ```
        delayPromise()
        .then(async()=> {
        console.log('1s')
        await delayPromise()
        })
        ```
    - async await : 비동기적 함수
- 12. 모듈
- 13. class, ES모듈
    - ES모듈(Node.js)
        - package.json파일에서 `type:module` 설정


### 기타 (typescript)
- git ignore추가 `npx add-gitignore node osx windows visualstudiocode` 
- console창에서 ctrl+shift+p 누르면 창 켜짐
-  `pnpm watch` 하면 변하는 것 볼 수 있음
-  `pnpm ts-node src/파일명`하면 파일 실행됨 
- 백틱사용하면 formatting가능

### 기타 (ECMAscript)
- `node scripts/13-class.js` 파일 실행


---

## 1. 함수형 프로그래밍
### 예제
- 실행
    - `npx nodemon 파일명.js`
    - `nodemon` : 소스코드 변경을 감지하고 서버를 *자동으로 다시 시작*
    - `npx` : npm패키지를 실행할 수 있는 도구로, 패키지가 로컬에 설치되어 있지 않더라도 임시로 실행할 수 있게 해줌
- 1. 명령형 프로그래밍
    -  const a = [...데이터] : 데이터 복제 
    
- 2. 선언형 프로그래밍
    - 비교
        - 명령형 프로그래밍
            ```
            for (let i = 0, l = receivedValue.length; i < l; ++i) {
                const receivedItem = receivedValue[i];
                receivedItem.key = `programming-${i+1}`;
            }
            ```
        - 선언형 프로그래밍
            ```
            let receivedValue = originalValue.map((item, index) =>{
                item.key = `Programming-${index + 1}`
                return item;
            })
            ```
- 5. 순수형 프로그래밍
    - 순수형
        - 1. 예측가능해야함
        - 2. input과 output이 동일
        - side effect (부수효과)가 없어야 함
    - 리액트 component가 정상적으로 동작하기 위해선 반드시 순수해야함


---

## 2. 점진적인 React 라이브러리
### 예제