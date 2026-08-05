import RefExampleRevisited from './RefExampleRevisited.vue'
import ReactiveExample from './ReactiveExample.vue'
import ComputedExample from './ComputedExample.vue'

import WatchersExample1 from './WatchersExample1.vue'
import WatchersExample2 from './WatchersExample2.vue'
import WatchersExample3 from './WatchersExample3.vue'
import WatchersExample4 from './WatchersExample4.vue'

import LifeCycleParent from './LifeCycleParent.vue'

import PropsEmitsParents from './PropsEmitsParents.vue'

import SlotDefaultParent from './SlotDefaultParent.vue'
import SlotScopedParent from './SlotScopedParent.vue'
import SlotNamedParent from './SlotNamedParent.vue'

export default {
  id: 'composition',

  title: 'Composition API',

  order: 2,

  examples: [
    {
      id: 'refre',
      title: 'ref (Revisited)',
      order: 1,
      component: RefExampleRevisited,
    },

    {
      id: 'reactive',
      title: 'reactive',
      order: 2,
      component: ReactiveExample,
    },

    {
      id: 'computed',
      title: 'computed',
      order: 3,
      component: ComputedExample,
    },

    {
      id: 'watchers1',
      title: 'watchers',
      order: 4,
      component: WatchersExample1,
    },

    {
      id: 'watchers2',
      title: 'watchers (2개 변수 감시)',
      order: 5,
      component: WatchersExample2,
    },

    {
      id: 'watchers3',
      title: 'watchers (ref 객체 감시)',
      order: 6,
      component: WatchersExample3,
    },

    {
      id: 'watchers4',
      title: 'watchers (reactive 감시)',
      order: 7,
      component: WatchersExample4,
    },

    {
      id: 'lifecycle',
      title: 'Lifecycle Hooks',
      order: 8,
      component: LifeCycleParent,
    },

    {
      id: 'propsEmits',
      title: 'Props & Emits',
      order: 9,
      component: PropsEmitsParents,
    },

    {
      id: 'slotDefault',
      title: 'Slot (Default)',
      order: 10,
      component: SlotDefaultParent,
    },

    {
      id: 'slotScoped',
      title: 'Slot (Scoped)',
      order: 11,
      component: SlotScopedParent,
    },

    {
      id: 'slotNamed',
      title: 'Slot (Named)',
      order: 12,
      component: SlotNamedParent,
    },
  ],
}
