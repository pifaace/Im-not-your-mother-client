<template>
  <div>
    Loading...
  </div>
</template>

<script>
import { apiWorkspaceInvitation } from '@/logic/workspaces/Workspace.api'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  created () {
    console.log('tesr')
    apiWorkspaceInvitation(this.id)
      .then(() => {
        this.$flash.add('success-invitation', 'You successfully joined the workspace')
        this.$router.push({ name: 'workspaceList' })
      })
      .catch(() => this.$router.push({ name: 'workspaceList' }))
  }
}
</script>
