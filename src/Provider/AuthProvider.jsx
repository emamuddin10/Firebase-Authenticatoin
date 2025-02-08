import React, { createContext } from 'react';
// import React from 'react';
const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

   const authinfo = {
    name:'nodi sagor paki'
   }

    return (
        <AuthContext.Provider value={authinfo}>
            {/* main part who will access to this context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// 1.create context with null default
//2. create provider with value