import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hnadleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        console.log("Login successful");
        sessionStorage.setItem("user_id", user.id);
        sessionStorage.setItem("user_name", user.name);
        navigate("/");

        return user;
      } else {
        console.error("Login failed: Invalid credentials");
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error;
    }
  };

  return (
    <>
      <>
        <section>
          <div className="  w-full px-20 py-10">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="w-full"
                  alt="Phoneimage"
                />
              </div>
              <div className="md:w-8/12 lg:ml-6 lg:w-[30rem] ">
                <Card color="transparent">
                  <Typography variant="h4" color="blue-gray">
                    Login
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to login.
                  </Typography>
                  <form className="mt-8 mb-2 w-80  sm:w-full">
                    <div className="mb-1 flex flex-col gap-6">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Your Email
                      </Typography>
                      <Input
                        size="lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Password
                      </Typography>
                      <Input
                        type="password"
                        size="lg"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                    <Checkbox
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal"
                        >
                          I agree the
                          <div className="font-medium transition-colors hover:text-gray-900">
                            &nbsp;Terms and Conditions
                          </div>
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button onClick={hnadleLogin} className="mt-6" fullWidth>
                      LOGIN
                    </Button>
                    <Typography
                      color="gray"
                      className="mt-4 text-center font-normal"
                    >
                      Dont have an account?{" "}
                      <a href="/signup" className="font-medium text-gray-900">
                        Sign Up
                      </a>
                    </Typography>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default Login;
