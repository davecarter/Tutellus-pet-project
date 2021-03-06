export class InvalidTypeOfMovieList extends Error {
  static create(msg) {
    return new InvalidTypeOfMovieList(msg)
  }
}
