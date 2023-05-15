"use client";
import "../globals.css";
import { AiFillFacebook } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));

    if (name === "email") {
      // Check if email is valid
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email address",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    } else if (name === "username") {
      // Check if username is a lowercase English word or number, with 3-10 characters
      const usernameRegex = /^[a-z0-9]{3,10}$/;
      if (!usernameRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          username:
            "Username must be a lowercase English word or number, with 3-10 characters",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
      }
    } else if (name === "name") {
      // Check if name has at least two words
      const nameWords = value.split(" ");
      if (nameWords.length < 2) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: "Full name should have at least two words",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
      }
    } else if (name === "password") {
      // Check if password has at least 6 characters and one lowercase and one uppercase letter
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
      if (!passwordRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password:
            "Password must be at least 6 characters and contain one lowercase and one uppercase letter",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (errors.email || errors.name || errors.username || errors.password) {
      return;
    }

    try {
      if (values.email === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "email is required",
        }));
        return;
      }
      if (values.name === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          name: "Username is required",
        }));
        return;
      }
      if (values.username === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: "Username is required",
        }));
        return;
      }
      if (values.password === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "password is required",
        }));
        return;
      }
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5000/user/signin",
        values
      );
      console.log(response.data);
      if (response.data.success) {
        console.log(response.data.user);
        router.push("/dashboardHome");
      }
      // Handle the successful sign-in response
    } catch (error: any) {
      if (error.response && error.response.data) {
        const { email, username } = error.response.data;
        if (email) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: email,
          }));
        }
        if (username) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            username: username,
          }));
        }
      }
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="my-8 bg-white grid grid-cols-1">
      <div className="lg:w-3/12 w-4/6 mx-auto border pt-12 pb-8">
        <h1 className="text-center text-3xl mb-10">Pictolife</h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:px-6 px-3 gap-4"
        >
          <button className="text-blue-600 flex justify-center items-center ">
            <span className="text-xl mr-2">
              <AiFillFacebook></AiFillFacebook>
            </span>{" "}
            Log in with facebook
          </button>
          <div className="divider">OR</div>

          <div className="grid grid-cols-1 gap-3">
            {" "}
            <input
              type="text"
              placeholder="Email address"
              className="focus:outline-none focus:border-blue-300 border w-full py-1 px-2"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <input
              type="text"
              placeholder="Full Name"
              className="focus:outline-none focus:border-blue-300 border w-full py-1 px-2"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <input
              type="text"
              placeholder="Username"
              className="focus:outline-none focus:border-blue-300 border w-full py-1 px-2"
              name="username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username}</p>
            )}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="focus:outline-none focus:border-blue-300 border border-r-none w-full py-1 px-2"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 font-bold text-white py-1 px-2"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign up"}
          </button>
        </form>
      </div>
      <div className="lg:w-3/12 flex  mx-auto px-6 py-4 items-center justify-center mt-4 w-4/6 border">
        <p className="text-center text-sm">
          Have an account?{" "}
          <Link href="/login" className="text-blue-400 font-bold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
