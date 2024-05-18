


import styles from "./style.module.css"

const {side, table, word, industryT, container, checkmark, industs, indu, filterApplied, second, stock, stockField, industry} = styles

const SideBar = () => {
  return (
    <>
    <div className={side}>
      <div className={table}>
        <h2>Filters</h2>

        <div className={filterApplied}>
          <div>
          <label htmlFor="">Filters Applied</label>
          <span>Clear All</span>
          </div>
          <input type="text" />
        </div>
      
        {/* second part */}
        <div className={second}>
        <div>
          <div className={stockField}>
            <label htmlFor="" className={stock}>Stock</label>
            <input type="text" placeholder="$ TICKER"/>
          </div>

          <div className={indu}>
            <div className={industry}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
              <span> Industry</span>
            </div>

            <div className={industs}>
              <ul>
                <li><img src="assets/filter-section/health.png"/> Health Care</li>
                <li><img src="assets/filter-section/Materials.png"/> Materials</li>
                <li><img src="assets/filter-section/energy.png"/> Energy</li>
                <li><img src="assets/filter-section/discretionary.png"/> Consumer Discreionary</li>
                <li><img src="assets/filter-section/staples.png"/> Consumer Staples</li>
                <li><img src="assets/filter-section/real-estate.png"/> Real Estate</li>

                
              </ul>
              <ul>
              <li><img src="assets/filter-section/it.png"/> IT</li>
              <li><img src="assets/filter-section/communication.png"/> Communication</li>
              <li><img src="assets/filter-section/industrial.png"/> Industrials</li>
              <li><img src="assets/filter-section/utilities.png"/> Utilities</li>
              <li><img src="assets/filter-section/financial.png"/> Financials</li>
                
              </ul>
            </div>

          </div>
            <br /><br /><br />
          <div >
            <div className={industryT}>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                <span> Market Cap</span>
                
                <label class={container}><span className={word}>Micro</span>
                  <input type="radio"  name="radio"/>
                  <span class={checkmark}></span>
                </label>
                <label class={container}><span className={word}>Small</span>
                  <input type="radio"  name="radio"/>
                  <span class={checkmark}></span>
                </label>
                <label class={container}><span className={word}>Large</span>
                  <input type="radio"  name="radio"/>
                  <span class={checkmark}></span>
                </label>
                </div>

                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                <span> Market Cap</span>
                
                <label class={container}><span className={word}>Micro</span>
                  <input type="radio"  name="radio"/>
                  <span class={checkmark}></span>
                </label>
                <label class={container}><span className={word}>Small</span>
                  <input type="radio"  name="radio"/>
                  <span class={checkmark}></span>
                </label>
                <label class={container}><span className={word}>Large</span>
                  <input type="radio"  name="radio"/>
                  <span class={checkmark}></span>
                </label>
                </div>

              </div>
          </div>
        </div>
      </div>
      
      <button style={{cursor:"pointer"}}>Apply</button>
      
      </div>
    </div>
    </>
  )
}

export default SideBar