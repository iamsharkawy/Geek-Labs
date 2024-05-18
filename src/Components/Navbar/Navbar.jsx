
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faGraduationCap } from "@fortawesome/free-solid-svg-icons"


import styles from "./style.module.css"

const { logo, list, avatar, NavItem, item, notActive } = styles

const Navbar = () => {
  return (
    <>
    <nav>
      <div>
      <div className={logo}>
        <img src="assets/logo.png" alt="Logo" />
      </div>
      <div className={list}>
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faBell} className={NavItem} style={{color: "#53ACFF",}} /><span style={{color: "#53ACFF",}}>Alerts</span></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faGraduationCap} className={NavItem} style={{color: "#ffffff",}} /><span className={item}>Training</span></a></li>
          <li><a href="#" ><img src="assets/automation.svg" alt="automation" /><span className={notActive}>Automation</span></a></li>
          <li><a href="#" ><img src="assets/portfolio.svg" alt="portfolio" /><span className={notActive}>Portfolio</span></a></li>
          <li><a href="#"  ><img src="assets/trading.svg" alt="trading" /><span className={notActive}>Trading</span></a></li>
        </ul>
      </div>
      </div>
      <div className={avatar}>
        <img src="assets/avatar.png" alt="avatar" />
      </div>

    </nav>
    </>
  )
}

export default Navbar