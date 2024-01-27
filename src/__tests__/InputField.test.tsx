import { describe, it } from 'vitest';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import { store } from '@src/app/store';
import { fields } from '@src/data/field-set';
import { InputField } from '@src/components/InputField';
import { Field } from '@src/interface/Field';
import { flattenFields } from '@src/utils/flattenField';

describe('InputField component', () => {
  it('renders input fields', () => {
    render(
      <Provider store={store}>
        <InputField fields={fields} onFieldChange={() => {}} />
      </Provider>
    );

    flattenFields.forEach((field: Field) => {
      if (field.type === 'select') {
        const label = field.id;
        const selectElement = screen.getByLabelText(label);

        expect(selectElement).toBeInTheDocument();

        field.options?.forEach((option) => {
          expect(screen.getByText(option)).toBeInTheDocument();
        });
      } else if (field.type === 'textarea') {
        const label = field.id;
        expect(screen.getByLabelText(label)).toBeInTheDocument();
      } else {
        const label = field.placeholder || field.id;
        expect(screen.getByLabelText(label)).toBeInTheDocument();
      }
    });
  });

  it('triggers onFieldChange callback on input change', () => {
    const mockOnFieldChange = (
      id: string,
      value: string | File,
      isValid: boolean,
      error: string
    ) => {
      expect(id).toBe('firstName');
      expect(value).toBe('John');
      expect(isValid).toBe(true);
      expect(error).toBe('');
    };

    render(
      <Provider store={store}>
        <InputField fields={fields} onFieldChange={mockOnFieldChange} />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText('First name'), {
      target: { value: 'John' },
    });
  });
});
