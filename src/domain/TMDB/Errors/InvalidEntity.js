export class InvalidEntity extends Error {
  static create(msg) {
    return new InvalidEntity(msg)
  }
}
