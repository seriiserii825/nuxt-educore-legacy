import {ref} from 'vue'
import {defineStore} from 'pinia'
export const useModalStore = defineStore('modal', () => {
    const show_modal = ref(false)
    function toggleModal() {
        show_modal.value = !show_modal.value
    }
    return {
        show_modal,
        toggleModal
    }
})
