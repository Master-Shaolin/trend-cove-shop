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
import banner1 from "/public/images/newsletter.jpg";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/Form";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input";
import { IoIosClose } from "react-icons/io";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({ message: "Please provide a valid email address" }),
});

export const SubscribeModal = NiceModal.create(() => {
  const modal = useModal();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleModalOpen = (open: boolean) => {
    if (!open) {
      modal.remove();
    }
  };

  return (
    <Dialog open={modal.visible} onOpenChange={handleModalOpen}>
      <DialogContent className="w-full max-w-full p-0 border-none absolute left-1/2 transform -translate-x-1/2 shadow-xl h-auto max-h-full top-1/2 -translate-y-1/2 rounded-lg opacity-0 sm:w-[450px] md:w-[550px] lg:w-[980px] xl:w-[1170px] data-[state=open]:animate-fadeInForwards"
        hiddenCloseBtn
      >
        <div className="relative">
          <DialogClose className="fixed z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md -top-3 md:-top-4 -right-3 md:-right-4">
            <IoIosClose className="h-7 w-7" />
          </DialogClose>
          <DialogHeader className="hidden">
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="h-full overflow-y-auto rounded-lg">
            <div className="flex items-center justify-center">
              <div className="w-full flex flex-col max-w-full max-h-full bg-white overflow-hidden rounded-md">
                <div className="flex items-center">
                  <div className="flex-shrink-0 items-center justify-center bg-gray-200 hidden lg:flex lg:w-[520px] xl:w-auto">
                    <img
                      className="object-cover w-full h-full"
                      src={banner1.src}
                    />
                  </div>
                  <div className="flex flex-col px-5 py-7 sm:p-10 md:p-12 xl:p-14 text-center w-full">
                    <h4 className="uppercase font-semibold text-xs sm:text-sm text-body mb-2 lg:mb-4">
                      subscribe now
                    </h4>
                    <h2 className="text-dark text-lg sm:text-xl md:text-2xl leading-8 font-bold mb-5 sm:mb-7 md:mb-9">
                      And Get Offer On New Collection
                    </h2>
                    <p className="text-body text-sm leading-6 md:leading-7">
                      Do subscribe the ChawkBazar to receive updates on new
                      arrivals, special offers & our promotions
                    </p>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="pt-8 sm:pt-10 md:pt-14 mb-1 sm:mb-0"
                      >
                        <div className="flex gap-2 sm:flex-row md:flex-col items-start justify-end">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormControl>
                                  <Input
                                    className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out border-gray-300 focus:outline-none focus:border-dark md:h-12 g:px-7 h-12 lg:h-14 text-center bg-gray-50 rounded-md"
                                    placeholder="Write your email here"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage className="text-red-500 text-xs" />
                              </FormItem>
                            )}
                          />
                          <Button
                            variant={"default"}
                            className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-dark text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart w-full h-12 lg:h-14 mt-3 sm:mt-4"
                            type="submit"
                          >
                            Subscribe
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});
