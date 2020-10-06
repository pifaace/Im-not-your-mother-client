<template>
  <div>
    <p>loading..</p>
  </div>
</template>

<script>
export default {
  async mounted () {
    const lol = await this.$auth.getTokenSilently()
    console.log(lol)
  }
}
</script>
