import { useFetchData } from "../../hooks/useFetchData";
import { useContactForm } from "./hooks/useContactForm";
import { ContactFormView } from "./ui/ContactFormView";

export const ContactForm = (): JSX.Element => {
  const { control, errors, handleSubmit } = useContactForm();
  const { fetchData, data, error, loading } = useFetchData(
    import.meta.env.VITE_CONTACT_FORM_URL,
    { method: "POST" }
  );

  const handleFormSubmit = () => {
    console.log("1");
    handleSubmit((data) => fetchData(data));
  };

  return (
    <ContactFormView
      data={data}
      error={error}
      loading={loading}
      control={control}
      validationErrors={errors}
      handleSubmit={handleFormSubmit}
    />
  );
};
