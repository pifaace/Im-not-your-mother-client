import axios from 'axios'
import Errors from '@/utils/Errors'

export default class {
  constructor (data) {
    this.originalData = data

    for (const field in data) {
      this[field] = data[field]
    }

    this.errors = new Errors()
  }

  /**
   * Reset the form data.
   */
  reset () {
    for (const field in this.originalData) {
      this[field] = ''
    }
  }

  /**
   * Return true if all fields are filled.
   */
  isCompleted () {
    for (const field in this.originalData) {
      if (this[field] === '') {
        return false
      }
    }

    return true
  }

  /**
   * Fetch all relevant data for the form.
   */
  data () {
    const data = {}

    for (const property in this.originalData) {
      data[property] = this[property]
    }

    return data
  }

  /**
   * Send a POST request to the giver URL.
   * @param {string} url
   */
  post (url) {
    return this.submit('post', url)
  }

  /**
   * Submit the form.
   * @param {string} requestType
   * @param {string} url
   */
  submit (requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
        .then(() => {
          this.onSuccess()
          resolve()
        })
        .catch(error => {
          this.onFail(error)
          reject(error)
        })
    })
  }

  onSuccess () {
    this.errors.clear()
    this.reset()
  }

  /**
   * Manage the form error.
   * @param {array} error
   */
  onFail (error) {
    this.errors.record(error.response.data.violations)
  }
}
