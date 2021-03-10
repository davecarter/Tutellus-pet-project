import { Repository } from "../../domain"
import { FromMovieByIdResponseToMovieEntityMapper } from "../Mappers/FromMovieByIdResponseToMovieEntityMapper"
import { FromListTypeResponseToMovieEntityListMapper } from "../Mappers/FromListTypeResponseToMovieEntityListMapper"
import { config } from "../../config"
export class HttpMovieRepository extends Repository {
  static create() {
    return new HttpMovieRepository()
  }

  async getMovie({ movieId }) {
    const { baseURL, apiKey } = config
    const url = `${baseURL}movie/${movieId}?api_key=${apiKey}`

    const response = await window
      .fetch(url)
      .then((response) => response.json())
      .then((data) => data)

    const movieEntityMapper = FromMovieByIdResponseToMovieEntityMapper.create()
    return movieEntityMapper.map(response)
  }

  async getMovieListByType({ pageNumber, type }) {
    const { baseURL, apiKey, language } = config
    const pageNumberValue = pageNumber.value()
    const typeValue = type.value()
    const url = `${baseURL}movie/${typeValue}?api_key=${apiKey}&language=${language.USA}&page=${pageNumberValue}`
    const response = await window
      .fetch(url)
      .then((response) => response.json())
      .then((data) => data)

    const movieEntityListMapper = FromListTypeResponseToMovieEntityListMapper.create()

    return movieEntityListMapper.map(response)
  }
}
