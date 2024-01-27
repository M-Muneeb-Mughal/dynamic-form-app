import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fields } from '@src/data/field-set';
import { InputField } from '@src/components/InputField';
import { selectFormFields, updateField } from '@src/features/formSlice';
import { Field } from '@src/interface/Field';
import { flattenFields } from '@src/utils/flattenField';

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector(selectFormFields);

  const onFieldChange = (
    id: string,
    value: string | File,
    isValid: boolean,
    error: string
  ) => {
    dispatch(
      updateField({
        id,
        value: value as string,
        validation: { isValid: isValid, error: error },
      })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isFormValid = true;
    flattenFields.forEach((field: Field) => {
      if (field.required) {
        const formDataField = formData[field.id];
        if (!formDataField || !formDataField.isValid) {
          window.showToast(
            'Form validation failed. Please check the fields.',
            'error'
          );
          dispatch(
            updateField({
              id: field.id,
              value: formDataField ? formDataField.value : '',
              validation: {
                isValid: false,
                error: formDataField
                  ? `Please enter a valid ${field.id}`
                  : `Please enter the ${field.id}`,
              },
            })
          );
          isFormValid = false;
        }
      }
    });

    if (isFormValid) {
      navigate('/thank-you');
      window.showToast('Form is valid Successfully.', 'success');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField fields={fields} onFieldChange={onFieldChange} />
      <button
        type='submit'
        className='bg-indigo-600 hover:bg-indigo-500 text-gray-100 w-full sm:w-fit px-14 py-1.5 font-semibold rounded-lg mt-6'
      >
        Submit
      </button>
    </form>
  );
};
