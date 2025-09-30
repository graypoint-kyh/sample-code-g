## 설치 및 실행

- 사전 요구사항: Node.js 18.18+ (또는 20+) / npm 9+
  - nvm 사용 시: `nvm use 20` (없다면 `nvm install 20`)

1. 의존성 설치

- 깨끗한 재현 설치 권장: `npm ci` (처음/CI 환경)
- 일반 설치: `npm i`

2. 개발 서버 실행

- `npm run dev`
- 기본 포트: http://localhost:3000

3. 프로덕션 빌드/실행

- 빌드: `npm run build`
- 시작: `npm run start` (빌드 산출물 `.next/` 제공)

## 폴더 구조 및 파일 설명

- `app/`: Next.js App Router 소스
  - `layout.tsx`: 전체 공통 레이아웃
  - `page.tsx`: 홈 페이지
  - `globals.css`: 전역 스타일
  - `CommonHeader.tsx`: 공통 헤더 컴포넌트
  - `about/page.tsx`: About 페이지
  - `faq/page.tsx`: FAQ 페이지
- `public/`: 정적 리소스(이미지/아이콘)
- `.next/`: 빌드/개발 서버 산출물(자동 생성)
- `node_modules/`: 의존성 모듈(자동 생성)
- `.prettierrc`: Prettier 코드 포맷 설정
