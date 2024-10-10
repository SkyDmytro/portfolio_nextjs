import { CustomButton } from "./CustomButton";
import CustomInput from "./CustomInput";
import { FormMessageTextArea } from "./FormMessageTextArea";
import { Controller, useForm } from "react-hook-form";

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = (): JSX.Element => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const onSubmit = (data: ContactFormValues) => console.log(data);

  return (
    <form
      className="flex flex-col gap-6 bg-darkBlue px-10 py-8 mx-auto sm:w-full md:w-2/3 lg:w-1/2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="name"
        control={control}
        rules={{ required: true, minLength: 2 }}
        render={({ field }) => <CustomInput labelText="Name" {...field} />}
      />
      {errors.name && (
        <span className="text-red-500 text-sm">
          {errors.name.type === "required"
            ? "This field is required"
            : "Name must be at least 2 characters"}
        </span>
      )}
      <Controller
        name="email"
        control={control}
        rules={{
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        }}
        render={({ field }) => <CustomInput labelText="Email" {...field} />}
      />
      {errors.email && (
        <span className="text-red-500 text-sm">
          {errors.email.type === "required"
            ? "This field is required"
            : "Email must be a valid email address"}
        </span>
      )}
      <Controller
        name="message"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <FormMessageTextArea labelText="Message" {...field} />
        )}
      />
      {errors.message && (
        <span className="text-red-500 text-sm">This field is required</span>
      )}
      <CustomButton text="Submit" type="submit" />
    </form>
  );
};
