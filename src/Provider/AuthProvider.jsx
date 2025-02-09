
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null)
const googleProvider= new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]=useState(true)
    // user created
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user login
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
     
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('current user',currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    // onAuthStateChanged(auth, (currentUser)=>{
    //     if(currentUser){
    //         console.log('cuurent user logged in',currentUser)
    //         setUser(currentUser)
    //     }
    //     else{
    //         console.log('No user logged in')
    //         setUser(null)
    //     }
    // })
    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    
    const name='sagore lobon ase'
    const authinfo = {
        name,
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }
    
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// 1.create context with null default value
//2. create provider with value
//3. use the auth provider component in the main.jsx
//4. access the children inside the authprovider in the main.jsx