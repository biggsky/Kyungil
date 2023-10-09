#tsconfig.json

- compilerOptions : typescript 파일을 컴파일 진행시 어떤 형태로 컴파일을 진행할지 속성 정의 하는 부분
- include : 컴파일을 진행할 폴더를 지정
- exclude : 컴파일에서 제외할 폴더 지정

## compilerOptions

- module : 모듈 시스템 지정
- outDir : 내보낼 경로 지정
- target : 번들링 문법 지정 ex) es5 es6 ...
- esModuleInterop : true
(import/export 문법을 자연스럽게 변경 해주는 행위) 그냥 true로 설정
(CommonJS 형식과 ES6 형식의 혼용을 자연스럽게 통합해주는 속성)

- strict : true로 두자. 엄격(체크를 엄격하게 할거냐)
- baseUrl : 모듈의 상대 경로를 지정 ./src 
- paths : "baseUrl" 경로를 기준으로 상대 위치를 가져오는 매핑값 (경로를 변수처럼 사용한다.)

```sh
npm init -y
npx tsc --init
```

```json
{
    "compilerOptions" : {
        "module" : "CommonJS",
        "outDir" : "./dist",
        "target" : "ES6",
        "esModuleInterop" : false,
        "strict" : true,
        "baseUrl" : "./src",
        "paths" : {
            "@user/*" : ["user/*"]
        }
    },
    "include" : ["src/**/*"],
    "exclude" : ["**/*.test.ts"]
    // .test.ts 확장자가 붙은 파일은 모두 제외
    
}
```

```json
// package.json 추가
{
    "build" : "tsc"
}
```

### 문제 경로가 @user 이 부분이 컴파일되고나서 변환이 안됐다.
컴파일 됐을떄
자바스크립트 변경이 됫을때도 ./user
실제 상대경로로 

변환을해도 별칭이 남아있으면 안되니까, 별칭을 실제 경로로 변경해준다.

### tsc-alias

### 빌드시에 별칭 그대로 경로가 들어가는데 별칭 그대로 경로가 지정되어있으면 문제가 생기겠죠? 이 별칭을 경로로 변환 해주는 패키지

```sh
npm install -D tsc-alias
```

```sh
// package.json 별칭 경로 수정 추가
{
    "build" : "tsc && tsc-alias"
}

```