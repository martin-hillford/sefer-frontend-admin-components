import { ArrayValidator } from './ArrayValidator';
import { BooleanValidator } from './BooleanValidator';
import { DateValidator } from './DateValidator';
import { NumberValidator } from './NumberValidator';
import { StringValidator } from './StringValidator';
import { TypedValidator } from './TypedValidator';

export class Property {
  private typed : TypedValidator | null = null;

  constructor(private name : string) { }

  public getName = () => this.name;

  public string = () => {
    this.typed = new StringValidator(this.name);
    return this.typed as StringValidator;
  };

  public number = () => {
    this.typed = new NumberValidator(this.name);
    return this.typed as NumberValidator;
  };

  public bool = () => {
    this.typed = new BooleanValidator(this.name);
    return this.typed as BooleanValidator;
  };

  public date = () => {
    this.typed = new DateValidator(this.name);
    return this.typed as DateValidator;
  };

  public array = () => {
    this.typed = new ArrayValidator(this.name);
    return this.typed as ArrayValidator;
  };

  public validate = (item : any) => this.typed?.validate(item);
}