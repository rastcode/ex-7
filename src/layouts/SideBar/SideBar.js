"use client";
import React from "react";
import "./SideBar.css";
import Link from "next/link";

import { usePathname } from "next/navigation";

{
  /* Get the current route */
}

function SideBar() {
  const currentRoute = usePathname();
  return (
    <div className="side-bar-container">
      <ul>
        <li className="side-bar-link">
          <Link href="/Home">home</Link>
        </li>
        <li className="side-bar-link">
          <Link href="/About">about</Link>
        </li>
        <li className="side-bar-link">
          <Link href="/Rik">rik</Link>
        </li>
        <li className="side-bar-link">
          <Link href="/">options</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
