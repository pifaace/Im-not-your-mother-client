export default class {
  constructor (data) {
    for (const field in data) {
      this[field] = data[field]
    }
  }

  reset () {
  }
}
