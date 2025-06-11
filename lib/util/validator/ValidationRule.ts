export type ValidationRule = {
    method : (value : any, item? : any) => Promise<boolean>
    message? : string | null | ((name? : string, value? : any) => string);
}