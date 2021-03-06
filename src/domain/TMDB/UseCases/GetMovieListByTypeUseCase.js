import { UseCase } from "../../domain"
import { HttpMovieRepository } from "../Repositories/HttpMovieRepository"
import { TypeOfMovieListValueObject } from "../Model/TypeOfMovieListValueObject"

export class GetMovieListByTypeUseCase extends UseCase {
  static create() {
    const repository = new HttpMovieRepository.create()
    return new GetMovieListByTypeUseCase({
      repository
    })
  }

  constructor({ repository }) {
    super()
    this._repository = repository
  }

  async execute({ pageNumber, type }) {
    const typeVO = new TypeOfMovieListValueObject.create({
      type
    })
    const movieEntitiesList = this._repository.getMovieListByType({
      pageNumber,
      typeVO
    })
    return movieEntitiesList
  }
}
