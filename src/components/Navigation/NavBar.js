import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className="logo">Facebook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBarBox"></div>
            <SearchIcon className='searchIcon'/>
        </div>
        <div className="navBarRight"></div>
    </div>


  )
}
