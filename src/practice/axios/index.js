import ApiExample from './ApiExample.vue'
import JsonExample from './JsonExample.vue'

export default {
  id: 'axios',

  title: 'Axios',

  order: 5,

  examples: [
    {
      id: 'api',
      title: 'API 호출',
      order: 1,
      component: ApiExample,
    },

    {
      id: 'json',
      title: 'JSON Placeholder',
      order: 2,
      component: JsonExample,
    },
  ],
}
