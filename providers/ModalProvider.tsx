'use client';

import {
    createContext,
    Dispatch,
    PropsWithChildren,
    ReactElement,
    useState,
} from 'react';
import { createPortal } from 'react-dom';

export const GlobalModalContext = createContext<{
    modal: ReactElement | null;
    setModal: Dispatch<ReactElement | null>;
} | null>(null);

export const GlobalModalProvider = ({ children }: PropsWithChildren) => {
    const [modal, setModal] = useState<ReactElement | null>(null);

    return (
        <GlobalModalContext.Provider
            value={{
                modal,
                setModal,
            }}>
            {children}
            {modal !== null ? createPortal(modal, document.body) : null}
        </GlobalModalContext.Provider>
    );
};
