import Errors from '@/utils/Errors'
import { apiWorkspaceCreate } from '@/logic/workspaces/Workspace.api'

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
   * Send a worskspace create POST request.
   */
  async createWorkspace () {
    try {
      return apiWorkspaceCreate(this.data())
    } catch (error) {
      this.onFail(error)
      return Promise.reject(error)
    }
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
