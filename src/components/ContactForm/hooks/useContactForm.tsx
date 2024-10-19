// ContactFormController.ts
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContactFormValues } from "../../../types/formTypes";

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

export const useContactForm = () => {
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

  return { handleSubmit, control, errors };
};
