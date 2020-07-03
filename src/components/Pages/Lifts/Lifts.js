import React from "react";
import styles from "./Lifts.module.css"
import Lift from "./Lift";

const Lifts = ( {lifts} ) => {
  

  
  return(
    <div className={styles.liftsMain}>
      {/*<h1>Encyclopedia of Lifts</h1>*/}
      {lifts.map(lift => <Lift {...lift} key={lift.id} />)}
    </div>
  )
  
}

export default Lifts;