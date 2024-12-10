"use client";
import NiceModal from "@ebay/nice-modal-react";
import { SignInProvider } from "./(pages)/dashboard/_components/SingIn/SignUpContext";

export function Providers(props: {
  children: React.ReactNode;
  headers?: Headers;
}) {
  return (
    <NiceModal.Provider>
      <SignInProvider>{props.children}</SignInProvider>
    </NiceModal.Provider>
  );
}
