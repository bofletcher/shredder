import React from "react";
import styles from './Lift.module.css'
import { firestore } from "../../../firebase";

const Lift = ({id, LiftName, LiftInstructions, LiftImage}) => {
  const postRef = firestore.doc(`lifts/${id}`);
  const clicker = () => {
    console.log(id)
  }

  return (
    <div className={styles.lift}>
      <h1 className={styles.liftTitle}>{LiftName}</h1>
      <img className={styles.liftImage} src={LiftImage} alt={LiftName} />
      <p>{LiftInstructions}</p>
      <button className={styles.addButton} onClick={clicker}>ADD TO BUILDER</button>
    </div>
  )
}

export default Lift;