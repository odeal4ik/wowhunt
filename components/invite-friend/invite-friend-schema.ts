import * as yup from 'yup';

export const schema = yup
    .object({
        email: yup
            .string()
            .max(255, 'Email should be at most 255 characters')
            .email('Email should be in email format')
            .matches(/^[^A-Z]*$/, 'Email should be lowercase')
            .required('Email is required'),
    })
    .required();
