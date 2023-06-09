import React, { useState } from 'react'
import api from '../axios';
import Loader from '../components/Loader';
import Error from '../components/Error';

function Loginscreen() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();

  async function Login() {

    const user = {
      email,
      password,
    }
      try {
        setloading(true);
        const result = (await api.post('/api/user/login', user)).data;
        setloading(false);

        localStorage.setItem('currentuser', JSON.stringify(result));
        window.location.href = '/services'

      }
     catch (error) {
        console.log(error);
        setloading(false);
        seterror(true)

      }

  }
  return (
    <div>
      {loading && (<Loader />)}
      <div className="row justify-content-center mt-1">
        <div className="col-md-5 mt-1">
          {error && (<Error message='Invalid Credentionals ' />)}
          <div className='bs forms'>
            <h2>Login to MyVenue</h2>
            <input type="text" className="form-control" placeholder='email' value={email} onChange={(e) => { setemail(e.target.value) }} />
            <input type="password" className="form-control" placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
            <button className='btn btn-primary mt-3' onClick={Login}>Login</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Loginscreen