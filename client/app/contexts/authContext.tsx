import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthContext = {
  isAuthed: boolean;
  signIn: (token: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthed, setIsAuthed] = useState<boolean>(false);

  useEffect(() => {
    setIsAuthed(!!Cookies.get("user"));
  }, []);

  const signIn = (token: string) => {
    Cookies.set("user", token, { expires: 7 });
    setIsAuthed(true);
  };

  const signOut = () => {
    Cookies.remove("user");
    setIsAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthed, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
