import Navbar from "../Navbar/Navbar.jsx";
import Sidebar from "./Sidebar";
function TableListPage(){
    return (
        <>
      <div className="flex flex-col h-screen ">
            <Navbar />
      
            <div className="flex flex-1">
              <Sidebar />
              <div className="flex-1 p-6">
                 <p>Thie is main body of Table Pages </p>
              </div>
            </div>
          </div>
        </>
    )
}

export default TableListPage;