import { expect, test, describe } from 'vitest'
import { BooleanValidator } from './BooleanValidator';
import { DateValidator } from './DateValidator';
import { NumberValidator } from './NumberValidator';
import { Property } from './Property';
import { StringValidator } from './StringValidator';

describe('type', () => {
  test('string', () => {
    const property = new Property('test');
    const validator = property.string();
    expect(validator).toBeInstanceOf(StringValidator);
  });

  test('date', () => {
    const property = new Property('test');
    const validator = property.date();
    expect(validator).toBeInstanceOf(DateValidator);
  });

  test('number', () => {
    const property = new Property('test');
    const validator = property.number();
    expect(validator).toBeInstanceOf(NumberValidator);
  });

  test('bool', () => {
    const property = new Property('test');
    const validator = property.bool();
    expect(validator).toBeInstanceOf(BooleanValidator);
  });
});

test('getName', () => {
  const property = new Property('test');
  expect(property.getName()).toBe('test');
});
