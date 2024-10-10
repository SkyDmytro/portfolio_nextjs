import React from "react";

export interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <div className="flex flex-col gap-3 text-center">
      <h2 className="text-3xl font-bold tracking-[1px] ">
        {title.toUpperCase()}
      </h2>
      <div className="bg-secondaryFont w-5 h-[3px] rounded mx-auto" />
      <p className="text-lg text-secondaryFont mx-auto sm:w-[80%] md:w-[50%]">
        {subtitle}
      </p>
    </div>
  );
};
