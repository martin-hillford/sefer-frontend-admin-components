import { expect, test, describe } from 'vitest'
import { NumberValidator } from './NumberValidator';

describe('min', () => {
  const min = async (test : any, min : number, expected : number) => {
    const validator = new NumberValidator('test');
    validator.min(min);
    const errors = await validator.validate(test);
    expect(errors).toHaveLength(expected);
  };

  test('min number bigger', async () => await min({ test: 17 }, 23, 1));
  test('min number smaller', async () => await min({ test: 31 }, 23, 0));
  test('min number equal', async () => await min({ test: 23 }, 23, 0));
  test('null', async () => await min({ test: null }, 23, 0));
});

describe('max', () => {
  const max = async (test : any, max : number, expected : number) => {
    const validator = new NumberValidator('test');
    validator.max(max);
    const errors = await validator.validate(test);
    expect(errors).toHaveLength(expected);
  };

  test('max number bigger', async () => await max({ test: 17 }, 23, 0));
  test('max number smaller', async () => await max({ test: 31 }, 23, 1));
  test('max number equal', async () => await max({ test: 23 }, 23, 0));
  test('null', async () => await max({ test: null }, 23, 0));
});

describe('range', () => {
  const range = async (test : any, min : number, max : number, expected : number) => {
    const validator = new NumberValidator('test');
    validator.range(min, max);
    const errors = await validator.validate(test);
    expect(errors).toHaveLength(expected);
  };

  test('lower then min', async () => await range({ test: 17 }, 23, 31, 1));
  test('within rage', async () => await range({ test: 23 }, 17, 31, 0));
  test('higher then max', async () => await range({ test: 31 }, 17, 23, 1));
  test('null', async () => await range({ test: null }, 17, 31, 0));
  test('not in object', async () => await range({}, 17, 31, 0));
});

describe('checkType', () => {
  const checkType = (value : any) => {
    try {
      const validator = new NumberValidator('test');
      validator.checkType(value);
      return true;
    } catch { return false; }
  };

  test('null', () => expect(checkType(null)).toBe(true));
  test('correct type', () => expect(checkType(18)).toBe(true));
  test('wrong type', () => expect(checkType('string')).toBe(false));
});
