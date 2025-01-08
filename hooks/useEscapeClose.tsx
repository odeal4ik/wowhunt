import { useEffect } from 'react';

export function useEscapeClose(isOpen: boolean, onClose: () => void) {
    useEffect(() => {
        if (!isOpen) return;

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);
}
