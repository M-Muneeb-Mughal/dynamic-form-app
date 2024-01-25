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

  const handleFieldChange = (id: string, value: string | File) => {
    dispatch(updateField({ id, value: value as string }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    dispatch(resetForm());
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Your Form Title</h1>
      <form onSubmit={handleSubmit}>
        <InputField fields={fields} onFieldChange={handleFieldChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
