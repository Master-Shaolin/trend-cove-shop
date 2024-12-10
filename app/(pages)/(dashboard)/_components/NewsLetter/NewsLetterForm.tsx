"use client";

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

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({ message: "Please provide a valid email address" }),
});

const NewsLetterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-shrink-0 w-full sm:w-96 md:w-[545px]"
      >
        <div className="flex flex-col gap-2 sm:flex-row items-start justify-end">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-sm lg:text-[15px] font-body placeholder-body min-h-12 transition duration-200 ease-in-out border-gray-300 focus:outline-none focus:border-dark md:h-12 lg:px-7 h-12 lg:h-14 ltr:sm:text-left rtl:sm:text-right bg-white rounded-md"
                    placeholder="Write your email here"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs" />
              </FormItem>
            )}
          />
          <Button
            className="h-16 text-[13px] md:text-[15px] leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-dark text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto ltr:sm:ml-2 rtl:sm:mr-2 md:h-12 lg:h-14 flex-shrink-0"
            type="submit"
          >
            Subscribe
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NewsLetterForm;
