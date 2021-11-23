import React from 'react';

const AuthContext = React.createContext()

const AuthProvider = (props) => {
    const [isAuthenticated, setAuthenticated] = React.useState(false)
    const [userData, setUserData] = React.useState({
        userId: '',
        firstname: '',
        lastname: '',
        pets: [],
        username: '',
        email: ''
    })

    const signedIn = (user) =>{
        setAuthenticated(true)
        setUserData(user)
    }

    const signedOut = ()=>{
        setAuthenticated(false)
        localStorage.setItem('jwt', '')
        setUserData({})
    }

    return(
        <AuthContext.Provider value={{ isAuthenticated, userData, signedIn, signedOut }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };