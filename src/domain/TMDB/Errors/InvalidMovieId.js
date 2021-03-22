export class InvalidMovieId extends Error {
  static create(msg) {
    return new InvalidMovieId(msg)
  }
}
