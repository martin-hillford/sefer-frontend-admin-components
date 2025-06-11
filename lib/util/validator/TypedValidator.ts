/* eslint-disable no-nested-ternary */
/* eslint-disable no-await-in-loop */
import { isString } from './Util';
import { ValidationError } from './ValidationErrors';
import { ValidationRule } from './ValidationRule';

export abstract class TypedValidator {
  protected rules: ValidationRule[];

  constructor(protected name : string) {
    this.rules = [];
  }

  required = (message? : string) => {
    const method = async (value : any) => value !== undefined && value !== null;
    this.rules.push({ method, message });
    return this;
  };

  custom = (method : (value : any, item? : any) => Promise<boolean>, message? : string) => {
    this.rules.push({ method, message });
    return this;
  };

  public validate = async (item : any) => {
    const value = this.getValue(item);
    this.checkType(value);

    const errors = [] as ValidationError[];

    for (let index = 0; index < this.rules.length; index++) {
      const rule = this.rules[index];
      const isValid = await rule.method(value, item);

      if (isValid) continue;

      const message = rule.message
        ? isString(rule.message)
          ? rule.message
          : (rule.message as Function)(this.name, value)
        : null;

      errors.push({ property: this.name, message });
    }

    return errors;
  };

    abstract checkType(value : any) : void;

    private getValue = (item : any) => item[this.name];
}