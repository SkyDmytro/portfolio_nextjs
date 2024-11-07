import { ContactFormValues } from '../types/formTypes';
import { postData } from './requests';

export const sendEmail = (formData: ContactFormValues) => {
  console.log(formData);
  return postData('/send-email', formData)
    .then(res => res)
    .catch(e => console.log(e));
};
