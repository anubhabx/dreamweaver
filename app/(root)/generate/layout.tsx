import { ReactNode } from "react";

const GenerateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-[100vh-72px] w-full z-10 px-6 py-4">{children}</main>
  );
};

export default GenerateLayout;
