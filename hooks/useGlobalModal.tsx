import { GlobalModalContext } from '@/providers/ModalProvider';
import { useContext } from 'react';

export function useGlobalModal() {
    const context = useContext(GlobalModalContext);
    const noop = () => {};

    if (context !== null) {
        return {
            open: context.setModal,
            close: () => context.setModal(null),
        };
    }
    return { open: noop, close: noop };
}
