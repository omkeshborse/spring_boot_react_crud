import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Home() {
  const [users, setUsers] = useState([]);
  // const id = useParams().id ;
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:4000/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/user/${id}`);
    toast.success(`user with ${id} deleted successfully`, {
      position: "top-left",
      autoClose: 5000,
    });
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow ">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const { id, email, name, username } = user;
              console.log(id);

              return (
                <tr key={id}>
                  <th hidden>{id}</th>
                  <th scope="row">{index + 1}</th>
                  <td>{name}</td>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>
                    <Link to={`/view/${id}`} className="btn btn-primary mx-2">View</Link>
                    <Link
                      to={`/edituser/${id}`}
                      className="btn btn-outline-primary mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(id)}
                      className="btn btn-danger mx-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
