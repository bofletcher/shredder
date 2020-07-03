import React from 'react';
import styles from './Login.module.css';
import logo from './shredderLogo.svg'
import { signInWithGoogle } from '../../firebase'

function Login(props) {

    return (
      <div className={styles.Login}>
        <div className={styles.LoginForm}>
           <img className={styles.Logo}src={logo} alt="Shredder Logo"></img>
           <h1>Shredder</h1>
           <p>Design, Schedule and Track your Weight Training</p>
           <input type="text" placeholder="Username"/>
           <input type="password" placeholder="Password"/>
           <button onClick={props.click} className={styles.LoginBtn}>Login</button>
           <button  onClick={signInWithGoogle} className={styles.LoginBtn}>Login with Google</button>
           <button className={styles.LoginBtn}>Sign Up</button>
        </div>
      </div>
    )

}


export default Login;