import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import PageTitle from "../../PageTitle/PageTitle";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [itemslist, setItemList] = useState([]);
  useEffect(() => {
    const getItemList = async () => {
      const email = user?.email;

      const url = `https://nis-books.herokuapp.com/itemlist?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setItemList(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          Navigate("/login");
        }
      }
    };
    getItemList();
  }, [user]);
  return (
    <div className="mx-auto">
      <PageTitle title={"My Items"}></PageTitle>
      <h3>Your Items: {itemslist.length}</h3>
      {itemslist.map((items) => (
        <div key={items._id}>
          <table className="border-2 mx-5 my-3 border-green-600 grid items-center justify-center gap-3">
            <tr>
              <th>{items.inventory}</th>
            </tr>
            <tr>
              <td>Email: {items.email}</td>
            </tr>
            <tr>
              <td>Address: {items.address}</td>
            </tr>
          </table>
        </div>
      ))}
      <Link to="/">
        <button className="px-5 py-2 my-2 bg-green-400 rounded hover:bg-green-500 transition hover:text-white">
          My Item
        </button>
      </Link>
    </div>
  );
};

export default MyItems;
