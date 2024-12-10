"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface ISignInContext {
  form: number;
  isModalOpen: boolean;
  handleSetIsModalOpen: (open: boolean) => void;
  handleSetForm: (nForm:number) => void;
}

const SignInContext = createContext<ISignInContext>({
  form: 1,
  isModalOpen: false,
  handleSetIsModalOpen: () => {},
  handleSetForm: () => {},
});

interface IProps {
  children: ReactNode;
}

export function SignInProvider({ children }: IProps) {
  const [form, setForm] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSetForm = (nForm: number) => {
    setForm(nForm);
  };

  const handleSetIsModalOpen = (open: boolean) => {
    setIsModalOpen(open);
  };

  return (
    <SignInContext.Provider
      value={{
        form,
        isModalOpen,
        handleSetForm,
        handleSetIsModalOpen
      }}
    >
      {children}
    </SignInContext.Provider>
  );
}

export const useSignInContext = () => useContext(SignInContext);
