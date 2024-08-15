import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
  state: () => ({
    isNavOpen: false
  }),
  actions: {
    toggleNavMenu() {
      this.isNavOpen = !this.isNavOpen
      console.log('asd')
    }
  }
})
