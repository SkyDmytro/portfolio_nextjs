import { MailWarning } from "lucide-react";

export const ErrorForm = ({ error }: { error: string | null }) => {
  return (
    <div className=" flex h-full flex-col justify-evenly items-center bg-red-500 p-4 rounded text-white font-bold text-3xl">
      <div className="text-center">
        <p className="font-bold">Error</p>

        <p>{error}</p>
      </div>
      <p>Please try again</p>
      <MailWarning className="h-20 w-20" />
    </div>
  );
};
