import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cover from "../assets/register2.jpg";
import api from "../api/axios.jsx";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });
  const [message, setMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me"); 
        if (res.data.role === "admin") {
          setIsAdmin(true);
        } else {
          navigate("/unauthorized"); 
        }
      } catch (err) {
        console.error("Unauthorized access or error:", err);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/register", formData);
      setMessage(res.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };

  if (!isAdmin) return null; 

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="shadow-lg px-8 py-5 border bg-white bg-opacity-90 rounded w-[400px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        {message && (
          <div className="text-center text-sm text-red-600 mb-2">{message}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border"
              placeholder="Enter full name"
            />
          </div>
          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label>Password </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-4">
            <label>Role </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border"
              placeholder="Enter role"
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white mt-4 py-2">
            Submit
          </button>
        </form>
        <div>
          <p className="text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
