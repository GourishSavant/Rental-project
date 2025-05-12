import Navbar from "../Navbar/Navbar.jsx";
import Sidebar from "./Sidebar";
import ProductList from "./../../Pages/ProductList.jsx"
function ProductListpage() {
  return (
    <div className="flex flex-col  ">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6">
            <ProductList/>
        </div>
      </div>
    </div>
  );
}

export default ProductListpage;
