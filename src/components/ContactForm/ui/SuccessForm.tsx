import { MailCheck } from 'lucide-react';

export const SuccessForm = () => {
  return (
    <div className="flex justify-evenly  items-center flex-col font-bold h-full text-3xl">
      <span>Success! Your form was submitted. ✅</span>
      <span>Thank you for your message!</span>
      <MailCheck className="h-20 w-20" />
    </div>
  );
};
