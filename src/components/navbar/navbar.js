import React, { useState, useContext } from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import { Context } from "../../index.js";
import { useNavigate } from "react-router-dom";

const Navbar = ({ data }) => {
  const [show, setshow] = useState(false);
  const [search, setsearch] = useState(false);
  const { setusers, users } = useContext(Context);

  const navigate = useNavigate();

  const handleSearch = (event) => {
    const value = event.target.value;
    console.log(value);
    navigate("/");
    const filterData = data.filter((ele, index) =>
      ele.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filterData);
    setusers(filterData);
  };
  const shownav = () => {
    setshow(true);
  };

  const hidenav = () => {
    setshow((old) => {
      if (old === false) {
        return true;
      } else return false;
    });
  };

  return (
    <>
      <div className={style.main_container}>
        <div>
          <h1 style={{ marginLeft: "51px" }}>Assignment</h1>
        </div>
        <div>
          <input
            className={style.searchbar}
            type="text"
            name="searchbar"
            placeholder="seach username here ..."
            onChange={handleSearch}
          />
        </div>
        <div className={style.main_containeritems}>
          <span>
            {" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              home
            </Link>
          </span>
          <span>
            {" "}
            <Link to="/details" style={{ textDecoration: "none" }}>
              details
            </Link>
          </span>

          <div className={style.main_mobileview} onClick={hidenav}>
            ||||
          </div>
        </div>
      </div>

      {show && (
        <div className={style.mobilenav}>
          <p
            style={{ marginBottom: "21px", textAlign: "end" }}
            onClick={hidenav}
          >
            **
          </p>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              home
            </Link>{" "}
          </div>
          <div>
            {" "}
            <Link to="/details" style={{ textDecoration: "none" }}>
              detail
            </Link>
          </div>
          <div>
            <input
              className={style.navsearchbar}
              type="text"
              name="searchbar"
              placeholder="seach username here ..."
              onChange={handleSearch}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
