import React from "react";
import "./SideDrawer.css"
import {Link} from "react-router-dom"

const SideDrawer = props => {
  let drawerClasses = 'sideDrawer';
  if (props.show) {
    drawerClasses = 'sideDrawer open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <Link to="/">
        <li onClick={props.click}>Profile</li>
        </Link>
        <Link to="/Lifts">
        <li onClick={props.click}>Lifts</li>
        </Link>
        <Link to="/Builder">
        <li onClick={props.click}>Builder</li>
        </Link>
        <Link to="/Shred">
        <li onClick={props.click}>Shred</li>
        </Link>
      </ul>
    </nav>
  )
}

export default SideDrawer;