import React, {useState, useEffect} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import './index.css'

const Topbar = ({searchCallback}) => {
  const [keyword, setKeyword] = useState('')
  const [checked, setChecked] = useState(false)

  const toggleCheckbox = () => {
    callSearch()
    setChecked(!checked)
  }

  const updateKeyword = (e) => {
    setKeyword(e.target.value)
  }

  const callSearch = () => {
    searchCallback(keyword, !checked)
  }

  return (
    <div className="app__topbar">
      <div className="app__searchContainer">
        <input type="text" placeholder="Search for a restaurant or cuisine" onChange={updateKeyword} onKeyUp={callSearch}/>
        <div className="app__searchContainer__iconContainer">
          <SearchIcon />
        </div>
      </div>
      <div>
        Sort by rating
        <Checkbox
          checked={checked}
          onChange={toggleCheckbox}
          name="ratingSort"
          color="primary"
        />
      </div>
    </div>
  )
}

export default Topbar;