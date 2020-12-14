<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <span class="title strong is-3">
            Create shopping list
          </span>
          <button
            type="button"
            class="delete"
            @click="$parent.close()"
          />
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Shopping list name</label>
            <div class="control">
              <input v-model="form.name" name="name" class="i
              nput" type="text" placeholder="Enter your shopping list name"
              >
              <span v-if="form.errors.has('name')" class="help is-danger" v-text="form.errors.get('name')" />
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button larger">
            Create
          </button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import Form from '@/utils/Form'
import { apiCreateShoppingList } from '@/logic/shoppingList/ShoppingList.api'
import { bus } from '@/main'

export default {
  data () {
    return {
      form: new Form({
        name: ''
      })
    }
  },
  methods: {
    async onSubmit () {
      try {
        const shoppinghList = (await apiCreateShoppingList(this.form.data())).data
        bus.$emit('tool-created', shoppinghList)
      } catch (error) {
        this.form.onFail(error)
      }
    }
  }
}
</script>
