import React,{useState} from 'react'
import api from '../axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';
import { Route, useNavigate } from 'react-router-dom';


function Registerscreen() {
    const navigate = useNavigate;
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    const [success, setsuccess] = useState();  

    async function register(){
        if (password == cpassword) {
            const user = {
                name,
                email,
                phone,
                password,
                cpassword
            };
            try {
                setloading(true);
                const result = await api.post('/api/user/register',user).data;
                setloading(false)
                setsuccess(true)

                setname('')
                setemail('')
                setphone('')
                setpassword('')
                setcpassword('')
                window.location.href= '/login';

            } catch (error) {
                console.log(error);
                setloading(false);
                seterror(true)
            }
        }
        else{
            alert("Password is not matched");
        }
    }
  return (
    <div>
        {loading && (<Loader/>)}
        {error && (<Error/>)}
        <div className="row justify-content-center mt-1">
            <div className="col-md-5 mt-1">

                <div className='bs forms'>
                    {success && (<Success message="Registration success"/>
                    ) }        
                    <h2>Register to MyVenue</h2>
                    <input type="text" className="form-control" placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}} />
                    <input type="text" className="form-control" placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
                    <input type="phone" className="form-control" placeholder='phone' value={phone} onChange={(e)=>{setphone(e.target.value)}} />
                    <input type="password" className="form-control" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                    <input type="password" className="form-control" placeholder='confirm password' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} />
                    <button className='btn btn-primary mt-3' onClick={register}>Register</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Registerscreen