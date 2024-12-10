"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input";
import { useSignInContext } from "./SignInContext";

import HeadLogo from "./HeadLogo";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({ message: "Please provide a valid email address" }),
});

const ForgotPasswordForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const { handleSetForm } = useSignInContext();

  return (
    <div>
      <div className="text-center mb-6 pt-2.5">
      <HeadLogo />
        <p className="mt-2 mb-8 text-sm md:text-base text-body sm:mb-10">
          We'll send you a link to reset your password
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center"
        >
          <div className="flex flex-col space-y-3.5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="block text-gray-700 font-semibold text-sm leading-none mb-3 cursor-pointer">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:outline-none focus:border-dark h-11 md:h-12 rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
            <Button
              className="h-12 text-[13px] md:text-[15px] leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-dark text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-light-dark hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto ltr:sm:ml-2 rtl:sm:mr-2 md:h-12 lg:h-14 flex-shrink-0"
              type="submit"
            >
              Reset Password
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-white">Or</span>
      </div>
      <div className="mt-5 mb-1 text-base text-center text-body">
        Back to
        <Button
          variant={"text"}
          className="md:text-base font-bold underline text-dark hover:no-underline focus:outline-none p-0 ml-1.5"
          onClick={()=>handleSetForm(1)}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
