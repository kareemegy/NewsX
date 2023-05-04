import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import { useState } from "react";
import { auth, signUp } from "../../lib/Firebase/Firebase";
import { signOut } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // auth.currentUser && navigate("/dashboard");
  console.log(auth.currentUser);
  // signOut(auth)
  const handleEmailInput = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event: any) => {
    setPassword(event.target.value);
  };
  const handleSignUp = async () => {
    const user = await signUp(email, password);
    // clear inputs
    setEmail("");
    setPassword("");
    navigate("/dashboard");
    console.log(user);
  };
  return (
    <>
      <div className="container m-auto p-4 h-[100vh] flex flex-col items-center justify-center">
        <img
          className="w-[190px] mb-[90px]"
          src="src/assets/images/logo-black.svg"
          alt="News LOGO"
        />
        <h1 className="text-3xl mb-3">Login</h1>

        <input
          className="inline-block bg-slate-200 m-1 p-3 rounded"
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailInput}
        />
        <input
          className="inline-block bg-slate-200 my-3 p-3 rounded"
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordInput}
        />
        <Button
          handleClick={handleSignUp}
          className="bg-blue px-8 py-3 rounded-md text-xl text-white mb-6"
        >
          SIGN UP
        </Button>
        <Link to="/login"> Have an account? Log in</Link>
      </div>
    </>
  );
};

export default Register;
