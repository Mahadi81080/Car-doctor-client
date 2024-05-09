import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
// Social Auth Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // creatUser
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // SingIn User
  const singIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // LogOut user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log("current user", currentUser);
      if (currentUser) {
        axios
          .post("https://car-doctor-server-gray-mu.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("Token response", res.data);
          });
      }
      else{
        axios.post("https://car-doctor-server-gray-mu.vercel.app/logout",loggedUser,{withCredentials:true})
        .then(res=>{
            console.log(res.data);
        })
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // FaceBook Login
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const authInfo = {
    user,
    loading,
    creatUser,
    singIn,
    googleLogin,
    facebookLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
