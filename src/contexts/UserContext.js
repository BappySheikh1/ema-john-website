import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext=createContext()

const auth=getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser]=useState('');
    const [loadding, setLoadding]=useState(true)
   
const createUser=(email,password)=>{
    setLoadding(true)
 return createUserWithEmailAndPassword(auth,email,password)
}  

const signIn=(email,password)=>{
    setLoadding(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const LogOut =()=>{
    setLoadding(true)
    return signOut(auth)
} 

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
       setUser(currentUser)
       setLoadding(false)
    })

    return ()=> unsubscribe();
},[])
    const authInfo={user,createUser,signIn,LogOut,loadding}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;