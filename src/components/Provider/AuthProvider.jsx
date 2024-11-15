import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider()

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth,googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current User', currentUser);
            setUser(currentUser);
            setLoading(false);
            
        })
        return () => {
            unSubscribe();
        }

    },[])

    // onAuthStateChanged(auth, currentUser => {
    //     if(currentUser){
    //         console.log('currently logged user', currentUser);
    //         setUser(currentUser);
            
    //     }
    //     else {
    //         console.log('No user logged in');
    //         setUser(null);
            
    //     }
    // })




    const authInfo = {
        user,
        setLoading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;