import { Repository } from "../../domain"
import { FromTopRatedtoMovieEntityListMapper } from "../Mappers/FromTopRatedtoMovieEntityListMapper"
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
    const response = await window
      .fetch(url)
      .then((response) => response.json())
      .then((data) => data)

    const movieEntityListMapper = FromTopRatedtoMovieEntityListMapper.create()

    return movieEntityListMapper.map(response)
  }
}
