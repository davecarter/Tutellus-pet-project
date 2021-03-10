const interOP = (fn, name) => () => fn().then((mod) => mod[name])
const UseCases = {
  GetMovieByIdUseCase: interOP(
    () => import("./TMDB/UseCases/GetMovieByIdUseCase.js"),
    "GetMovieByIdUseCase"
  ),
  GetMovieListByTypeUseCase: interOP(
    () => import("./TMDB/UseCases/GetMovieListByTypeUseCase.js"),
    "GetMovieListByTypeUseCase"
  ),
  GetMovieListBySearchQueryUseCase: interOP(
    () => import("./TMDB/UseCases/GetMovieListBySearchQueryUseCase.js"),
    "GetMovieListBySearchQueryUseCase"
  )
}

export class Domain {
  static create() {
    return new Domain()
  }

  get GetMovieByIdUseCase() {
    return this._getter("GetMovieByIdUseCase")
  }

  get GetMovieListByTypeUseCase() {
    return this._getter("GetMovieListByTypeUseCase")
  }

  get GetMovieListBySearchQueryUseCase() {
    return this._getter("GetMovieListBySearchQueryUseCase")
  }

  _getter(name) {
    return {
      async execute() {
        const klass = await UseCases[name]()
        const response = klass.create().execute(...arguments)
        return response
      }
    }
  }
}
