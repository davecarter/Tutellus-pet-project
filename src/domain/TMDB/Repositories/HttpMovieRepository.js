import { Repository } from "../../domain"
import { FromTopRatedtoMovieListEntityMapper } from "../Mappers/FromTopRatedtoMovieListEntityMapper"
import { config } from "../../config"

export class HttpMovieRepository extends Repository {
  static create() {
    return new HttpMovieRepository()
  }

  async getMovie({ movieId }) {
    const { baseURL, apiKey } = config
    return window
      .fetch(`${baseURL}movie/${movieId}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => data)
  }

  async getMovieListByType({ pageNumber, typeVO }) {
    const { baseURL, apiKey, language } = config
    const typeValue = typeVO.value()
    const url = `${baseURL}movie/${typeValue}?api_key=${apiKey}&language=${language.USA}&page=${pageNumber}`
    try {
      const response = await window
        .fetch(url)
        .then((response) => response.json())
        .then((data) => data)

      const movieEntitiesListMapper = FromTopRatedtoMovieListEntityMapper.create()
      const movieEntitiesList = movieEntitiesListMapper.map(response)
      console.log("RESPONSE", movieEntitiesList)
      return movieEntitiesList.map((movie) => movie.toJSON())
    } catch {
      throw new Error("Movie list unavailable")
    }
  }
}
