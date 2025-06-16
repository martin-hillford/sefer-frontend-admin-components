import { expect, test, describe } from 'vitest'
import { DateValidator } from './DateValidator';

const ref = new Date(2000, 1, 1, 1, 1, 1);
const before = new Date(1999, 12, 31, 23, 59, 59);
const after = new Date(2000, 1, 1, 1, 1, 2);

describe('min', () => {
  const min = async (test : any, min : Date, expected : number) => {
    const validator = new DateValidator('test');
    validator.min(min);
    const errors = await validator.validate(test);
    expect(errors).toHaveLength(expected);
  };

  test('min date bigger', async () => await min({ test: before }, ref, 1));
  test('min date smaller', async () => await min({ test: after }, ref, 0));
  test('min date equal', async () => await min({ test: ref }, ref, 0));
  test('null', async () => await min({ test: null }, ref, 0));
});

describe('max', () => {
  const max = async (test : any, max : Date, expected : number) => {
    const validator = new DateValidator('test');
    validator.max(max);
    const errors = await validator.validate(test);
    expect(errors).toHaveLength(expected);
  };

  test('max date bigger', async () => await max({ test: before }, ref, 0));
  test('max date smaller', async () => await max({ test: after }, ref, 1));
  test('max date equal', async () => await max({ test: ref }, ref, 0));
  test('null', async () => await max({ test: null }, ref, 0));
});

describe('range', () => {
  const range = async (test : any, min : Date, max : Date, expected : number) => {
    const validator = new DateValidator('test');
    validator.range(min, max);
    const errors = await validator.validate(test);
    expect(errors).toHaveLength(expected);
  };

  test('lower then min', async () => await range({ test: before }, ref, after, 1));
  test('within rage', async () => await range({ test: ref }, before, after, 0));
  test('higher then max', async () => await range({ test: after }, before, ref, 1));
  test('null', async () => await range({ test: null }, before, after, 0));
  test('not in object', async () => await range({}, before, after, 0));
});

describe('checkType', () => {
  const checkType = (value : any) => {
    try {
      const validator = new DateValidator('test');
      validator.checkType(value);
      return true;
    } catch { return false; }
  };

  test('null', () => expect(checkType(null)).toBe(true));
  test('correct type', () => expect(checkType(new Date())).toBe(true));
  test('wrong type', () => expect(checkType('string')).toBe(false));
});
