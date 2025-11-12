import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const GoogleProvider= new GoogleAuthProvider
    const [loading, setloading]=useState(true)

    const createUser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email,password)

    }

    const signInUserWithEmail=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInUserWithGoogle=()=>{
        setloading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    const SignOut=()=>{
        return signOut(auth)
    }

    const authInfo={
          user,
          loading,
          createUser,
          signInUserWithEmail,
          signInUserWithGoogle,
          SignOut,
          setUser
    }
      useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setloading(false);
    })

    return ()=>{
        unsubscribe();
    }
  },[])
    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;