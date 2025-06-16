import { TypedValidator } from './TypedValidator';

export class BooleanValidator extends TypedValidator {
  checkType(value: any): void {
    if (!value) return;
    const isBool = typeof value === 'boolean';
    if (!isBool) throw new Error(`property '${this.name}' is not a boolean.`);
  }
}
