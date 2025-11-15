import type React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="p-4 xl:px-0 mt-5 w-full mx-auto max-w-7xl">
        {children}
      </div>
    </div>
  );
};

export default Container;
