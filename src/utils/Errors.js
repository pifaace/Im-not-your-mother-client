class Errors {
  constructor () {
    this.errors = {}
  }

  /**
   * Retrieve the error message for a field.
   * @param {string} field
   */
  get (field) {
    if (this.errors[field]) {
      return this.errors[field][0]
    }
  }

  /**
   * Determine if an errors exists for the given field.
   * @param {string} field
   */
  has (field) {
    return Object.prototype.hasOwnProperty.call(this.errors, field)
  }

  /**
   * Check if we are any errors.
   */
  any () {
    return this.errors.length > 0
  }

  /**
   * @param {Array} errors
   */
  record (errors) {
    errors.forEach(error => {
      this.errors[error.propertyPath] = []
      this.errors[error.propertyPath].push(error.message)
    })
  }

  /**
   * Clear the message error for a field.
   * @param {string} field
   */
  clear (field) {
    delete this.errors[field]
  }
}

export default Errors
