import { Mapper } from "../../domain"
import { MovieEntity } from "../Model/MovieEntity"
import { config } from "../../config"

export class FromTopRatedtoMovieListEntityMapper extends Mapper {
  static create() {
    return new FromTopRatedtoMovieListEntityMapper()
  }

  map(rawApiResponse) {
    const { results } = rawApiResponse
    const { imgBaseURL } = config

    return results?.map((movie) => {
      const {
        id,
        poster_path,
        title,
        vote_average,
        release_date,
        overview
      } = movie

      const poster = `${imgBaseURL}/${poster_path}`

      const movieEntity = MovieEntity.create({
        id,
        poster,
        title,
        rating: vote_average,
        released: release_date,
        description: overview
      })

      return movieEntity
    })
  }
}
