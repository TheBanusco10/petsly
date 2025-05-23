import { loginFormValidationSchema } from "../../schemas/auth/loginForm";
import { supabase } from "../../supabase/client";
import { GothamForm } from "../Gotham/Form/Form";
import { GothamField } from "../Gotham/Form/Field";
import { useLocation } from "wouter";

interface FormValues {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const [_, navigate] = useLocation();
    const initialValues: FormValues = {
        email: '',
        password: '',
    }

    const handleSubmit = async (values: FormValues) => {
        try {
            const { email, password } = values;

            const { error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;

            navigate('/');
        } catch (err: any) {
            console.error(err.message);
        }
    }

    return (
        <>
            <p className="text-2xl mb-4">Entrar en Petsly</p>
            <GothamForm initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginFormValidationSchema} submitLabel="Iniciar sesión">
                <GothamField id="email" name="email" placeholder="email@email.com" type="email" label="Email" />
                <GothamField id="password" name="password" placeholder="********" type="password" label="Contraseña" />
            </GothamForm>
        </>
    );
}