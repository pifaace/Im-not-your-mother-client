<template>
  <div>
    <b-sidebar
      position="static"
      type="is-light"
      :fullheight="true"
      open
    >
      <b-button v-click-outside="hide" class="button-sidebar button-add-tool" @click="show">
        <span class="plus" />
      </b-button>
      <b-button v-for="tool in tools" :key="tool.name" class="button-sidebar">
        <b-icon icon="cart-outline" size="is-large" type="is-white" />
      </b-button>
      <transition name="slide-fade">
        <b-button v-if="toggleToolsList" class="button-tool-menu" @click="isModalCreateShoppingListActive = true">
          Shopping list
        </b-button>
      </transition>
      <modal v-model="isModalCreateShoppingListActive">
        <create-shopping-list-form />
      </modal>
    </b-sidebar>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import CreateShoppingListForm from '@/components/shoppingLists/CreateShoppingListForm'
import { apiGetShoppingList } from '@/logic/shoppingList/ShoppingList.api.js'
import { bus } from '@/main'

export default {
  components: {
    Modal,
    CreateShoppingListForm
  },
  data () {
    return {
      toggleToolsList: false,
      isModalCreateShoppingListActive: false,
      tools: []
    }
  },

  async mounted () {
    this.tools = (await apiGetShoppingList()).data
  },

  created () {
    bus.$on('tool-created', (tool) => {
      this.tools.push(tool)
    })
  },

  methods: {
    show () {
      this.toggleToolsList = true
    },
    hide () {
      this.toggleToolsList = false
    }
  }
}
</script>
