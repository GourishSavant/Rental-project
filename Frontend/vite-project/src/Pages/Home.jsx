
import React from "react";
import Sidebar from "../component/Sidebar/Sidebar.jsx";
import Navbar from "../component/Navbar/Navbar.jsx";
import DashboardPage from "../component/Sidebar/DashboardPage.jsx";
function Home(){
    return (
<div className="flex flex-col h-screen">

      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 p-6">
           <DashboardPage/>
        </div>
      </div>
    </div>
    )
}

export default Home;