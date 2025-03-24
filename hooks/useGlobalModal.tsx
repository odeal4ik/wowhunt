import { useContext } from 'react';

import { GlobalModalContext } from '@/providers/ModalProvider';

const noop = () => {};

export function useGlobalModal() {
    const context = useContext(GlobalModalContext);

    if (context !== null) {
        return {
            open: context.setModal,
            close: () => context.setModal(null),
        };
    }
    return { open: noop, close: noop };
}
