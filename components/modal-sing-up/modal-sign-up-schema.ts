import * as yup from 'yup';

export const schema = yup
    .object({
        email: yup
            .string()
            .max(255, 'Name should be at most 255 characters')
            .email('Name should be in email format')
            .matches(/^[^A-Z]*$/, 'Name should be lowercase')
            .required('Name is required'),
        password: yup
            .string()
            .min(8, 'Password should be at least 8 characters')
            .max(255, 'Password should be at most 255 characters')
            .matches(
                /^(?=.*[a-z])/,
                'Password should contain one lowercase character',
            )
            .matches(
                /^(?=.*[A-Z])/,
                'Password should contain one uppercase character',
            )
            .matches(
                /^(?=.*[A-Z])/,
                'Password should contain one uppercase character',
            )
            .required('Password is required'),
        password_confirmation: yup
            .string()
            .min(8, 'Password should be at least 8 characters')
            .max(255, 'Password should be at most 255 characters')
            .oneOf([yup.ref('password')], 'Passwords should match')
            .required('Password confirmation is required'),
        discord_link: yup
            .string()
            .max(255, 'Discord user name should be at most 255 characters')
            .required('Discord user name is required'),
    })
    .required();
