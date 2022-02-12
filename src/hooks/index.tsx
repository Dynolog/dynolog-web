import { ReactNode } from "react";
import { DialogProvider } from "./use-dialog";

export const Providers = ({ children }: { children: ReactNode }) => (
    <DialogProvider>
        {children}
    </DialogProvider>
)