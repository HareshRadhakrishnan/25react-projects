import React from "react";
import "./profile-card.css";
export default function UserCard({ user }) {
  console.log(user.avatar_url);
  const createdDate = new Date(user.created_at);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { name, login, public_repos, following, followers } = user;
  console.log(user.created_at);
  return (
    <div className="card">
      <div className="column-1">
        <img className="avatar" src={user.avatar_url} alt={user.login} />
        <p>
          Joined on
          {`  ${month[createdDate.getMonth()]} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="column-2">
        <h1>
          <a target="blank" href={`https://github.com/${login}`}>
            {name || login}
          </a>
        </h1>
        <span className="metrics">
          <p className="metrics-item">Followers: {followers}</p>
          <p className="metrics-item">Following: {following}</p>
          <p className="metrics-item">Public Repositories: {public_repos}</p>
        </span>
      </div>
    </div>
  );
}
