import { Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function UserInformation() {
  let [tableArr, setTableArr] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("users");
    if (data) {
      setTableArr(JSON.parse(data));
    }
  }, []);

  const deleteHandler = (index)=>{
    let filterData = tableArr.filter((_,i)=>i !== index)
    setTableArr(filterData)
  }

  return (
    <div className="py-5 px-20">
    <Table className="w-full border-collapse">
  <thead className="bg-green-700 text-white">
    <tr>
      <th className="px-4 py-2 border">Sr. no</th>
      <th className="px-4 py-2 border">Name</th>
      <th className="px-4 py-2 border">Email</th>
      <th className="px-4 py-2 border">Room Type</th>
      <th className="px-4 py-2 border">Guests</th>
      <th className="px-4 py-2 border">Arrival Date & Time</th>
      <th className="px-4 py-2 border">Departure Date</th>
      <th className="px-4 py-2 border">Special Request</th>
      <th className="px-4 py-2 border">Delete</th>
    </tr>
  </thead>
  <tbody>
    {tableArr.map((e, i) => (
      <tr key={i} className="hover:bg-gray-200">
        <td className="px-4 py-2 border text-center">{i + 1}</td>
        <td className="px-4 py-2 border text-center">{e.firstName} {e.lastName}</td>
        <td className="px-4 py-2 border text-center">{e.email}</td>
        <td className="px-4 py-2 border text-center">{e.roomType}</td>
        <td className="px-4 py-2 border text-center">{e.guest}</td>
        <td className="px-4 py-2 border text-center">{e.arivvalDate} {e.arivvalTime}</td>
        <td className="px-4 py-2 border text-center">{e.departureDate}</td>
        <td className="px-4 py-2 border text-center">{e.specialRequst}</td>
        <td color="danger" onClick={()=>deleteHandler(i,e)} className="px-4 py-2 border flex justify-center "><Trash className="" color="red"/></td>
      </tr>
    ))}
  </tbody>
</Table>

    </div>
  );
}
