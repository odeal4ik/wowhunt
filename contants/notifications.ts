import { NotificationProps } from '@/components/toast-notification/toast-notification';

export const successLoginMessage: NotificationProps = {
    type: 'success',
    title: 'Successfull',
    message: 'You have successfully logged in',
};

export const successSignupMessage: NotificationProps = {
    type: 'success',
    title: 'Successfull',
    message: 'You have successfully signed up',
};

export const successPasswordChangeMessage: NotificationProps = {
    type: 'success',
    title: 'Successfull',
    message: 'Your password has been successfully changed',
};

export const successPasswordRestoreMessage: NotificationProps = {
    type: 'success',
    title: 'Link sent to e-mail',
    message: 'We have sent you a message to your email to confirm your change',
};

export const infoLogoutMessage: NotificationProps = {
    type: 'info',
    title: '',
    message:
        'You have successfully logged out. You will be redirected to the main page',
};

export const infoConfirmationRequiredMessage: NotificationProps = {
    type: 'info',
    title: 'Confirmation required',
    message:
        'We have sent you a message to your new email to confirm your email change',
};

export const warningMessage: NotificationProps = {
    type: 'warning',
    title: 'Please, try once more',
    message: 'Some fields are filled incorrectly',
};

export const errorMessage: NotificationProps = {
    type: 'error',
    title: 'Ooops...',
    message: 'Something went wrong. Please try again later',
};

export const helpMessage: NotificationProps = {
    type: 'help',
    title: 'Any questions?',
    message: 'Please, contact our support team',
};

export const skipMessage: NotificationProps = {
    type: 'skip',
    title: 'Nothing to do here',
    message: 'Some info that you can skip',
};

export const copyMessage: NotificationProps = {
    type: 'copy',
    title: 'Copied',
    message: 'Message copied to clipboard',
};
