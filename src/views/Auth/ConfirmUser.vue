<template>
  <div>
    <p v-if="isConfirmed">
      account has been successfully confirmed !
      <router-link :to="{ name: 'login' }">
        Login now
      </router-link>
    </p>

    <p v-if="unknownToken">
      Unknown token !
    </p>
  </div>
</template>

<script>
import { apiConfirmUser } from '@/logic/auth/Auth.api'

export default {
  data () {
    return {
      isConfirmed: false,
      unknownToken: false
    }
  },

  created () {
    apiConfirmUser(this.$route.query.token)
      .then(() => {
        this.isConfirmed = true
      })
      .catch(() => {
        this.unknownToken = true
      })
  }
}
</script>
