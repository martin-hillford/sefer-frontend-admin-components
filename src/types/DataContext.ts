import { Validator } from '../util/validator';

export interface Rule {
    name : string,
    method : Function,
    message : string
}

export class DataContext<T> {
  data: T;

  private errors : any;

  private original : string;

  private validator : Validator | null;

  constructor(data : T, private listener : Function | undefined = undefined) {
    this.data = data;
    this.errors = {};
    this.original = JSON.stringify(data);
    this.validator = null;

    this.validate.bind(this);
  }

  setListener(listener : Function) {
    this.listener = listener;
  }

  getValueTyped<S>(propName : string) {
    return (this.data as any)[propName] as S;
  }

  getValue(propName : string) {
    return (this.data as any)[propName];
  }

  getOnChangeHandler() {
    return (value : any, propName : string | undefined) => this.setValue(propName, value);
  }

  setValue(propName : string | undefined, value : any) {
    if (!propName) return;
    (this.data as any)[propName] = value;
    if (this.listener) this.listener(this.clone());
  }

  set(data :T) {
    this.data = data;
    if (this.listener) this.listener(this.clone());
  }

  hasChanges = () => this.original !== JSON.stringify(this.data);

  resetHasChanges = () => {
    this.original = JSON.stringify(this.data);
    if (this.listener) this.listener(this.clone());
  };

  private clone() {
    const clonedData = { ...this.data };

    const cloned = new DataContext(clonedData, this.listener);
    cloned.errors = { ...this.errors };
    cloned.original = this.original;
    cloned.validator = this.validator;

    cloned.validate.bind(cloned);

    return cloned;
  }

  getError(propName : string | undefined) {
    if (!propName) return;
    const errors = this.errors[propName];
    if (errors) return errors[0];
  }

  setValidator(validator : Validator) {
    this.validator = validator;
  }

  setError(propName : string, error : string) {
    if (!this.errors[propName]) this.errors[propName] = [];
    this.errors[propName].push(error);
  }

  async validate() {
    if (!this.validator) return true;
    const result = await this.validator.validate(this.data);

    const errors = {} as any;
    result.forEach(r => {
      if (!errors[r.property]) errors[r.property] = [];
      errors[r.property].push(r.message ?? '');
    });

    this.errors = errors;
    if (this.listener) this.listener(this.clone());
    return result.length === 0;
  }
}
