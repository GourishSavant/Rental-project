import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cover from "../assets/car.jpg";
import api from "../api/axios";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/users/login", formData);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${cover})` }}>
      <div className="shadow-lg px-8 py-5 border bg-white bg-opacity-90 rounded w-[400px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full px-3 py-2 mb-4 border" />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full px-3 py-2 mb-4 border" />
          <button type="submit" className="w-full bg-green-600 text-white py-2">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
