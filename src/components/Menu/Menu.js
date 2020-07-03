import React from 'react';
import styles from './Menu.module.css'
import logo from './shredderLogo.svg'
import {Link} from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const Menu = props => (
    <header className={styles.toolbar}>
      <nav className={styles.toolbar__navigation}> 
        <div className={styles.toolbar__toggle_button}>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className={styles.toolbar__logo}><a href="/">SHREDDER</a></div>
        <div><img className={styles.logo} src={logo} alt="Shredder Logo"/></div>
     <div className={styles.spacer}></div>
     <div className={styles.toolbar_navigation_items}>
       <ul>
         <Link to="/">
         <li>Profile</li>
         </Link>
         <Link to="/Lifts">
         <li>Lifts</li>
         </Link>
         <Link to="/Builder">
         <li>Builder</li>
         </Link>
         <Link to="/Shred">
         <li>Shred</li>
         </Link>
       </ul>
     </div>
   </nav>
  </header>
  )

export default Menu;