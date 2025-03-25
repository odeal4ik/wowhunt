import * as yup from 'yup';

export const schema = yup
    .object({
        old_password: yup
            .string()
            .min(8, 'Old password should be at least 8 characters')
            .max(255, 'Old password should be at most 255 characters')
            .matches(
                /^(?=.*[a-z])/,
                'Old password should contain one lowercase character',
            )
            .matches(
                /^(?=.*[A-Z])/,
                'Old password should contain one uppercase character',
            )
            .matches(/^(?=.*\d)/, 'Old password should contain one number')
            .required('Old password is required'),
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
            .matches(/^(?=.*\d)/, 'Password should contain one number')
            .required('Password is required'),
        password_confirmation: yup
            .string()
            .min(8, 'Password should be at least 8 characters')
            .max(255, 'Password should be at most 255 characters')
            .oneOf([yup.ref('password')], 'Passwords should match')
            .required('Password confirmation is required'),
    })
    .required();
