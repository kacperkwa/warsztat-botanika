import { defineStore } from 'pinia'
export const useModalStore = defineStore('modal', {
  state: () => ({
    isModalOpen: false,
    isPolicyModalOpen: false
  }),
  actions: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen
    },
    togglePolicyModal() {
      this.isPolicyModalOpen = !this.isPolicyModalOpen
    }
  }
})
