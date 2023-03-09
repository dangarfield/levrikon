import { defineStore } from 'pinia'

const projectStore = defineStore('projectStore', {
  state: () => {
    return {
      name: 'New Project',
      path: ''
    }
  },
  // getters: {
  //   fullName: state => `${state.firstName} ${state.lastName}`
  // },
  actions: {
    increment () {
      this.counter++
    }
  }
})

export default projectStore
