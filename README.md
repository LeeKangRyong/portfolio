# 포트폴리오 사이트

**사이트:** [portfolio-krlee.netlify.app](https://portfolio-krlee.netlify.app/)

<br >

### 제작 기간
- 1st: 2025.06 ~ 2025.07 (2주)

<br>

- 2nd (refactor): 2025.12.17 (1일)
    - Migrate to TypeScript
    - Update data
    - Fix errors

<br>

### 기술 스택

React + Vite, HTML, CSS, TypeScript, Framer Motion, Netlify

<br>

### 반응형 디자인

```
Desktop (1024px~) | Tablet (768~1023px) | Mobile (480~767px) | Smaller Mobile (~479px)
```

`media-query`와 `rem` 단위로 4가지 화면 크기에 대응  
모바일에서는 세로 레이아웃, 데스크탑에서는 가로 레이아웃으로 자동 전환  
텍스트 크기, 간격, 이미지 크기 모두 화면 크기에 맞춰 조정

<br>

### Custom Hooks

```
useAssets: assets 내 파일 경로를 일일이 입력하지 않고, 문자열 형식으로 간단히 접근함 (ex. ../assets/~~~/ex.png => "ex")
useHover: 컴포넌트의 hover 상태를 감지하고 관리하여 인터랙티브 UI를 구현
useModal: 모달의 열림/닫힘 상태와 선택된 프로젝트 정보를 관리하여 모달 컴포넌트를 재사용
```
<br>

### 프로젝트 구조

```
src/
├── pages/       하나의 페이지 or 화면 구성
├── components/  재사용되는 UI 요소
├── hooks/       재사용 가능한 상태 로직
├── data/        project, skill 정보
└── assets/      이미지 데이터
App.jsx
```

