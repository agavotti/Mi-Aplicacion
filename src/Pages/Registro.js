
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
function Registro() {
  
  const [form, setForm] = useState({Nombre:'', Apellido:'', Email:'', Password:''});
  const handleSubmit = (e) => { 
    console.log("handleSubmit", form)
    e.preventDefault();
  }
  const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  console.log("handleChange", name, value)
  setForm({...form, [name]: value});
  }
    return (
      <div className="body">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" name="Nombre" value={form.Nombre} onChange={handleChange} />
          </div>
          <div>
            <label>Apellido:</label>
            <input type="text" name="Apellido" value={form.Apellido} onChange={handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="text" name="Email" value={form.Email} onChange={handleChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="Password" value={form.Password} onChange={handleChange} />
          </div>
          <Button type="submit" variant="primary" size="lg">Registrar</Button>{' '}
        </form>
      </div>
    );
  
  
}

export default Registro;
