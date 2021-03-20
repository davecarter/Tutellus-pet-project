import axios from "axios"

export class AxiosFetcher {
  static create({ config } = {}) {
    return new AxiosFetcher({ config })
  }

  constructor({ config }) {
    this._axios = axios.create(config)
  }

  get(url, options) {
    return this._axios.get(url, options)
  }

  post(url, body, options) {
    return this._axios.post(url, body, options)
  }

  put(url, body, options) {
    return this._axios.put(url, body, options)
  }

  patch(url, body, options) {
    return this._axios.patch(url, body, options)
  }

  delete(url, options) {
    return this._axios.delete(url, options)
  }
}
