import { Control, Controller, DeepPartial } from "react-hook-form";
import { CustomButton } from "../../CustomButton";
import CustomInput from "../../CustomInput";
import { FormMessageTextArea } from "../../FormMessageTextArea";
import { FormEventHandler } from "react";
import { ContactFormValues } from "../../../types/formTypes";
interface ContactFormViewProps {
  control: Control<ContactFormValues>;
  validationErrors: DeepPartial<
    Record<keyof ContactFormValues, { message: string }>
  >;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  data: any;
  error: string | null;
  loading: boolean;
}

export const ContactFormView = ({
  control,
  validationErrors,
  handleSubmit,
  data,
  error,
  loading,
}: ContactFormViewProps): JSX.Element => {
  return (
    <form
      className="flex flex-col gap-6 bg-darkBlue px-10 py-8 mx-auto sm:w-full md:w-2/3 lg:w-1/2"
      onSubmit={handleSubmit}
    >
      {data && (
        <span className="text-primaryFont text-xl font-bold">
          Thank you for your message!
        </span>
      )}
      {error && (
        <span className="text-primaryFont text-xl font-bold">{error}</span>
      )}
      {loading && <span>Loading...</span>}
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
        render={({ field }) => (
          <FormMessageTextArea labelText="Message" {...field} />
        )}
      />
      {validationErrors.message && (
        <span className="text-red-500 text-sm">
          {validationErrors.message?.message}
        </span>
      )}
      <CustomButton text="Submit" type="submit" />
    </form>
  );
};
