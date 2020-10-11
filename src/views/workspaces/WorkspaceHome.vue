<template>
  <div>
    <div class="columns is-mobile">
      <div class="column is-narrow sidebar-border mx-2 my-2 px-5 py-5 is-hidden-mobile">
        <sidebar />
      </div>
      <div class="column">
        <div class="columns is-centered mt-6 mb-0">
          <div class="column is-half has-text-centered py-0">
            <img src="@/assets/images/robot_hello.png" alt="robot hello">
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-half has-text-centered py-0">
            <span class="title strong is-3">
              Create a new tool
            </span>
          </div>
        </div>

        <div class="columns is-centered">
          <div class="column is-half has-text-centered">
            <span class="is-size-5">
              Here a tools list to help you starting your activity
            </span>
          </div>
        </div>

        <div class="columns is-mobile is-centered">
          <div class="column is-one-quarter">
            <b-button
              class="button-primary"
              @click="isComponentModalActive = true"
            >
              Shopping list
            </b-button>
            <b-modal
              :active.sync="isComponentModalActive"
              has-modal-card
              trap-focus
              :destroy-on-hide="false"
              aria-role="dialog"
              aria-modal
            >
              <create-shopping-list-form />
            </b-modal>
          </div>
          <div class="column is-one-quarter">
            <b-button
              class="button-primary"
              @click="isComponentModalActive = true"
            >
              Shopping list
            </b-button>
            <b-modal
              :active.sync="isComponentModalActive"
              has-modal-card
              trap-focus
              :destroy-on-hide="false"
              aria-role="dialog"
              aria-modal
            >
              <create-shopping-list-form />
            </b-modal>
          </div>
        </div>
        <div class="columns is-mobile is-centered">
          <div class="column is-one-quarter">
            <b-button
              class="button-primary"
              @click="isComponentModalActive = true"
            >
              Shopping list
            </b-button>
            <b-modal
              :active.sync="isComponentModalActive"
              has-modal-card
              trap-focus
              :destroy-on-hide="false"
              aria-role="dialog"
              aria-modal
            >
              <create-shopping-list-form />
            </b-modal>
          </div>
          <div class="column is-one-quarter">
            <b-button
              class="button-primary"
              @click="isComponentModalActive = true"
            >
              Shopping list
            </b-button>
            <b-modal
              :active.sync="isComponentModalActive"
              has-modal-card
              trap-focus
              :destroy-on-hide="false"
              aria-role="dialog"
              aria-modal
            >
              <create-shopping-list-form />
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateShoppingListForm from '@/components/shoppingLists/CreateShoppingListForm'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    CreateShoppingListForm,
    Sidebar
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      isComponentModalActive: false
    }
  }
}
</script>
