<template>
  <div>
    <flash-message flash-key="success-invitation" type="is-success" />
    <h2>Workspace list</h2>
    <ul>
      <li v-for="workspace in workspaces" :key="workspace.id">
        {{ workspace.name }}
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'
import flashMessage from '@/components/Flash'

export default {
  components: {
    flashMessage
  },

  data () {
    return {
      workspaces: []
    }
  },

  created () {
    axios.get('/workspaces')
      .then(({ data }) => {
        this.workspaces = data['hydra:member']
      })
  }
}
</script>
