<template>
  <div>
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

export default {
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
