import { ModalFormConfig } from './model-sing-up';

export const boosterFormConfig: ModalFormConfig = {
    title: 'Become a booster on Wowhunt',
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Name',
            placeholder: 'Enter your Name',
            required: true,
            inputType: 'text'
        },
        {
            name: 'discord',
            type: 'text',
            label: 'Discord',
            placeholder: 'Discord@Name#1111',
            required: true,
            inputType: 'text'
        },
        {
            name: 'game',
            type: 'text',
            label: 'Choose a game',
            placeholder: 'Choose your game',
            required: true,
            inputType: 'select',
            options: [
                { value: '', label: 'Choose your game' },
                { value: 'wow', label: 'World of Warcraft' },
                { value: 'diablo', label: 'Diablo IV' },
                { value: 'other', label: 'Other' },
            ],
        },
        {
            name: 'serviceType',
            type: 'text',
            label: 'Boost service type',
            placeholder: 'Few words what you can do...',
            required: true,
            inputType: 'textarea'
        },
    ],
    imgTitle: `Become a part of Wowhunt`,
    imgSubtitle: 'Boost the future with us!',
    buttonText: 'Send Request',
    imageSrc: '/images/reg-boost.webp',
    imageAlt: 'Become a booster on Wowhunt',
};

export const userFormConfig: ModalFormConfig = {
    title: 'Sign up to Wowhunt',
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Name',
            placeholder: 'Enter your Name',
            required: true,
            inputType: 'text'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholder: 'Enter your password',
            required: true,
            inputType: 'text'
        },
        {
            name: 'confirmPassword',
            type: 'password',
            label: 'Confirm Password',
            placeholder: 'Confirm your password',
            required: true,
            inputType: 'text'
        },
        {
            name: 'discord',
            type: 'text',
            label: 'Discord',
            placeholder: 'Enter your Discord username',
            required: true,
            inputType: 'text'
        },
    ],
    imgTitle: 'Become a part of Wowhunt',
    imgSubtitle: 'Boost the future with us!',
    buttonText: 'Sign Up',
    imageSrc: '/images/reg-user.webp',
    imageAlt: 'Sign up to Wowhunt',
};