기본적인 프론트엔드 프로젝트 환경을 구성해보는 테스트 프로젝트입니다.

## 구성

### Framework

- `Next.js`를 기반으로 `Typescript`와 `Tailwind CSS`를 이용하며 `App Router`를 사용합니다.
- `Next-intl`으로 다국어 지원합니다.
- `Next-themes`으로 기본/다크 모드를 지원합니다.

### Test

- `Playwright`로 E2E 테스트를 실행합니다.
- `Storybook`으로 Component, Integration, Snapshot 테스트를 실행합니다.

### Deploy

- `Vercel`으로 최종 빌드를 배포합니다. 데이터베이스는 `Supabase`를 사용합니다.
- `Chromatic`으로 `Storybook`을 배포하고 테스트합니다.
- `Github Action`으로 `CI/CD`를 구현하여 `Vercel`과 `Chromatic` 배포 및 `Playwright` 테스트를 실행합니다.

## Atomic Design Pattern

UI 컴포넌트는 Atomic Design Pattern을 기반으로 다음과 같이 정의합니다.

### Atom

분해할 수 없는 기본 컴포넌트입니다. 기본적인 디자인 테마를 구현합니다. 비즈니스 로직과 가장 멀며 가능한 State를 내포하지 않습니다.

### Molecule

여러개의 Atom을 결합한 컴포넌트입니다. 기능적인 요소를 정의하며, 동일한 기능을 이용할 때 재사용이 가능합니다.

### Organism

다수의 Atom, Molecule, Organism으로 구성합니다. 비즈니스 로직과 가장 강하게 결합하며 재사용성이 낮습니다.

### Template

전체 Page를 구성하는 레이아웃에 가까운 컴포넌트입니다.

### Page

Template에 실제 컨텐츠가 포함된 컴포넌트입니다.

## Naming Convention

### File and Folder

dash-case

### Functions

PascalCase

### Variables

camelCase

## Links

[Vercel](https://log-in-bice.vercel.app/)

[Chromatic](https://main--67d24f741772bddcc8e72bd1.chromatic.com/)
