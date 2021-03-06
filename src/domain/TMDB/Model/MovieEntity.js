import { Model } from "../../domain"

export class MovieEntity extends Model {
  static create({ id, poster, title, rating, released, description }) {
    return new MovieEntity({
      id,
      poster,
      title,
      rating,
      released,
      description
    })
  }

  constructor({ id, poster, title, rating, released, description }) {
    super()
    this._id = id
    this._poster = poster
    this._title = title
    this._rating = rating
    this._released = released
    this._description = description
  }

  id() {
    return this._id
  }

  poster() {
    return this._poster
  }

  title() {
    return this._title
  }

  rating() {
    return this._rating
  }

  released() {
    return this._released
  }

  description() {
    return this._description
  }

  toJSON() {
    return {
      id: this.id(),
      poster: this.poster(),
      title: this.title(),
      rating: this.rating(),
      released: this.released(),
      description: this.description()
    }
  }
}
