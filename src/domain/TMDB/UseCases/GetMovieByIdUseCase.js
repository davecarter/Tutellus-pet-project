import { UseCase } from "../../domain"
import { HttpMovieRepository } from "../Repositories/HttpMovieRepository"

export class GetMovieByIdUseCase extends UseCase {
  static create() {
    const repository = new HttpMovieRepository.create()
    return new GetMovieByIdUseCase({ repository })
  }

  constructor({ repository }) {
    super()
    this._repository = repository
  }

  async execute({ movieId }) {
    const movieEntity = await this._repository.getMovie({ movieId })
    return movieEntity.toJSON()
  }
}
