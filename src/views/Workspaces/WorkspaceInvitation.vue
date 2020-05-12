<template>
  <div>
    Loading...
  </div>
</template>

<script>

import axios from 'axios'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  created () {
    axios.get(`/workspaces/${this.id}/invitation`)
      .then(() => {
        this.$flash.add('success-invitation', 'You successfully joined the workspace')
        this.$router.push({ name: 'workspaceList' })
      })
      .catch(() => this.$router.push({ name: 'workspaceList' }))
  }
}
</script>
