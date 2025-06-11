import { TypedValidator } from './TypedValidator';

export class DateValidator extends TypedValidator {
  min = (min : Date, message? : string) => {
    const method = async (value : any) => !value || (value as Date) >= min;
    this.rules.push({ method, message });
    return this;
  };

  max = (max : Date, message? : string) => {
    const method = async (value : any) => !value || (value as Date) <= max;
    this.rules.push({ method, message });
    return this;
  };

  range = (min : Date, max : Date, message? : string) => {
    const method = async (value : any) => !value || ((value as Date) <= max && (value as Date) >= min);
    this.rules.push({ method, message });
    return this;
  };

  checkType(value: any): void {
    if (!value) return;
    const isDate = value instanceof Date;
    if (!isDate) throw new Error(`property '${this.name}' is not a date.`);
  }
}
