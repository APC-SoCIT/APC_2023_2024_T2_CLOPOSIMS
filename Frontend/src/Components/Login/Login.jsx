import LogInForm from "./LogInForm";
import LoginContent from "./LoginContent";

function Login() {
  return (
    <>
      <div className="Form">
        <LogInForm />
      </div>
      <div className="Description">
        <LoginContent />
      </div>
    </>
  );
}

export default Login;
