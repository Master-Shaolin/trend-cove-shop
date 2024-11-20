"use client"
import NiceModal from "@ebay/nice-modal-react";

export function Providers(props: {
  children: React.ReactNode;
  headers?: Headers;
}) {

  return (
    <NiceModal.Provider>{props.children}</NiceModal.Provider>
  );
}
