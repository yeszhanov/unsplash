import React, { useState } from "react"
const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState(null)
  const handleSearch = () => {
    onSearch(value)
  }
  return (
    <div className="search-bar_wrapper">
      <input
        className="search-bar"
        placeholder="Search ..."
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={() => handleSearch()}> Искать </button>
    </div>
  )
}
export default SearchBar
