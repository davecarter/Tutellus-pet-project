import { UseCase } from "../../domain"
import { HttpMovieRepository } from "../Repositories/HttpMovieRepository"
import { MovieIdValueObject } from "../Model/MovieIdValueObject"

export class GetMovieByIdUseCase extends UseCase {
  static create() {
    const repository = HttpMovieRepository.create()
    return new GetMovieByIdUseCase({ repository })
  }

  constructor({ repository }) {
    super()
    this._repository = repository
  }

  async execute({ movieId }) {
    const movieIdValueObject = MovieIdValueObject.create({ movieId })
    const movieEntity = await this._repository.getMovie({
      movieId: movieIdValueObject
    })
    return movieEntity.toJSON()
  }
}
