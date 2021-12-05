import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../../firebase/firebase.init";
import { useHistory } from "react-router";

const useFirebase = () => {
  initializeAuthentication();
  const [user, setUser] = useState({});
  const history = useHistory();

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    logOut,
    signInUsingGoogle,
  };
};

export default useFirebase;
