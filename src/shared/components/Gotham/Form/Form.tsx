import { Formik, type FormikValues, Form } from "formik";

interface FormProps {
    initialValues: FormikValues;
    onSubmit: (values: any) => any;
    children: React.ReactNode;
    validationSchema?: any;
    submitLabel?: string;
}

export const GothamForm: React.FC<FormProps> = ({ initialValues, onSubmit, children, validationSchema, submitLabel }) => {
    return <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ isSubmitting }) => (
            <Form className="flex gap-4 flex-col">
                {children}
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{submitLabel || 'Submit'}</button>
            </Form>
        )}
    </Formik>
}