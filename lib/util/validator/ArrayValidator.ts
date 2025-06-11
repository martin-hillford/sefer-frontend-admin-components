import { TypedValidator } from './TypedValidator';

export class ArrayValidator extends TypedValidator {
  checkType(value: any): void {
    if (!value) return;
    if (!Array.isArray(value)) throw new Error(`property '${this.name}' is not a array.`);
  }

  required = (message?: string | undefined) => {
    const method = async (value : any) => !!value;
    this.rules.push({ method, message });
    return this;
  };

  min = (min : number, message? : string) => {
    const method = async (value : any) => !value || value.length >= min;
    this.rules.push({ method, message });
    return this;
  };

  max = (max : number, message? : string) => {
    const method = async (value : any) => !value || value.length <= max;
    this.rules.push({ method, message });
    return this;
  };
}