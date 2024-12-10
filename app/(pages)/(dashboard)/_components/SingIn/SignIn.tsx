import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useSignInContext } from "./SignInContext";

const SignIn = () => {
  const { form } = useSignInContext();
  switch (form) {
    case 1:
      return <LoginForm />;
    case 2:
      return <ForgotPasswordForm />;
    case 3:
      return <RegisterForm /> ;
  }
}

export default SignIn
