"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useSignInContext } from "./SignInContext";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import { Button } from "@/components/ui/Button/Button";
import { Input, PasswordInput } from "@/components/ui/Input";

import { Switch } from "@/components/ui/Switch/Switch";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import HeadLogo from "./HeadLogo";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({ message: "Please provide a valid email address" }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
  remember: z.boolean(),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
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
          Login with your email & password
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="block text-gray-700 font-semibold text-sm leading-none mb-3 cursor-pointer">
                    Password
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-gray-300 focus:border-dark h-11 md:h-12 rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-shrink-0">
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <div className="flex items-center gap-3">
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="block text-gray-700 font-medium text-sm leading-none cursor-pointer">
                          Remember me
                        </FormLabel>
                      </div>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex ltr:ml-auto rtl:mr-auto">
                <Button
                  variant={"text"}
                  type="button"
                  className="text-sm underline text-dark font-medium ltr:pl-3 rtl:pr-3 hover:no-underline focus:outline-none"
                  onClick={()=>handleSetForm(2)}
                >
                  Forgot password?
                </Button>
              </div>
            </div>
            <Button
              className="h-12 text-[13px] md:text-[15px] leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md  bg-dark text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-light-dark hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto ltr:sm:ml-2 rtl:sm:mr-2 md:h-12 lg:h-14 flex-shrink-0"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-white">Or</span>
      </div>
      <Button className="text-[13px] md:text-sm gap-1.5 leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md bg-dark text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-light-dark hover:shadow-cart h-11 md:h-12 w-full mt-2.5">
        <FaFacebookSquare className="w-5 h-5" />
        <span>Login With Facebook</span>
      </Button>
      <Button className="text-[13px] md:text-sm gap-1.5 leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none rounded-md bg-dark text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-light-dark hover:shadow-cart h-11 md:h-12 w-full mt-2.5">
        <AiFillGoogleSquare className="w-6 h-6" />
        <span>Login With Google</span>
      </Button>
      <div className="mt-5 mb-1 text-base text-center text-body">
        Don't have any account?
        <Button
          variant={"text"}
          className="md:text-base font-bold underline text-dark hover:no-underline focus:outline-none p-0 ml-1.5"
          onClick={()=>handleSetForm(3)}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
