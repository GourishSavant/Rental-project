import Navbar from "../Navbar/Navbar.jsx";
import Sidebar from "./Sidebar";

import { Dashboard } from "@mui/icons-material";
function ProductListpage() {
  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6">
            <Dashboard/>
        </div>
      </div>
    </div>
  );
}

export default ProductListpage;