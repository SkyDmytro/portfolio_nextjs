import { FormEventHandler } from 'react';
import { Control, Controller, DeepPartial } from 'react-hook-form';

import { ContactFormValues } from '../../../types/formTypes';
import { CustomInput } from '../../ui';
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
      className="relative bg-zinc-900 h-full p-8 rounded-lg border border-zinc-800 space-y-6"
      onSubmit={handleSubmit}
    >
      {success && <SuccessForm />}
      {error && <ErrorForm error={error} />}
      {loading && <LoadingForm />}
      {!success && !error && !loading && (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <CustomInput labelText="Name" {...field} />
                )}
              />
              {validationErrors.name && (
                <span className="text-red-500 text-sm">
                  {validationErrors.name?.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <CustomInput labelText="Email" {...field} />
                )}
              />
              {validationErrors.email && (
                <span className="text-red-500 text-sm">
                  {validationErrors.email?.message}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <>
                  <label htmlFor="message" className="text-sm text-zinc-400">
                    Message
                  </label>
                  <textarea
                    {...field}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white resize-none"
                    placeholder="Your message"
                  ></textarea>
                </>
              )}
            />
            {validationErrors.message && (
              <span className="text-red-500 text-sm">
                {validationErrors.message?.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg text-white font-medium hover:from-emerald-500 hover:to-cyan-500 transition-colors"
          >
            Send Message
          </button>
        </>
      )}
    </form>
  );
};
