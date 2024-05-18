import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"


import styles from "./style.module.css"

const { section, ring } = styles

const SearchBar = ({setSearchText}) => {
  return (
    <section >
      <div className={section}>
        <label htmlFor="alert"><span>|</span> ALERTS</label>
        <input id="alert" onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search By.."></input>
        <FontAwesomeIcon icon={faBell} className={ring} style={{color: "#53ACFF",}} />
      </div>
    </section>
  
  )
}

export default SearchBar