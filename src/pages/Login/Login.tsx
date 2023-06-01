import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../lib/Firebase/Firebase";
import Button from "../../components/button/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const handleEmailInput = (event: any) => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = (event: any) => {
    setPassword(event.target.value);
  };
  const handleSignIn = async () => {
    if (email === "" || password === "") {
      return alert("Please fill in all fields");
    }
    const user = await signIn(email, password);
    if (user === "auth/wrong-password") {
      return alert("Wrong password");
    }
    if (user === "auth/invalid-email") {
      return alert("invalid-email");
    }
    if (user) {
      localStorage.setItem("authToken", user);
    }
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
          className="inline-block bg-slate-200 m-1 p-3 rounded w-[300px]"
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailInput}
          ref={inputRef}
        />
        <input
          className="inline-block bg-slate-200 my-3 p-3 rounded w-[300px]"
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordInput}
        />
        <Button
          handleClick={handleSignIn}
          className="bg-blue px-8 py-3 rounded-md text-xl text-white mb-6"
        >
          Sign In
        </Button>
        <Link to="/register"> Don't have an account? Sign up</Link>
      </div>
    </>
  );
};

export default Login;
