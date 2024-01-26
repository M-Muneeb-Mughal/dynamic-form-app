export interface Field {
  id: string;
  placeholder?: string;
  required?: boolean;
  type: 'text' | 'select' | 'textarea';
  options?: string[];
}

export interface FormSection extends Array<Field> {}

export type FormFields = (Field | FormSection)[];
