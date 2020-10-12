<template>
  <div>
    <h1>Error 500</h1>
  </div>
</template>

<script>
import NProgress from 'nprogress'

export default {
  created () {
    NProgress.done()
  }
}
</script>
