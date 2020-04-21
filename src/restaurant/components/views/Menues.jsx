import React from "react";
import { Link } from "react-router-dom";

export default ({ menuObject, deleteFunc }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        marginLeft: "250px",
        paddingBottom: "400px",
      }}
    >
      <div
        className="container"
        style={{
          paddingLeft: "35px",
          paddingRight: "35px",
          paddingTop: "20px",
        }}
      >
        <h1 className="font-weight-bold">Current Menues</h1>
        <Link
          style={{
            textDecoration: "none",
            color: "#ffffff",
            backgroundColor: "#ff2068",
            borderColor: "#ff2068",
            marginTop: "20px",
            marginBottom: "10px",
          }}
          className="btn btn-primary"
          to="/menu/createMenu"
        >
          Create Menu
        </Link>

        <hr />

        <ul
          className="list-group"
          style={{
            marginTop: "30px",
          }}
        >
          {menuObject ? (
            menuObject.map((menu) => {
              return (
                <li
                  key={menu.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <Link to={`/menu/${menu.id}`}>{menu.name}</Link>
                  <div>
                    <Link to={`/menu/${menu.id}/editMenu`}>
                      <button
                        style={{
                          backgroundColor: "#2EC4B6",
                          borderColor: "#2EC4B6",
                          marginRight: "20px",
                        }}
                        className="btn btn-primary btn-lg"
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={(e) => deleteFunc(e, menu.id)}
                      style={{
                        backgroundColor: "#ff2068",
                        borderColor: "#ff2068",
                      }}
                      className="btn btn-primary btn-lg"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <li>No Categories Found</li>
          )}
        </ul>
      </div>
    </div>
  );
};
