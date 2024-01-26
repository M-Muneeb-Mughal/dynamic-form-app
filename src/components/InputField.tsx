import { useDispatch, useSelector } from 'react-redux';
import { Field, FormFields } from '@src/interface/Field';
import { validateField } from '@src/utils/validation';
import { FormError } from '@src/components/FormError';
import { selectFormFields, updateField } from '@src/features/formSlice';

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
  const formData = useSelector(selectFormFields);
  const handleFieldChange = (id: string, value: string) => {
    const foundField = fields.flat().find((field) => field.id === id);

    if (foundField) {
      const validation = validateField(foundField, value.toString());

      dispatch(updateField({ id, value, validation }));
      onFieldChange(id, value, validation.isValid, validation.error);
    } else {
      console.error(`Field with id ${id} not found.`);
    }
  };

  return (
    <div className='flex flex-col space-y-4'>
      {fields.map((fieldSet, i: number) => (
        <div
          key={i}
          className='w-full flex flex-col sm:flex-row items-center justify-center gap-6'
        >
          {Array.isArray(fieldSet) ? (
            fieldSet.map((field: Field, index: number) => (
              <div key={index} className='w-full'>
                {field.type !== 'select' && field.type !== 'textarea' && (
                  <div>
                    <div className='relative z-0'>
                      <input
                        type={field.type}
                        id={field.id}
                        className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-800 peer'
                        required={field.required}
                        placeholder=' '
                        onChange={(e) =>
                          handleFieldChange(field.id, e.target.value)
                        }
                      />
                      <label
                        htmlFor={field.id}
                        className='absolute capitalize text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                      >
                        {field.placeholder || field.id}
                      </label>
                    </div>
                    <FormError error={formData[field.id]?.error} />
                  </div>
                )}
                {field.type === 'select' && (
                  <>
                    <label
                      htmlFor={field?.id}
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      {field?.id}
                    </label>
                    <select
                      id={field?.id}
                      required={field?.required}
                      onChange={(e) =>
                        handleFieldChange(field?.id, e.target.value)
                      }
                      className='bg-transparent border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-800 block w-full p-2.5'
                    >
                      <option value=''>{field?.placeholder}</option>
                      {field?.options?.map(
                        (option: string, optionIndex: number) => (
                          <option key={optionIndex} value={option}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                    <FormError error={formData[field?.id]?.error} />
                  </>
                )}
                {field.type === 'textarea' && (
                  <>
                    <label
                      htmlFor={field?.id}
                      className='block capitalize mb-2 text-sm font-medium'
                    >
                      {field.id}
                    </label>
                    <textarea
                      id={field?.id}
                      required={field?.required}
                      className='block p-2.5 w-full text-sm text-gray-600 bg-transparent rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-800'
                      placeholder={field?.placeholder}
                      onChange={(e) =>
                        handleFieldChange(field?.id, e.target.value)
                      }
                    />
                    <FormError error={formData[field.id]?.error} />
                  </>
                )}
              </div>
            ))
          ) : (
            <div key={fieldSet.id} className='w-full'>
              {fieldSet.type !== 'select' && fieldSet.type !== 'textarea' && (
                <div>
                  <div className='relative z-0'>
                    <input
                      type={fieldSet.type}
                      id={fieldSet.id}
                      className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-800 peer'
                      required={fieldSet.required}
                      placeholder=' '
                      onChange={(e) =>
                        handleFieldChange(fieldSet.id, e.target.value)
                      }
                    />
                    <label
                      htmlFor={fieldSet.id}
                      className='absolute capitalize text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
                    >
                      {fieldSet.placeholder || fieldSet.id}
                    </label>
                  </div>
                  <FormError error={formData[fieldSet.id]?.error} />
                </div>
              )}
              {fieldSet.type === 'select' && (
                <>
                  <label
                    htmlFor={fieldSet.id}
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    {fieldSet.id}
                  </label>
                  <select
                    id={fieldSet.id}
                    required={fieldSet.required}
                    onChange={(e) =>
                      handleFieldChange(fieldSet.id, e.target.value)
                    }
                    className='bg-transparent border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-800 block w-full p-2.5'
                  >
                    <option value=''>{fieldSet.placeholder}</option>
                    {fieldSet.options?.map(
                      (option: string, optionIndex: number) => (
                        <option key={optionIndex} value={option}>
                          {option}
                        </option>
                      )
                    )}
                  </select>
                  <FormError error={formData[fieldSet.id]?.error} />
                </>
              )}
              {fieldSet.type === 'textarea' && (
                <>
                  <label
                    htmlFor={fieldSet?.id}
                    className='block capitalize mb-2 text-sm font-medium'
                  >
                    {fieldSet.id}
                  </label>
                  <textarea
                    id={fieldSet?.id}
                    required={fieldSet?.required}
                    className='block p-2.5 w-full text-sm text-gray-600 bg-transparent rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-800'
                    placeholder={fieldSet?.placeholder}
                    onChange={(e) =>
                      handleFieldChange(fieldSet?.id, e.target.value)
                    }
                  />
                  <FormError error={formData[fieldSet.id]?.error} />
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
