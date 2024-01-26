import { Field } from '@src/interface/Field';

export const validateField = (
  field: Field,
  value: string
): { isValid: boolean; error: string } => {
  if (field.required && value.trim() === '') {
    return { isValid: false, error: 'This field is required.' };
  }

  if (field.type === 'text' && field.id.toLowerCase().includes('email')) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    return { isValid, error: isValid ? '' : 'Invalid email format.' };
  }

  if (field.type === 'text' && field.id.toLowerCase().includes('phone')) {
    const phoneRegex = /^\+\d{1,4}\s\(\d{1,4}\)\s\d{1,12}-\d{1,12}$/;
    const isValid = phoneRegex.test(value);
    return { isValid, error: isValid ? '' : 'Invalid phone number format.' };
  }

  return { isValid: true, error: '' };
};
