import * as yup from 'yup';

export const schema = yup
    .object({
        email: yup
            .string()
            .max(255, 'Name should be at most 255 characters')
            .email('Name should be in email format')
            .required('Name is a required field'),
        password: yup
            .string()
            .min(8, 'Password should be at least 8 characters')
            .max(255, 'Password should be at most 255 characters')
            .required(),
    })
    .required();
