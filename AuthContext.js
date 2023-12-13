import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './FirebaseConfig'; // Adjust the path accordingly

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        // Assuming you have a 'users' collection in Firestore
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        setUserData(userDoc.data());
      }
    };

    fetchUserData();
  }, [user]);

  const signIn = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error.message);
    }
  };

  const signUp = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, userData, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
