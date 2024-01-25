import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  resetForm,
  selectFormFields,
  updateField,
} from '@src/features/formSlice';
import { fields } from '@src/data/fields';
import { InputField } from '@src/components/InpurField';

export const App = () => {
  const dispatch = useDispatch();
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    dispatch(resetForm());
    console.log('Form Data:', formData);
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto py-6 lg:py-12 px-4 sm:px-8 md:px-12 lg:px-16 '>
        <h1 className='text-3xl font-bold mb-4'>Dynamic Form</h1>
        <form onSubmit={handleSubmit}>
          <InputField fields={fields} onFieldChange={onFieldChange} />
          <button
            type='submit'
            className='bg-indigo-600 text-gray-100 w-full sm:w-fit px-14 py-1.5 font-semibold rounded-lg mt-6'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
