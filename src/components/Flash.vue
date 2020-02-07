<template>
  <b-message v-if="flashMessage" :type="type">
    {{ flashMessage }}
  </b-message>
</template>

<script>

export default {
  props: {
    flashKey: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'is-info'
    }
  },

  data () {
    return {
      flashMessage: this.$flash.message(this.flashKey)
    }
  }
}
</script>
