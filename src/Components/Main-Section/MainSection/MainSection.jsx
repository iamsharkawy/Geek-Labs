import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import StockItem from "../StockItem/StockItem"
import styles from "./style.module.css"

const { main } = styles

const MainSection = () => {
  const  [searchText , setSearchText] = useState("");
  return (
    <>
    <div className={main}>
      <SearchBar setSearchText={setSearchText} />
      <StockItem searchText={searchText}/>
    </div>
    </>
  )
}

export default MainSection