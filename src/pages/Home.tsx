import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fields } from '@src/data/field-set';
import { InputField } from '@src/components/InputField';
import { selectFormFields, updateField } from '@src/features/formSlice';

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
    const isFormValid = Object.values(formData).every((field) => field.isValid);

    if (isFormValid) {
      navigate('/thank-you');
      window.showToast('Form is valid Succssfully.', 'success');
    } else {
      window.showToast(
        'Form validation failed. Please check the fields.',
        'error'
      );
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
