import React, { Component } from 'react';

import styles from './SignUp.module.css'


class SignUp extends Component {
  state ={

  }

  render() {
    return (
      <div className={styles.Login}>
        <div className={styles.LoginForm}>
           <h1>Sign Up</h1>
           <input type="text" placeholder="Email"/>
           <input type="password" placeholder="Password"/>
           <input type="password" placeholder="Re-Type Password"/>
           <button className={styles.LoginBtn}>Sign Up</button>
        </div>
      </div>
    )
  }
}

export default SignUp;