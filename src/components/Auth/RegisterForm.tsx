import { registerFormValidationSchema } from "../../schemas/auth/registerForm";
import { supabase } from "../../supabase/client";
import { GothamForm } from "../Gotham/Form/Form";
import { GothamField } from "../Gotham/Form/Field";
import { useLocation } from "wouter";

interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

export const RegisterForm = () => {
    const [_, navigate] = useLocation();
    const initialValues: FormValues = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    const handleSubmit = async (values: FormValues) => {
        try {
            const { email, password } = values;

            const { error } = await supabase.auth.signUp({
                email,
                password
            });

            if (error) throw error;

            navigate('/confirm');
        } catch (err: any) {
            console.error(err.message);
        }
    }

    return (
        <>
            <p className="text-2xl mb-4">Crear nuevo usuario</p>
            <GothamForm initialValues={initialValues} onSubmit={handleSubmit} validationSchema={registerFormValidationSchema} submitLabel="Registrarse">
                <GothamField id="email" name="email" placeholder="email@email.com" type="email" label="Email" />
                <GothamField id="password" name="password" placeholder="********" type="password" label="Contraseña" />
                <GothamField id="confirmPassword" name="confirmPassword" placeholder="********" type="password" label="Confirmar contraseña" />
            </GothamForm>
        </>
    );
}