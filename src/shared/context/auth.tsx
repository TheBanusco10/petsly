// src/contexts/AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import { supabase } from "../../supabase/client";
import type { Session } from "@supabase/supabase-js";

interface AuthContextType {
  session: Session | null;
  loading: boolean;
  logOut: () => void;
}

const initialValues: AuthContextType = {
  session: null,
  loading: true,
  logOut: () => { }
}

export const AuthContext = createContext(initialValues);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
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
    <AuthContext.Provider value={{ session, loading, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
