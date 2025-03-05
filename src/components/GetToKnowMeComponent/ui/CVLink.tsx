import { File, Link as LinkIcon } from 'lucide-react';
import Link, { LinkProps } from 'next/link';

export const CVLink = ({ href }: LinkProps) => {
  return (
    <Link
      href={href}
      className="flex bg-lightBlue/50 hover:bg-lightBlue text-white w-fit gap-2 p-2 rounded-lg"
    >
      <File /> Open Cv <LinkIcon />
    </Link>
  );
};
