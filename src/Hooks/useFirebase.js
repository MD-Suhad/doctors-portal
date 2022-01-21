import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

import initializationFirebase from "../Pages/Login/Firebase/Firebase.init";


initializationFirebase();


const useFirebase = () => {

   const [user, setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const [authError,setAuthError] = useState('')
   const auth = getAuth();


   const registerUser = (email, password) => {
      setIsLoading(true);

      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            isLoading('')
           authError('')
            // ...
         })
         .catch((error) => {
            setAuthError(error.message);
            // ..
         })
         .finally(()=>setIsLoading(false));
  
      }
      

      //user Login 

      const loginUser = (email, password) => {
         setIsLoading(true);
         signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               // Signed in 
               isLoading('')
              setAuthError('');
               // ...
            })
            .catch((error) => {
               setAuthError(error.message);
            })
            .finally(()=>setIsLoading(false));
      }


      // observe user state

      useEffect(() => {
         

         const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
               setUser(user)
            }
            else {
               setUser({})
            }
            setIsLoading(true);
         })
         return () => unsubscribe;

      }, [])
      const logOut = () => {
         setIsLoading(true);
         signOut(auth)
            .then(() => {
               //signOut successfully
            })
            .catch(() => {
               // an error happened
            })
            .finally(()=>setIsLoading(false));
      }




      return {
         user,
         authError,
         registerUser,
         isLoading,
         loginUser,
         logOut,

      }
   }
       export default useFirebase;
