import { Model } from "../../domain"
import { MovieEntity } from "./MovieEntity"

export class MovieEntityListValueObject extends Model {
  static create({ movieEntityList }) {
    return new MovieEntityListValueObject({
      movieEntityList: movieEntityList.map((entity) => {
        const { id, poster, title, rating, released, description } = entity
        return MovieEntity.create({
          id,
          poster,
          title,
          rating,
          released,
          description
        })
      })
    })
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
      movieEntityList: this.value().map((entity) => entity.toJSON())
    }
  }
}
