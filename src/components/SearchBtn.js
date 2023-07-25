import React from 'react'
import "./search.css"
function SearchBtn({searchHandel}) {
  return (
    <button className="search-btn" onClick={searchHandel}>
        Search
      </button>
  )
}

export default SearchBtn