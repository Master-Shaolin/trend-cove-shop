"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog/Dialog";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { IoIosClose } from "react-icons/io";
import SignIn from "./SignIn";
import { SignInProvider } from "./SignUpContext";

export const SignInModal = NiceModal.create(() => {
  const modal = useModal();

  const handleModalOpen = (open: boolean) => {
    if (!open) {
      modal.remove();
    }
  };

  return (
    <Dialog open={modal.visible} onOpenChange={handleModalOpen}>
      <DialogContent
        className="w-full max-w-full p-0 border-none md:w-auto absolute left-1/2 transform -translate-x-1/2 shadow-xl h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg opacity-0 data-[state=open]:animate-fadeInForwards"
        hiddenCloseBtn
      >
        <div className="relative">
          <DialogClose className="fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md -top-3 md:-top-4 -right-3 md:-right-4">
            <IoIosClose className="h-7 w-7" />
          </DialogClose>
          <DialogHeader className="hidden">
            <DialogTitle>Sign In Modal</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="w-full px-5 py-5 mx-auto overflow-hidden bg-white border border-gray-300 rounded-lg sm:w-96 md:w-[450px] sm:px-8">
            <SignInProvider>
              <SignIn />
            </SignInProvider>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});
