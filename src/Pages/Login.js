
import React, {useState} from 'react';

function Login() {
  const [form, setForm] = useState({Email:'', Password:''});
  const handleSubmit = (e) => { 
    e.preventDefault();
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form, [name]: value});
    }
    return (
      <div className="body">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" name="Email" value={form.Email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="Password" value={form.Password} onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    );
  
  
}

export default Login;
