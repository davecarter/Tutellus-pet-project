import { Model } from "../../domain"
import { InvalidSearchQuery } from "../Errors/InvalidSearchQuery"

export class SearchQueryValueObject extends Model {
  static create({ searchQuery }) {
    SearchQueryValueObject.validate({ searchQuery })
    return new SearchQueryValueObject({ searchQuery })
  }

  static validate({ searchQuery }) {
    if (typeof searchQuery !== "string")
      throw InvalidSearchQuery.create(
        `[SearchQueryValueObject.validate] searchQuery(${searchQuery}) type is invalid`
      )
  }

  constructor({ searchQuery }) {
    super()
    this._searchQuery = searchQuery
  }

  value() {
    return this._searchQuery
  }

  toJSON() {
    return {
      searchQuery: this.value()
    }
  }
}
