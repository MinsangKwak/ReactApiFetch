## React Fetch Gallery

타임어택으로 fetch Gallery를 구현하는 프로젝트 입니다.<br/>
API호출 연습을 위해 Fetch를 활용 하였습니다.

## DEV

### **Front-End**

![React](https://img.shields.io/badge/React-61Dafb?style=flat-square&logo=React&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat-square&logo=JavaScript&logoColor=white)

`React`와 `Fetch`를 주로 공부하기 위한 프로젝트입니다.

## Github Pages로 배포하기
<hr/>

### Github Setting

우선 react 프로젝트 배포를 위해서 github repository를 하나 생성한다.<br/>
그 다음 github repository의 Settings 탭으로 이동하여<br/>
GitHub Pages 설정을 master로 변경한다.<br/>
Branch는 본인이 React 프로젝트를 push한 branch로 선택하며 , root와 docs를 선택한다.<br/>

### React Project Setting

1. Github Page로 프로젝트 배포를 위해서는 gh-pages라는 모듈 설치가 필요하다.
아래의 명령어를 통해서 패키지를 설치해준다.

```bash
npm install -save gh-pages
```

2. homepage에는 github page setting을 통해 만들었던 본인의 repository io 페이지 주소를, scripts에는 배포를 위한 script를 추가한다.

3. 아래 명령어를 통해 react 프로젝트 deploy한다.
```bash
npm run deploy
```

4. github Setting의 GitHub Pages로 다시 이동하여 Branch를 gh-pages로 변경한다.
만약 gh-pages branch가 없다면, 위의 push 방법을 사용해서 변경된 pakage.json을 git에 한번 더 push한다.

5. 그리고 해당 io 페이지로 이동하면 끝