import { expect, test, describe } from 'vitest'
import { StringValidator } from './StringValidator';

describe('checkType', () => {
  const checkType = (value : any) => {
    try {
      const validator = new StringValidator('test');
      validator.checkType(value);
      return true;
    } catch { return false; }
  };

  test('null', () => expect(checkType(null)).toBe(true));
  test('correct type', () => expect(checkType('string')).toBe(true));
  test('wrong type', () => expect(checkType(17)).toBe(false));
});
