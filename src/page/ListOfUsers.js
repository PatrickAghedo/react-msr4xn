import React from "react";
import { useState } from "react";
import useFetch from "../components/useFetch";

function ListOfUsers() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=10`
  );

  console.log({ loading, error, data });

  const PER_PAGE = 5;
  const total = data?.results?.length;
  const pages = 20;

  const skip = page * PER_PAGE - PER_PAGE;

  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <section className="users-container">
      <div className="Users">
        <h2>List of Users</h2>
        {data?.results.map((each, index) => {
          const name = ` ${each.name.title} ${each.name.first} ${each.name.last}`;
          return (
            <li key={name.toLowerCase().replaceAll(" ", "")}>{`${
              index + 1
            }.${name}`}</li>
          );
        })}
        {}
        <button
          className="nav"
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <p>
          Pages: {page} of {pages}
        </p>
        {
          <button
            className="nav"
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        }
        {Array.from({ length: pages }, (value, index) => index + 1).map(
          (each) => (
            <button className="nav" onClick={() => setPage(each)}>
              {each}
            </button>
          )
        )}
      </div>
    </section>
  );
}

export default ListOfUsers;
