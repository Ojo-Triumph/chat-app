import React, { useRef } from 'react';
import firebase from '../Firebase/firebase';
import useFetch from '../../hooks/usefetch';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { CgGoogle } from 'react-icons/cg';
import { FaFacebook } from 'react-icons/fa';

import classes from './loginForm.module.css';

const SignInWithGoogle = () => {    
    const email = null;
    const password = null;
    useFetch(GoogleAuthProvider, {email, password});
}

const SignInWithFacebook = () => {
    const email = null;
    const password = null;
    useFetch(FacebookAuthProvider, {email, password});
}

const LoginForm = () => {
    const emailRef = useRef();
    const passwordRef = useRef();    

    const onLoginHandler = () => {
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useFetch( null,{ email, password } );

    }

    return (
      <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
        <h3>Log in</h3>
        <div className={classes.input}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="email"
            id="email"
            className="email"
            ref={emailRef}
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Username"
            id="password"
            className="password"
            ref={passwordRef}
          />
        </div>
        <div className={classes.button}>
          <button type="submit" onClick={onLoginHandler}>
            Log in
          </button>
        </div>
        <div className={classes.button}>
          <button
            type="button"
            onClick={SignInWithGoogle}
            className={classes.button_google}
          >
            Log in with Google <CgGoogle />
          </button>
          <button
            type="button"
            onClick={SignInWithFacebook}
            className={classes.button_facebook}
          >
            Log in with Facebook <FaFacebook />
          </button>
        </div>
      </form>
    );
}

export default LoginForm;