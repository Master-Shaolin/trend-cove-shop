"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface ISignInContext {
  form: number;
  handleSetForm: (nForm:number) => void,
}

const SignInContext = createContext<ISignInContext>({
  form: 1,
  handleSetForm: () => {},
});

interface IProps {
  children: ReactNode;
}

export function SignInProvider({ children }: IProps) {
  const [form, setForm] = useState(1);

  const handleSetForm = (nForm: number) => {
    setForm(nForm);
  };

  return (
    <SignInContext.Provider
      value={{
        form,
        handleSetForm,
      }}
    >
      {children}
    </SignInContext.Provider>
  );
}

export const useSignInContext = () => useContext(SignInContext);
