import React,{useContext} from 'react';
import {Context} from "../../index.js"

import style from "./user.module.css";


const User = () => {
    const {userDetails, setuserDetails,setusers,users} = useContext(Context);
    console.log(userDetails)
  return (
    <div className={style.details}>
      {/* <Navbar/> */}
      {userDetails&&userDetails.map((ele,index)=>(
        <>
          <div className={style.maincontainer}>
          <div  className={style.container} ><span  className={style.itemname}>Id :--</span><span className={style.item}>{ele.id}</span></div>
          <div  className={style.container} ><span  className={style.itemname}>UserId :--</span><span className={style.item}>{ele.postId}</span></div>
        <div  className={style.container} ><span  className={style.itemname}>Name :--</span><span className={style.item}>{ele.name}</span></div>
        <div  className={style.container} ><span  className={style.itemname}>Email :--</span><span className={style.email}>{ele.email}</span></div>
        <div  className={style.container} ><span  className={style.itemname}>Body :--</span><span className={style.item}>{ele.body}</span></div>
      </div>
        </>
      ))}
    
    </div>
  )
}

export default User
