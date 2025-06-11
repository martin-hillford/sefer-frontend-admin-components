import { DataContext } from "../types/DataContext";
import { useDataContextWithState } from "./useDataContextWithState";

export function useDataContext<T>(entity : T | undefined, createContext? : (entity : T) => DataContext<T> | undefined) {
  const [value] = useDataContextWithState(entity, createContext);
  return value;
}
