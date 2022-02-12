import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { memo, ReactNode } from 'react';

export interface SimpleDialogProps {
    confirmText?: string;
    declineText?: string;
    title: string;
    content: ReactNode;
    onConfirm?: () => void;
    onDecline?: () => void;
}

export const SimpleDialog = memo(({
    title,
    content,
    onConfirm,
    confirmText,
    onDecline,
    declineText
}: SimpleDialogProps) => {
    return (
        <Dialog open onClose={() => onDecline && onDecline()}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{content}</DialogContent>
            <DialogActions>
                <Button
                    onClick={() => onDecline && onDecline()}
                    color="primary"
                >
                    {declineText ?? 'Cancelar'}
                </Button>
                <Button
                    onClick={() => onConfirm && onConfirm()}
                    color="primary"
                    autoFocus
                >
                    {confirmText ?? 'Remover'}
                </Button>
            </DialogActions>
        </Dialog>
    )
});