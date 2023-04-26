import { useRef } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import classes from './auth-form.module.css';

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const router = useRouter();
  const { data: session, status, update } = useSession();

  function switchAuthModeHandler() {
    router.push('/signup');
  }

  async function submitHandler(event) {
    event.preventDefault();
    signIn();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
  }

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            Create new account
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
