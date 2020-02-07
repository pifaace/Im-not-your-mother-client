<template>
  <div>
    Loading...
  </div>
</template>

<script>

import axios from 'axios'

export default {
  created () {
    axios.get(`/workspaces/${this.$route.params.id}/invitation`)
      .then(() => {
        this.$flash.add('success-invitation', 'You successfully joined the workspace')
        this.$router.push({ name: 'workspaceList' })
      })
      .catch(() => this.$router.push({ name: 'workspaceList' }))
  }
}
</script>
