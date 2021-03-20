import chai, { expect } from "chai"
import sinon from "sinon"
import { AxiosFetcher } from "../domain/TMDB/Fetchers/AxiosFetcher"

import { Domain } from "../domain"
import getMovieByIdUseCaseResponse from "./fixtures/getMovieByIdUseCaseResponse.json"

let domain
let fetcher
let stubedGet

describe("GetMovieByIdUseCase#execute", function () {
  beforeEach(function () {
    domain = Domain.create()
    fetcher = AxiosFetcher.create()
    stubedGet = sinon.stub(fetcher, "get")
  })

  afterEach(function () {
    domain = undefined
    fetcher = undefined
    stubedGet.restore()
  })

  const movieId = "120"

  it("gets a movie by provided ID", async function () {
    const resolved = new Promise((r) =>
      r({ DATA: getMovieByIdUseCaseResponse })
    )
    stubedGet.returns(resolved)
    const data = await domain.GetMovieByIdUseCase.execute({ movieId })

    expect(data).to.deep.equal(getMovieByIdUseCaseResponse)
  })
})
