import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,signInWithPopup,GoogleAuthProvider,updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

import initializationFirebase from "../Pages/Login/Firebase/Firebase.init";


initializationFirebase();


const useFirebase = () => {

   const [user, setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const [authError,setAuthError] = useState('')
   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();


   const registerUser = (email, password,name,history) => {
      setIsLoading(true);

      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           setAuthError('');
           const newUser = {email,displayName: name}
           setUser(newUser);
           updateProfile(auth.currentUser, {
            displayName: name, 
          }).then(() => { 
           
          }).catch((error) => {
            
          });
          

           //send name to firebase after creation
           history.replace('/');
            // ...
         })
         .catch((error) => {
            setAuthError(error.message);
            // ..
         })
         .finally(()=>setIsLoading(false));
  
      }
      

      //user Login 

      const loginUser = (email, password,location,history) => {
         setIsLoading(true);
         signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               const destination = location?.state?.from || '/';
               history.replace(destination);
               setAuthError('');
               // ...
            })
            .catch((error) => {
               setAuthError(error.message);
            })
            .finally(()=>setIsLoading(false));
      }

      //google sign In

 
      const signInWithGoogle = (location,history) =>{
         setIsLoading(true);
         signInWithPopup(auth, googleProvider)
  .then((result) => {
   
    
    const user = result.user;
    setAuthError('');
    // ...
  }).catch((error) => {
   setAuthError(error.message);
    // ...
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
            setIsLoading(false);
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
         signInWithGoogle,
         isLoading,
         loginUser,
         logOut,

      }
   }
       export default useFirebase;
