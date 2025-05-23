import { Field } from "formik"
import type { FieldAttributes } from "formik"
import { GothamErrorMessage } from "./ErrorMessage"

export const GothamField = ({ ...props }: FieldAttributes<any>) => {
    return (
        <div className="flex flex-col gap-2">
            {props.label && <label htmlFor={props.name}>{props.label}</label>}
            <Field className="input" {...props} />
            <GothamErrorMessage name={props.name} />
        </div>
    )
}