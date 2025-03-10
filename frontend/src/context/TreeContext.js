import { createContext } from "react";

export const TreesConstext = createContext()

export const TreeContextProvider = ({ children }) => {
    return (
        <TreeContextProvider>
            { children }
        </TreeContextProvider>
    )
}