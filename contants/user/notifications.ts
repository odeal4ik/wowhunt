import { NotificationProps } from '@/components/toast-notification/toast-notification';

export const successEmailNotificationMessage: NotificationProps = {
    type: 'success',
    title: 'Successfull',
    message: 'Email notifications have been successfully changed',
};

export const successEmailChangeMessage: NotificationProps = {
    type: 'success',
    title: 'Link sent to e-mail',
    message: 'We have sent you a message to your email to confirm your change',
};
