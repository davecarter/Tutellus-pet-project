import chai, { expect } from "chai"
import chaiAsPromised from "chai-as-promised"
import sinon from "sinon"
import { AxiosFetcher } from "../domain/TMDB/Fetchers/AxiosFetcher"

import { Domain } from "../domain"
import { InvalidMovieId } from "../domain/TMDB/Errors/InvalidMovieId"
import getMovieByIdUseCaseResponse from "./fixtures/getMovieByIdUseCaseResponse.json"

// Allows try/catching async errors rejected from promises
chai.use(chaiAsPromised)

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

  it("gets a movie by provided ID", async function () {
    const movieId = "120"
    const resolved = new Promise((r) =>
      r({ DATA: getMovieByIdUseCaseResponse })
    )
    stubedGet.returns(resolved)
    const data = await domain.GetMovieByIdUseCase.execute({ movieId })

    expect(data).to.deep.equal(getMovieByIdUseCaseResponse)
  })

  it("throws an InvalidMovieId Error if provided MovieId has the wrong type", async function () {
    const movieId = 120
    await expect(
      domain.GetMovieByIdUseCase.execute({ movieId })
    ).to.be.rejectedWith(InvalidMovieId)
  })
})
