import { UseCase } from "../../domain"
import { HttpMovieRepository } from "../Repositories/HttpMovieRepository"
import { SearchQueryValueObject } from "../Model/SearchQueryValueObject"

export class GetMovieListBySearchQueryUseCase extends UseCase {
  static create() {
    const repository = new HttpMovieRepository.create()
    return new GetMovieListBySearchQueryUseCase({
      repository
    })
  }

  constructor({ repository }) {
    super()
    this._repository = repository
  }

  async execute({ searchQuery } = {}) {
    console.log("SEARCHQUERY USECASE", searchQuery)
    const searchQueryVO = SearchQueryValueObject.create({ searchQuery })
    const movieEntityListValueObject = await this._repository.getMovieBySearchQuery(
      { searchQuery: searchQueryVO }
    )

    // The UseCase returns a serialized Array of MovieEntities
    return movieEntityListValueObject.toJSON()
  }
}
