## React Fetch Gallery

API호출 연습을 하기 위해 만든 프로젝트입니다.<br/>
fetch함수로 최초 작성 후 axios로 변경해 보았습니다.

https://minsangkwak.github.io/ReactApiFetch/

### Discription
`React` SPA를 활용하여 `API` 통신을 공부하기 위해 만들어 보았습니다.
- jsonplacholder에서 데이터를 불러옵니다.
- RELOAD버튼 클릭 시 데이터를 다시 불러옵니다.

### Tech
![React](https://img.shields.io/badge/React-61Dafb?style=flat-square&logo=React&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat-square&logo=JavaScript&logoColor=white)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)


### 파일 디렉토리

```bash
└── src
    ├── App.jsx
    ├── Components 
    │   ├── Common
    │   │   ├── Button
    │   │   │   └── Button.jsx
    │   │   └── Lists
    │   │       └── Lists.jsx
    │   └── Layout
    │       ├── Header
    │       │   ├── Header.jsx
    │       │   └── HeaderTitle.jsx
    │       ├── Body
    │       │   └── Body.jsx
    │       └── Container
    │           ├── Container.jsx
    │           └── ButtonContainer.jsx
    └── index.jsx
```

## 사전지식

### Axios 활용하기

Axois는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리 이다.

### Github Pages로 배포하기

#### Github Setting

우선 react 프로젝트 배포를 위해서 github repository를 하나 생성한다.<br/>
그 다음 github repository의 Settings 탭으로 이동하여<br/>
GitHub Pages 설정을 master로 변경한다.<br/>
Branch는 본인이 React 프로젝트를 push한 branch로 선택하며 , root와 docs를 선택한다.<br/>

#### React Project Setting

1. Github Page로 프로젝트 배포를 위해서는 gh-pages라는 모듈 설치가 필요하다.<br/>
아래의 명령어를 통해서 패키지를 설치해준다.

```bash
npm install -save gh-pages
```

2. homepage에는 github page setting을 통해 만들었던 본인의 repository io 페이지 주소를,<br/>
scripts에는 배포를 위한 script를 추가한다.

3. 아래 명령어를 통해 react 프로젝트 deploy한다.
```bash
npm run deploy
```
4. github Setting의 GitHub Pages로 다시 이동하여 Branch를 gh-pages로 변경한다.<br/>
만약 gh-pages branch가 없다면, 위의 push 방법을 사용해서 변경된 pakage.json을 git에 한번 더 push한다.

5. 그리고 해당 io 페이지로 이동하면 끝
