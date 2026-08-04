<script setup>
import { ref, computed } from 'vue'

// 실습 : 날씨 어플
import WeatherParent from './weather/WeatherParent.vue'

// ===== Basics =====
import RefExample from './examples/basics/RefExample.vue'
import TextInterpolation from './examples/basics/TextInterpolation.vue'
import VhtmlExample1 from './examples/basics/VhtmlExample1.vue'
import VhtmlExample2 from './examples/basics/VhtmlExample2.vue'
import VtextExample from './examples/basics/VtextExample.vue'

import VbindExample1 from './examples/basics/VbindExample1.vue'
import VbindExample2 from './examples/basics/VbindExample2.vue'
import VbindExample3 from './examples/basics/VbindExample3.vue'
import VbindExample4 from './examples/basics/VbindExample4.vue'

import VifExample from './examples/basics/VifExample.vue'
import VshowExample from './examples/basics/VshowExample.vue'
import VforExample from './examples/basics/VforExample.vue'
import VpreExample from './examples/basics/VpreExample.vue'
import VcloakExample from './examples/basics/VcloakExample.vue'
import VonceExample from './examples/basics/VonceExample.vue'
import VmemoExample from './examples/basics/VmemoExample.vue'

import VonExample1 from './examples/basics/VonExample1.vue'
import VonExample2 from './examples/basics/VonExample2.vue'
import VonExample3 from './examples/basics/VonExample3.vue'

import VmodelExample1 from './examples/basics/VmodelExample1.vue'
import VmodelExample2 from './examples/basics/VmodelExample2.vue'
import VmodelExample3 from './examples/basics/VmodelExample3.vue'

import VueStyleExample from './examples/basics/VueStyleExample.vue'

// ===== Composition API =====
import RefExampleRevisited from './examples/composition/RefExampleRevisited.vue'
import ReactiveExample from './examples/composition/ReactiveExample.vue'
import ComputedExample from './examples/composition/ComputedExample.vue'
import WatchersExample1 from './examples/composition/WatchersExample1.vue'
import WatchersExample2 from './examples/composition/WatchersExample2.vue'
import WatchersExample3 from './examples/composition/WatchersExample3.vue'
import WatchersExample4 from './examples/composition/WatchersExample4.vue'

import LifeCycleParent from './examples/composition/LifeCycleParent.vue'

import PropsEmitsParents from './examples/composition/PropsEmitsParents.vue'
import SlotDefaultParent from './examples/composition/SlotDefaultParent.vue'
import SlotScopedParent from './examples/composition/SlotScopedParent.vue'
import SlotNamedParent from './examples/composition/SlotNamedParent.vue'

const current = ref('textInterpolation')

const examples = {
  weather: WeatherParent,

  ref: RefExample,
  textInterpolation: TextInterpolation,
  html1: VhtmlExample1,
  html2: VhtmlExample2,
  text: VtextExample,

  bind1: VbindExample1,
  bind2: VbindExample2,
  bind3: VbindExample3,
  bind4: VbindExample4,

  if: VifExample,
  show: VshowExample,
  for: VforExample,
  pre: VpreExample,
  cloak: VcloakExample,
  once: VonceExample,
  memo: VmemoExample,

  event1: VonExample1,
  event2: VonExample2,
  event3: VonExample3,

  model1: VmodelExample1,
  model2: VmodelExample2,
  model3: VmodelExample3,

  style: VueStyleExample,

  refre: RefExampleRevisited,
  reactive: ReactiveExample,
  computed: ComputedExample,

  watchers1: WatchersExample1,
  watchers2: WatchersExample2,
  watchers3: WatchersExample3,
  watchers4: WatchersExample4,

  lifecycle: LifeCycleParent,

  propsEmits: PropsEmitsParents,

  slotDefault: SlotDefaultParent,
  slotScoped: SlotScopedParent,
  slotNamed: SlotNamedParent,
}

const currentComponent = computed(() => examples[current.value])
</script>

<template>
  <div class="container">
    <aside class="sidebar">
      <h2>Vue 실습: 날씨 어플</h2>
      <button @click="current = 'weather'">날씨 어플</button>
      <h2>Vue Basics</h2>
      <button @click="current = 'ref'">ref</button>

      <button @click="current = 'textInterpolation'">Text Interpolation</button>

      <button @click="current = 'html1'">v-html 예제 1</button>

      <button @click="current = 'html2'">v-html 예제 2</button>

      <button @click="current = 'text'">v-text</button>

      <button @click="current = 'bind1'">v-bind 1</button>

      <button @click="current = 'bind2'">v-bind 2</button>

      <button @click="current = 'bind3'">v-bind 3</button>

      <button @click="current = 'bind4'">v-bind 4</button>

      <button @click="current = 'if'">v-if</button>

      <button @click="current = 'show'">v-show</button>

      <button @click="current = 'for'">v-for</button>

      <button @click="current = 'pre'">v-pre</button>

      <button @click="current = 'cloak'">v-cloak</button>

      <button @click="current = 'once'">v-once</button>

      <button @click="current = 'memo'">v-memo</button>

      <button @click="current = 'event1'">Event Handler</button>

      <button @click="current = 'event2'">Event Object</button>

      <button @click="current = 'event3'">Event Modifier</button>

      <button @click="current = 'model1'">v-model</button>

      <button @click="current = 'model2'">.lazy</button>

      <button @click="current = 'model3'">.number / .trim</button>

      <button @click="current = 'style'">Vue Style</button>

      <hr />

      <h2>Composition API</h2>

      <button @click="current = 'refre'">ref (Revisited)</button>

      <button @click="current = 'reactive'">reactive</button>

      <button @click="current = 'computed'">computed</button>

      <button @click="current = 'watchers1'">watchers</button>
      <button @click="current = 'watchers2'">watchers (2개 변수 동시 감시)</button>
      <button @click="current = 'watchers3'">watchers (ref 객체 감시)</button>
      <button @click="current = 'watchers4'">watchers (reactive 데이터 감시)</button>

      <button @click="current = 'lifecycle'">Lifecycle Hooks</button>

      <button @click="current = 'propsEmits'">Props & Emits</button>

      <button @click="current = 'slotDefault'">Slot (Default)</button>
      <button @click="current = 'slotScoped'">Slot (Scoped)</button>
      <button @click="current = 'slotNamed'">Slot (Named)</button>
    </aside>

    <main class="content">
      <component :is="currentComponent" />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.sidebar {
  width: 240px;
  height: 100vh;

  overflow-y: auto;

  padding: 20px;
  border-right: 1px solid #ddd;

  flex-shrink: 0;
}

.sidebar h2 {
  margin-top: 0;
}

.sidebar button {
  display: block;
  width: 100%;
  margin-bottom: 8px;
  padding: 8px;
  text-align: left;
  cursor: pointer;
}

/* 오른쪽 main */
.content {
  flex: 1;
  min-width: 0;

  height: 100vh;
  overflow-y: auto;

  padding: 32px 48px;
}
</style>
