import { createContext, useContext } from "react";

const toastContext = createContext<any>(null);

const useToast = () => useContext(toastContext);

export { toastContext, useToast };
