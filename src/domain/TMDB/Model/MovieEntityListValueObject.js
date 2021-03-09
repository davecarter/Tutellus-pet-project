import { Model } from "../../domain"

export class MovieEntityListValueObject extends Model {
  static create({ movieEntityList }) {
    return new MovieEntityListValueObject({ movieEntityList })
  }

  constructor({ movieEntityList }) {
    super()
    this._movieEntityList = movieEntityList
  }

  value() {
    return this._movieEntityList
  }

  toJSON() {
    return {
      movieEntityList: this.value()
    }
  }
}
