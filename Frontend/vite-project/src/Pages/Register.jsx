import { Link } from "react-router-dom";
import cover from "../assets/cover.jpg"
function Register() {

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${cover})` }}
>

      <div className="shadow-lg px-8 py-5 border bg-white bg-opacity-90 rounded w-[400px]">
        <h2 className="text-2xl Font-bold mb-4  text-center "> Register </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              fullName
            </label>
            <input
              type="text"
              className="w-full px-3 py-2  border"
              placeholder="Enter Username"
              nmae="fullname"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2  border"
              placeholder="Enter email"
              nmae="email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Password">Password </label>
            <input
              type="password"
              className="w-full px-3 py-2  border"
              placeholder="Enter password"
              nmae="password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text">Role </label>
            <input
              type="text"
              className="w-full px-3 py-2  border"
              placeholder="Enter role "
              nmae="role"
            />
          </div>
          <button className="w-full bg-green-600 text-white mt-4 py-2">
            Submit
          </button>
        </form>
        <div>
          <p className="text-center">
            <span>Already have account </span>
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Register;
