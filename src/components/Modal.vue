<template>
  <div>
    <b-modal
      :active.sync="active"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <slot />
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      active: this.value
    }
  },
  watch: {
    active () {
      this.$emit('input', this.active)
    },
    value () {
      this.active = this.value
    }
  }
}
</script>
