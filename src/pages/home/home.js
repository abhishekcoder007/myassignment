import React, { useState, useContext,use } from "react";
import Navbar from "../../components/navbar/navbar";
import useFetch from "../../components/customhooks/fetchapi";
import style from "./home.module.css";
import { Context } from "../../index.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { alldata } = useFetch("https://jsonplaceholder.typicode.com/comments");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentitem, setCurrentitem] = useState(1);
  const { setuserDetails, users } = useContext(Context);
  const navigate = useNavigate();
  const pageSize = 10;

  if (!alldata) {
    return <p>Loading...</p>;
  }

  function handleDetails(id) {
    const data = alldata.filter((ele, index) => ele.id === id);
    console.log(data);
    setuserDetails(data);
    navigate("/details");
  }
  let lastIndex = currentPage * pageSize;
  let firstIndex = lastIndex - 10;
  let myslice = alldata.slice(firstIndex, lastIndex);
  let npage = Math.ceil(alldata.length / pageSize);
  let numbers = [...Array(npage + 1).keys()].slice(1);

  let itemLastIndex = currentitem * pageSize;
  let itemFirstIndex = itemLastIndex - 10;
 
  let itemno = [...Array(npage + 1).keys()].slice(
    itemFirstIndex,
    itemLastIndex
  );
  let itemolast = itemno[itemno.length - 1];

  console.log(itemFirstIndex);
  const onPagechange = (id) => {
    if (id >= 1) setCurrentPage(id);
  };
  const prevPage = () => {
    if (currentitem !== firstIndex && currentitem !== 1)
      setCurrentitem(currentitem - 1);
  };
  const nextPage = () => {
    if (itemolast == itemFirstIndex) {
      return;
    } else {
      setCurrentitem(currentitem + 1);
    }
  };

  return (
    <div className={style.container}>
      <Navbar data={alldata} />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Body</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            <>
              {users.map((ele) => (
                <tr key={ele.id}>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td >{ele.body}</td>
                  <td>
                    <button className={style.detailbutton}>click</button>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            myslice.map((ele) => (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.body}</td>

                <td>
                  <button
                    onClick={() => handleDetails(ele.id)}
                    className={style.detailbutton}
                  >
                    click
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className={style.pagination}>
        <button onClick={prevPage}>prev</button>

        {itemno.map((ele) => (
          <>
            <span
              onClick={() => onPagechange(ele)}
              style={{ marginLeft: "11px" }}
            >
              {ele}
            </span>
          </>
        ))}
        <button style={{ marginLeft: "5px" }} onClick={nextPage}>next</button>
      </div>
    </div>
  );
};

export default Home;
