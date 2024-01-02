# Create-React-App

```sh
npm install -D tailwindcss postcss autoprefixer style-loader css-loader postcss-loader
```

```sh
npx tailwindcss init -p
```

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'], // 이부분추가
    theme: {
        extend: {},
    },
    plugins: [],
}
```

```css
// src/App.css

@tailwind base;
@tailwind components;
@tailwind utilities;

// 이하 생략
```

```jsx
// index.js
```

## webpack loader 설정

필요한 패키지 설치

```sh
npm install tailwind-cra-webpack-plugin
```

webpack.config.js 파일생성

```

```

## icons

```sh
npm install react-icons --save
```

## 프론트엔드 개발자를 꿈 꾸게 된 이유

프론트앤드 개발자라는 길을 선택한 이유는 저의 노력이 바로 눈으로 한번에 보여진다는 점에서 매력을 느꼈습니다.
초기에 온라인 강의 들으면서 `제로초의 HTML 무작정 따라하기` 보면서 기초적인 지식을 쌓았습니다.
얼마 작성하지 않는 내용으로도 화면이 많이 바뀌는것이 재미있었습니다. 더욱더 배우고싶어져서

부트캠프를 알아보던 중 `왜 여기를 선택했는가 ?` 수업을 들으면서, Notion 을 활용하여 수업한 내용을 매일 정리하다보니
자연스럽게 실력이 늘었습니다.

이후 여러 프로젝트를 진행하면서 back-end 와 front-end 를 둘다 해봤지만, 사용자가 직접 볼수있는 영역이 저에게는
더 큰 매력을 느꼈습니다.

https://velog.io/@bami/React-GitHub-Pages%EC%97%90-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0

```sh
npm install gh-pages
```

```json
build:{
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
```
