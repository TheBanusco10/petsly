// src/components/ProtectedRoute.jsx
import { useLocation } from "wouter";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useAuth();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!loading && !session) {
      navigate("/login");
    }
  }, [loading, session, navigate]);

  if (loading || (!session && typeof window !== "undefined")) {
    return <p>Cargando...</p>;
  }

  return children;
};

export default ProtectedRoute;
