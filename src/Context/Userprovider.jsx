import { createContext, useState , useEffect } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';




 export const AuthContex = createContext(null);

const Userprovider = ({children}) => {

    const [user , setuser] = useState(null);

    const [lodding , setlodding] =useState(true);

    // Create-user 

    const createUser =( email , password) =>{
        
        setlodding(true);

        return createUserWithEmailAndPassword( auth , email , password);
        
    }

    // Sign-In
   
     const signIn = ( email, password) =>{

        setlodding(true);

        return signInWithEmailAndPassword( auth , email, password)

     }


    //  Sign-Out

    const logOut =() => {

    setlodding(true);

     return signOut( auth)

    }


    const AuthInfo = { user , createUser , signIn , logOut, lodding  }

    
    // obJorve auth state change

    useEffect(  ()=>{

     const unsubscribe =    onAuthStateChanged( auth, (currentUser) =>{

            console.log('current user ' , currentUser)
        
        setuser(currentUser);
        setlodding(false);

        } )

        return () =>{

            unsubscribe();
        }

    }  ,[])


    return (

        <AuthContex.Provider value={AuthInfo} >

            {children}
            
        </AuthContex.Provider>
    );
};

export default Userprovider;

/**
 * 1. create contex
 * 
 * 2.set provider with value 
 * 
 * 3.
 * 
 * **/