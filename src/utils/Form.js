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
   * Manage the form error.
   * @param {array} error
   */
  onFail (error) {
    this.errors.record(error.response.data)
  }
}
