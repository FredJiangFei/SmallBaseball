import { useRef } from 'react';
import classes from './signup.module.css';

async function createUser(email: any, password: any) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

function SignUp() {
  const emailInputRef: any = useRef();
  const passwordInputRef: any = useRef();

  async function submitHandler(event: any) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    await createUser(enteredEmail, enteredPassword);
  }

  return (
    <section className={classes.auth}>
      <h1>Register</h1>
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
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default SignUp;
