import NavBar from "./Components/Navbar/Navbar.jsx"
import MainSection from "./Components/Main-Section/MainSection/MainSection.jsx"
import SideBar from "./Components/sideBar/SideBar.jsx"

import './App.css';

function App() {
  return (
    <div className='container'>
      <NavBar className="Navbar"/>
      <MainSection className="Main-Section"/>
      <SideBar className="Filter-Section"/>



    </div>
  );
}

export default App;
