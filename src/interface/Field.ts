export type Field = {
  id: string;
  placeholder?: string;
  required?: boolean;
  type: string;
  options?: string[];
};

export type FormSection = Field[];

export type FormFields = (Field | FormSection)[];
