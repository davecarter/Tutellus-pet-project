import { Repository } from "../../domain"
import { AxiosFetcher } from "../Fetchers/AxiosFetcher"
import { FromMovieByIdResponseToMovieEntityMapper } from "../Mappers/FromMovieByIdResponseToMovieEntityMapper"
import { FromListTypeResponseToMovieEntityListMapper } from "../Mappers/FromListTypeResponseToMovieEntityListMapper"
import { config } from "../../config"
export class HttpMovieRepository extends Repository {
  static create() {
    const fetcher = AxiosFetcher.create()
    return new HttpMovieRepository({ fetcher })
  }

  constructor({ fetcher }) {
    super()
    this._fetcher = fetcher
  }

  async getMovie({ movieId }) {
    const { baseURL, apiKey } = config
    const url = `${baseURL}movie/${movieId}?api_key=${apiKey}`

    const response = await this._fetcher
      .get(url)
      .then((response) => response.data)

    const movieEntityMapper = FromMovieByIdResponseToMovieEntityMapper.create()
    return movieEntityMapper.map(response)
  }

  async getMovieBySearchQuery({ searchQuery }) {
    const { baseURL, apiKey, language } = config
    const searchQueryValue = searchQuery.value()
    const url = `${baseURL}search/movie?api_key=${apiKey}&language=${language.USA}&query=${searchQueryValue}`
    const response = await this._fetcher
      .get(url)
      .then((response) => response.data)

    const movieEntityListMapper = FromListTypeResponseToMovieEntityListMapper.create()

    return movieEntityListMapper.map(response)
  }

  async getMovieListByType({ pageNumber, type }) {
    const { baseURL, apiKey, language } = config
    const pageNumberValue = pageNumber.value()
    const typeValue = type.value()
    const url = `${baseURL}movie/${typeValue}?api_key=${apiKey}&language=${language.USA}&page=${pageNumberValue}`
    const response = await this._fetcher
      .get(url)
      .then((response) => response.data)

    const movieEntityListMapper = FromListTypeResponseToMovieEntityListMapper.create()

    return movieEntityListMapper.map(response)
  }
}
