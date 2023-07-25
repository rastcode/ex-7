import React from "react";
import "./user.css";
import Image from "next/image";
async function PostId({ params: { postId } }) {
  const rawRes = await fetch(
    `https://rickandmortyapi.com/api/character/${postId}`
  );
  const finalRes = await rawRes.json();
  console.log(finalRes);
  return (
    <div className="user-container">
      <div className="image-ontainer">
        <img src={finalRes.image} alt="" />
      </div>
      <h4>name :{finalRes.name}</h4>
      <h4>status :{finalRes.status}</h4>
      <h4>species :{finalRes.species}</h4>
      <h4>gender :{finalRes.gender}</h4>
      
    </div>
  );
}

export default PostId;
