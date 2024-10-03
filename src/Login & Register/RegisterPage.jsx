import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function RegisterPage() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let [arr, setArr] = useState([]);
  let [showePass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("userRegister", JSON.stringify([...arr, user]));
    setArr([...arr, user]);
    setUser({
      name: "",
      email: "",
      password: "",
    });
    navigate("/login");
    toast.success("Register Successfully");
  };

  const hideShowPass = () => {
    setShowPass(!showePass);
  };

  return (
    <div className="py-20">
      <div className="border-2 border-gray-300 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 p-8 bg-white">
        <Form onSubmit={submitHandler}>
          <h1 className="text-3xl text-center font-bold mb-6 text-gray-800">
            Register Form
          </h1>
          <hr className="h-1 bg-gray-200 mb-6" />
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Name
            </Label>
            <Input
              className="mt-2 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="text"
              placeholder="Name"
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              value={user.email}
              className="mt-4 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <div className="flex items-center mt-4">
              <Input
                className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="examplePassword"
                name="password"
                placeholder="Password"
                type={showePass ? "text" : "password"}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <div
                className="ml-2 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={hideShowPass}
              >
                {showePass ? <EyeOff /> : <Eye />}
              </div>
            </div>
          </FormGroup>
          <Button
            type="submit"
            className="w-full bg-green-800 text-white mt-6 py-2 rounded-lg hover:bg-green-600 transition-all"
          >
            Submit
          </Button>
          <div className="flex justify-center items-center mt-5">
            <p className="text-center">Already Have An Account</p>
            <a
              href=""
              className="text-blue-700 underline "
              onClick={() => navigate("/login")}
            >
              Sign in
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}
