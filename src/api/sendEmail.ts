import { postData } from './requests';
import { ContactFormValues } from '../types/formTypes';
export const sendEmail = (formData: ContactFormValues) => {
  console.log(formData);
  return postData('/send-email', formData)
    .then(res => res)
    .catch(e => console.log(e));
};
