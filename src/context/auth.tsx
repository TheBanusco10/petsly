// src/contexts/AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import type { Session } from "@supabase/supabase-js";

interface AuthContextType {
    session: Session | null;
    logOut: () => void;
}

const initialValues: AuthContextType = {
    session: null,
    logOut: () => { }
}

export const AuthContext = createContext(initialValues);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const logOut = () => {
    supabase.auth.signOut().then(() => {
      setSession(null);
    });
  }

  return (
    <AuthContext.Provider value={{ session, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
