import cn from 'classnames';
import React, { useState } from 'react';
import styles from './modal-sing-up.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEscapeClose } from '../../hooks/useEscapeClose';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpUserInput, useSignUpUser } from '@/api/auth/signupUser';
import { schema } from './modal-sign-up-schema';

interface ModalSignUpProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalSignUp = ({ isOpen, onClose }: ModalSignUpProps) => {
    const [activeTab, setActiveTab] = useState<'customer' | 'booster'>(
        'customer',
    );
    const isCustomer = activeTab === 'customer';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const { mutate: logInUser, isPending, data } = useSignUpUser();

    console.log(data);

    const onSubmit: SubmitHandler<Omit<SignUpUserInput, 'type'>> = (input) => {
        logInUser({
            ...input,
            type: !isCustomer,
        });
    };

    useEscapeClose(isOpen, onClose);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContainer}
                onClick={(e) => e.stopPropagation()}>
                <div className={styles.imageContainer}>
                    <Image
                        src={
                            isCustomer
                                ? '/images/reg-user.webp'
                                : '/images/reg-boost.webp'
                        }
                        alt={'Boost the future with us!'}
                        fill
                        // sizes=''
                        quality={100}
                    />
                    <div className={styles.imageOverlay}>
                        <h3 className={styles.imageTitle}>
                            Become a part of Wowhunt
                        </h3>
                        <p className={styles.imgSubtitle}>
                            Boost the future with us!
                        </p>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <div className={styles.tabs}>
                        <button
                            className={cn(
                                styles.tab,
                                isCustomer && styles.active,
                            )}
                            onClick={() => setActiveTab('customer')}>
                            Customer
                        </button>
                        <button
                            className={cn(
                                styles.tab,
                                !isCustomer && styles.active,
                            )}
                            onClick={() => setActiveTab('booster')}>
                            Booster
                        </button>
                    </div>

                    <div className={styles.formContainer}>
                        <h2 className={styles.title}>
                            {isCustomer
                                ? 'Sign up to Wowhunt'
                                : 'Become a booster on Wowhunt'}
                        </h2>
                        <form
                            className={styles.form}
                            onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.formGroup}>
                                <label className={styles.label} htmlFor="name">
                                    Name&nbsp;
                                    <span className={styles.required}>*</span>
                                    {errors.email ? (
                                        <p className={styles.error}>
                                            {errors.email.message}
                                        </p>
                                    ) : null}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your Name"
                                    autoComplete="off"
                                    {...register('email')}
                                    {...(isPending && { disabled: true })}
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label
                                    className={styles.label}
                                    htmlFor="password">
                                    Enter your password&nbsp;
                                    <span className={styles.required}>*</span>
                                    {errors.password ? (
                                        <p className={styles.error}>
                                            {errors.password.message}
                                        </p>
                                    ) : null}
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                    {...register('password')}
                                    {...(isPending && { disabled: true })}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label
                                    className={styles.label}
                                    htmlFor="password_confirmation">
                                    Confirm your password&nbsp;
                                    <span className={styles.required}>*</span>
                                    {errors.password_confirmation ? (
                                        <p className={styles.error}>
                                            {
                                                errors.password_confirmation
                                                    .message
                                            }
                                        </p>
                                    ) : null}
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                    {...register('password_confirmation')}
                                    {...(isPending && { disabled: true })}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label
                                    className={styles.label}
                                    htmlFor="discord_link">
                                    Enter your discord&nbsp;
                                    <span className={styles.required}>*</span>
                                    {errors.discord_link ? (
                                        <p className={styles.error}>
                                            {errors.discord_link.message}
                                        </p>
                                    ) : null}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Discord username"
                                    autoComplete="off"
                                    {...register('discord_link')}
                                    {...(isPending && { disabled: true })}
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.submitWrapper}>
                                <button
                                    type="submit"
                                    className={cn(
                                        styles.submitButton,
                                        styles.submitButtonBooster &&
                                            !isCustomer,
                                    )}>
                                    {isCustomer ? 'Sign Up' : 'Send Request'}
                                </button>

                                <p className={styles.textLink}>
                                    You have account?&nbsp;
                                    <Link href="/login" className={styles.link}>
                                        Log in
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

// {
//     fields?.map((field, index) => (
//         <div key={index} className={styles.formGroup}>
//             <label className={styles.label} htmlFor={field.name}>
//                 {field.label}
//                 {field.required && <span className={styles.required}>*</span>}
//             </label>

//             {field.inputType === 'select' ? (
//                 <div className={styles.selectWrapper}>
//                     <select
//                         className={`${styles.input} ${styles.select}`}
//                         id={field.name}
//                         name={field.name}
//                         required={field.required}
//                         defaultValue="">
//                         {field.options?.map((option, optionIndex) => (
//                             <option
//                                 key={optionIndex}
//                                 value={option.value}
//                                 disabled={option.value === ''}>
//                                 {option.label}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             ) : field.inputType === 'textarea' ? (
//                 <textarea
//                     className={`${styles.input} ${styles.textarea}`}
//                     id={field.name}
//                     name={field.name}
//                     placeholder={field.placeholder}
//                     required={field.required}
//                 />
//             ) : (
//                 <input
//                     className={styles.input}
//                     id={field.name}
//                     type={field.type}
//                     name={field.name}
//                     placeholder={field.placeholder}
//                     required={field.required}
//                 />
//             )}
//         </div>
//     ));
// }
