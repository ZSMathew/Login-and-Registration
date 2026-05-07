import React from 'react'

const dashboard = () => {
    const navigate = useNavigate();
    const logout = () => {localStorage.removeItem("user"); 
        navigate("/");
    }
  return (
    <div style={{padding:"40px"}}>
        <h1>Dashboard</h1>
    <div style={{
        padding:"20px",
        border:"1px solid #ccc",
        borderRadius: "10px",
        width: "300px"
    }}>
        <h1>Welcome to the Dashboard</h1>
        <p>Congratulations! You have successfully logged in.</p>
        <button onClick={logout}>Logout</button>
    </div>
    </div>

  )
}

export default dashboard