import InitializeFirebase from "../pages/Firebase/Firebase.init";
import { getAuth, signInWithPopup,GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

InitializeFirebase();
const googleProvider = new GoogleAuthProvider();
const auth=getAuth();

const useFirebase = () => {
    const [user,setUser]=useState({})
    const [err,setErr]=useState('')
    const [loading, setLoading]=useState(true);

    // sign in with google
    const signInWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)       
    }

    // set obzerbar for user
    useEffect(()=>{
      setLoading(true)
      const unSubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
         
        }
        setLoading(false)
      });
      return ()=> unSubscribe;
    },[])

    // logout 
    const logout =()=>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setErr(err.message)
          });
    }

    return {
        user,
        setUser,
        signInWithGoogle,
        err,
        setErr,
        logout,
        loading,
        setLoading
    }
};

export default useFirebase;