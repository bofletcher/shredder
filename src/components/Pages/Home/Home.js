import React from "react";
import styles from './Home.module.css';



const Home = ({ displayName, photoURL, email,  children }) =>{

  return (
    <section className={styles.homeMain}>
      <div>
        <h1 className={styles.header}>PROFILE</h1>
        {photoURL && <img className={styles.profileImage} src={photoURL} alt={displayName}/>}
          <h2 className={styles.displayName}>{displayName}</h2>
          <p>{email}</p>
          <div>{children}</div>
          <div>Personal Bests: </div>
      </div>
    </section>
  )
};

Home.defaultProps = {
  displayName: 'Bill Murray',
  email: 'billmurray@mailinator.com',
  photoURL: 'https://www.fillmurray.com/300/300',

};




export default Home;