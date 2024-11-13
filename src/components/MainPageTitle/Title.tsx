import { ReactElement } from 'react';

import BlurFade from '../ui/blur-fade';

export const Title = (): ReactElement => {
  return (
    <div className="text-center">
      <BlurFade delay={0.25} inView>
        <h1 className="text-[62px] font-bold mb-4">Hey, I'm Skydan Dmytro</h1>
        <p className="text-secondaryFont mx-auto w-[80%] text-[22px] leading-[26px] ">
          A result-oriented web developer focused on creating and optimizing
          websites and web applications.
        </p>
      </BlurFade>
    </div>
  );
};
