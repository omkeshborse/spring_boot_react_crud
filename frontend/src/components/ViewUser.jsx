import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const result = await axios.get(`http://localhost:4000/user/${id}`);
    console.log(result.data);

    setUserInfo(result.data);
  };

  const { name, username, email } = userInfo;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
          <h2 className="text-center">User Details</h2>
          <div
            className="card container  border-primary text-primary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header bg-transparent border-primary">
              {name} Details
            </div>
            <div className="card-body text-primary">
              <h5 className="card-title text-capitalize fs-4">{"name"}</h5>
              <p className="card-text ms-3 fs-5">{name}</p>
            </div>
            <div className="card-body text-primary">
              <h5 className="card-title text-capitalize fs-4">Username</h5>
              <p className="card-text ms-3 fs-5">{username}</p>
            </div>
            <div className="card-body text-primary">
              <h5 className="card-title text-capitalize fs-4">Email</h5>
              <p className="card-text ms-3 fs-5">{email}</p>
            </div>
            <Link
              to={"/"}
              className="card-footer btn-block bg-transparent border-primary"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
