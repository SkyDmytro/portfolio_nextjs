import { useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';
import { ContactFormValues } from '../../types/formTypes';
import { useContactForm } from './hooks/useContactForm';
import { ContactFormView } from './ui/ContactFormView';

export const ContactForm = (): JSX.Element => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { control, errors, handleSubmit, reset } = useContactForm();
  const {
    fetchData,
    data,
    error: requestError,
    loading,
  } = useFetchData('/send-email', {
    method: 'POST',
  });

  const onSubmit = (data: ContactFormValues) => {
    fetchData(data);
  };

  useEffect(() => {
    if (data) {
      setSuccess(true);
      reset();
    }

    const timeout = setTimeout(() => {
      setSuccess(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [data]);

  useEffect(() => {
    setError(requestError);

    const timeout = setTimeout(() => {
      setError(null);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [requestError]);

  return (
    <ContactFormView
      success={success}
      error={error}
      loading={loading}
      control={control}
      validationErrors={errors}
      handleSubmit={handleSubmit(onSubmit)}
    />
  );
};
