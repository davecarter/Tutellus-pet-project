import { Mapper } from "../../domain"
import { MovieEntity } from "../Model/MovieEntity"
import { config } from "../../config"

export class FromMovieByIdResponseToMovieEntityMapper extends Mapper {
  static create() {
    return new FromMovieByIdResponseToMovieEntityMapper()
  }

  map(rawApiResponse) {
    const { imgBaseURL } = config
    const {
      id,
      poster_path,
      title,
      tagline,
      vote_average,
      release_date,
      overview
    } = rawApiResponse

    const poster = `${imgBaseURL}/${poster_path}`

    const movieEntity = MovieEntity.create({
      id,
      poster,
      title,
      tagline,
      rating: vote_average,
      released: release_date,
      description: overview
    })

    return movieEntity
  }
}
