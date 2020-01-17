<template>
  <p>Workspace list</p>
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
      .then(response => console.log(response))
  }
}
</script>
