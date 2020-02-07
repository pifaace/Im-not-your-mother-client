export default class {
  /**
   * @param {string} $key
   * @param {string} $message
   */
  add (key, message) {
    window.sessionStorage.setItem(key, message)
  }

  /**
   * @param {string} $key
   */
  remove (key) {
    window.sessionStorage.removeItem(key)
  }

  /**
   * @param {string} key
   */
  message (key) {
    const value = window.sessionStorage.getItem(key)
    this.remove(key)

    return value
  }
}
