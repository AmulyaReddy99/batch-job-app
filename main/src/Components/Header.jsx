import { Link } from "react-router-dom"

export default () => {
    return <nav className="navbar" style={{backgroundColor: "#001aff"}}>
    <a className="navbar-brand" href="#" style={{paddingLeft: '30px', color: "white"}}>
      State Street
      {/* <img src={Logo} height={40} style={{paddingLeft: '20px'}}/> */}
    </a>
  </nav>
}