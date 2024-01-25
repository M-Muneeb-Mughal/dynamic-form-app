import { useDispatch } from 'react-redux';

import { updateField } from '@src/features/formSlice';
import { Field, FormFields } from '@src/interface/Field';
import { validateField } from '@src/features/validation';
import { useSelector } from 'react-redux';
import RootState from '@src/features/RootState';

interface InputFieldProps {
  fields: FormFields;
  onFieldChange: (
    id: string,
    value: string | File,
    isValid: boolean,
    error: string
  ) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  fields,
  onFieldChange,
}) => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form.fields);

  const handleFieldChange = (id: string, value: string) => {
    const foundField = fields.flat().find((field) => field.id === id);

    if (foundField) {
      const validation = validateField(foundField, value.toString());

      dispatch(updateField({ id, value, validation }));
      onFieldChange(id, value, validation.isValid, validation.error);
    } else {
      // Handle the case where the field with the given id is not found
      console.error(`Field with id ${id} not found.`);
    }
  };

  return (
    <div className='flex flex-col space-y-4'>
      {fields.map((fieldSet, i: number) => (
        <div key={i} className='w-full flex items-center justify-center gap-4'>
          {Array.isArray(fieldSet) ? (
            fieldSet.map((field: Field, index: number) => (
              <div key={index} className='w-full'>
                {field.type === 'text' && (
                  <>
                    <input
                      type='text'
                      id={field.id}
                      placeholder={field.placeholder}
                      required={field.required}
                      onChange={(e) =>
                        handleFieldChange(field.id, e.target.value)
                      }
                      className='w-full border p-2 rounded-md'
                    />
                    {formData[field.id]?.validation &&
                      formData[field.id]?.validation.error && (
                        <span style={{ color: 'red' }}>
                          {formData[field.id]?.validation.error}
                        </span>
                      )}
                  </>
                )}
                {field.type === 'select' && (
                  <select
                    id={field.id}
                    required={field.required}
                    onChange={(e) =>
                      handleFieldChange(field.id, e.target.value)
                    }
                    className='border p-2 rounded-md'
                  >
                    <option value='' disabled>
                      {field.placeholder}
                    </option>
                    {field.options?.map(
                      (option: string, optionIndex: number) => (
                        <option key={optionIndex} value={option}>
                          {option}
                        </option>
                      )
                    )}
                  </select>
                )}
                {field.type === 'textarea' && (
                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    onChange={(e) =>
                      handleFieldChange(field.id, e.target.value)
                    }
                    className='border p-2 rounded-md'
                  />
                )}
              </div>
            ))
          ) : (
            <div key={fieldSet.id}>
              {fieldSet.type === 'text' && (
                <input
                  type='text'
                  id={fieldSet.id}
                  placeholder={fieldSet.placeholder}
                  required={fieldSet.required}
                  onChange={(e) =>
                    handleFieldChange(fieldSet.id, e.target.value)
                  }
                  className='border p-2 rounded-md'
                />
              )}
              {fieldSet.type === 'select' && (
                <select
                  id={fieldSet.id}
                  required={fieldSet.required}
                  onChange={(e) =>
                    handleFieldChange(fieldSet.id, e.target.value)
                  }
                  className='border p-2 rounded-md'
                >
                  <option value='' disabled>
                    {fieldSet.placeholder}
                  </option>
                  {fieldSet.options?.map(
                    (option: string, optionIndex: number) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    )
                  )}
                </select>
              )}
              {fieldSet.type === 'textarea' && (
                <textarea
                  id={fieldSet.id}
                  placeholder={fieldSet.placeholder}
                  onChange={(e) =>
                    handleFieldChange(fieldSet.id, e.target.value)
                  }
                  className='border p-2 rounded-md'
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
