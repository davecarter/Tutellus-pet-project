export class InvalidSearchQuery extends Error {
  static create(msg) {
    return new InvalidSearchQuery(msg)
  }
}
