import Navbar from "../Navbar/Navbar.jsx";
import Sidebar from "./Sidebar";
function calenderPage(){
     return(
 
       <div className="flex flex-col h-screen ">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6">
           <p> This is calender Data </p>
        </div>
      </div>
    </div>
    
     )
}

export default calenderPage;