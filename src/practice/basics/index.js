import RefExample from './RefExample.vue'
import TextInterpolation from './TextInterpolation.vue'

import VhtmlExample1 from './VhtmlExample1.vue'
import VhtmlExample2 from './VhtmlExample2.vue'
import VtextExample from './VtextExample.vue'

import VbindExample1 from './VbindExample1.vue'
import VbindExample2 from './VbindExample2.vue'
import VbindExample3 from './VbindExample3.vue'
import VbindExample4 from './VbindExample4.vue'

import VifExample from './VifExample.vue'
import VshowExample from './VshowExample.vue'
import VforExample from './VforExample.vue'
import VpreExample from './VpreExample.vue'
import VcloakExample from './VcloakExample.vue'
import VonceExample from './VonceExample.vue'
import VmemoExample from './VmemoExample.vue'

import VonExample1 from './VonExample1.vue'
import VonExample2 from './VonExample2.vue'
import VonExample3 from './VonExample3.vue'

import VmodelExample1 from './VmodelExample1.vue'
import VmodelExample2 from './VmodelExample2.vue'
import VmodelExample3 from './VmodelExample3.vue'

import VueStyleExample from './VueStyleExample.vue'

export default {
  id: 'basics',

  title: 'Vue Basics',

  order: 1,

  examples: [
    {
      id: 'ref',
      title: 'ref',
      order: 1,
      component: RefExample,
    },

    {
      id: 'textInterpolation',
      title: 'Text Interpolation',
      order: 2,
      component: TextInterpolation,
    },

    {
      id: 'html1',
      title: 'v-html 예제 1',
      order: 3,
      component: VhtmlExample1,
    },

    {
      id: 'html2',
      title: 'v-html 예제 2',
      order: 4,
      component: VhtmlExample2,
    },

    {
      id: 'text',
      title: 'v-text',
      order: 5,
      component: VtextExample,
    },

    {
      id: 'bind1',
      title: 'v-bind 1',
      order: 6,
      component: VbindExample1,
    },

    {
      id: 'bind2',
      title: 'v-bind 2',
      order: 7,
      component: VbindExample2,
    },

    {
      id: 'bind3',
      title: 'v-bind 3',
      order: 8,
      component: VbindExample3,
    },

    {
      id: 'bind4',
      title: 'v-bind 4',
      order: 9,
      component: VbindExample4,
    },

    {
      id: 'if',
      title: 'v-if',
      order: 10,
      component: VifExample,
    },

    {
      id: 'show',
      title: 'v-show',
      order: 11,
      component: VshowExample,
    },

    {
      id: 'for',
      title: 'v-for',
      order: 12,
      component: VforExample,
    },

    {
      id: 'pre',
      title: 'v-pre',
      order: 13,
      component: VpreExample,
    },

    {
      id: 'cloak',
      title: 'v-cloak',
      order: 14,
      component: VcloakExample,
    },

    {
      id: 'once',
      title: 'v-once',
      order: 15,
      component: VonceExample,
    },

    {
      id: 'memo',
      title: 'v-memo',
      order: 16,
      component: VmemoExample,
    },

    {
      id: 'event1',
      title: 'Event Handler',
      order: 17,
      component: VonExample1,
    },

    {
      id: 'event2',
      title: 'Event Object',
      order: 18,
      component: VonExample2,
    },

    {
      id: 'event3',
      title: 'Event Modifier',
      order: 19,
      component: VonExample3,
    },

    {
      id: 'model1',
      title: 'v-model',
      order: 20,
      component: VmodelExample1,
    },

    {
      id: 'model2',
      title: '.lazy',
      order: 21,
      component: VmodelExample2,
    },

    {
      id: 'model3',
      title: '.number / .trim',
      order: 22,
      component: VmodelExample3,
    },

    {
      id: 'style',
      title: 'Vue Style',
      order: 23,
      component: VueStyleExample,
    },
  ],
}
