import { UseCase } from "../../domain"
import { HttpMovieRepository } from "../Repositories/HttpMovieRepository"
import { TypeOfMovieListValueObject } from "../Model/TypeOfMovieListValueObject"
import { PageNumberValueObject } from "../Model/PageNumberValueObject"

export class GetMovieListByTypeUseCase extends UseCase {
  static create() {
    const repository = HttpMovieRepository.create()
    return new GetMovieListByTypeUseCase({
      repository
    })
  }

  constructor({ repository }) {
    super()
    this._repository = repository
  }

  async execute({ pageNumber, type }) {
    const pageNumberVO = new PageNumberValueObject.create({ pageNumber })
    const typeVO = new TypeOfMovieListValueObject.create({
      type
    })
    const movieEntityListAggregate = await this._repository.getMovieListByType({
      pageNumber: pageNumberVO,
      type: typeVO
    })

    // The UseCase returns a serialized Aggreagate containing an Array
    // of MovieEntities and a PaginationValueObject

    return movieEntityListAggregate.toJSON()
  }
}
