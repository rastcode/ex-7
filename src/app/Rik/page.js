"use client";
import Search from "@/components/Search";
import "./rick.css";
import Link from "next/link";
import SearchBtn from "@/components/SearchBtn";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "@/components/Cards";

export default function Rik() {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [pageNumber, updatePageNumber] = useState(1);
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const searchHandel = () => {
    setSearch(inputValue);
  };
  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
    )
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
      });
  }, [pageNumber, search]);

  return (
    <div className="main-rick">
      <div className="searchbar">
        <Search inputValue={inputValue} handleChange={handleChange} />
        <SearchBtn searchHandel={searchHandel} />
        <Pagination
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
        />
      </div>
      <div className="rick-container">
        <Cards users={users} />
      </div>
    </div>
  );
}
