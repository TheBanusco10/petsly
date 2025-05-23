import {ErrorMessage} from "formik";
import type React from "react";

interface ErrorMessageProps {
    name: string;
}

export const GothamErrorMessage: React.FC<ErrorMessageProps> = ({name}) => {
    return (
        <ErrorMessage name={name}>
            {msg => <span className="text-error text-xs">{msg}</span>}
        </ErrorMessage>
    )
}