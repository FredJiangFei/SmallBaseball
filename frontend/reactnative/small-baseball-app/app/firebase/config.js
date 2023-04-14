import { getApp, getApps, initializeApp, setLogLevel } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyDL84Uah_raPMyVOcXpnVzoyINQPF9ex5I',
  authDomain: 'daily-record-6bf65.firebaseapp.com',
  databaseURL: 'https://daily-record-6bf65.firebaseio.com',
  projectId: 'daily-record-6bf65',
  storageBucket: 'daily-record-6bf65.appspot.com',
  messagingSenderId: '291971950305',
  appId: '1:291971950305:web:ec9b211905bab912fcf9a0',
  measurementId: 'G-BL493FX448',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
