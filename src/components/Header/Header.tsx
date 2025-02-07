import { ReactElement } from 'react';

import { HeaderNavigarionMenu } from './ui/HeaderNavigarionMenu';

export const Header = (): ReactElement => {
  return (
    <header className="bg-black py-4 w-full fixed z-20">
      <div className="container flex items-center justify-between font-bold">
        <span>Skydan Dmytro</span>
        <HeaderNavigarionMenu />
      </div>
    </header>
  );
};
