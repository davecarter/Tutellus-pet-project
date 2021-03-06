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
    return this._repository.getMovie({ movieId })
  }
}
