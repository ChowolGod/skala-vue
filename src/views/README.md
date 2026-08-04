# Weather Dashboard

## 학습 목표

- Component 분리
- Props
- Emits
- Slot
- 부모 컴포넌트 중심 상태 관리

---

## 컴포넌트 구조

WeatherParent
├── BaseDashboardCard
│ └── SearchBar
└── BaseDashboardCard
└── WeatherCard

---

## 구현 순서

- [ ] Parent 하나로 기능 구현
- [ ] SearchBar 분리
- [ ] WeatherCard 분리
- [ ] BaseDashboardCard 분리
- [ ] Slot 적용

---

## 핵심 개념

- Parent가 모든 상태를 관리한다.
- Props는 부모 → 자식으로 데이터를 전달한다.
- Emits는 자식 → 부모로 이벤트를 전달한다.
- Slot은 공통 레이아웃 안에 다른 컴포넌트를 삽입할 때 사용한다.
