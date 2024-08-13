import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    const createUser = await axios.post("http://localhost:4000/user", user);
    console.log(createUser);
    navigate("/");
    toast.success(`${user.username} added successfully`, {
      position: "top-left",
      autoClose: 5000,
    });
  };

  const { name, username, email } = user;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h2 className="text-center">Register User</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button className="btn btn-outline-primary" type="submit">
              Submit
            </button>
            <Link to={'/'} className="btn btn-outline-danger mx-4">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
