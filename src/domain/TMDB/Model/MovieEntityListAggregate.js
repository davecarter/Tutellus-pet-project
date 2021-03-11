import { Model } from "../../domain"
import { MovieEntity } from "./MovieEntity"
import { PaginationValueObject } from "./PaginationValueObject"

export class MovieEntityListAggregate extends Model {
  static create({ movieEntityList, pagination }) {
    const { page, totalPages, totalResults } = pagination
    return new MovieEntityListAggregate({
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
      }),
      pagination: PaginationValueObject.create({
        page,
        totalPages,
        totalResults
      })
    })
  }

  constructor({ movieEntityList, pagination }) {
    super()
    this._movieEntityList = movieEntityList
    this._pagination = pagination
  }

  pagination() {
    return this._pagination
  }

  movieEntityList() {
    return this._movieEntityList
  }

  toJSON() {
    return {
      movieEntityList: this.movieEntityList().map((entity) => entity.toJSON()),
      pagination: this.pagination().toJSON()
    }
  }
}
