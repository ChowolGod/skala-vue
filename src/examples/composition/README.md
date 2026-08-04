# Vue Basics

Vue의 가장 기본적인 문법과 디렉티브를 실습한 예제들을 모아놓은 폴더입니다.

---

# 학습 목표

- Vue의 데이터 바인딩 방식을 이해한다.
- 디렉티브의 역할을 익힌다.
- 이벤트 처리와 양방향 바인딩을 사용할 수 있다.
- 스타일 바인딩을 적용할 수 있다.

---

# 학습 순서

1. Text Interpolation
2. v-html
3. v-text
4. v-bind
5. v-if
6. v-show
7. v-for
8. v-pre
9. v-cloak
10. v-once
11. v-memo
12. v-on
13. Event Object
14. Event Modifier
15. v-model
16. Vue Style

---

# 예제 목록

| 파일                  | 내용                  |
| --------------------- | --------------------- |
| TextInterpolation.vue | {{ }} 출력            |
| VhtmlExample1.vue     | v-html 사용           |
| VhtmlExample2.vue     | v-text와 비교         |
| VbindExample1.vue     | :src                  |
| VbindExample2.vue     | :href                 |
| VbindExample3.vue     | :disabled             |
| VbindExample4.vue     | :class                |
| VifExample.vue        | 조건부 렌더링         |
| VshowExample.vue      | 요소 표시/숨김        |
| VforExample.vue       | 리스트 렌더링         |
| VpreExample.vue       | Vue 컴파일 제외       |
| VcloakExample.vue     | 컴파일 전 깜빡임 방지 |
| VonceExample.vue      | 최초 1회 렌더링       |
| VmemoExample.vue      | 선택적 렌더링 최적화  |
| VonExample1.vue       | 이벤트 핸들러         |
| VonExample2.vue       | Event Object          |
| VonExample3.vue       | Event Modifier        |
| VmodelExample1.vue    | 기본 v-model          |
| VmodelExample2.vue    | .lazy                 |
| VmodelExample3.vue    | .number / .trim       |
| VueStyleExample.vue   | 클래스/스타일 바인딩  |

---

# 많이 헷갈리는 개념

## v-if vs v-show

| v-if          | v-show         |
| ------------- | -------------- |
| DOM 생성/삭제 | display:none   |
| 초기 비용 큼  | 초기 비용 작음 |
| 자주 변경 X   | 자주 변경 O    |

---

## v-html vs v-text

| v-html    | v-text             |
| --------- | ------------------ |
| HTML 해석 | 문자열 그대로 출력 |
| XSS 주의  | 안전               |

---

## v-once vs v-memo

| v-once            | v-memo             |
| ----------------- | ------------------ |
| 다시 렌더링 안 함 | 조건에 따라 렌더링 |

---

# 핵심 정리

- `{{ }}` : 데이터 출력
- `v-bind` : 속성 바인딩
- `v-if` : 조건부 렌더링
- `v-for` : 반복 렌더링
- `v-on` : 이벤트 처리
- `v-model` : 양방향 바인딩
