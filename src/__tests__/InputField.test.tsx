import { render, fireEvent } from '@testing-library/react';
import { InputField } from '../components/InputField';
// import { render } from '@src/setupTests';
import { Field, FormSection } from '@src/interface/Field';

describe('InputField Component', () => {
  it('renders correctly', () => {
    const fields: (Field | FormSection)[] = [
      {
        id: 'firstName',
        type: 'text',
        required: true,
        placeholder: 'First name',
      },
    ];

    const onFieldChange = jest.fn();

    const { getByLabelText } = render(
      <InputField fields={fields} onFieldChange={onFieldChange} />
    );

    const firstNameInput = getByLabelText(/First name/i);
    expect(firstNameInput).toBeInTheDocument();
  });

  it('triggers onFieldChange correctly', () => {
    const fields: (Field | FormSection)[] = [
      {
        id: 'firstName',
        type: 'text',
        required: true,
        placeholder: 'First name',
      },
    ];

    const onFieldChange = jest.fn();

    const { getByLabelText } = render(
      <InputField fields={fields} onFieldChange={onFieldChange} />
    );

    const firstNameInput = getByLabelText(/First name/i);

    fireEvent.change(firstNameInput, { target: { value: 'John' } });

    expect(onFieldChange).toHaveBeenCalledWith('firstName', 'John');
  });
});
