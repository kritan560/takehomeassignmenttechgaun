"use client";

import Button from "@/components/Button";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";
import nProgress from "nprogress";
import Logo from "../../(ListingPages)/components/Logo";

const SignInPage = () => {
  const [username, setUsername] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();
  const [error, setError] = useState<string | null>();

  function handleLogin() {
    if (username == "admin" && password == "admin") {
      setError(null);
      localStorage.setItem("isAuth", "true");
      window.location.href = "/";
      nProgress.start();
    } else {
      setError("Username and password did not match");
    }
  }

  return (
    <div className="w-96 bg-white border rounded-2xl border-stone-300 shadow-lg px-8 py-6 space-y-4">
      <Logo />
      <h2 className="text-2xl text-stone-600 text-center font-semibold mb-8">
        SignIn Form
      </h2>
      <CustomInput name="username" onChange={setUsername} />
      <CustomInput type="password" name="password" onChange={setPassword} />
      <p className="text-sm text-stone-500 font-mono">
        Test Credentials: Username=admin, password=admin
      </p>
      {error && (
        <p className="bg-red-100 text-sm rounded-lg px-4 py-1 text-red-600">
          {error}
        </p>
      )}
      <Button name="SignIn" onClick={handleLogin} />
    </div>
  );
};

export default SignInPage;
