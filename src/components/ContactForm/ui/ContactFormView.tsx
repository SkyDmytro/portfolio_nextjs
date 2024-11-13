import { FormEventHandler } from 'react';
import { Control, Controller, DeepPartial } from 'react-hook-form';

import { ContactFormValues } from '../../../types/formTypes';
import { FormMessageTextArea } from './FormMessageTextArea';
import { CustomInput } from '../../ui';
import { CustomButton } from '../../ui';
import { ErrorForm } from './ErrorForm';
import { LoadingForm } from './LoadingForm';
import { SuccessForm } from './SuccessForm';

interface ContactFormViewProps {
  control: Control<ContactFormValues>;
  validationErrors: DeepPartial<
    Record<keyof ContactFormValues, { message: string }>
  >;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  success: boolean;
  error: string | null;
  loading: boolean;
}

export const ContactFormView = ({
  control,
  validationErrors,
  handleSubmit,
  success,
  error,
  loading,
}: ContactFormViewProps): JSX.Element => {
  return (
    <form
      className="flex flex-col gap-6 bg-darkBlue px-10 py-8 mx-auto sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3 h-[650px]"
      onSubmit={handleSubmit}
    >
      {success && <SuccessForm />}
      {error && <ErrorForm error={error} />}
      {loading && <LoadingForm />}
      {!success && !error && !loading && (
        <>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <CustomInput labelText="Name" {...field} />}
          />
          {validationErrors.name && (
            <span className="text-red-500 text-sm">
              {validationErrors.name?.message}
            </span>
          )}
          <Controller
            name="email"
            control={control}
            render={({ field }) => <CustomInput labelText="Email" {...field} />}
          />
          {validationErrors.email && (
            <span className="text-red-500 text-sm">
              {validationErrors.email?.message}
            </span>
          )}
          <Controller
            name="message"
            control={control}
            render={({ field }) => <FormMessageTextArea {...field} />}
          />
          {validationErrors.message && (
            <span className="text-red-500 text-sm">
              {validationErrors.message?.message}
            </span>
          )}
          <CustomButton text="Submit" type="submit" />
        </>
      )}
    </form>
  );
};
