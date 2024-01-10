import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const signupdata = {
        name,
        email,
        password,
        cart:[
          
        ]
      };
      await axios.post(" http://localhost:5000/users", signupdata);
      console.log("Signup Successfull!!!!");
    } catch (error) {
      console.log(error);
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
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample image"
                />
              </div>
              <div className="md:w-8/12 lg:ml-6 lg:w-[30rem] ">
                <Card color="transparent">
                  <Typography variant="h4" color="blue-gray">
                    Sign up
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to Sign Up.
                  </Typography>
                  <form className="mt-8 mb-2 w-80  sm:w-full">
                    <div className="mb-1 flex flex-col gap-6">
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                      >
                        Your Name
                      </Typography>
                      <Input
                        size="lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        // placeholder="name@mail.com"
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
                        Your Email
                      </Typography>
                      <Input
                              
                        size="lg"
                        placeholder="name@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
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
                          <a
                            href="#"
                            className="font-medium transition-colors hover:text-gray-900"
                          >
                            &nbsp;Terms and Conditions
                          </a>
                        </Typography>
                      }
                      containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button onClick={handleSignup} className="mt-6" fullWidth>
                      sign up
                    </Button>
                    <Typography
                      color="gray"
                      className="mt-4 text-center font-normal"
                    >
                      Already have an account?{" "}
                      <a href="#" className="font-medium text-gray-900">
                        LogIn
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

export default Signup;
