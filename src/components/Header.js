import React from "react";
import Link from "./Link";

function Header({ logo }) {
  return (
  <div>
    <img src={logo} alt="" width="90px" height="90px"/>
    <Link url="http://reactjs.org" title="Apprendre React" />
    <h1>Mon portfolio</h1>
  </div>
  )
}

export default Header;
