import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
export const AuthContext = createContext(null);
const Authprovaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  const googleProvaider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvaider);
  };

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailPass = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };
  // observer here
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoader(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    googleLogin,
    loader,
    createUser,
    loginWithEmailPass,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovaider;
