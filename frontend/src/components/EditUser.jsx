import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditUser() {
  const navigate = useNavigate();
  const id = useParams().id;
  console.log(id);

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  useEffect(() => {
    loadUser();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    const updateUser = await axios.put(
      `http://localhost:4000/user/${id}`,
      user
    );
    console.log(updateUser);
    navigate("/");
    toast.success(`${user.username} updated successfully`, {
      position: "top-left",
      autoClose: 5000,
    });
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4000/user/${id}`);
    console.log(result);
    setUser(result.data);
  };
  const { name, username, email } = user;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h2 className="text-center">Edit User</h2>
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
                onChange={(e) => handleChange(e)} disabled
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
                onChange={(e) => handleChange(e)} disabled
              />
            </div>
            <button className="btn btn-outline-primary" type="submit">
              Submit
            </button>
            <Link to={"/"} className="btn btn-outline-danger mx-4">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
