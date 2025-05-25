import { Link } from "wouter"
import { GothamContainer } from "../../../shared/components/Gotham/Container"

export const ConfirmPage = () => {
    return (
        <GothamContainer className="flex flex-col gap-4">
            <p className="text-2xl">¡Bienvenid@ a Petsly!</p>
            <p>Un correo ha sido enviado a tu correo electrónico para confirmar tu cuenta.</p>
            <Link href="/login" className="flex btn btn-primary mx-auto w-fit">Volver al inicio</Link>
        </GothamContainer>
    )
}