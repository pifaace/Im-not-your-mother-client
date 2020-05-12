export default class {
  /**
   * Check if the user has a token.
   */
  isAuthenticated () {
    return window.localStorage.getItem('token') !== null
  }

  /**
   * @param {string} token
   */
  storeToken (token) {
    window.localStorage.setItem('token', token)
  }

  getToken () {
    return window.localStorage.getItem('token')
  }

  removeToken () {
    window.localStorage.removeItem('token')
  }
}
