import Errors from '@/utils/Errors'
import { apiRegister } from '@/logic/auth/Auth.api'
import store from '@/store'

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
   * Send a register POST request.
   */
  register () {
    return new Promise((resolve, reject) => {
      apiRegister(this.data())
        .then(() => {
          this.onSuccess()
          resolve()
        })
        .catch((error) => {
          this.onFail(error)
          reject(error)
        })
    })
  }

  /**
   * Send a worskspace create POST request.
   */
  createWorkspace () {
    return new Promise((resolve, reject) => {
      store.dispatch('createWorkspace', this.data())
        .then(() => {
          this.onSuccess()
          resolve()
        })
        .catch((error) => {
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
