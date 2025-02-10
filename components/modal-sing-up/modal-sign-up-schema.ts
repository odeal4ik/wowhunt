import * as yup from 'yup';

export const schema = yup
    .object()
    .shape({
        email: yup
            .string()
            .max(255, 'Name should be at most 255 characters')
            .email('Name should be in email format')
            .matches(/^[^A-Z]*$/, 'Name should be lowercase')
            .required('Name is required'),
        password: yup.string().when('$isCustomer', ([isCustomer], schema) =>
            isCustomer
                ? schema
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
                          /^(?=.*\d)/,
                          'Password should contain one number',
                      )
                      .required('Password is required')
                : schema,
        ),
        password_confirmation: yup
            .string()
            .when('$isCustomer', ([isCustomer], schema) =>
                isCustomer
                    ? schema
                          .min(8, 'Password should be at least 8 characters')
                          .max(255, 'Password should be at most 255 characters')
                          .oneOf(
                              [yup.ref('password')],
                              'Passwords should match',
                          )
                          .required('Password confirmation is required')
                    : schema,
            ),
        discord_link: yup
            .string()
            .max(255, 'Discord user name should be at most 255 characters')
            .required('Discord user name is required'),
        game: yup
            .string()
            .when('$isCustomer', ([isCustomer], schema) =>
                isCustomer ? schema : schema.required('Game is required'),
            ),
        description: yup
            .string()
            .when('$isCustomer', ([isCustomer], schema) =>
                isCustomer
                    ? schema
                    : schema.required('Description is required'),
            ),
    })
    .required();
