import { nanoid } from 'nanoid';
import {
    createContext, ReactNode,
    useCallback,
    useContext,
    useState
} from 'react';
import { SimpleDialog, SimpleDialogProps } from '../components/SimpleDialog';

export type DialogNode = {
    id: string;
    dialog: ReactNode;
}

interface DialogContextData {
    showDialog: (dialog: SimpleDialogProps) => string;
    close: (id: string) => void;
}

const DialogContext = createContext<DialogContextData>({} as DialogContextData);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
    const [dialogs, setDialogs] = useState<DialogNode[]>([]);

    const close = useCallback((id: string) => setDialogs(state => state.filter(node => node.id !== id)), []);

    const showDialog = useCallback(({
        confirmText = 'Confirmar',
        onConfirm,
        declineText = 'Cancelar',
        onDecline,
        ...rest
    }: SimpleDialogProps): string => {
        const id = nanoid();
        setDialogs(state => [...state, {
            id,
            dialog: <SimpleDialog
                {...rest}
                key={id}
                confirmText={confirmText}
                declineText={declineText}
                onConfirm={() => {
                    onConfirm && onConfirm();
                    close(id);
                }}
                onDecline={() => {
                    onDecline && onDecline();
                    close(id);
                }}
            />
        }])
        return id;
    }, [close]);

    return (
        <DialogContext.Provider value={{ showDialog, close }}>
            {children}
            {dialogs.map(node => node.dialog)}
        </DialogContext.Provider>
    );
};

export function useDialog(): DialogContextData {
    const context = useContext(DialogContext);

    if (!context) {
        throw new Error(
            'o useDialog deve ser utilizado dentro de um DialogProvider',
        );
    }

    return context;
}