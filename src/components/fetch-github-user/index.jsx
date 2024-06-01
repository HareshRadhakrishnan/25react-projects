import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserCard from "./profile-card";

export default function GitProfileSearch() {
  const [username, setUsername] = useState("HareshRadhakrishnan");
  const [loading, setLoading] = useState(false);
  const [userdata, setUserData] = useState(null);

  async function fetchUser() {
    setUserData(null);
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    setUserData(user);
    console.log(user);
    setLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="git-fetch-container">
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        value={username}
        placeholder="Type the Github Username"
      />
      <button onClick={fetchUser}>submit</button>
      {loading ? <p>Please wait! loading the profile</p> : null}
      {userdata ? (
        <div>
          <UserCard user={userdata} />
        </div>
      ) : null}
    </div>
  );
}
