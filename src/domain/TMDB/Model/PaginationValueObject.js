import { Model } from "../../domain"

export class PaginationValueObject extends Model {
  static create({ page, totalPages, totalResults }) {
    return new PaginationValueObject({ page, totalPages, totalResults })
  }

  constructor({ page, totalPages, totalResults }) {
    super()
    this._page = page
    this._totalPages = totalPages
    this._totalResults = totalResults
  }

  page() {
    return this._page
  }

  totalPages() {
    return this._totalPages
  }

  totalResults() {
    return this._totalResults
  }

  toJSON() {
    return {
      page: this.page(),
      totalPages: this.totalPages(),
      totalResults: this.totalResults()
    }
  }
}
