import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext("");

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [users, setUsers] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);

      const starCountRef = ref(getDatabase(), "users/" + currentUser?.uid);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setUsers(data);
      });
    });
    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  const logout = () => {
    signOut(auth);
    navigate("/");
  };

  const value = {
    currentUser,
    logout,
    users,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
