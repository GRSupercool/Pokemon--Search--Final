import Vue from 'vue'
import Router from 'vue-router'
import NameSearch from '@/views/NameSearch'
import TypeSearch from '@/views/TypeSearch'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'namesearch',
      component: NameSearch
    },
    {
      path: '/typesearch',
      name: 'typesearch',
      component:TypeSearch
    }

  ]
})
