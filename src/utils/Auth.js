export default class {
  /**
   * Check if the user has a token.
   */
  isAuthenticated () {
    return localStorage.getItem('token') !== null
  }

  /**
   * @param {string} token
   */
  storeToken (token) {
    localStorage.setItem('token', token)
  }

  getToken () {
    return localStorage.getItem('token')
  }
}
