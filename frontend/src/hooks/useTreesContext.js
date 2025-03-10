import { TreesContext } from "../context/TreeContext";
import { useContext } from "react";

export const useTreesContext = () => {
    const context = useContext(TreesContext)

    if (!context) {
        throw Error("useTreesContext must be used inside a TreesContextProvider")
    }

    return context
}