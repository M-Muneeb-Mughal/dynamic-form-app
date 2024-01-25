import { Field } from '@src/interface/Field';

export const validateField = (
  field: Field,
  value: string
): { isValid: boolean; error: string } => {
  if (field.required && value.trim() === '') {
    return { isValid: false, error: 'This field is required.' };
  }

  // Validation for email field
  if (field.type === 'text' && field.id.toLowerCase().includes('email')) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    return { isValid, error: isValid ? '' : 'Invalid email format.' };
  }

  // Validation for phone field
  if (field.type === 'text' && field.id.toLowerCase().includes('phone')) {
    const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number
    const isValid = phoneRegex.test(value);
    return { isValid, error: isValid ? '' : 'Invalid phone number format.' };
  }

  return { isValid: true, error: '' };
};
