import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DataContext } from "../types/DataContext";

export function useDataContextWithState<T>(entity : T | undefined, createContext? : (entity : T) => DataContext<T> | undefined)
    : [ DataContext<T> | undefined, Dispatch<SetStateAction<DataContext<T> | undefined>> ] {
    const [value, set] = useState<DataContext<T> | undefined>(undefined);

    useEffect(() => {
        const create = createContext || ((dataEntity : T) => new DataContext(dataEntity));
        if (!entity) set(undefined);
        else set(create(entity));
    }, [entity, createContext]);

    if (value) value.setListener(set);
    return [value, set];
}
