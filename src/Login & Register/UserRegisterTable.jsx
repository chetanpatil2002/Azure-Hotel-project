import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function UserRegisterTable() {
  let [userData, setUserData] = useState([]);

  useEffect(() => {
    const userRegister = localStorage.getItem("userRegister");
    console.log("🚀 ~ useEffect ~ userRegister:", userRegister);
    if (userRegister) {
      setUserData(JSON.parse(userRegister));
    }
  }, []);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10">

        <div className="overflow-x-auto">

     
    <Table hover className="w-60 sm:w-64 md:w-72  border-collapse flex md:flex-col">
      <thead className="bg-green-700 text-white">
        <tr>
          <th className="px-4 py-2 border">Sr.no</th>
          <th className="px-4 py-2 border">Name</th>
          <th className="px-4 py-2 border">Email</th>
          <th className="px-4 py-2 border">Password</th>
        </tr>
      </thead>
      <tbody>
        {userData?.map?.((e, i) => {
          // console.log("ee-->", e

          // );
          return (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td  className="px-4 py-2 border text-center">{e?.name}</td>
              <td  className="px-4 py-2 border text-center">{e?.email}</td>
              <td  className="px-4 py-2 border text-center">{e?.password}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    </div>
    </div>
  );
}
