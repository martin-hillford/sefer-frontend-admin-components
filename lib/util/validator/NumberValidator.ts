import { TypedValidator } from './TypedValidator';

export class NumberValidator extends TypedValidator {
  min = (min : number, message? : string) => {
    const method = async (value : any) => !value || (value as number) >= min;
    this.rules.push({ method, message });
    return this;
  };

  max = (max : number, message? : string) => {
    const method = async (value : any) => !value || (value as number) <= max;
    this.rules.push({ method, message });
    return this;
  };

  range = (min : number, max : number, message? : string) => {
    const method = async (value : any) => !value || ((value as number) <= max && (value as number) >= min);
    this.rules.push({ method, message });
    return this;
  };

  checkType(value: any): void {
    if (!value) return;
    const isNumber = typeof value === 'number';
    if (!isNumber) throw new Error(`property '${this.name}' is not a number.`);
  }
}
