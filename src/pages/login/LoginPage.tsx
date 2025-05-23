import { useEffect, useState } from "react"
import { LoginForm } from "../../components/Auth/LoginForm"
import { RegisterForm } from "../../components/Auth/RegisterForm"
import { GothamContainer } from "../../components/Gotham/Container"
import { useAuth } from "../../hooks/useAuth"
import { useLocation } from "wouter"

export const LoginPage = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const { session } = useAuth();
    const [, navigate] = useLocation();

    useEffect(() => {
        if (session) {
            navigate('/');
        }
    }, [session, navigate]);

    return (
        <GothamContainer>
            {showRegisterForm ? <RegisterForm /> : <LoginForm />}
            <button onClick={() => setShowRegisterForm(!showRegisterForm)} className="btn btn-secondary btn-link">{showRegisterForm ? '¿Ya tienes una cuenta? Inicia sesión en Petsly' : '¿No tienes una cuenta? Regístrate'}</button>
        </GothamContainer>
    )
}