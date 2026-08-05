import FormValidationExample from './FormValidationExample.vue'
import ProductRatingExample from './ProductRatingExample.vue'
import ProgressConfirmExample from './ProgressConfirmExample.vue'

export default {
  id: 'ui',

  title: 'UI',

  order: 6,

  examples: [
    {
      id: 'form-validation',
      title: 'Form Validation',
      order: 1,
      component: FormValidationExample,
    },

    {
      id: 'product-rating',
      title: 'Product Rating',
      order: 2,
      component: ProductRatingExample,
    },

    {
      id: 'progress-confirm',
      title: 'Progress Confirm',
      order: 3,
      component: ProgressConfirmExample,
    },
  ],
}
