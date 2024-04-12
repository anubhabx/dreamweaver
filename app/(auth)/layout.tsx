import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
