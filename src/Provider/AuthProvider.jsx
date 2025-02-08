
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const name='sagore lobon ase'
    const authinfo = {
        name,
        createUser,
        signInUser
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