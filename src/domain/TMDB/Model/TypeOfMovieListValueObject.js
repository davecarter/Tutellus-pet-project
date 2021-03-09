import { Model } from "../../domain"
import { InvalidTypeOfMovieList } from "../Errors/InvalidTypeOfMovieList"

const VALID_TYPES = ["top_rated", "popular", "upcoming", "now_playing"]

export class TypeOfMovieListValueObject extends Model {
  static create({ type }) {
    TypeOfMovieListValueObject.validate({ type })
    return new TypeOfMovieListValueObject({ type })
  }

  static validate({ type }) {
    if (!type || !VALID_TYPES.includes(type))
      throw InvalidTypeOfMovieList.create(
        `[TypeOfMovieListValueObject.validate] type(${type}) is invalid`
      )
  }

  constructor({ type }) {
    super()
    this._type = type
  }

  value() {
    return this._type
  }

  toJSON() {
    return {
      type: this.value()
    }
  }
}
