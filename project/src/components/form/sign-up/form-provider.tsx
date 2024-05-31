"use client"

import { AuthContextProvider } from "@/context/use-auth-form-context";
import { useSignUpForm } from "@/hooks/use-sign-up";
import { Loader } from "../loader";
import React from "react";
import { FormProvider } from "react-hook-form";

type Props = {
  children: React.ReactNode;
};

const SignUpFormProvider = ({ children }: Props) => {
  const { methods, onHandleSubmit, loading } = useSignUpForm();
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <AuthContextProvider>
          <FormProvider {...methods}>
            <form onSubmit={onHandleSubmit} className="h-full">
              <div className="flex flex-col justify-between gap-3 h-full">
                <Loader loading={loading}>{children}</Loader>
              </div>
            </form>
          </FormProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
};

export default SignUpFormProvider;
