//index.js in video
import Vue from 'vue'
import Router from 'vue-router'
import NameSearch from '@/views/NameSearch'
import TypeSearch from '@/views/TypeSearch'
import SearchButtons from '@/views/SearchButtons'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Namesearch',
      component:NameSearch
    },
    {
      path: '/pokemon/?offset=0&limit=150',
      name: 'Typesearch',
      component:TypeSearch
    },
    {
      path: '/',
      name: 'Searchbuttons',
      component:SearchButtons
    }    

  ]
})
