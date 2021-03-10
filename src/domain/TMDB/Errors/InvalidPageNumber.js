export class InvalidPageNumber extends Error {
  static create(msg) {
    return new InvalidPageNumber(msg)
  }
}
