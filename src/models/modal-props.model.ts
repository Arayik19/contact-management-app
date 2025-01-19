import { PropsWithChildren } from 'react';

export type ModalProps = PropsWithChildren<{ isOpen: boolean, onClose: () => void }> 

export interface ConfirmDeleteDialogProps {
    isOpen: boolean,
    onConfirm: () => void;
    onClose: () => void;
}


