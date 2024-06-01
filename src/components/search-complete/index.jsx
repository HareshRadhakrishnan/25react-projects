import React, { useEffect, useState } from "react";
import Suggessions from "./suggessions";

export default function SearchCompletion() {
  const [usersList, setUsersList] = useState([]);
  const [firstNameList, setFirstNamelist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputQuery, setinputQuery] = useState("");
  const [filteredQueryList, setfilteredQueryList] = useState([]);
  async function fetchUsers() {
    setIsLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users.length > 0) {
        const fNames = data.users.map((i) => {
          return i.firstName;
        });

        setFirstNamelist(fNames);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }

  // filers the input query and checks its in fetchedusers to suggest
  function HandleChange(event) {
    const query = event.target.value.toLowerCase();
    setinputQuery(query);
    const filteredquery = firstNameList.filter(
      (fname) =>
        fname.toLowerCase().indexOf(query) > -1 &&
        fname.toLowerCase().indexOf(query) < query.length
    );
    setfilteredQueryList(filteredquery);
  }

  function HandleClick(index) {
    setinputQuery(filteredQueryList[index]);
    setfilteredQueryList([]);
  }
  useEffect(() => {
    fetchUsers();
  }, [usersList]);
  return (
    <div style={{ "margin-top": "35vh" }}>
      {isLoading ? (
        <p>please Wait! still loading</p>
      ) : (
        <input
          value={inputQuery}
          type="text"
          placeholder="Search here"
          onChange={HandleChange}
        />
      )}
      {filteredQueryList.length ? (
        <Suggessions whenClicked={HandleClick} data={filteredQueryList} />
      ) : null}
    </div>
  );
}
