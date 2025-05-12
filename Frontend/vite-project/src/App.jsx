import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';

import CalendarPage from "./component/Sidebar/CalenderPage.jsx"
import TableListPage from "./component/Sidebar/TableListPage.jsx"
import ProductListPage from "./component/Sidebar/ProductListPage.jsx"
import DashboardPage from "./component/Sidebar/DashboardPage.jsx";
function App() {
  return (
    <BrowserRouter>
        
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
         <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/table-list" element={<TableListPage />} />
        <Route path="/product" element={<ProductListPage />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


