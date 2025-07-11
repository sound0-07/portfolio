# 개인 포트폴리오 웹사이트

이 프로젝트는 Next.js를 사용하여 구축된 개인 포트폴리오 웹사이트입니다.

## ✨ 주요 내용

- **소개**: 저의 기술 스택, 경험, 가치관 등을 소개합니다.
- **프로젝트**: 진행했던 프로젝트들을 소개하고 상세 내용을 확인할 수 있습니다.

## 🛠️ 기술 스택

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [CSS Modules](https://github.com/css-modules/css-modules)
- **Animation**: [Motion](https://motion.dev/)

## 📁 프로젝트 구조

이 프로젝트는 Next.js의 App Router를 기반으로 구성되어 있습니다.

```
/src
├── app/                  # 페이지 및 라우팅
│   ├── (main)/           # 메인 레이아웃 그룹
│   │   ├── about/        # About 페이지
│   │   ├── contact/      # Contact 페이지
│   │   └── projects/     # Projects 페이지
│   ├── layout.tsx        # 최상위 레이아웃
│   └── page.tsx          # 홈페이지
├── components/           # 재사용 가능한 UI 컴포넌트 (e.g., Button, Header, Footer)
├── containers/           # 페이지별 주요 섹션 컨테이너
├── data/                 # 데이터 관련 로직
└── locales/              # 다국어 지원 파일 (e.g., ko.ts)
```

## 🚀 시작하기

1.  **의존성 설치:**

    ```bash
    yarn install
    # 또는
    npm install
    ```

2.  **개발 서버 실행:**

    ```bash
    yarn dev
    # 또는
    npm run dev
    ```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인하세요.

<!-- 참고 [Color Palette](https://www.colorhunt.co/palette/e5d9b6a4be7b5f8d4e285430) -->
<!-- 참고 [icon](https://lineicons.com/) -->
