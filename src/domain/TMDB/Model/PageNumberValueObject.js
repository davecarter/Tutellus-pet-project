import { Model } from "../../domain"
import { InvalidPageNumber } from "../Errors/InvalidPageNumber"

export class PageNumberValueObject extends Model {
  static create({ pageNumber }) {
    PageNumberValueObject.validate({ pageNumber })
    return new PageNumberValueObject({ pageNumber })
  }

  static validate({ pageNumber }) {
    if (typeof pageNumber !== "number")
      throw InvalidPageNumber.create(
        `[PageNumberValueObject.validate] pageNumber(${pageNumber}) type is invalid`
      )

    if (!pageNumber || pageNumber <= 0)
      throw InvalidPageNumber.create(
        `[PageNumberValueObject.validate] pageNumber(${pageNumber}) must be bigger than 0`
      )
  }

  constructor({ pageNumber }) {
    super()
    this._pageNumber = pageNumber
  }

  value() {
    return this._pageNumber
  }

  toJSON() {
    return {
      pageNumber: this.value()
    }
  }
}
