import React from "react";

import "./Cards.css"
import Link from "next/link";
function Cards({ users }) {
  return (
    <div className="cards">
      {users
        ? users.map((item) => (
            <div key={item.id} className="img-container">
              <Link href={`/postId/${item.id}`}>
                <img src={item.image} alt={item.name} className="img" />
                <h3>{item.name}</h3>
              </Link>
            </div>
          ))
        : "not fuond"}
    </div>
  );
}

export default Cards;
