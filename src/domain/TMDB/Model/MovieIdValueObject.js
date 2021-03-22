import { Model } from "../../domain"
import { InvalidMovieId } from "../Errors/InvalidMovieId"

export class MovieIdValueObject extends Model {
  static create({ movieId }) {
    MovieIdValueObject.validate({ movieId })
    return new MovieIdValueObject({ movieId })
  }

  static validate({ movieId }) {
    if (typeof movieId !== "string")
      throw InvalidMovieId.create(
        `[MovieIdValueObject.validate] movieId(${movieId}) type is invalid`
      )
  }

  constructor({ movieId }) {
    super()
    this._movieId = movieId
  }

  value() {
    return this._movieId
  }

  toJSON() {
    return { movieId: this.value() }
  }
}
