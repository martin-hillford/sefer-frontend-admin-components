import { isEmpty } from "../isEmpty";
import { TypedValidator } from './TypedValidator';
import { isString } from './util';

export class StringValidator extends TypedValidator {
  required = (message?: string | undefined) => {
    const method = async (value : any) => !isEmpty(value);
    this.rules.push({ method, message });
    return this;
  };

  minLength = (minLength : number, message? : string) => {
    const method = async (value : any) => !value || (value as string).length >= minLength;
    this.rules.push({ method, message });
    return this;
  };

  maxLength = (maxLength : number, message? : string) => {
    const method = async (value : any) => !value || (value as string).length <= maxLength;
    this.rules.push({ method, message });
    return this;
  };

  range = (minLength : number, maxLength : number, message? : string) => {
    const method = async (value : any) => !value || ((value as string).length <= maxLength && (value as string).length >= minLength);
    this.rules.push({ method, message });
    return this;
  };

  pattern = (regexp : RegExp, message? : string) => {
    const method = (value : any) => value && regexp.test(value);
    this.rules.push({ method, message });
    return this;
  };

  mail = (message? : string) => this.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message);

  checkType(value: any): void {
    if (!value) return;
    if (!isString(value)) throw new Error(`property '${this.name}' is not a string.`);
  }
}
