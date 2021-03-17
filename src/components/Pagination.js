import React, {useState} from "react"
import { useParams, useHistory } from "react-router-dom"

const className = "tmdbPagination"

export const Pagination = ({ totalPages, totalResults }) => {
  const [isDisabled, setIsDisabled] = useState(true)
  const { pageNumber } = useParams()
  const history = useHistory()

  const handleIncrease = () => {
    setIsDisabled(false)
    history.push(`${+pageNumber + 1}`)
  }

  const handleDecrease = () => {
    pageNumber >= 2 ? history.push(`${+pageNumber - 1}`) : setIsDisabled(true)
  }

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
          <button disabled={isDisabled} onClick={handleDecrease}>◄</button>
        </li>
        <li className={`${className}-controlsCurrent`}>
          current page: {pageNumber}
        </li>
        <li className={`${className}-controlsItem`}>
          <button onClick={handleIncrease}>►</button>
        </li>
      </ul>
    </section>
  )
}
