<template>
  <div>
    <h1>Oops! 404</h1>
    <h3>The resource you're looking for is not here.</h3>
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
