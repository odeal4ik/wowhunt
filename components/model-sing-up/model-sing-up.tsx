import React, { useEffect } from 'react';
import styles from './model-sing-up.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface FormField {
    name: string;
    type: string;
    label: string;
    placeholder: string;
    required: boolean;
    inputType?: 'text' | 'select' | 'textarea';
    options?: { value: string; label: string }[];
}

export interface ModalFormConfig {
    title: string;
    fields: FormField[];
    buttonText: string;
    imageSrc: string;
    imageAlt?: string;
    imgTitle?: string;
    imgSubtitle?: string;
}

export interface ModalFormProps extends ModalFormConfig {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalForm = ({
    title,
    fields,
    buttonText,
    imageSrc,
    imageAlt = 'Registration image',
    imgTitle,
    imgSubtitle,
    isOpen,
    onClose,
}: ModalFormProps) => {
    useEffect(() => {
        if (!isOpen) return;
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContainer}
                onClick={(e) => e.stopPropagation()}>
                <div className={styles.imageContainer}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={500}
                        height={600}
                        priority
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <div className={styles.imageOverlay}>
                        <h3 className={styles.imageTitle}>{imgTitle}</h3>
                        <p className={styles.imgSubtitle}>{imgSubtitle}</p>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <h2 className={styles.title}>{title}</h2>
                    <form className={styles.form}>
                        {fields.map((field, index) => (
                            <div key={index} className={styles.formGroup}>
                                <label
                                    className={styles.label}
                                    htmlFor={field.name}>
                                    {field.label}
                                    {field.required && (
                                        <span className={styles.required}>
                                            *
                                        </span>
                                    )}
                                </label>
                                {field.inputType === 'select' ? (
                                    <div className={styles.selectWrapper}>
                                        <select
                                            className={`${styles.input} ${styles.select}`}
                                            id={field.name}
                                            name={field.name}
                                            required={field.required}
                                            defaultValue="">
                                            {field.options?.map(
                                                (option, optionIndex) => (
                                                    <option
                                                        key={optionIndex}
                                                        value={option.value}
                                                        disabled={
                                                            option.value === ''
                                                        }>
                                                        {option.label}
                                                    </option>
                                                ),
                                            )}
                                        </select>
                                    </div>
                                ) : field.inputType === 'textarea' ? (
                                    <textarea
                                        className={`${styles.input} ${styles.textarea}`}
                                        id={field.name}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                    />
                                ) : (
                                    <input
                                        className={styles.input}
                                        id={field.name}
                                        type={field.type}
                                        name={field.name}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                    />
                                )}
                            </div>
                        ))}
                        <button
                            type="submit"
                            className={`${styles.submitButton} ${buttonText === 'Send Request' ? styles.submitButtonBooster : ''}`}>
                            {buttonText}
                        </button>
                        {buttonText === 'Sign Up' && (
                            <p className={styles.textLink}>
                                You have account?{' '}
                                <Link href="/login" className={styles.link}>
                                    Log in
                                </Link>
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};
