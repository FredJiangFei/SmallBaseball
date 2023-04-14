import { auth } from '@sb/firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function register(user) {
  console.log(user);
  return createUserWithEmailAndPassword(auth, user.email, user.password);
}

function login(user) {
  return signInWithEmailAndPassword(auth, user.email, user.password);
}

export default {
  register,
  login,
};
