import { CustomButton } from "./CustomButton";
import CustomInput from "./CustomInput";
import { FormMessageTextArea } from "./FormMessageTextArea";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContactFormValues } from "../types/formTypes";
import { sendEmail } from "../api/sendEmail";

const schema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup
    .string()
    .required()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Email must be a valid email address"
    ),
  message: yup.string().required(),
});

export const ContactForm = (): JSX.Element => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ContactFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: ContactFormValues) => {
    sendEmail(data);
  };

  return (
    <form
      className="flex flex-col gap-6 bg-darkBlue px-10 py-8 mx-auto sm:w-full md:w-2/3 lg:w-1/2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => <CustomInput labelText="Name" {...field} />}
      />
      {errors.name && (
        <span className="text-red-500 text-sm">{errors.name.message}</span>
      )}
      <Controller
        name="email"
        control={control}
        render={({ field }) => <CustomInput labelText="Email" {...field} />}
      />
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email.message}</span>
      )}
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <FormMessageTextArea labelText="Message" {...field} />
        )}
      />
      {errors.message && (
        <span className="text-red-500 text-sm">{errors.message.message}</span>
      )}
      <CustomButton text="Submit" type="submit" />
    </form>
  );
};
