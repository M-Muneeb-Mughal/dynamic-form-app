import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Field } from '@src/interface/Field';
import { fields } from '@src/data/field-set';
import { resetForm, selectFormFields } from '@src/features/formSlice';

export const ThankYou = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formData = useSelector(selectFormFields);

  useEffect(() => {
    if (Object.keys(formData).length === 0) {
      navigate('/');
    }
  }, [navigate, formData]);

  const handleReturn = () => {
    dispatch(resetForm());
    navigate('/');
  };

  return (
    <div>
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
                        <h2 className='flex gap-2 whitespace-nowrap border-b-2 py-2 font-semibold capitalize'>
                          {field?.id}:
                          <span className='font-normal'>
                            {formData[field?.id]?.value}
                          </span>
                        </h2>
                      </div>
                    </div>
                  )}
                  {field.type === 'select' && (
                    <h2 className='flex gap-2 border-b-2 py-2 font-semibold capitalize'>
                      {field?.id}:
                      <span className='font-normal'>
                        {formData[field?.id]?.value}
                      </span>
                    </h2>
                  )}
                  {field.type === 'textarea' && (
                    <h2 className='flex gap-2 border-b-2 py-2 font-semibold capitalize'>
                      {field?.id}:
                      <span className='font-normal'>
                        {formData[field?.id]?.value}
                      </span>
                    </h2>
                  )}
                </div>
              ))
            ) : (
              <div key={fieldSet.id} className='w-full'>
                {fieldSet.type !== 'select' && fieldSet.type !== 'textarea' && (
                  <div>
                    <div className='relative z-0'>
                      <h2 className='flex gap-2 border-b-2 py-2 font-semibold capitalize'>
                        {fieldSet?.id}:
                        <span className='font-normal'>
                          {formData[fieldSet?.id]?.value}
                        </span>
                      </h2>
                    </div>
                  </div>
                )}
                {fieldSet.type === 'select' && (
                  <h2 className='flex gap-2 border-b-2 py-2 font-semibold capitalize'>
                    {fieldSet?.id}:
                    <span className='font-normal'>
                      {formData[fieldSet?.id]?.value}
                    </span>
                  </h2>
                )}
                {fieldSet.type === 'textarea' && (
                  <h2 className='flex gap-2 border-b-2 py-2 font-semibold capitalize'>
                    {fieldSet?.id}:
                    <span className='font-normal'>
                      {formData[fieldSet?.id]?.value}
                    </span>
                  </h2>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        type='button'
        onClick={handleReturn}
        className='bg-indigo-600 hover:bg-indigo-500 text-gray-100 w-full sm:w-fit px-14 py-1.5 font-semibold rounded-lg mt-6'
      >
        Return
      </button>
    </div>
  );
};
