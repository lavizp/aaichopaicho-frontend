import React, { useContext, useState, useEffect } from "react";
// import * as api from '../api/index'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  updateProfile,
} from "firebase/auth";
import { SignupUserDate } from "./types";
import { database, firebaseApp } from "./config";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext<any | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    let userValue: any = localStorage.getItem("user");
    if (userValue) {
      setCurrentUser(userValue);
      return;
    }
    setCurrentUser(null);
  }, []);

  async function signUp(userData: SignupUserDate) {
    const { email, password, name } = userData;
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      if (!auth.currentUser) return;
      setDoc(doc(database, "users", auth.currentUser.uid), {
        email,
        name,
      });
    });
    if (currentUser) {
      setDoc(doc(database, "users", currentUser), {
        name,
        email,
        total: 0,
        spendings: [],
        savings: [],
        goals: [],
      });
    }
  }

  async function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signOut() {
    return fbSignOut(auth);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.uid);
        window.localStorage.setItem("user", JSON.stringify(user.uid));
      } else {
        setCurrentUser(null);
      }
    });
  }, []);
  const value: any = {
    currentUser,
    login,
    signUp,
    signOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
