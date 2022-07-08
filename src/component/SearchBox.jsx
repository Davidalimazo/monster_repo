import React from 'react'
import './searchbox.css'

export default function SearchBox({searchInput, filterResult}) {
  
  return (
    <div className='search_box'>
      <input type="search" id="search_input" value={searchInput} onChange={(e)=>filterResult(e.target.value)} placeholder='Search For Your Favourite Monster By Name'/>
    </div>
  )
}
