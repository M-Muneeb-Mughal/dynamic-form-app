interface FormErrorProps {
  error: string | undefined;
}

export const FormError: React.FC<FormErrorProps> = ({ error }) => {
  return (
    <>
      {error && (
        <p className='mt-2 text-xs text-red-600'>
          <span className='font-medium'>Error!</span> {error}
        </p>
      )}
    </>
  );
};
