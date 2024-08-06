import { Navigate, Route, Routes } from "react-router-dom"
import Header from "./components/Home/Header"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Payment from "./pages/Payment";
import Thankyou from "./pages/Thankyou";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashboard";
import ManagePlans from "./pages/ManagePlans";
import ManageUsers from "./pages/ManageUsers";

function App() {
  const {user} = useContext(UserContext);
  console.log(user);
  return (
    <div className="bg-neutral-100 h-full w-full">
      <Header />
      <Routes>
            <Route
              path="/admin"
              element={
                user?.role === "ADMIN" ? (
                  <AdminDashboard />
                ) : (
                  <Login />
                )
              }
            />
            <Route path='/' element={user?<Dashboard/>:<Login/>} />
            <Route path='/login' element={user?<Dashboard/>:<Login/>} />
            <Route path='/register' element={user?<Dashboard/>:<Register/>} />
            <Route path='/products' element={<Products />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/thankyou' element={<Thankyou />} />
            <Route path='*' element={<Navigate to="/"/>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/manageplans" element={<ManagePlans />} />
            <Route path="/manageusers" element={<ManageUsers />} />
        </Routes>
    </div>
  )
}

export default App
