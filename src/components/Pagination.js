import React from "react"
import { Link, useParams, useHistory } from "react-router-dom"

const className = "tmdbPagination"

export const Pagination = ({ page, totalPages, totalResults }) => {
  const { pageNumber } = useParams()
  const history = useHistory()

  return (
    <section className={className}>
      <ul className={`${className}-meta`}>
        <li className={`${className}-metaItem`}>Total Pages: {totalPages}</li>
        <li className={`${className}-metaItem`}>
          Total Results: {totalResults}
        </li>
      </ul>
      <ul className={`${className}-controls`}>
        <li className={`${className}-controlsItem`}>
          <button onClick={() => history.push(`${+pageNumber - 1}`)}>◄</button>
        </li>
        <li className={`${className}-controlsCurrent`}>
          current page: {pageNumber}
        </li>
        <li className={`${className}-controlsItem`}>
          <button onClick={() => history.push(`${+pageNumber + 1}`)}>►</button>
        </li>
      </ul>
    </section>
  )
}
