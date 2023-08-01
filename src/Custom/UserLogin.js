import React, { useState } from "react";

// {
    
//   username: 'kminchelle',
//   password: '0lelplR',
//   // expiresInMins: 60, // optional
// }




const UserLogin = () => {
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });



  const handleChange = (e) =>{
    setCredential((prev) => ({...prev, [e.target.name] : e.target.value}))
  }

  console.log(credential);

  return (
    <div>
        <form>
        <input type="text" name="username" onChange={(e) => handleChange(e)}  placeholder="userName"/>
        <br />
        <input type="password" name="password" onChange={(e) => handleChange(e)} placeholder="password" />
        <br />
        <button>Login</button>
        </form>

    </div>
  )
};

export default UserLogin;
