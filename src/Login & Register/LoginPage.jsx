import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default function LoginPage() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  let [arr, setArr] = useState([]);
  let [showePass, setShowPass] = useState(false);
  let [cookies, setCookies] = useCookies([]);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const userRegister = JSON.parse(localStorage.getItem("userRegister"));
    let mathUser = userRegister.find((e) => {
      return e.email === user.email;
    });
    if (
      mathUser &&
      user.email === mathUser.email &&
      user.password === mathUser.password
    ) {
      setCookies("user", user);
      navigate("/");
      setArr([...arr, user]);
      setUser({
        email: "",
        password: "",
      });
    } else {
      toast.warn("email password does not match")
    }
  };

  const hideShowPass = () => {
    setShowPass(!showePass);
  };

  return (
    <div className="py-20">
      <div className="border-2 border-gray-300 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-10 p-8 bg-white">
        <Form onSubmit={submitHandler}>
          <h1 className="text-2xl text-center font-bold mb-6 text-gray-800">
            Login Form
          </h1>
          <hr className="h-1 bg-gray-200 mb-6" />
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
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="mt-2 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <div className="flex items-center mt-4">
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type={showePass ? "text" : "password"}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full bg-green-800 text-white mt-6 py-2 rounded-lg hover:bg-green-700 transition-all"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
