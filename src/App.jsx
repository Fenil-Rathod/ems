import React, { useContext, useState } from "react";
import Login from './components/Auth/Login';
import AdminDashboard from './components/Dashboard/AdminDahboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import { AuthContext } from "./context/AuthProvider";
const App = () => {

  const [user,setUser] = useState(null);
  

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123'){
        setUser("admin");
      }else if(email== 'employee@me.com' && password == '123'){
        setUser("employee");
    }else {
      alert('Invalid credentials');
    }
  }

  
  const data = useContext(AuthContext);
  console.log(data);


  return(
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user== 'admin' ? <AdminDashboard/> : <EmployeeDashboard />}
    </>
  )
}

export default App;

