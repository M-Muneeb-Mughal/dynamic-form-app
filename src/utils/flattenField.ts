import { fields } from '@src/data/field-set';
import { Field, FormSection } from '@src/interface/Field';

const flattenFieldsRecursive = (items: (Field | FormSection)[]): Field[] => {
  let result: Field[] = [];

  for (const item of items) {
    if (Array.isArray(item)) {
      result = result.concat(flattenFieldsRecursive(item));
    } else {
      result.push(item as Field);
    }
  }

  return result;
};

export const flattenFields: Field[] = flattenFieldsRecursive(
  fields as (Field | FormSection)[]
);
